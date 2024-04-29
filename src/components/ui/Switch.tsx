import React from "react";
import mergeClassNames from "../../utills/mergeClassNames";


interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelNode?: React.ReactNode
}
export default function Switch({ className, id, labelNode, ...props }: SwitchProps) {
    return <label htmlFor={id} className="label cursor-pointer" >
        <span>{labelNode}</span>
        <input id={id} type="checkbox" className={mergeClassNames("toggle toggle-primary", className)}  {...props} />
    </label>

}

