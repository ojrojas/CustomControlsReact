import React from "react";

export interface IInputCustom {
    id: string;
    name: string;
    labeltext?: string;
    error?: any;
    touched?: any;
    inputprops: any;
}

const InputCustom: React.FC<IInputCustom> = (props) => {
    return <>
        <label htmlFor={props.id}>{props.labeltext}</label>
        <input
            style={{ width: '100%' }}
            name={props.name}
            id={props.id}
            {...props.inputprops}
        />
        {props.touched[`${props.name}`] && props.error[`${props.name}`] && <div style={{ color: 'red' }}>{props.error[`${props.name}`]}</div>}
    </>
}

export default InputCustom;