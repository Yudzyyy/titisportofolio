import { NextResponse } from "next/server";
import { TECH_STACK, CERTIFICATIONS } from "@/lib/constants";

export interface SkillCategory {
    category: string;
    skills: Array<{
        name: string;
        level: number;
    }>;
}

export interface SkillsResponse {
    success: boolean;
    data: {
        techStack: SkillCategory[];
        certifications: Array<{
            name: string;
            issuer: string;
        }>;
    };
    timestamp: string;
}

export async function GET() {
    try {
        const techStack = Object.entries(TECH_STACK).map(([category, skills]) => ({
            category,
            skills,
        }));

        const certifications = CERTIFICATIONS.map((cert) => ({
            name: cert.name,
            issuer: cert.issuer,
        }));

        const response: SkillsResponse = {
            success: true,
            data: {
                techStack,
                certifications,
            },
            timestamp: new Date().toISOString(),
        };

        return NextResponse.json(response, {
            headers: {
                "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
            },
        });
    } catch (error) {
        console.error("Skills API error:", error);
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : "Unknown error",
                timestamp: new Date().toISOString(),
            },
            { status: 500 }
        );
    }
}
