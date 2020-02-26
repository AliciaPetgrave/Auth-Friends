import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

function FriendsList() {
    //friends array
    const [friends, setFriends] = useState([])
    
    //data for new friends
    const [newFriends, setNewFriends] = useState({
        id: Date.now(),
        name: '',
        age: '',
        email: ''
    })

    //handles form changes
    const handleChanges = e => {
        setNewFriends({
            ...newFriends,
            [e.target.name]: e.target.value
        })
    }


//displays current friends
useEffect(() => {
    axiosWithAuth()
    .get('/api/friends', friends)
    .then(response => {
        setFriends(response.data)
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
},[])

//adds new friends
const addFriend = e => {
    e.preventDefault()
    axiosWithAuth()
    .post('/api/friends', newFriends)
    .then(response => {
       console.log(response)
       setFriends(response.data)
    })
    .catch(error => {
        console.log (error)
    })
    setNewFriends({
        name:'',
        age:'',
        email:''
    })
}



    
    return (
        <div>
            <form className="friends-form" onSubmit={addFriend}>
                <input
                type="text"
                placeholder="name"
                name="name"
                onChange={handleChanges}
                value={newFriends.name}
                />

                <input
                type="text"
                placeholder="age"
                name="age"
                onChange={handleChanges}
                value={newFriends.age}
                />

                <input
                type="text"
                placeholder="email"
                name="email"
                onChange={handleChanges}
                value={newFriends.email}
                />
                <button type="submit">Add Friend</button>
            </form>

            <h2>Mis Amigos</h2>

            <div className="friends-div">
                {friends.map(friend => {
                    return (
                        <div className="friend">
                            <h3>{friend.name}</h3>
                            <p><span>Age:</span> {friend.age}</p>
                            <p><span>Email:</span> {friend.email}</p>
                        </div>    
                    )
                })}
            </div>

        </div>
    )
}

export default FriendsList
