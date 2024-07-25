import { useState, FC, ChangeEvent } from "react";
import { Input } from "../Input";

interface myProps {
    name: string;
    email: string;
    message: string;
}

export const Contact: FC = () => {
    const [state, setState] = useState<myProps>({
        name: "",
        email: "",
        message: ""
    })

    

    const changeContact = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value
        const value = e.target.value

        setState((previousState) => ({
            
            ...previousState,
            [name]: value
            
        }))

        console.log(state.name);
        console.log(state.email);
        console.log(state.message);
    }

    return (
        <>
            <Input name="name" change={changeContact} value={state.name} />
            <Input name="email" change={changeContact} value={state.email} />
            <Input name="message" change={changeContact} value={state.message} />
        </>

    )
}