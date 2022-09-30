//Action creator methods responsible to creating and returning an action object
export function increment(){
    return{
        type: 'INCREMENT'
    }
}

export function decrement(){
    const action = {
        type: 'DECREMENT'
    };
    return action;
}

export function reset(){
    return{
        type: 'RESET'
    };
}