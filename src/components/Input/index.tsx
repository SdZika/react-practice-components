import { FC, ChangeEvent } from "react";


interface inputProps{
    name: string;
    value: string;
    change: (e: ChangeEvent<HTMLInputElement>) => void

}

export const Input: FC<inputProps> = ({name, value, change}) => {
    return (
        <label>Enter {name}<input name={name} value={value} onChange={change}/></label>
    )
}