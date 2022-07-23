import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

function EmployeeForm(){
    const [enteredId, setId] = useState('');
    const [enteredName, setName] = useState('');
    const [enteredDept, setDept] = useState('');
    const [enteredCountry, setCountry] = useState('');

    const IdChangeHandler = (event) => {
        setId(event.target.value);
    }

    const NameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const DeptChangeHandler = (event) => {
        setDept(event.target.value);
    }

    const CountryChangeHandler = (event) => {
        setCountry(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        setId('');
        setName('');
        setDept('');
        setCountry('');

        return alert('Entered Values are: '+enteredId+','+ enteredName +','+enteredDept + ',' + enteredCountry)
    }

    return (
        <Alert variant='primary'>
        <Container>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="employeeId">
                    <Form.Label>Id </Form.Label>
                    <Form.Control type="number" value={enteredId} onChange={IdChangeHandler} placeholder="Enter Id" required/>
                </Form.Group>

                <Form.Group controlId="employeeName">
                    <Form.Label> Employee Name </Form.Label>
                    <Form.Control type="text" value={enteredName} onChange={NameChangeHandler} placeholder="Enter employee name" required/>
                </Form.Group>

                <Form.Group controlId="department">
                    <Form.Label>Department </Form.Label>
                    <Form.Control type="text" value={enteredDept} onChange={DeptChangeHandler} placeholder="Enter Department" required/>
                </Form.Group>

                <Form.Group controlId="country">
                    <Form.Label>Country </Form.Label>
                    <Form.Control type="text" value={enteredCountry} onChange={CountryChangeHandler} placeholder="Enter Country" required/>
                </Form.Group>
                <Button type='submit'>Add Employee</Button>
            </Form>
        </Container>
        </Alert>
    );
}


export default EmployeeForm;