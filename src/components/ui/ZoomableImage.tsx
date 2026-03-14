"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ZoomableImage(props: ImageProps) {
    const [isZoomed, setIsZoomed] = useState(false);

    // Prevent scrolling when zoomed
    useEffect(() => {
        if (isZoomed) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isZoomed]);

    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsZoomed(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <div className="relative group cursor-zoom-in overflow-hidden rounded-inherit h-full w-full" onClick={() => setIsZoomed(true)}>
                <Image {...props} className={`transition-transform duration-500 group-hover:scale-105 ${props.className || ""}`} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-black/60 p-3 rounded-full opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-xl backdrop-blur-sm">
                        <ZoomIn className="text-white w-6 h-6" />
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isZoomed && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12 cursor-zoom-out"
                        onClick={() => setIsZoomed(false)}
                    >
                        <button 
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[101]"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsZoomed(false);
                            }}
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            <Image 
                                {...props} 
                                className="object-contain w-full h-full" 
                                alt={props.alt || "Zoomed image"}
                                quality={100}
                                sizes="100vw"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
