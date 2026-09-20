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
        color: "#2563eb",
    },
    {
        name: "Plantae",
        division: "Tracheophyta",
        catalog: "2026.09 — TR",
        color: "#059669",
    },
    {
        name: "Fungi",
        division: "Basidiomycota",
        catalog: "2026.09 — FU",
        color: "#d97706",
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
            <div className="relative h-96 w-96 flex items-center justify-center">
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
                                stroke={isActive ? kingdom.color : "#27272a"}
                                strokeWidth={isActive ? 38 : 14}
                                strokeDasharray={strokeDasharray}
                                strokeDashoffset={getOffset(index)}
                                strokeLinecap="round"
                                className={`transition-all duration-700 ease-in-out ${isActive ? "opacity-100" : "opacity-40"
                                    }`}
                            />
                        );
                    })}
                </svg>

                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                    <span className="font-mono text-[11px] tracking-[0.25em] text-zinc-400">
                        0{activeIndex + 1} / 03
                    </span>

                    <span className="mt-2 font-serif text-2xl font-medium tracking-wide text-zinc-100 transition-all duration-500">
                        {activeKingdom.name}
                    </span>

                    <span
                        className="mt-2 font-mono text-[9px] uppercase tracking-[0.3em] transition-colors duration-500"
                        style={{ color: activeKingdom.color }}
                    >
                        Kingdom Survey
                    </span>
                </div>
            </div>
        </div>
    );
}