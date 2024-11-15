import React, { useEffect,useState} from 'react'
import SelectOption from './SelectOption';
import ApplicationStatus from './ApplicationStatus'
import { CiCircleAlert } from "react-icons/ci";
import Progress from './Progress'

import { useUser } from '../context/UserContext';

const DocumentCategorise = () => { 
    const [upLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);    
    
const {user,documentCategorised,isDocumentCategorised,isDocumentUploaded}=useUser();

console.log(user.id)
console.log(user.user_id)
const handleDocCategorise=()=>{
    
    documentCategorised(true)
}

useEffect(()=>{
    const fetchuserfile=async()=>{

        try{

        const response= await fetch('http://localhost/charitable/wp-json/wp/v2/users/doccategorise',{
            method:'POST',
            header:{
                    'Content-Type': 'application/json',
            },
            body:{
                user:user.user_id
            }

         });
      
      
        if(response.ok){

        }
        else{

        }
    }
    catch (error) {
        setError(error.message);  // Set error state if API call fails
        setLoading(false);  // Stop loading state
    }
}

        fetchuserfile();
    
},[])

  return (
    <div className="w-[90%] bg-gray-200 m-auto">
       <div className="text-black text-[32px] font-[800] px-4 my-2">
            DocBox
        </div>
        <div className="text-[18px] font-[400] px-2 my-2">
            Your tool  for submitting client's application documents easily and hassle-free.
        </div>

    <div className="bg-white flex gap-2">

        <div className="w-[65%]">                

            <div className="flex justify-center items-center mx-3">
                <div className="">
                    <div className="pb-[8px] border-b border-[#e0e0e0] my-2">
                        <h2 className="text-black text-[28px] font-[600]">
                        Documents to be categorised
                        </h2>
                        <p>Please categorise your files by selecting the relevant document type from the dropdown.</p>

                    </div> 
                    <div className="flex justify-center items-center py-5 text-[18px] bg-white shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] rounded-lg w-full">
                        <div className="text-6xl bg-white text-black px-2">
                        <CiCircleAlert className="text-blue-600"/>
                        </div>
                        <div className="w-full">
                            <h3 className="font-bold text-1xl py-1">Please Note:</h3>
                        The below document need to be categorised into document types before you can submit this application.please select the document type from the drop downs below.
                        </div>
                    </div>  

                    <div className="pt-[8px] my-4">
                     
                     <table class="table-fixed w-full">
                            <thead className="text-left bg-gray-300">
                                <tr>
                                <th scope="col" className="px-6 py-3 w-2/4">Document Name</th>
                                <th class="text-[18px] place-content-start p-3 w-1/4">Document Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border border-b border-slate-300">
                                    <td class="px-4 py-2 text-[18px] ">chennai document sgeferyhrt wetge</td>
                                    <td class="px-2 py-2 text-[18px]"><SelectOption/></td>                            
                                </tr>
                                <tr className="border border-b border-slate-300">
                                    <td class="px-4 py-2 text-[18px] ">chennai document sgeferyhrt wetge</td>
                                    <td class="px-2 py-2 text-[18px]"><SelectOption/></td>                            
                                </tr>
                            </tbody>                        
                        </table>
                    </div>        
                </div>                 
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
               
                </div>  
            
            

        </div> 
    </div>
    
    <div className="px-2 py-2 flex justify-center items-center">
            <button onClick={handleDocCategorise} className="text-white font-bold w-[250px]  rounded-3xl bg-blue-700 place-items-center py-2">
                Submit Application
            </button>    
                                
    </div> 

</div>
  )
}

export default DocumentCategorise
