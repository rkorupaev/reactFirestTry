import React from "react";
import style from "./Forms.module.css";

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div>
            <textarea {...input} {...props}/>
            {meta.error && meta.touched && <span className={style.spanError}>{meta.error}</span>}
        </div>
    )
}


export const Input = ({input, meta, ...props}) => {
    return (
        <div>
            <input {...input} {...props}/>
            {meta.error && meta.touched && <span className={style.spanError}>{meta.error}</span>}
        </div>
    )
}
