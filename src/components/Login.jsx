// src/Login.js
import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";
import { useUser } from '../context/UserContext';

const Login = () => {

 
    const { setUserData } = useUser();

   
    const navigate=useNavigate();
  //  const [email, setEmail] = useState('');
     const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    //const history = useHistory();
    //const navigate = useNavigate(); // useNavigate replaces useHistory
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

 
        //const userData={username};
        //login(userData);       
      
        try {
            //const response = await axios.post('http://localhost/charitable/wp-json/jwt-auth/v1/token', {
                const response = await fetch('http://localhost/charitable/wp-json/wp/v2/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        //'Authorization': `Basic ${btoa('admin:password')}`, // Replace with appropriate credentials or remove if using non-authenticated API
                    },
                    body: JSON.stringify({
                        username,
                        password                        
                    }),
                });

              
            // No need to call response.json() with Axios
          //const data = response.json();
            const data = await response.json();
         
            if (data.success) { // Check for successful response
                //const phoneNumber = data.custom_data[0].phone;                  
                 setUserData(data.custom_data[0]);          

                localStorage.setItem('token', data.token); // Store token for future requests
                setSuccess(data.message);
               
                //navigate('/docbox');
                //navigate('/verify', { state: { phone: phoneNumber, user: data.id } });
                navigate('/verify');

            } else {
                // Handle errors
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            setError('Network error');
            console.error('Error:', error);
        }

    };

    return (
        <div>
            <div className="my-10 text-center text-5xl text-emerald-400">Sign In</div>
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">            

           
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              {/*  <input type="text" value={email}
                onChange={(e) => setEmail(e.target.value)}   
                id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required />
            */}
              <input
                    type="text" autoComplete="current-username"
                    value={username} id="username" name="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="email" />
                </div>

            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                id="password" name="password"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
                
                <button type="submit" name="login"className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>               
               
                {error && (
                    <p style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: error }} />
                )}


                {success && <p style={{ color: 'green' }}>{success}</p>}
            </form>
        </div>
    );
};

export default Login;
