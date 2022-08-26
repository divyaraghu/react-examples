import React from "react";

// create a function that accepts a Component as an argument and return another updated component
export default function addNameProp(OrigComponent) {

    // return the component with added name property
    return class addNameProp extends React.Component {
        render() {
            return (
                <OrigComponent name='Divya' />
            )
        }
    }
};