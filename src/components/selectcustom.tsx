import React from "react";

export interface IOptionSelect {
    nodeElement: any;
    value: string | number;
}

export interface ISelectCustom {
    id: string;
    name: string;
    data: IOptionSelect[];
    labeltext?: string;
    error?: any;
    touched?: any;
    labelDefaultSelect?:string;
    inputprops: any;
}

const SelectCustom: React.FC<ISelectCustom> = (props) => {
    return <>
        <label htmlFor={props.id}>{props.labeltext}</label>
        <select
        style={{width:'100%'}}
            name={props.name}
            id={props.id}
            {...props.inputprops}
        >
            { props.labelDefaultSelect && <option value="">{props.labelDefaultSelect}</option>}
            {props.data.map((item, index) => (<option key={item.nodeElement+index} value={item.value} >{item.nodeElement}</option>))}
        </select>
        {props.touched[`${props.name}`] && props.error[`${props.name}`] && <div style={{ color: 'red' }}>{props.error[`${props.name}`]}</div>}
    </>
}

export default SelectCustom;