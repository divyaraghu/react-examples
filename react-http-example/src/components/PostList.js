import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

export class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { posts } = this.state;
        return (
            <div className="posts">
                <h1> HTTP Get Example - List of posts </h1>

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
                            posts.length ?
                                (posts.map(post =>
                                    <tr key={post.id}>
                                        <td>{post.id} </td>
                                        <td>{post.title} </td>
                                        <td>{post.body} </td>
                                    </tr>))
                                : <></>
                        }
                    </tbody>
                </Table>

            </div>
        )
    }
}

export default PostList
