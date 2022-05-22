import {CSSProperties} from 'react';

interface cssCustom {
    name:string;
    cssproperties:CSSProperties;
}

export const createStyleSheet = (arrayCssCustom:cssCustom[]) => {
    let jsonCustom:cssCustom[]= [];
    arrayCssCustom.forEach((custom)=> {
        const name = custom.name;
        const cssproperties= custom.cssproperties;
        jsonCustom.push({name, cssproperties});
    });

    return jsonCustom;
}