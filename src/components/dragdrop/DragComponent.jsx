import { CustomDragDrop } from "./CustomContainer";
import { useState } from "react";

export default function DragComponent() {

  const [ownerLicense, setOwnerLicense] = useState([]);


  function uploadFiles(f) {
    setOwnerLicense([...ownerLicense, ...f]);
  }

  function deleteFile(indexImg) {
    const updatedList = ownerLicense.filter((ele, index) => index !== indexImg);
    setOwnerLicense(updatedList);
  }

  return (
    <div className="bg-white shadow rounded-lg w-full px-5 pt-3 pb-5">
      <div className="pb-[8px] border-b border-[#e0e0e0]">
        <h2 className="text-black text-[28px] font-[600]">
          Upload Documents
        </h2>
        <p>Drag and drop your documents or click 'Choose files' to upload. Make sure you an acceptable file type.</p>
      </div>
      {/*<CustomDragDrop
        ownerLicense={ownerLicense}
        onUpload={uploadFiles}
        onDelete={deleteFile} 
        
        count={10}      
        formats={["jpg", "jpeg", "png"]}
      />*/}
    </div>
  );
}
