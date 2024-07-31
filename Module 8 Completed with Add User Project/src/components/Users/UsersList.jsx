import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UsersList = (props) => {
    return (
        <div>

            <Card className={classes.users}>
                <ul>
                    {props.users.length === 0 ? <p className={classes.noUser}>No user exist!</p> :

                        props.users.map((user) => (
                            <li key={user.id}>
                                {user.username} ({user.age} years old)
                            </li>
                        ))

                    }
                </ul>

            </Card>

        </div>
    )
}

export default UsersList