import React from 'react'

const AdditionalNote = () => {
  return (
    <div className="bg-white shadow rounded-lg w-full px-5 pt-3 pb-5">
        <div className="pb-[8px] border-b border-[#e0e0e0]">
        <h2 className="text-black text-[28px] font-[600]">
            Additional Notes (optional)
        </h2>
        <p>If you have any comments about the documents you have uploaded above,you can let us know here..</p>
        </div>
        <div className="col-span-full">            
        
          <div className="mt-2">
            <textarea id="comment_txt" name="comment_txt" rows="5" placeholder=" Comments here" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"></textarea>
          </div>


      </div>
        
  </div>
  )
}

export default AdditionalNote
