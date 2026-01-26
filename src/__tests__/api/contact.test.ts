import { POST } from '@/app/api/contact/route';

describe('/api/contact', () => {
    it('should reject request with missing fields', async () => {
        const request = new Request('http://localhost:3000/api/contact', {
            method: 'POST',
            body: JSON.stringify({ name: 'Test' }),
            headers: { 'Content-Type': 'application/json' },
        });

        const response = await POST(request);
        const data = await response.json();

        expect(response.status).toBe(400);
        expect(data.success).toBe(false);
    });

    it('should reject request with invalid email', async () => {
        const request = new Request('http://localhost:3000/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                name: 'Test User',
                email: 'invalid-email',
                message: 'Test message',
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        const response = await POST(request);
        const data = await response.json();

        expect(response.status).toBe(400);
        expect(data.success).toBe(false);
    });

    it('should accept valid contact form submission', async () => {
        const request = new Request('http://localhost:3000/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                name: 'Test User',
                email: 'test@example.com',
                subject: 'Test Subject',
                message: 'This is a test message',
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        const response = await POST(request);
        const data = await response.json();

        expect(response.status).toBe(200);
        expect(data.success).toBe(true);
        expect(data.message).toBeDefined();
    });
});
