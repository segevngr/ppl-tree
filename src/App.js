import './App.css';
import axios from "axios";
import React, {useState, useEffect} from 'react';
import User from "./components/User";

function App() {
    const [usersList, setUsersList] = useState([]);
    const [rootUsers, setRootUsers] = useState([]);


    useEffect(() => {
        axios.get(`https://gongfetest.firebaseio.com/.json`).then(response => {
            setUsersList(response.data.users);
        });
    }, []);

    useEffect(() => {
        getRootUsers()
    }, [usersList]);

    const getRootUsers = () => {
        setRootUsers(usersList.filter(user => {
            return !user.managerId;
        }))
    }

    return (
        <div className="container">
            <h1>Hierarchy Tree</h1>
            {rootUsers.map((user) => {
                return (
                    <User
                        user={user}
                        usersList={usersList}
                        level={0}
                    />
                );
            })}
        </div>
    );
}

export default App;
