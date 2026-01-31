import { type Node, type Edge } from '@xyflow/react';

export interface SolarPanelNodeData extends Record<string, unknown> {
    label: string;
    description: string;
    code?: string;
    tech: string[];
}

export type SolarPanelNode = Node<SolarPanelNodeData>;

export const initialNodes: SolarPanelNode[] = [
    {
        id: 'robot',
        type: 'sensor',
        position: { x: 0, y: 100 },
        data: {
            label: 'Arduino Robot (ESP8266)',
            description: 'Cleaning robot with WiFi connectivity for remote control and status reporting.',
            code: `// Robot Movement Control
void loop() {
  if (MQTT_CMD == "START") {
    digitalWrite(MOTOR_PIN, HIGH);
    sendReport("P:1%, MOVING_DOWN");
  }
}`,
            tech: ['ESP8266', 'C++', 'L298N', 'Limit Switch'],
        },
    },
    {
        id: 'broker',
        type: 'broker',
        position: { x: 250, y: 100 },
        data: {
            label: 'Mosquitto Broker',
            description: 'Central MQTT broker handling message routing between robot and backend.',
            tech: ['Mosquitto', 'MQTT', 'Docker'],
        },
    },
    {
        id: 'backend',
        type: 'backend',
        position: { x: 500, y: 100 },
        data: {
            label: 'Python Backend (Flask)',
            description: 'Flask & Eventlet server managing business logic and dual-protocol communication.',
            code: `# Command Forwarding
@socketio.on('command')
def handle_command(json):
    mqtt.publish('robot/cmd', json['action'])
    emit('status', {'msg': 'Command Sent'})`,
            tech: ['Python', 'Flask', 'Eventlet', 'PostgreSQL', 'Docker'],
        },
    },
    {
        id: 'frontend',
        type: 'dashboard',
        position: { x: 750, y: 100 },
        data: {
            label: 'React Frontend (Vite)',
            description: 'Interactive dashboard using WebSocket for real-time status and control.',
            tech: ['React', 'Vite', 'Tailwind CSS', 'WebSocket'],
        },
    },
];

export const initialEdges: Edge[] = [
    {
        id: 'robot-broker',
        source: 'robot',
        target: 'broker',
        label: 'MQTT',
        animated: true,
        style: { stroke: '#10b981' },
        labelStyle: { fill: '#10b981', fontWeight: 700 },
    },
    {
        id: 'broker-backend',
        source: 'broker',
        target: 'backend',
        label: 'MQTT',
        animated: true,
        style: { stroke: '#3b82f6' },
        labelStyle: { fill: '#3b82f6', fontWeight: 700 },
    },
    {
        id: 'backend-frontend',
        source: 'backend',
        target: 'frontend',
        label: 'WebSocket',
        animated: true,
        style: { stroke: '#8b5cf6' },
        labelStyle: { fill: '#8b5cf6', fontWeight: 700 },
    },
];
