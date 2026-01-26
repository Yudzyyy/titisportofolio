import { NextResponse } from "next/server";
import { transformUptimeData, type StatusApiResponse } from "@/lib/uptime-kuma";

// Uptime Kuma public status page URL (configure this)
const UPTIME_KUMA_URL = process.env.UPTIME_KUMA_URL || "";

export async function GET() {
    try {
        // If no URL configured, return mock data for demo
        if (!UPTIME_KUMA_URL) {
            const mockData: StatusApiResponse = {
                success: true,
                data: {
                    uptime: 99.87 + Math.random() * 0.1,
                    avgPing: 20 + Math.floor(Math.random() * 10),
                    monitors: [
                        { name: "Home Server", status: Math.random() > 0.1 ? "up" : "down" },
                        { name: "IoT Gateway", status: Math.random() > 0.05 ? "up" : "down" },
                        { name: "API Server", status: "up" },
                        { name: "Database", status: "up" },
                    ],
                },
                timestamp: new Date().toISOString(),
            };

            return NextResponse.json(mockData, {
                headers: {
                    "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
                },
            });
        }

        // Fetch from actual Uptime Kuma API
        const response = await fetch(UPTIME_KUMA_URL, {
            next: { revalidate: 30 },
        });

        if (!response.ok) {
            throw new Error(`Uptime Kuma API error: ${response.status}`);
        }

        const rawData = await response.json();
        const transformedData = transformUptimeData(rawData);

        const result: StatusApiResponse = {
            success: true,
            data: transformedData,
            timestamp: new Date().toISOString(),
        };

        return NextResponse.json(result, {
            headers: {
                "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
            },
        });
    } catch (error) {
        console.error("Status API error:", error);

        const errorResponse: StatusApiResponse = {
            success: false,
            error: error instanceof Error ? error.message : "Unknown error",
            timestamp: new Date().toISOString(),
        };

        return NextResponse.json(errorResponse, { status: 500 });
    }
}
