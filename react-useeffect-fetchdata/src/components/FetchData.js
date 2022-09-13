import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

function FetchData() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [post2, setPost2] = useState({});
    const [id, setId] = useState(1);
    const [buttonClickID, setButtonClickID] = useState(1);
    const [formSubmitted, setFormSubmitted] = useState(1);

    //Get data from posts url when the component mounts for the first time (by passing an empty array)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data)
            })
            .catch(error => console.log(error));
    }, []);

    //Get data for an individual id (component will be updated whenever the id value is updated)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => setPost(response.data))
            .catch(error => console.log(error));
    }, [id]);

    //Get data for an individual id when the form is submitted
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClickID}`)
            .then(response => setPost2(response.data))
            .catch(error => console.log(error));
    }, [formSubmitted]);

    const submitHandler = (e) => {
        e.preventDefault();
        setFormSubmitted(buttonClickID);
    }
    return (
        <div>
            <h2> All posts </h2>
            {
                posts.length != 0 ?
                    <ul>
                        {posts.map((post) => <li key={post.id}> {post.title} </li>)}
                    </ul>
                    : <></>
            }

            <div>
                <h2> Individual post - Trigger effect on input value change</h2>
                Enter ID <input type="text" value={id} onChange={(event) => setId(event.target.value)} />
                <table>
                    <tbody>
                        <tr><td>id</td><td>{post.id}</td></tr>
                        <tr><td>userId</td><td>{post.userId}</td></tr>
                        <tr><td>title</td><td>{post.title}</td></tr>
                        <tr><td>body</td><td>{post.body}</td></tr>

                    </tbody>
                </table>
            </div>

            <div>
                <h2>Trigger effect on form submit </h2>
                <form onSubmit={submitHandler}>
                    Enter ID <input type="text" value={buttonClickID} onChange={(event) => setButtonClickID(event.target.value)} />
                    <button type="submit"> Click to get post </button>
                </form>
                <table>
                    <tbody>
                        <tr><td>id</td><td>{post2.id}</td></tr>
                        <tr><td>userId</td><td>{post2.userId}</td></tr>
                        <tr><td>title</td><td>{post2.title}</td></tr>
                        <tr><td>body</td><td>{post2.body}</td></tr>

                    </tbody>
                </table>
            </div>
        </div >

    )
}

export default FetchData
