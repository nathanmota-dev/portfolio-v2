import React from "react";

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

function joinClasses(...classes: Array<string | undefined>) {
    return classes.filter(Boolean).join(" ");
}

export function Card({ className, ...props }: BaseProps) {
    return (
        <div
            className={joinClasses(
                "rounded-3xl border border-border/50 bg-background p-4",
                className,
            )}
            {...props}
        />
    );
}

export function CardHeader({ className, ...props }: BaseProps) {
    return <div className={joinClasses("space-y-1", className)} {...props} />;
}

export function CardContent({ className, ...props }: BaseProps) {
    return <div className={joinClasses("text-sm", className)} {...props} />;
}

export function CardTitle({ className, ...props }: BaseProps) {
    return <h3 className={joinClasses("text-base font-semibold", className)} {...props} />;
}

export function CardDescription({ className, ...props }: BaseProps) {
    return (
        <p
            className={joinClasses("font-mono text-xs text-muted-foreground", className)}
            {...props}
        />
    );
}

export default Card;
