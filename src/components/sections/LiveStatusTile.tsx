"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Wifi, Clock, Server } from "lucide-react";
import {
    type StatusApiResponse,
    type Monitor,
    getStatusColor,
    formatUptime,
    formatPing
} from "@/lib/uptime-kuma";

export default function LiveStatusTile() {
    const [data, setData] = useState<StatusApiResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchStatus = useCallback(async () => {
        try {
            const response = await fetch("/api/status");
            const result: StatusApiResponse = await response.json();

            if (result.success) {
                setData(result);
                setError(null);
            } else {
                setError(result.error || "Failed to fetch status");
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Network error");
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchStatus();
        const interval = setInterval(fetchStatus, 30000);
        return () => clearInterval(interval);
    }, [fetchStatus]);

    // Loading skeleton
    if (isLoading) {
        return (
            <div className="flex h-full flex-col justify-between animate-pulse">
                <div className="flex items-center justify-between">
                    <div className="h-6 w-24 rounded bg-muted" />
                    <div className="h-3 w-3 rounded-full bg-muted" />
                </div>
                <div className="mt-6 space-y-4">
                    <div className="h-16 rounded bg-muted" />
                    <div className="h-16 rounded bg-muted" />
                </div>
                <div className="mt-4 h-4 w-32 rounded bg-muted" />
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="text-red-400 mb-2">⚠️</div>
                <p className="text-sm text-muted-foreground">{error}</p>
                <button
                    onClick={fetchStatus}
                    className="mt-2 text-xs text-primary hover:underline"
                >
                    Retry
                </button>
            </div>
        );
    }

    const statusData = data?.data;

    return (
        <div className="flex h-full flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold font-mono flex items-center gap-2">
                    <Server className="h-4 w-4" />
                    Live Status
                </h3>
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-3 w-3 rounded-full bg-emerald-500"
                />
            </div>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-2 gap-4">
                {/* Uptime Circle */}
                <div className="flex flex-col items-center">
                    <div className="relative h-20 w-20">
                        <svg className="h-20 w-20 -rotate-90" viewBox="0 0 36 36">
                            <path
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="text-muted"
                            />
                            <motion.path
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeDasharray={`${statusData?.uptime || 0}, 100`}
                                className="text-emerald-600 dark:text-emerald-400"
                                initial={{ strokeDasharray: "0, 100" }}
                                animate={{ strokeDasharray: `${statusData?.uptime || 0}, 100` }}
                                transition={{ duration: 1 }}
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg font-bold font-mono">
                                {formatUptime(statusData?.uptime || 0).replace("%", "")}
                            </span>
                        </div>
                    </div>
                    <span className="mt-1 text-xs text-muted-foreground">Uptime %</span>
                </div>

                {/* Ping */}
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2">
                        <Wifi className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <span className="text-2xl font-bold font-mono text-blue-600 dark:text-blue-400">
                            {formatPing(statusData?.avgPing || 0)}
                        </span>
                    </div>
                    <span className="mt-1 text-xs text-muted-foreground">Avg Ping</span>
                </div>
            </div>

            {/* Monitors */}
            <div className="mt-4 space-y-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Monitors</p>
                <div className="grid grid-cols-2 gap-2">
                    {statusData?.monitors.slice(0, 4).map((monitor: Monitor) => (
                        <div
                            key={monitor.name}
                            className="flex items-center gap-2 rounded-lg bg-muted/30 px-2 py-1.5"
                        >
                            <div className={`h-2 w-2 rounded-full ${getStatusColor(monitor.status)}`} />
                            <span className="text-xs truncate">{monitor.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>
                    Updated {data?.timestamp ? new Date(data.timestamp).toLocaleTimeString() : "N/A"}
                </span>
            </div>
        </div>
    );
}
