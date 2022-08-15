
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addUser } from '../actions/todoActions';
import {
    Navbar,
    Form,
    Input,
    Button
} from 'reactstrap'
import { v4 as uuid } from 'uuid'

const Heading = () => {
    const [name, setName] = useState('');

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const newUser = {
            id: uuid(),
            name
        }

        dispatch(addUser(newUser))

        setName('')
    }

    return (
        <Navbar color="dark" dark>
            <Form className="heading" onSubmit={handleSubmitForm}>
                <Input
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    className="input"
                    required
                />
                <div className="header-inputs">
                    <Button
                        type="submit"
                        className={ name ? 'btn-submit btn-short' : "btn-submit" }
                    >
                        Submit
                    </Button>
                    {
                        name && <Button
                                    type="button"
                                    color="danger"
                                    className='btn-delete-header'
                                    onClick={() => setName('')}
                                >
                                    Cancel
                                </Button>
                    }
                </div>
            </Form>
        </Navbar>
    )
}

export default Heading