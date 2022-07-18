import React, { useContext } from "react";
import { UserContext } from "../context/GlobalState";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const UserList = () => {
    const { users, removeUser } = useContext(UserContext);

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
                                            <Button onClick={() => removeUser(user.id)} color="danger">
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