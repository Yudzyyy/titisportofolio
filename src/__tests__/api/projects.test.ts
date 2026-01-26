import { GET } from '@/app/api/projects/route';
import { NextRequest } from 'next/server';

describe('/api/projects', () => {
    it('should return all projects by default', async () => {
        const request = new NextRequest('http://localhost:3000/api/projects');
        const response = await GET(request);
        const data = await response.json();

        expect(response.status).toBe(200);
        expect(data.success).toBe(true);
        expect(Array.isArray(data.data)).toBe(true);
        expect(data.count).toBeGreaterThan(0);
    });

    it('should filter projects by category', async () => {
        const request = new NextRequest('http://localhost:3000/api/projects?category=IoT');
        const response = await GET(request);
        const data = await response.json();

        expect(response.status).toBe(200);
        expect(data.data.every((p: any) => p.category === 'IoT')).toBe(true);
    });

    it('should filter featured projects', async () => {
        const request = new NextRequest('http://localhost:3000/api/projects?featured=true');
        const response = await GET(request);
        const data = await response.json();

        expect(response.status).toBe(200);
        expect(data.data.every((p: any) => p.featured === true)).toBe(true);
    });

    it('should include required project fields', async () => {
        const request = new NextRequest('http://localhost:3000/api/projects');
        const response = await GET(request);
        const data = await response.json();

        if (data.data.length > 0) {
            const project = data.data[0];
            expect(project).toHaveProperty('id');
            expect(project).toHaveProperty('title');
            expect(project).toHaveProperty('description');
            expect(project).toHaveProperty('category');
            expect(project).toHaveProperty('tags');
            expect(project).toHaveProperty('url');
        }
    });
});
