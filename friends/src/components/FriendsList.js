import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

function FriendsList() {
    const [friends, setFriends] = useState({
        id: '',
        name:'',
        age:'',
        email:''
    })

    const handleChanges = e => {
        setFriends({
            ...friends,
            [e.target.name]: e.target.value
        })
    }


const addFriend = e => {
    axiosWithAuth()
    .get('/friends', friends)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}

    
    return (
        <div>
            <form onSubmit={addFriend}>
                <input
                type="text"
                placeholder="name"
                name="name"
                onChange={handleChanges}
                />

                <input
                type="text"
                placeholder="age"
                name="age"
                onChange={handleChanges}
                />

                <input
                type="text"
                placeholder="email"
                name="email"
                onChange={handleChanges}
                />
                <button type="submit">Add Friend</button>
            </form>

        

            <div>
                {friends.map(friend => {
                    return (
                        <div>
                            <h3>{friend.name}</h3>
                        </div>    
                    )
                })}
            </div>

        </div>
    )
}

export default FriendsList
