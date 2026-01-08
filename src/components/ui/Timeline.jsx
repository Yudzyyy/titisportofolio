"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"], // 🔥 FIX: animasi terasa
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full font-sans"
    >
      <div ref={ref} className="relative">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex gap-8 pt-16"
          >
            {/* DOT + YEAR */}
            <div className="relative flex flex-col items-center w-10">
              <div className="h-4 w-4 rounded-full bg-blue-500 z-10" />
              <span className="mt-3 text-xs font-medium text-neutral-500">
                {item.title}
              </span>
            </div>

            {/* CONTENT */}
            <div className="flex-1">
              {item.content}
            </div>
          </div>
        ))}

        {/* TIMELINE LINE */}
        <div
          style={{ height }}
          className="
            absolute left-[18px] top-0 w-[2px]
            bg-neutral-300
            overflow-hidden
          "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="
              absolute top-0 left-0 w-full
              bg-gradient-to-b
              from-blue-500 via-purple-500 to-transparent
            "
          />
        </div>
      </div>
    </div>
  );
};
