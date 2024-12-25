import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';

const UserCard = () =>{
  const [user,SetUser] = useState(null);

  useEffect(()=> {
      axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response)=>{
        SetUser(response.data.results[0]);
      })
    },[]);

  return(
<div className="randomuser">
  {user && (
    <div className="user-card">
      <img src={user.picture.medium} alt="User Profile" />
      <div>
        <h2>{user.name.first} {user.name.last}</h2>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Phone Number:</strong> {user.phone}</p>
      </div>
    </div>
  )}
</div>

  )
}

export default UserCard;
