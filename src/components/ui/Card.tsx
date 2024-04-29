import mergeClassNames from "../../utills/mergeClassNames"

export default function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={mergeClassNames("card bg-base-100 p-0 shadow-sm card-bordered", className)} {...props} />
}

export function CardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={mergeClassNames("card-body gap-0 p-0", className)} {...props} />
}

