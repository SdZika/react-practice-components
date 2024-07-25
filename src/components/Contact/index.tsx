import { useState, FC } from "react";
import { Input } from "../Input";




export const Contact: FC = () => {
const [state, setState] = useState<{name:string, email: string, message: string}>({
    name: "",
    email: "",
    message: ""
}
)

const updatSet = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setState((previusState) => ({
        ...previusState,
        [name]: value
    }))

    console.log(state.name)
    console.log(state.email)
    console.log(state.message)
}

    return (
        <>
            <Input name="name" change={updatSet} value={state.name}/>
            <Input name="email" change={updatSet} value={state.email}/>
            <Input name="message" change={updatSet} value={state.message}/>
        </>

    )
}