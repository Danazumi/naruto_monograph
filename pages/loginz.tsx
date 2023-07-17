import React, {useState} from "react"
import {useUser} from "@/src/user"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Room from "./room"


export default function Loginz () {
    //destructure loading and user  
    const {loading, user} = useUser()

    if (loading) {
        return <p>Loading ....</p>
    }
    return  (
            <div>
                {user && (
                    <Room />
                )}
                
                {!user && (
                  <>
                <Login/>
    
                <SignUp/>
                  </>
                )}
    
            </div>
    )
}
const Login  = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login}  = useUser()
    
    const handleLogin = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        await login(email, password)
    }
    

    return (
        <form onSubmit  = {handleLogin} className="text-white rounded-md  w-[20rem] outline-none  max-sm:text-xs mt-12">
             <div className="ml-8 gap-3 grid">
                <Input 
                type = "email"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                className="text-black"
                
                />

                <Input 
                    type = "password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    className = "text-black "
                />

                <Button type = "submit"
                >Login</Button>
             </div>

        </form>
    )

}

const Logout = () => {
        const {logout} = useUser()
        const handleLogout = async () => {
            await logout()
        }

        return (
            <Button onClick = {handleLogout}>Logout</Button>
        )
        
    }

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {signup}  = useUser()
    
    const handleSignUp= async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        await signup(name,email, password)
    }
    

    return (
        <form onSubmit  = {handleSignUp} className="text-white rounded-md   outline-none w-[20rem] max-sm:text-xs pt-20">
            <div className="ml-8 gap-3 grid">

            <Input 
            type = "name"
            value = {name}
            onChange = {(e) => setName(e.target.value)}
            className = "text-black "
            />

            <Input 
            type = "email"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            className = "text-black "
            />

            <Input 
                type = "password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                className = "text-black "
            />

            <Button type = "submit"
            >Signup</Button>
            </div>

        </form>
    )

}

