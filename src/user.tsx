import React, {createContext, useState, useEffect, useContext} from "react"
import {account, PROJECT_ID } from "./appWriteConfig"
import { ID } from "appwrite";

export interface UserState {
    user: {name: string; id: string; email: string} | null
    loading: boolean
    logout: () => Promise<void>
    login: (email:string, password: string) => Promise<void>
    signup: ( name: string, email: string, password: string) => Promise<void>
}

const defaultState: UserState = {
    user: null,
    loading: true,
    logout: async () => {},
    signup: async () => {},
    login: async () => {},

}

const UserContext = createContext<UserState>(defaultState)



export const UserProvider = ({children}:{children :any}) => {
    const [user, setUser] = useState<null | {id:string; email:string; name:string}>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const checkUser = async () => {
            try {
                const {$id,email, name} = await account.get()
                setUser({ id: $id, email, name})
            } catch (error) {
                setUser(null)
            } finally {
                setLoading(false)
            }
        }
        checkUser()
    }, [])  

    const login = async (email:string, password :string) => {
        try{
            await account.createEmailSession(email, password)
            const {$id, name} = await account.get()
            setUser({ id: $id, email, name})
        } catch (error) {
                console.error(error)
            }
    }

    const logout = async () => {
        try {
            await account.deleteSession("current")
            setUser(null)
        } catch (error) {
            console.error(error)
        }
    }
    const signup =  async (name: string, email: string, password: string) => {
        try{ 
            await account.create(ID.unique(), email, password, name )
            await account.createEmailSession(email, password)
            const {$id, name: userName} = await account.get() 
            setUser({ id: $id, email, name })
            } catch (error) {
                    console.error(error)
                }
    }
    return (
        <UserContext.Provider value = {{user, loading,login, logout, signup}}>
            {children}
        </UserContext.Provider>
    )

}
export const useUser = () => useContext(UserContext)