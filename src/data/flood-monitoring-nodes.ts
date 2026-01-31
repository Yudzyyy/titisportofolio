import { type Node, type Edge } from '@xyflow/react';

export interface FloodNodeData extends Record<string, unknown> {
    label: string;
    description: string;
    code?: string;
    tech: string[];
}

export type FloodNode = Node<FloodNodeData>;

export const initialNodes: FloodNode[] = [
    {
        id: 'sensors',
        type: 'sensor',
        position: { x: 0, y: 150 },
        data: {
            label: 'IoT Station',
            description: 'NodeMCU ESP32 with HC-SR04, DHT22, Rain Sensor, and Buzzer for on-site alerting.',
            code: `// Water Level & Rain Detection
void loop() {
  float distance = sensor.readDistance();
  bool isRaining = digitalRead(RAIN_PIN);
  if(distance < THRESHOLD) {
    buzzAlert();
    sendTelegram("⚠️ WARNING: High water level!");
  }
  sendDataToServer(distance, isRaining);
}`,
            tech: ['ESP32', 'HC-SR04', 'DHT22', 'Rain Sensor'],
        },
    },
    {
        id: 'backend',
        type: 'backend',
        position: { x: 300, y: 150 },
        data: {
            label: 'Node.js Backend',
            description: 'Express.js server handling data persistence, Telegram notifications, and WebSocket broadcasting.',
            code: `// Real-time Notification
app.post('/api/telemetry', (req, res) => {
  const { waterLevel } = req.body;
  if(waterLevel > 100) {
    telegramBot.sendMessage(chatId, "Flood Warning!");
  }
  io.emit('level_update', waterLevel);
  db.save(req.body);
});`,
            tech: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
        },
    },
    {
        id: 'infra',
        type: 'broker',
        position: { x: 600, y: 150 },
        data: {
            label: 'Infrastructure',
            description: 'Containerized deployment managed by Kubernetes with Cloudflare security layer.',
            tech: ['Docker', 'Kubernetes', 'Cloudflare'],
        },
    },
    {
        id: 'dashboard',
        type: 'dashboard',
        position: { x: 900, y: 150 },
        data: {
            label: 'Admin Dashboard',
            description: 'React-driven interface for monitoring, data logging, and management.',
            tech: ['React', 'Bootstrap', 'WebSocket'],
        },
    },
];

export const initialEdges: Edge[] = [
    {
        id: 'e1-2',
        source: 'sensors',
        target: 'backend',
        label: 'HTTP/WS',
        animated: true,
        style: { stroke: '#10b981' },
    },
    {
        id: 'e2-3',
        source: 'backend',
        target: 'infra',
        label: 'Managed By',
        style: { stroke: '#3b82f6' },
    },
    {
        id: 'e2-4',
        source: 'backend',
        target: 'dashboard',
        label: 'Real-time',
        animated: true,
        style: { stroke: '#8b5cf6' },
    },
];
