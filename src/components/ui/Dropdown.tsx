import mergeClassNames from "../../utills/mergeClassNames"

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    labelNode: React.ReactNode
    contentNode: React.ReactNode
}

export default function Dropdown({ labelNode, contentNode, ...props }: DropdownProps) {
    return <DropdownRoot {...props}>
        <DropdownLabel tabIndex={0} className={"m-1"}>{labelNode}</DropdownLabel>
        <>{contentNode}</>
    </DropdownRoot>
}

export function DropdownRoot({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
    return <div className={mergeClassNames("dropdown", className)} {...props}>
        {children}
    </div>
}

export function DropdownLabel({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return <label className={mergeClassNames("dropdown-label", className)} {...props} />
}


interface DropdownContentProps extends React.HTMLAttributes<HTMLElement> {
}
export function DropDownContent({ className, ...props }: DropdownContentProps) {
    return <ul tabIndex={0} className={mergeClassNames("dropdown-content p-2  rounded-box z-[1]", className)} {...props} />
}





