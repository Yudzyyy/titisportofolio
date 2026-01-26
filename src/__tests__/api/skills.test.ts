import { GET } from '@/app/api/skills/route';

describe('/api/skills', () => {
    it('should return skills data successfully', async () => {
        const response = await GET();
        const data = await response.json();

        expect(response.status).toBe(200);
        expect(data.success).toBe(true);
        expect(data.data).toBeDefined();
    });

    it('should include tech stack', async () => {
        const response = await GET();
        const data = await response.json();

        expect(Array.isArray(data.data.techStack)).toBe(true);
        expect(data.data.techStack.length).toBeGreaterThan(0);
    });

    it('should include certifications', async () => {
        const response = await GET();
        const data = await response.json();

        expect(Array.isArray(data.data.certifications)).toBe(true);
    });

    it('should have valid skill structure', async () => {
        const response = await GET();
        const data = await response.json();

        if (data.data.techStack.length > 0) {
            const category = data.data.techStack[0];
            expect(category).toHaveProperty('category');
            expect(category).toHaveProperty('skills');
            expect(Array.isArray(category.skills)).toBe(true);
            
            if (category.skills.length > 0) {
                const skill = category.skills[0];
                expect(skill).toHaveProperty('name');
                expect(skill).toHaveProperty('level');
                expect(typeof skill.level).toBe('number');
            }
        }
    });
});
