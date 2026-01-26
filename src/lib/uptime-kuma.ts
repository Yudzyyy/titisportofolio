// Uptime Kuma Types and Utilities

export interface Monitor {
    name: string;
    status: "up" | "down" | "pending";
    uptime?: number;
    ping?: number;
}

export interface UptimeKumaResponse {
    uptime: number;
    avgPing: number;
    monitors: Monitor[];
}

export interface StatusApiResponse {
    success: boolean;
    data?: UptimeKumaResponse;
    error?: string;
    timestamp: string;
}

// Transform raw Uptime Kuma data to our format
export function transformUptimeData(raw: unknown): UptimeKumaResponse {
    // Handle various Uptime Kuma API response formats
    if (typeof raw === "object" && raw !== null) {
        const data = raw as Record<string, unknown>;

        return {
            uptime: typeof data.uptime === "number" ? data.uptime : 99.9,
            avgPing: typeof data.avgPing === "number" ? data.avgPing : 0,
            monitors: Array.isArray(data.monitors)
                ? data.monitors.map((m: unknown) => {
                    const monitor = m as Record<string, unknown>;
                    return {
                        name: String(monitor.name || "Unknown"),
                        status: (monitor.status === "up" || monitor.status === "down" || monitor.status === "pending")
                            ? monitor.status
                            : "pending",
                        uptime: typeof monitor.uptime === "number" ? monitor.uptime : undefined,
                        ping: typeof monitor.ping === "number" ? monitor.ping : undefined,
                    };
                })
                : [],
        };
    }

    // Return default if data is invalid
    return {
        uptime: 99.9,
        avgPing: 0,
        monitors: [],
    };
}

// Get status color based on status
export function getStatusColor(status: Monitor["status"]): string {
    switch (status) {
        case "up":
            return "bg-emerald-500";
        case "down":
            return "bg-red-500";
        default:
            return "bg-amber-500";
    }
}

// Format uptime percentage
export function formatUptime(uptime: number): string {
    return uptime.toFixed(2) + "%";
}

// Format ping in ms
export function formatPing(ping: number): string {
    return ping.toFixed(0) + "ms";
}
