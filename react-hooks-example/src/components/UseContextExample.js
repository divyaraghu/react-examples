import React, { useState, createContext, useContext } from 'react';

const UserContext = createContext();

function UseContextExample() {
    const [user, setUser] = useState("Divyapriya Raghupathy");
    //We dont have to pass the user state value manually through each component down the line
    //The value can be directly accessed in which ever component we want to
    return (
        <div className='container'>
            <h1>{`Hello ${user}!`}</h1>

            <UserContext.Provider value={user}>
                Hello this is UseContextExample. State variable user: {user} <Component2 userName={user} />
            </UserContext.Provider>
        </div>
    )
}

function Component2() {
    return (
        <div>
            Hello this is component 2 <Component3 />
        </div>
    )
}

function Component3() {
    return (
        <div>
            Hello this is component 3 <Component4 />
        </div>
    )
}

function Component4() {
    const user = useContext(UserContext);

    return (
        <div>
            Hello {user} this is from component 4
        </div>
    )
}

export default UseContextExample
