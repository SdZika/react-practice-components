export const Input = (props: any) => {
    return (
        <>
            <label>Enter your {props.name}
                <input onChange={props.change} id={props.name} type="text" />
            </label>
        </>

    )
}