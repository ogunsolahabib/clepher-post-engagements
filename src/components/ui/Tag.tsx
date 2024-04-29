import mergeClassNames from "../../utills/mergeClassNames"


interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    onClose?: () => void
}
export default function Tag({ className, onClose, children, ...props }: TagProps) {
    return <span className={mergeClassNames(className, "badge badge-lg text-xs badge-ghost bg-tag p-4")} {...props}>
        {children}
        {onClose && <span role="button" className="hover:text-error ml-1" onClick={() => onClose()}>✕</span>}
    </span>
}