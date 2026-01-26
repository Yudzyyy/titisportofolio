"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    colSpan?: number;
    rowSpan?: number;
}

export default function BentoCard({
    children,
    className,
    colSpan = 1,
    rowSpan = 1,
}: BentoCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6",
                "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
                "transition-all duration-300",
                colSpan === 2 && "md:col-span-2",
                rowSpan === 2 && "md:row-span-2",
                className
            )}
        >
            {children}
        </motion.div>
    );
}
