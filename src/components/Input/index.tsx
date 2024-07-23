import { FC } from "react"

export const Input: FC<{name: string, change: () => React.ChangeEvent<HTMLInputElement>}> = ({name, change}) => {
    return (
        <label>Please add your {name} <input name={name} onChange={change}/></label>
    )
}