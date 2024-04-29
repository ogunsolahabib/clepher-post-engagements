import React from "react";
import mergeClassNames from "../../utills/mergeClassNames";

interface BreadcrumbProps extends React.HTMLAttributes<HTMLSpanElement> {
    items: React.ReactNode[]
}
export default function Breadcrumb({ items, className, ...props }: BreadcrumbProps) {
    return <div className={mergeClassNames("text-sm breadcrumbs", className)} {...props}>
        <ul>
            {items.map((item, i) => <li key={i}>{item}</li>
            )}
        </ul>
    </div>
}
