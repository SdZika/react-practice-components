import { useState } from "react"
import { Input } from "../Input"

export const Contact = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        message: ""
    })



    const updateState = (e: any) => {
        const value = e.target.value;
        const id = e.target.id;

        setState({
            ...state,
            [id]: value
        })
    }

    console.log(state.name)
    console.log(state.email)
    console.log(state.message)
    return (
        <form>
            <Input change={updateState} name="name" value={state.name}/>
            <Input change={updateState} name="email" value={state.email}/>
            <Input change={updateState} name="message" value={state.message}/>
        </form>

    )
}