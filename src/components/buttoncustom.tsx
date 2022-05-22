import React from "react";

export interface IButtonCustom {
    id: string;
    reference: any;
    buttonprops: any;
    nodeElement: any
}

const ButtonCustom: React.FC<{ id: string, reference: any, labeltext?: string, buttonprops: any, nodeElement: any }> = (props: IButtonCustom) => {
    return <>
        <button
            id={props.id}
            ref={props.reference}
            style={{ width: '100%' }}
            {...props.buttonprops}>
            {props.nodeElement}
        </button>
    </>
}

export default ButtonCustom;