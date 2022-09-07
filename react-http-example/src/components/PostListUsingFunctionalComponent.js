import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function PostListUsingFunctionalComponent() {
    const [data, setData] = useState({});


    useEffect(() => {
        console.log("In component did mount");
        axios.get('https://jsonplaceholder.typicode.com/comments1')
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                setData({ error: 'Error in displaying data - ' + error.message });
                console.log(error.message);
            })
    }, []);

    return (
        <div className='emails'>
            <h1> HTTP Get - error handling example - List of emails </h1>
            {data.length ? (
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
                            data.map(item =>
                                <tr key={item.id}><td>{item.name}</td><td>{item.email}</td><td>{item.body}</td></tr>)

                        }
                    </tbody>
                </Table>)
                : <div className="error">{data.error}</div>
            }
        </div >
    )
}

export default PostListUsingFunctionalComponent
