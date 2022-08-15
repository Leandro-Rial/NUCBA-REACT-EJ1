import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../actions/todoActions";

const UserList = () => {
    const users = useSelector(state => state.todo.users);
    
    const dispatch = useDispatch();

    return (
        <div style={{ maxHeight: 'calc(100vh - 226px)' }}>
            <ListGroup className="mt-4 card-list">
                {
                    users.length > 0
                    ?   <>
                            {
                                users.map((user) => (
                                    <ListGroupItem className="list" key={user.id}>
                                        <strong>{user.name}</strong>
                                        <div className="ml-auto">
                                            <Button onClick={() => dispatch(removeUser(user.id))} color="danger">
                                                Delete
                                            </Button>
                                        </div>
                                    </ListGroupItem>
                                ))
                            }
                        </>
                    :   <h3 className="text-center">No Users</h3>
                }
            </ListGroup>
        </div>
    );
};

export default UserList;