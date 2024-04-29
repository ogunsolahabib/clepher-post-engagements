import React from "react";
import mergeClassNames from "../../utills/mergeClassNames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost" | "link" | "accent";
    size?: "xs" | "sm" | "md" | "lg"
}
export default function Button({ className, children, size = "md", variant = "primary", ...props }: ButtonProps) {
    return <button className={(mergeClassNames("btn", `btn-${variant}`, `btn-${size}`, className))} {...props}>
        {children}
    </button>
}