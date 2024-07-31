import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import '../style.css'

const Profile = (props) => {

    const { user } = useContext(UserContext)

    if (!user) {
        return <h1>Not logged in</h1>
    }

    return (
        <div className="profile-info">
            <h1>Profile : {user.username}</h1>

            <h2>More...!</h2>
        </div>
    )
}

export default Profile