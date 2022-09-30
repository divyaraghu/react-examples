
import React from 'react'
import Person from './Person';

function PersonList() {

    const personList = [{
        name:'Divya',
        age: 38,
        job: 'vetti officer'
    },
    {
        name:'Saravana',
        age: 43,
        job: 'vetti officer no1'
    }];

    return (
        personList.map((person) => <Person person={person}> </Person>)
    )
}

export default PersonList;
