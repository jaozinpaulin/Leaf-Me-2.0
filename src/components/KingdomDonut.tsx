"use client";

import { useState, useEffect } from "react";
import type { KingdomType } from "./Hero";

interface KingdomDonutProps {
    kingActive: KingdomType;
}

const kingdoms = [
    {
        name: "Animalia",
        division: "Chordata",
        catalog: "2026.09 — AN",
    },
    {
        name: "Plantae",
        division: "Tracheophyta",
        catalog: "2026.09 — TR",
    },
    {
        name: "Fungi",
        division: "Basidiomycota",
        catalog: "2026.09 — FU",
    },
];

export default function KingdomDonut({ kingActive }: KingdomDonutProps) {
    const activeNumber = Number(kingActive ?? 0);
    const [activeIndex, setActiveIndex] = useState(activeNumber);

    useEffect(() => {
        setActiveIndex(activeNumber);
    }, [kingActive]);

    const activeKingdom = kingdoms[activeIndex];
    const strokeDasharray = "105 347.39";

    const getOffset = (index: number) => -150.8 * index;

    return (
        <div className="relative flex items-center justify-center">
            <div className="relative h-72 w-72 flex items-center justify-center">
                <svg
                    viewBox="0 0 200 200"
                    className="absolute inset-0 h-full w-full -rotate-90 overflow-visible"
                >
                    {kingdoms.map((kingdom, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <circle
                                key={kingdom.name}
                                cx="100"
                                cy="100"
                                r="72"
                                fill="none"
                                stroke={isActive ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.12)"}
                                strokeWidth={isActive ? 5 : 3}
                                strokeDasharray={strokeDasharray}
                                strokeDashoffset={getOffset(index)}
                                strokeLinecap="square"
                                className="transition-all duration-700 ease-in-out"
                            />
                        );
                    })}
                </svg>

                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                    <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.25em] text-white/60">
                        {activeKingdom.division}
                    </span>
                </div>
            </div>
        </div>
    );
}