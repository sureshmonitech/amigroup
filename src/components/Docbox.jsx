import React, { useState } from 'react'
//import DragComponent from './dragdrop/DragComponent'
import ApplicationStatus from './ApplicationStatus'
import AdditionalNote from './AdditionalNote';

//import CustomDragDrop from './dragdrop/CustomContainer';
import Progress from './Progress'
import {CustomDragDrop} from './dragdrop/CustomContainer'
import {useNavigate } from 'react-router-dom';


import { useUser } from '../context/UserContext';

const Docbox = () => {
    const {user,documentCategorised,isDocumentCategorised,isDocumentUploaded,documentUploaded}=useUser();
const navigate=useNavigate()

//const [isDocumentUploaded,setIsDocumentUploaded]=useState(false);
    
    //const location = useLocation();
    //const {userID} = location.state; 

   
   // const [isDocumentUploaded,setIsDocumentUploaded]=useState(true);
   // const [isDocumentCategorised,setIsDocumentCategorised]=useState(false);


   //console.log(user);

  // const userID=24;

    const [uploading, setUploading] = useState(false);
    const [response, setResponse] = useState(null);  

    const [ownerLicense, setOwnerLicense] = useState([]);

    const handlecategorise=()=>{
        navigate('/progress',{ state: {userID:user.user_id } });
       }

  function uploadFiles(f) {
    setOwnerLicense([...ownerLicense, ...f]);
  }

  function deleteFile(indexImg) {
    const updatedList = ownerLicense.filter((ele, index) => index !== indexImg);
    setOwnerLicense(updatedList);
  }

  //api call  
 
  const handleUpload = async (e) => {  
    setUploading(true);  
    try{
        const res = await fetch('http://localhost/charitable/wp-json/wp/v2/users/upload', {
            method: 'POST',
            body: JSON.stringify(ownerLicense),
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'multipart/form-data'
                //'Authorization': 'Bearer ' + 'YOUR_JWT_TOKEN' // Optional: Add authentication token if needed
            }
        });

        const data = await res.json();
              
        if (res.ok) {
            setUploading(true)
            documentUploaded(true)
            documentCategorised(false)
            setResponse("File uploaded successfully!");
        } else {
            setResponse(`Error: ${data.message}`);
        }
    }
    catch(err){
        console.log(err);
        setResponse('Error save files');
    }
    finally {
        setUploading(false);
    }
  }


  return (
    <div className="w-[90%] bg-gray-200 m-auto">
        <div className="text-black text-[32px] font-[800] px-4 my-2">
            DocBox
        </div>
        <div className="text-[18px] font-[400] px-2 my-2">
            Your tool  for submitting client's application documents easily and hassle-free.
        </div>

        <div className="bg-red-200 flex gap-2">

            <div className="w-[65%]">                

                <div className="flex my-4 py-2 justify-center items-center px-5 bg-slate-400">
                    <div className="bg-white shadow rounded-lg w-full px-5 pt-3 pb-5">
                        <div className="pb-[8px] border-b border-[#e0e0e0]">
                            <h2 className="text-black text-[28px] font-[600]">
                            Upload Documents
                            </h2>
                            <p>Drag and drop your documents or click 'Choose files' to upload. Make sure you an acceptable file type.</p>
                        </div>
                        <CustomDragDrop
                            ownerLicense={ownerLicense}
                            onUpload={uploadFiles}
                            onDelete={deleteFile} 
                            id={user.user_id}
                            count={10}      
                            formats={["jpg", "jpeg", "png"]}
                        />
                    </div>                 
                </div>

                <div className="flex my-4 py-2 justify-center items-center px-5 bg-slate-400">
                <AdditionalNote/>
                </div>                

            </div>

            <div className="w-[35%] bg-gray-600 px-2 py-2 ">   
                 <div className="bg-white shadow rounded-lg w-full px-5 pt-3 pb-5 my-3">                    
                    <ApplicationStatus/>               

                </div>     
             
                    
                <div className="bg-white shadow rounded-lg w-full px-5 pt-3 pb-5 my-3">   
                                  
                <Progress
                isDocumentUploaded={isDocumentUploaded}
                isDocumentCategorised={isDocumentCategorised}
               />
              
              <div className="px-2 py-2">
                            <button  onClick={handleUpload} disabled={uploading} className="w-full border-[1px] border-solid border-black rounded-3xl bg-white place-items-center py-2">
                                <p className="text-3xl">  {uploading ? 'saving...' : '  Save and exit'}    </p>           
                                </button>    
                                {response && <p className="text-red-600">{response}</p>}
                        </div> 

                        <div className="px-2 py-2 flex justify-center items-center">
                            <button  onClick={handlecategorise} disabled={uploading} className="w-full border-[1px] border-solid border-black rounded-3xl bg-white place-items-center py-2">
                                <p className="text-3xl">  {uploading ? 'DocCategorising...' : 'DocCategorise'}    </p>           
                                </button>    
                               
                        </div>       
               
                </div>

   
      
            </div> 
    </div>

    
</div>
  )
}

export default Docbox
