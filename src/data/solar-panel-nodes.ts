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
        id: 'sensor',
        type: 'sensor',
        position: { x: 0, y: 0 },
        data: {
            label: 'Solar Sensors',
            description: 'LDR and Voltage sensors to monitor sunlight and energy production.',
            code: `// Sensor Reading Logic
void loop() {
  float ldrValue = analogRead(LDR_PIN);
  float voltage = analogRead(VOLT_PIN) * (5.0 / 1023.0);
  sendMQTT(ldrValue, voltage);
  delay(1000);
}`,
            tech: ['ESP32', 'C++', 'Arduino'],
        },
    },
    {
        id: 'broker',
        type: 'broker',
        position: { x: 250, y: 0 },
        data: {
            label: 'MQTT Broker',
            description: 'Mosquitto broker for lightweight communication.',
            tech: ['Mosquitto', 'MQTT', 'Docker'],
        },
    },
    {
        id: 'backend',
        type: 'backend',
        position: { x: 500, y: 0 },
        data: {
            label: 'Laravel Backend',
            description: 'Processing and storing IoT data.',
            code: `// Data Processing
public function handle(MqttMessage $message) {
    $data = json_decode($message->payload);
    EnergyReading::create([
        'value' => $data->voltage,
        'ldr' => $data->ldr
    ]);
}`,
            tech: ['Laravel', 'PHP', 'PostgreSQL'],
        },
    },
    {
        id: 'dashboard',
        type: 'dashboard',
        position: { x: 750, y: 0 },
        data: {
            label: 'Dashboard',
            description: 'Real-time monitoring and visualization.',
            tech: ['Next.js', 'React', 'Tailwind', 'WebSocket'],
        },
    },
];

export const initialEdges: Edge[] = [
    {
        id: 'e1-2',
        source: 'sensor',
        target: 'broker',
        label: 'MQTT',
        animated: true,
        style: { stroke: '#10b981' },
        labelStyle: { fill: '#10b981', fontWeight: 700 },
    },
    {
        id: 'e2-3',
        source: 'broker',
        target: 'backend',
        label: 'MQTT/HTTP',
        animated: true,
        style: { stroke: '#3b82f6' },
    },
    {
        id: 'e3-4',
        source: 'backend',
        target: 'dashboard',
        label: 'WebSocket/HTTP',
        animated: true,
        style: { stroke: '#8b5cf6' },
    },
];
