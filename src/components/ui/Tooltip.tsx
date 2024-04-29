import mergeClassNames from "../../utills/mergeClassNames";


interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
    contentString: string
}
export default function Tooltip({ className, contentString, ...props }: TooltipProps) {
    return <span className={mergeClassNames("tooltip tooltip-top p-0 before:bg-base-400 before:rounded-2xl after:hidden hover:bg-inherit", className)} data-tip={contentString}  {...props} />
}