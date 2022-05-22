import React from "react";

export interface ITextAreaCustom {
    id: string;
    name:string;
    labeltext?: string;
    cols: number;
    rows: number;
    error?:any;
    touched?:any;
    inputprops: any;
}

const TextAreaCustom: React.FC<ITextAreaCustom> = ( props: ITextAreaCustom) => {
    return <>
        <label htmlFor={props.id}>{props.labeltext}</label>
        <textarea
            id={props.id}
            name={props.name}
            style={{width:'100%'}}
            cols={props.cols }
            rows={props.rows }
            {...props.inputprops}
        />
        {props.touched[`${props.name}`] && props.error[`${props.name}`] && <div style={{ color: 'red' }}>{props.error[`${props.name}`]}</div>}
    </>
}

export default TextAreaCustom;