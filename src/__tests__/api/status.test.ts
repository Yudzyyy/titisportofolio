import { GET } from '@/app/api/status/route';
import { NextRequest } from 'next/server';

describe('/api/status', () => {
    it('should return status data successfully', async () => {
        const request = new NextRequest('http://localhost:3000/api/status');
        const response = await GET();
        const data = await response.json();

        expect(response.status).toBe(200);
        expect(data.success).toBe(true);
        expect(data.data).toBeDefined();
        expect(data.timestamp).toBeDefined();
    });

    it('should include uptime data', async () => {
        const response = await GET();
        const data = await response.json();

        expect(data.data.uptime).toBeDefined();
        expect(typeof data.data.uptime).toBe('number');
    });

    it('should include monitors array', async () => {
        const response = await GET();
        const data = await response.json();

        expect(Array.isArray(data.data.monitors)).toBe(true);
    });
});
