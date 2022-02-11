import React, {useEffect, useState} from 'react';
import './User.css'
import UserIcon from "./UserIcon";

const User = ({user, usersList, level}) => {
    const [employees, setEmployees] = useState([]);
    const [photoLoaded, setPhotoLoaded] = useState(false);

    useEffect(() => {
        findEmployees();
    }, [user]);

    const findEmployees = () => {
        setEmployees(usersList.filter(employee => {
            return employee.managerId === user.id;
        }))
    }

    const getInitials = () => {
        return user.firstName.charAt(0) + user.lastName.charAt(0);
    }

    return (
        <div>
            <div className="user">
                <div className="sign">{employees.length > 0 ? '+' : '-'}</div>
                <UserIcon user={user}/>
                <div className="name">{user.firstName + ' ' + user.lastName}</div>
                <div className="email">{user.email}</div>
            </div>
            <div style={{marginLeft: `${level}cm`}}>
                {employees.map((employee) => {
                    return (
                        <User
                            user={employee}
                            usersList={usersList}
                            level={level + 1}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default User;