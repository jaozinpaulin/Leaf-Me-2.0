"use client";

import { X, ShieldCheck, Droplet, Sun, MapPin, Leaf } from "lucide-react";

export default function SpecimenModal() {
    const fakeSpecimen = {
        key: "987654321",
        scientificName: "Monstera deliciosa",
        scientificNameAuthorship: "Liebm.",
        family: "Araceae",
        genus: "Monstera",
        country: "Costa Rica",
        eventDate: "2026-10-01",
    };

    return (
        <div className="min-h-screen bg-leaf-bg flex items-center justify-center p-6">
            <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-leaf-border bg-leaf-surface p-6 md:p-8 shadow-2xl">
                <div className="absolute top-6 right-6 p-2 rounded-full border border-leaf-border bg-leaf-bg text-leaf-muted hover:text-leaf-text transition-colors cursor-pointer">
                    <X size={18} />
                </div>

                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-leaf-muted mb-2">
                    <span>Specimen Test Card</span>
                    <span>•</span>
                    <span>Key: {fakeSpecimen.key}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-medium italic tracking-tight text-leaf-text">
                    {fakeSpecimen.scientificName}
                </h3>
                <p className="text-xs font-mono text-leaf-muted mt-1">
                    {fakeSpecimen.scientificNameAuthorship}
                </p>

                <div className="mt-6 flex h-52 w-full items-center justify-center rounded-2xl bg-leaf-bg border border-leaf-border text-leaf-muted gap-2">
                    <Leaf size={24} className="text-leaf-accent" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em]">
                        Mock Image Preview
                    </span>
                </div>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-2xl border border-leaf-border bg-leaf-bg/50">
                        <p className="font-mono text-[9px] uppercase tracking-wider text-leaf-muted">Kingdom</p>
                        <p className="text-xs font-medium mt-1">Plantae</p>
                    </div>
                    <div className="p-3.5 rounded-2xl border border-leaf-border bg-leaf-bg/50">
                        <p className="font-mono text-[9px] uppercase tracking-wider text-leaf-muted">Family</p>
                        <p className="text-xs font-medium mt-1 truncate">{fakeSpecimen.family}</p>
                    </div>
                    <div className="p-3.5 rounded-2xl border border-leaf-border bg-leaf-bg/50">
                        <p className="font-mono text-[9px] uppercase tracking-wider text-leaf-muted">Genus</p>
                        <p className="text-xs font-medium mt-1 truncate">{fakeSpecimen.genus}</p>
                    </div>
                </div>

                <div className="mt-6 border-t border-leaf-border pt-6">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-leaf-muted mb-4">
                        Ecological & Conservation Data
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-leaf-border bg-leaf-bg/30">
                            <ShieldCheck size={22} className="text-emerald-500 shrink-0" />
                            <div>
                                <p className="font-mono text-[9px] text-leaf-muted uppercase">Conservation Status</p>
                                <p className="text-xs font-medium">Least Concern (LC)</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-leaf-border bg-leaf-bg/30">
                            <MapPin size={22} className="text-leaf-accent shrink-0" />
                            <div>
                                <p className="font-mono text-[9px] text-leaf-muted uppercase">Origin Country</p>
                                <p className="text-xs font-medium">{fakeSpecimen.country}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-leaf-border bg-leaf-bg/30">
                            <Droplet size={22} className="text-blue-400 shrink-0" />
                            <div>
                                <p className="font-mono text-[9px] text-leaf-muted uppercase">Ideal Humidity</p>
                                <p className="text-xs font-medium">Moderate (60% - 80%)</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-leaf-border bg-leaf-bg/30">
                            <Sun size={22} className="text-amber-400 shrink-0" />
                            <div>
                                <p className="font-mono text-[9px] text-leaf-muted uppercase">Sunlight Preference</p>
                                <p className="text-xs font-medium">Partial Shade / Direct</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <button className="px-6 py-3 rounded-2xl bg-leaf-text text-leaf-bg text-xs font-medium transition-opacity hover:opacity-90 shadow-lg">
                        Close Inspector
                    </button>
                </div>
            </div>
        </div>
    );
}