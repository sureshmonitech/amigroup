import { createContext, useContext, useState } from 'react';


const MyContext =createContext();


export const useUser = () => {
    return useContext(MyContext);
};


export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    const [isDocumentCategorised, setIsDocumentCategorised] = useState(false);
    const [isDocumentUploaded, setIsDocumentUploaded] = useState(false);
    
    const setUserData = (userData) => {
        setUser(userData); // Set user data
    };

    const clearUserData = () => {
        setUser(null); // Clear user data (for logout)
        
    };

    const documentUploaded = (isuploaded) => {
        setIsDocumentUploaded(isuploaded); // Clear user data (for logout)
        
    }; 
    const documentCategorised = (iscategorises) => {
        setIsDocumentCategorised(iscategorises); // Clear user data (for logout)
        
    };   

    return (
        <MyContext.Provider value={{ user, setUserData, clearUserData,documentCategorised,isDocumentCategorised,isDocumentUploaded,documentUploaded}}>
            {children}
        </MyContext.Provider>
    );
};

