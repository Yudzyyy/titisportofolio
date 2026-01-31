"use client";

import React, { useState, useCallback, useMemo } from 'react';
import {
    ReactFlow,
    Panel,
    Background,
    Controls,
    useNodesState,
    useEdgesState,
    Handle,
    Position,
    type NodeProps,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, Server, Shield, Layout, Code as CodeIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { initialNodes, initialEdges, type FloodNode } from '@/data/flood-monitoring-nodes';

const BaseNode = ({ children, label, icon: Icon, selected, type }: {
    children?: React.ReactNode;
    label: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    selected?: boolean;
    type: string;
}) => (
    <div className={cn(
        "flex min-w-[150px] flex-col rounded-lg border-2 bg-card p-3 shadow-lg transition-all",
        selected ? "border-primary ring-2 ring-primary/20" : "border-border",
        type === 'sensor' && "border-emerald-500/50",
        type === 'backend' && "border-purple-500/50",
        type === 'broker' && "border-blue-500/50",
        type === 'dashboard' && "border-pink-500/50"
    )}>
        <div className="flex items-center gap-2 mb-2">
            <div className={cn(
                "rounded-md p-1.5",
                type === 'sensor' && "bg-emerald-500/10 text-emerald-500",
                type === 'backend' && "bg-purple-500/10 text-purple-500",
                type === 'broker' && "bg-blue-500/10 text-blue-500",
                type === 'dashboard' && "bg-pink-500/10 text-pink-500"
            )}>
                <Icon size={18} />
            </div>
            <span className="font-mono text-sm font-bold uppercase tracking-tight">{label}</span>
        </div>
        {children}
    </div>
);

const SensorNode = ({ data, selected }: NodeProps<FloodNode>) => (
    <BaseNode label={data.label} icon={Cpu} selected={selected} type="sensor">
        <Handle type="source" position={Position.Right} className="!bg-emerald-500" />
    </BaseNode>
);

const BackendNode = ({ data, selected }: NodeProps<FloodNode>) => (
    <BaseNode label={data.label} icon={Server} selected={selected} type="backend">
        <Handle type="target" position={Position.Left} className="!bg-purple-500" />
        <Handle type="source" position={Position.Right} className="!bg-purple-500" />
    </BaseNode>
);

const InfraNode = ({ data, selected }: NodeProps<FloodNode>) => (
    <BaseNode label={data.label} icon={Shield} selected={selected} type="broker">
        <Handle type="target" position={Position.Left} className="!bg-blue-500" />
    </BaseNode>
);

const DashboardNode = ({ data, selected }: NodeProps<FloodNode>) => (
    <BaseNode label={data.label} icon={Layout} selected={selected} type="dashboard">
        <Handle type="target" position={Position.Left} className="!bg-pink-500" />
    </BaseNode>
);

export default function FloodMonitoringDiagram() {
    const nodeTypes = useMemo(() => ({
        sensor: SensorNode,
        backend: BackendNode,
        broker: InfraNode,
        dashboard: DashboardNode,
    }), []);

    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);
    const [selectedNode, setSelectedNode] = useState<FloodNode | null>(null);

    const onNodeClick = useCallback((_: React.MouseEvent, node: FloodNode) => {
        setSelectedNode(node);
    }, []);

    return (
        <div className="relative h-[600px] w-full rounded-xl border border-border bg-zinc-950/50 backdrop-blur-sm overflow-hidden">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onNodeClick={onNodeClick}
                nodeTypes={nodeTypes}
                fitView
            >
                <Background color="#333" gap={20} />
                <Controls />
                <Panel position="top-left" className="bg-popover/80 p-2 rounded-md border border-border backdrop-blur-md">
                    <h3 className="text-xs font-bold font-mono text-muted-foreground uppercase">Flood System Architecture</h3>
                </Panel>
            </ReactFlow>

            <AnimatePresence>
                {selectedNode && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        className="absolute right-0 top-0 z-50 h-full w-full max-w-sm border-l border-border bg-card/95 p-6 shadow-2xl backdrop-blur-xl md:w-80"
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="text-xl font-bold">{selectedNode.data.label}</h3>
                                <div className="flex flex-wrap gap-1 mt-2">
                                    {selectedNode.data.tech.map(t => (
                                        <span key={t} className="text-[10px] font-mono bg-muted px-1.5 py-0.5 rounded uppercase">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <button onClick={() => setSelectedNode(null)} className="p-1 hover:bg-muted rounded-md transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{selectedNode.data.description}</p>
                        {selectedNode.data.code && (
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-xs font-mono text-primary">
                                    <CodeIcon size={14} />
                                    <span>Logic Snippet</span>
                                </div>
                                <pre className="p-4 rounded-lg bg-zinc-950 text-emerald-400 font-mono text-[10px] overflow-x-auto border border-white/5">
                                    <code>{selectedNode.data.code}</code>
                                </pre>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
