// Input.tsx
import React, { FC } from "react";

interface InputProps {
    name: string;
    change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({ name, change }) => {
    return (
        <label> Add {name}<input type="text" name={name} onChange={change} /></label>
    )
};
