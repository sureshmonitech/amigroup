import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { MdOutlineFileUpload } from "react-icons/md";
import DragComponent from './dragdrop/DragComponent';

const Uploadfile = () => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async (e) => {
        console.log("wel")
        if (!file) {
            alert("Please select a file.");
            return;
        }

        setUploading(true);

        // Create a new FormData object and append the file
        const formData = new FormData();
        formData.append('file', file);
        console.log("1")
        try {
            const res = await fetch('http://localhost/charitable/wp-json/wp/v2/users/upload', {
                method: 'POST',
                body: formData,
                headers: {
                    //'Content-Type': 'application/json',
                    //  'Content-Type': 'multipart/form-data'
                    //'Authorization': 'Bearer ' + 'YOUR_JWT_TOKEN' // Optional: Add authentication token if needed
                }
            });
          
            const data = await res.json();
           
            if (res.ok) {
                setUploading(true)
                setResponse(`File uploaded successfully! URL: ${data.data.url}`);
            } else {
                setResponse(`Error: ${data.message}`);
            }
        } catch (err) {
            console.log(err);
            setResponse('Error uploading file');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="flex justify-center flex-col">            
            
            <div className="mb-5">               
                <input type="file" onChange={handleFileChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>     
          
            <button  onClick={handleUpload} disabled={uploading} className="w-48 rounded py-1 bg-blue-700 text-center text-white text-2xl flex justify-center align-middle">
                
                
                <MdOutlineFileUpload className="text-3xl"/>  {uploading ? 'Uploading...' : '  Upload File'}
                
                </button>
    
            {response && <p>{response}</p>}
        </div>
    );
};


export default Uploadfile;
