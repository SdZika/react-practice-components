export const Types = () => {

    //Type annotations in TypeScript are used to define the type of a variable, including functions explicitly. When annotating function types, it's essential to include the return type to inform the TypeScript compiler what value the function is expected to return. 
    function add(a:number, b:number): number {
        return a + b;
    }
    

    //Arrow functions are a concise way to write functions in TypeScript. They are instrumental when working with function types because they can be easily assigned to variables with a function type.
   const greeting:(greet: string) => string = (greet) => `hello ${greet} `


    //The logMessage function expects a message of type string and a userId of type number, and it does not return any value (void)
    function newGreet (greet: string): void {
        console.log(greet)
    }

    newGreet("this is new greeting")

    function newArray(...spreads: string[]){
        return spreads.join(" ")
    }
   

    return (
        <>
            <p>{add(3,4)}</p>
            <p>{greeting("marko")}</p>
            <p>{newArray("a", "b","c")}</p>
            
        </>

    )

}

 

