import {createContext, useContext} from "react";

const AuthContext = createContext(null);

export function AuthContextProvider({children}) {
    const member  = JSON.parse(localStorage.getItem('member'));

    return <AuthContext.Provider value={member}>
        {children}
    </AuthContext.Provider>
}

export function useAuthContext() {
    return useContext(AuthContext);
}