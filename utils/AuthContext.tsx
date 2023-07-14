import  {createContext, useState, useEffect, useContext, ReactNode} from "react"

//create custom hook so you can access data in a cleaner way here
const AuthContext =  createContext<boolean | null>(null)
 
export const AuthProvider : React.FC<{ children: ReactNode }>= ({children }) => {

    const [loading, isloading] = useState(true)
    const [user, setUser] = useState<boolean | null>(false)

    useEffect (() => {
        isloading(false)
    }, [])
    

    const contextData = user
    return <AuthContext.Provider value = {contextData}>
                {loading ? <p> Loading... </p>  : children}
        </AuthContext.Provider>

}

// allows us to hook into state of contextProvider ans use contecData without having to usecontext hook
export const useAuth = () => {return useContext(AuthContext)}

export default AuthContext

