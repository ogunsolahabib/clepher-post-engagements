import { useEffect, useRef } from "react"

type CheckboxProps = { indeterminate?: boolean, checked?: boolean; label?: React.ReactNode } & React.HTMLAttributes<HTMLInputElement>

export default function CheckBox({ indeterminate, label, id, ...props }: CheckboxProps) {

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.indeterminate = !!indeterminate
        }
    }, [ref, indeterminate])


    return <label htmlFor={id} className="label cursor-pointer" >
        <span>{label}</span>
        <input id={id} ref={ref} type="checkbox" className="checkbox checkbox-sm" {...props} />
    </label>
}

