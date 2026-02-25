"use client";

export type ProjectFilterType = "all" | "fullstack" | "frontend" | "backend";

interface SegmentedControlProps {
    activeFilter: ProjectFilterType;
    onFilterChange: (filter: ProjectFilterType) => void;
}

export function SegmentedControl({ activeFilter, onFilterChange }: SegmentedControlProps) {
    const filters: { label: string; value: ProjectFilterType }[] = [
        { label: "All", value: "all" },
        { label: "Fullstack", value: "fullstack" },
        { label: "Frontend", value: "frontend" },
        { label: "Backend", value: "backend" },
    ];

    return (
        <div className="flex w-full justify-center my-8">
            <div className="inline-flex flex-wrap items-center gap-1 p-2 border border-border/50 rounded-3xl bg-background/30 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:bg-black/2 dark:hover:bg-white/2">
                {filters.map((filter) => {
                    const isActive = activeFilter === filter.value;

                    return (
                        <button
                            key={filter.value}
                            onClick={() => onFilterChange(filter.value)}
                            className={`px-5 py-2 rounded-2xl text-sm font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 ${isActive
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                                }`}
                        >
                            {filter.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}