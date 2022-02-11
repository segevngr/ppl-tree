import React, {useEffect, useState} from 'react';
import './User.css'

const User = ({user, usersList, level}) => {
    const [employees, setEmployees] = useState([]);
    const [photoLoaded, setPhotoLoaded] = useState(false);

    useEffect(() => {
        getEmployees();
    }, [user]);

    const getEmployees = () => {
        setEmployees(usersList.filter(employee => {
            return employee.managerId === user.id;
        }))
    }


    return (
        <div>
            <div className="user">
                <div className="operator">{employees.length > 0 ? '+' : '-'}</div>
                {user.photo &&
                <img style={photoLoaded ? {} : {display: 'none'}} src={user.photo}
                     className="photo" onLoad={() => setPhotoLoaded(true)} alt=''/>}
                {(!user.photo || !photoLoaded) &&
                <div className="initials">{user.firstName.charAt(0) + user.lastName.charAt(0)}</div>}
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