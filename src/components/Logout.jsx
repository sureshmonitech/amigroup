import React from 'react'
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const {user,clearUserData}=useUser();
  const navigate=useNavigate();
  const handleLogout=()=>{
        clearUserData();
        navigate('/signin') 
    }

  return (
    <div>
        <p>{user.phone}{user.id}</p>
      <button onClick={handleLogout}>submit</button>
    </div>
  )
}

export default Logout
