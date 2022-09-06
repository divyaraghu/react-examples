import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function PostListUsingFunctionalComponent() {
    const [data, setData] = useState({});


    useEffect(() => {
        console.log("In component did mount");
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                setData({ error: error.message });
                console.log(error.message);
            })
    }, []);

    return (
        <div className='emails'>
            <h1> List of emails </h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length ? (data.map(item =>
                            <tr key={item.id}><td>{item.name}</td><td>{item.email}</td><td>{item.body}</td></tr>))
                            : <tr>{data.error}</tr>
                    }
                </tbody>
            </Table>
        </div >
    )
}

export default PostListUsingFunctionalComponent
