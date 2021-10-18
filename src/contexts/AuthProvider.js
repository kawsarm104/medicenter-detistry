import React, { createContext } from 'react';
// import useCourses from '../Hooks/useCourses';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    // const allCourse = useCourses()
    return (
        // <AuthContext.Provider value={{allContext,allCourse}}>
         <AuthContext.Provider value={allContext}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;