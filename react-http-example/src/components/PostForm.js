import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }

    submitHanlder = (e) => {
        e.preventDefault();
        console.log(this.state);
        //Make the post request with the parameters in state as response body
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => console.log(response))
            .catch(error => console.log(error));

    }

    render() {

        return (
            <>
                <h1> HTTP Post Example </h1>
                <div className='form-container'>
                    <Form className="post-form" onSubmit={this.submitHanlder}>
                        <Form.Group className="mb-3" controlId="userId">
                            <Form.Label>User Id</Form.Label>
                            <Form.Control name="userId" value={this.state.userId} onChange={this.changeHandler} type="text" placeholder="Enter User Id" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control name="title" value={this.state.title} onChange={this.changeHandler} type="text" placeholder="Title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="body">
                            <Form.Label>Body</Form.Label>
                            <Form.Control name="body" value={this.state.body} onChange={this.changeHandler} type="text" placeholder="Body" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default PostForm
