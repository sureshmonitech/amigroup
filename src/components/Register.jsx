import React, { useState } from 'react';
//import { useUserContext } from '../context/UserContext';

const Register = () => {

    //const { login } = useUserContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
   
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        
      //  const userData={username,phone,email};
      //  login(userData);

        try {
            const response = await fetch('http://localhost/charitable/wp-json/wp/v2/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': `Basic ${btoa('admin:password')}`, // Replace with appropriate credentials or remove if using non-authenticated API
                },
                body: JSON.stringify({
                    username,
                    password,
                    phone,
                    email
                }),
            });
            const data = await response.json();

            if (response.ok) {
                // Handle successful registration
                setSuccess('Registration successful!');
                console.log('Registration successful:', data);
            } else {
                // Handle errors
                setError(data.message || 'Registration failed');
                console.error('Registration failed:', data);
            }
        } catch (error) {
            setError('Network error');
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className="my-10 text-center text-5xl text-emerald-400">New user Registeration</div>
        
            <form onSubmit={handleRegister} className="max-w-sm mx-auto">               

            <div className="mb-5">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                <input type="text" value={username}
                onChange={(e) => setUsername(e.target.value)}                
                id="username" name="username"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                
                id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required />
            </div>

            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>


            <div className="mb-5">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                <input type="tel" value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91-xxxxxxxxxxx"
                id="phone" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div className="flex items-start mb-5">
                <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>                

 
            <button type="submit" name="register" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            {error && (
                    <p style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: error }} />
                )}
                {success && <p style={{ color: 'green' }}>{success}</p>}
      </form>



        </>
    );
};

export default Register;