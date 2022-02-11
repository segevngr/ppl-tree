import React, {useState} from 'react';
import './UserIcon.css'

const UserIcon = ({user}) => {
    const [photoLoaded, setPhotoLoaded] = useState(false);

    const getInitials = () => {
        return user.firstName.charAt(0) + user.lastName.charAt(0);
    }

    return (
        <div>
            {user.photo &&
            <img src={user.photo} className="photo" alt=''
                 onLoad={() => setPhotoLoaded(true)}
                 style={photoLoaded ? {} : {display: 'none'}}/>
            }
            {(!user.photo || !photoLoaded) &&
            <div className="initials">{getInitials()}</div>}
        </div>
    );
}

export default UserIcon;