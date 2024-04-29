import React from "react";
import mergeClassNames from "../../utills/mergeClassNames";

export default function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return <input className={mergeClassNames('input', className)} {...props} />
}