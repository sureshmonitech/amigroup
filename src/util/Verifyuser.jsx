import React, { useState } from 'react'
import {formatPhoneNumber} from './formatphoneno'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';





const Verifyuser = () => {

  const {user}=useUser();
  
  const navigate=useNavigate();
  
  //const location = useLocation();
  //const { phone} = location.state; 
 // console.log(user.phone);
  const phone=user.phone;
  const [otpvalue,setOtpvalue]=useState('');
   const [message, setMessage] = useState('');
   const [isOtpSent, setIsOtpSent] = useState(false);   
  //const [otpvalue,setOtpvalue]=useState('');
  const [error, setError] = useState('');

  const [verify, setVerify] = useState('');
  const [isVerify, setIsVerify] = useState(false);   
 //const [otpvalue,setOtpvalue]=useState('');
 const [verifyerror, setVerifyerror] = useState('');


  const [success, setSuccess] = useState('');

  const number=formatPhoneNumber(phone);

  const verifyotphandler=async (e)=>{
    e.preventDefault();  
   
    try {
      //const response = await axios.post('http://localhost/charitable/wp-json/jwt-auth/v1/token', {
          const response = await fetch('http://localhost/charitable/wp-json/wp/v2/users/verifyotp', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  //'Authorization': `Basic ${btoa('admin:password')}`, // Replace with appropriate credentials or remove if using non-authenticated API
              },
              body: JSON.stringify({
                phone,
                otpvalue                    
              }),
          });
      // No need to call response.json() with Axios
    //const data = response.json();
      const data = await response.json();

     
      
      if (data.success) { // Check for successful response
      // setSuccess(data.message);
         setVerify(data.message);

        //setVerify("Otp verified")
        setIsVerify(true);   
     
        
        //navigate('/docbox', { state: {userID: data.custom_data[0] } });
       // navigate('/docbox', { state: {userID: user.user_id} });
        navigate('/docbox');
      } else {
          // Handle errors
          setVerifyerror(data.message || 'otp verify error');
      }
  } catch (error) {
    setVerifyerror('Error OTP verification fail');
  }

  }

  const sendotphandler= async (e)=>{
    
   e.preventDefault();    

    try {
        //const response = await axios.post('http://localhost/charitable/wp-json/jwt-auth/v1/token', {
            const response = await fetch('http://localhost/charitable/wp-json/wp/v2/users/sendotp', {                                          
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': `Basic ${btoa('admin:password')}`, // Replace with appropriate credentials or remove if using non-authenticated API
                },
                body: JSON.stringify({
                  phone                     
                }),
            });
        // No need to call response.json() with Axios
      //const data = response.json();
        const data = await response.json();
        console.log(data);
        if (data.success) { // Check for successful response
        // setSuccess(data.message);
        setMessage(data.message);
      setIsOtpSent(true);
      setSuccess("We've sent an OTP to your Registered Number. Please enter valid OTP to continue");
      
            //navigate('/verify/'.data.custom_data[0].phone)
        
        } else {
            // Handle errors
            setError(data.message || 'otp error');
        }
    } catch (error) {
               setMessage('Error sending OTP');
    }

};
const handleBox=()=>{
  navigate('/docbox');
}

  return (
    <div className="bg-gray-200 max-w-3xl mt-16 my-2 mx-auto pb-2 rounded-xl">
    
    <div className="mx-auto my-10 text-center text-5xl max-w-4xl bg-blue-700 rounded-t-xl text-white py-3">Verification Required</div>
    <p className="text-center text-2xl">
       To help protect your security, we need to confirm it's you by sending an SMS Verification code 
    </p>

    <div className="my-5 max-w-sm mx-auto">
                <label htmlFor="phone" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Phone Number</label>
                {/* <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value=""
                id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            */}
            <div className="block mb-2 text-lg font-medium text-gray-400 dark:text-white">{number}</div>

           
      </div>
      

      
      <div className="my-2 max-w-sm mx-auto flex">
      <button onClick={sendotphandler} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  rounded-lg  text-sm  sm:w-auto px-20 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Otp</button>               
      {
       message ? (
               <p className="text-center text-2xl mx-2" style={{ color: 'green'}} dangerouslySetInnerHTML={{ __html: message }} />
            ):(
               <p className="text-center text-2xl mx-2" style={{ color: 'red'}} dangerouslySetInnerHTML={{ __html: error }} />
            )
       }     
      </div>

    

        {isOtpSent && (        
           <div className="mb-5 max-w-sm mx-auto">  
                  <label htmlFor="enterotp" className=" text-center text-1xl block mb-2 font-medium text-gray-600 dark:text-white">{success}</label>
                          
                <input type="text" value={otpvalue}
                onChange={(e) => setOtpvalue(e.target.value)}
                placeholder="Your OTP"
                id="otptext" className="border border-gray-500 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  
                <button onClick={verifyotphandler} className="text-white my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  rounded-lg  text-sm  sm:w-auto px-20 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Verify</button>               
                {
       isVerify ? (
               <p className="text-center text-2xl mx-2" style={{ color: 'green'}} dangerouslySetInnerHTML={{ __html: verify }} />
            ):(
               <p className="text-center text-2xl mx-2" style={{ color: 'red'}} dangerouslySetInnerHTML={{ __html: verifyerror }} />
            )
       }     
            </div>               
                )}  


             <button onClick={handleBox}>docbox</button> 
      
    </div>
  )
}

export default Verifyuser




