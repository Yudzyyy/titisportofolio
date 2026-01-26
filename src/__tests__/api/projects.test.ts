import { GET } from '@/app/api/projects/route';
import { NextRequest } from 'next/server';

/**
 * Interface representing the project data structure returned by the API.
 */
interface ProjectResponse {
    id: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    url: string;
    github?: string;
    demo?: string;
    featured: boolean;
}

/**
 * Interface representing the overall API response for projects.
 */
interface ProjectsApiResponse {
    success: boolean;
    data: ProjectResponse[];
    count: number;
    timestamp: string;
}

describe('/api/projects', () => {
    it('should return all projects by default', async () => {
        const request = new NextRequest('http://localhost:3000/api/projects');
        const response = await GET(request);
        const data = (await response.json()) as ProjectsApiResponse;

        expect(response.status).toBe(200);
        expect(data.success).toBe(true);
        expect(Array.isArray(data.data)).toBe(true);
        expect(data.count).toBeGreaterThan(0);
    });

    it('should filter projects by category', async () => {
        const request = new NextRequest('http://localhost:3000/api/projects?category=IoT');
        const response = await GET(request);
        const data = (await response.json()) as ProjectsApiResponse;

        expect(response.status).toBe(200);
        // Using strict type check instead of any
        const allAreIoT = data.data.every((p: ProjectResponse) => p.category === 'IoT');
        expect(allAreIoT).toBe(true);
    });

    it('should filter featured projects', async () => {
        const request = new NextRequest('http://localhost:3000/api/projects?featured=true');
        const response = await GET(request);
        const data = (await response.json()) as ProjectsApiResponse;

        expect(response.status).toBe(200);
        const allAreFeatured = data.data.every((p: ProjectResponse) => p.featured === true);
        expect(allAreFeatured).toBe(true);
    });

    it('should include required project fields', async () => {
        const request = new NextRequest('http://localhost:3000/api/projects');
        const response = await GET(request);
        const data = (await response.json()) as ProjectsApiResponse;

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
