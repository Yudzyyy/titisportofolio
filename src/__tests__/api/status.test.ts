import { GET } from '@/app/api/status/route';

/**
 * Interface representing a monitor item within the status data.
 */
interface Monitor {
    name: string;
    status: string;
}

/**
 * Interface representing the core status data from Uptime Kuma.
 */
interface StatusData {
    uptime: number;
    avgPing: number;
    monitors: Monitor[];
}

/**
 * Interface representing the overall status API response.
 */
interface StatusApiResponse {
    success: boolean;
    data: StatusData;
    timestamp: string;
}

describe('/api/status', () => {
    it('should return status data successfully', async () => {
        const response = await GET();
        const data = (await response.json()) as StatusApiResponse;

        expect(response.status).toBe(200);
        expect(data.success).toBe(true);
        expect(data.data).toBeDefined();
        expect(data.timestamp).toBeDefined();
    });

    it('should include uptime data', async () => {
        const response = await GET();
        const data = (await response.json()) as StatusApiResponse;

        expect(data.data.uptime).toBeDefined();
        expect(typeof data.data.uptime).toBe('number');
    });

    it('should include monitors array', async () => {
        const response = await GET();
        const data = (await response.json()) as StatusApiResponse;

        expect(Array.isArray(data.data.monitors)).toBe(true);
        if (data.data.monitors.length > 0) {
            expect(data.data.monitors[0]).toHaveProperty('name');
            expect(data.data.monitors[0]).toHaveProperty('status');
        }
    });
});
