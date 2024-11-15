import React from 'react'

const Progress = ({    
  isDocumentUploaded,
  isDocumentCategorised

}) => {

   // const [isDocumentUploaded,setIsDocumentUploaded]=useState(true);
    //const [isDocumentCategorised,setIsDocumentCategorised]=useState(false);

  return (
        <div>
                <h2 className="text-black text-[28px] font-[600] pb-[8px] border-b border-[#e0e0e0]">
                Document Submission Progress
                </h2>             
            
                        <div class="checkbox-item flex items-center me-4">
                          <input type="checkbox"
                            class="rounded-checkbox" checked={isDocumentUploaded}
                            id="checkbox"/>
                            <label for="checkbox">Upload documents</label>                        
                        </div>
            
                        <div class="checkbox-item flex items-center me-4">
                         <input type="checkbox"
                            class="rounded-checkbox" checked={isDocumentCategorised}
                            id="checkbox" />
                            <label for="checkbox"> Categorise and submit documents</label>
                        </div>                    


                           
                    </div>


                      
    
  )
}

export default Progress
