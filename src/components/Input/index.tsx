import { FC } from "react";

interface myProps {
    name: string;
    change: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;

}

export const Input:FC<myProps> = ({name, change})=> {
    return(
        <label> Enter {name} <input name={name} onChange={change}/></label>
    )
}
