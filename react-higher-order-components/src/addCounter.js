import { useState } from "react"

//This is a HOC function which is returning an updated Component
export default function addCounter(OrigComponent, incrementNumber) {
    //the props in parameters represents the properties passed in when calling the HOCed component from App.js
    //This props has to be passed down to the original component back for it to access the props
    return function UpdatedComponent(props) {
        const [count, setCount] = useState(0);

        const incrementCounter = () => {
            setCount(count + incrementNumber);
        }
        return (
            <OrigComponent count={count} clickHandler={incrementCounter} {...props} />
        )
    }

}