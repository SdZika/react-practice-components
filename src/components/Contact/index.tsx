import { useState, FC } from "react"
import { Input } from "../Input"


export const Contact: FC = () => {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, messageEmail] = useState<string>("")

    const [state, setState] = useState<{name: string, email:string, message: string}>({
        name: "",
        email: "",
        message: ""
    })

    const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName((prevState) => (e.target.value));
        console.log(name)
    };
    
    return (
        <>
            <Input name="name" change={updateName}/>
            
        </>

    )
}