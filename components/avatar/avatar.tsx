"use client"

import React from "react";

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
}

type AvatarStatus = "idle" | "loading" | "loaded" | "error";

interface AvatarContextValue {
    hasSrc: boolean;
    status: AvatarStatus;
    setHasSrc: (hasSrc: boolean) => void;
    setStatus: (status: AvatarStatus) => void;
}

const AvatarContext = React.createContext<AvatarContextValue | null>(null);

function joinClasses(...classes: Array<string | undefined>) {
    return classes.filter(Boolean).join(" ");
}

export function Avatar({ className, ...props }: BaseProps) {
    const [hasSrc, setHasSrc] = React.useState(false);
    const [status, setStatus] = React.useState<AvatarStatus>("idle");

    return (
        <AvatarContext.Provider value={{ hasSrc, status, setHasSrc, setStatus }}>
            <div
                className={joinClasses(
                    "relative overflow-hidden rounded-3xl border border-border/50 bg-muted",
                    className,
                )}
                {...props}
            />
        </AvatarContext.Provider>
    );
}

export function AvatarImage({ className, alt = "", src, onLoad, onError, ...props }: AvatarImageProps) {
    const context = React.useContext(AvatarContext);
    const imageSrc = typeof src === "string" ? src.trim() : "";
    const hasImageSrc = Boolean(imageSrc);

    React.useEffect(() => {
        context?.setHasSrc(hasImageSrc);
        context?.setStatus(hasImageSrc ? "loading" : "idle");
    }, [context, hasImageSrc]);

    if (!hasImageSrc) {
        return null;
    }

    return (
        <img
            alt={alt}
            src={src}
            className={joinClasses("h-full w-full object-cover", className)}
            onLoad={(event) => {
                context?.setStatus("loaded");
                onLoad?.(event);
            }}
            onError={(event) => {
                context?.setStatus("error");
                onError?.(event);
            }}
            {...props}
        />
    );
}

export function AvatarFallback({ className, ...props }: BaseProps) {
    const context = React.useContext(AvatarContext);
    const shouldShowFallback = !context || !context.hasSrc || context.status === "error";

    if (!shouldShowFallback) {
        return null;
    }

    return (
        <div
            className={joinClasses(
                "absolute inset-0 flex items-center justify-center text-sm font-semibold",
                className,
            )}
            {...props}
        />
    );
}

export default Avatar;
