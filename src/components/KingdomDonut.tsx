"use client";

import { useState } from "react";

const kingdoms = [
    {
        name: "Animalia",
        division: "Chordata",
        catalog: "2026.09 — AN",
        color: "#3b82f6", // Azul
    },
    {
        name: "Plantae",
        division: "Tracheophyta",
        catalog: "2026.09 — TR",
        color: "#10b981", // Verde
    },
    {
        name: "Fungi",
        division: "Basidiomycota",
        catalog: "2026.09 — FU",
        color: "#f59e0b", // Âmbar
    },
];

export default function KingdomDonut() {
    const [activeIndex, setActiveIndex] = useState(0);
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
                                className={`cursor-pointer transition-all duration-700 ease-in-out ${isActive ? "opacity-100" : "opacity-50 hover:opacity-90"
                                    }`}
                                onClick={() => setActiveIndex(index)}
                            />
                        );
                    })}
                </svg>

                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                    <span className="font-mono text-[10px] tracking-widest text-leaf-muted">
                        0{activeIndex + 1} / 03
                    </span>

                    <span className="mt-2 font-serif text-2xl font-bold uppercase tracking-widest text-leaf-text transition-all duration-300">
                        {activeKingdom.name}
                    </span>

                    <span
                        className="mt-2 font-mono text-[8px] uppercase tracking-[0.2em] transition-colors duration-300"
                        style={{ color: activeKingdom.color }}
                    >
                        Kingdom Survey
                    </span>
                </div>

                <button
                    type="button"
                    onClick={() => setActiveIndex(0)}
                    className={`absolute top-6 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-widest transition-all duration-300 cursor-pointer ${activeIndex === 0 ? "scale-110 font-bold text-blue-400" : "text-leaf-muted hover:text-leaf-text"
                        }`}>
                </button>

                <button
                    type="button"
                    onClick={() => setActiveIndex(1)}
                    className={`absolute bottom-12 left-10 font-mono text-[9px] uppercase tracking-widest transition-all duration-300 cursor-pointer ${activeIndex === 1 ? "scale-110 font-bold text-emerald-400" : "text-leaf-muted hover:text-leaf-text"
                        }`}>
                </button>

                <button
                    type="button"
                    onClick={() => setActiveIndex(2)}
                    className={`absolute bottom-12 right-10 font-mono text-[9px] uppercase tracking-widest transition-all duration-300 cursor-pointer ${activeIndex === 2 ? "scale-110 font-bold text-amber-400" : "text-leaf-muted hover:text-leaf-text"
                        }`}>
                </button>
            </div>
        </div>
    );
}