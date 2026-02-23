import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> { }

function joinClasses(...classes: Array<string | undefined>) {
    return classes.filter(Boolean).join(" ");
}

export function Section({ className, ...props }: BadgeProps) {
    return (
        <section
            className={joinClasses("flex min-h-0 flex-col gap-y-3", className)}
            {...props}
        />
    );
}