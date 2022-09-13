import React, { useEffect, useState } from 'react'

function UseEffectConditionalrender() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [greeting, setGreeting] = useState('');

    //This conditional useEffect will only be executed when the component is rendered for the first time
    //and when the name (one of the states) value change, when the age value changes, this useEffect will not be executed

    //Equivalent to ComponentWillUpdate and ComponentWillMount
    useEffect(() => {
        console.log("Inside useEffect - name has been updated");
        if (name.length != 0) {
            setGreeting(`Hello ${name}`);
        } else {
            setGreeting('');
        }
    }, [name])

    //Equivalent to ComponentWillUnMount
    //Clean up function to be called when the component unmounts, Click on other tab in navbar to see the below logs in the console
    const exampleCleanUpFunction = () => {
        console.log("This will be called when the compoennt unmounts.");
    }

    //Equivalent to ComponentWillMount
    //Passing an empty array to useEffect function, will make the useEffect to execute only once
    //when the component is rendered for the first time. This is equivalent to ComponentDidMount lifecycle method
    useEffect(() => {
        console.log("Inside useEffect - with passing an empty array");
        setGreeting(`Hello! Please enter your details`);
        return exampleCleanUpFunction;
    }, [])



    return (
        <div className="container">
            <h1 className="greetingText"> {greeting} </h1>
            <br /><br /><br />Enter your name <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br /><br /><br /> Enter your Age <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />

        </div>
    )
}

export default UseEffectConditionalrender
