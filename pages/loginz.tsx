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
                  <div  className="flex flex-col items-center">
                <Login/>
    
                <SignUp/>
                  </div>
                )}
    
            </div>
    )
}
const Login  = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorword, setErrorWord] = useState("")
    const {login}  = useUser()
    
    const handleLogin = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        try {
            await login(email, password)
             setEmail("")
             setPassword("")
        } catch (error) {
            setErrorWord("Invalid email or password")
            console.error(errorword)
            // console.error(error)
        }
    }
    

    return (
        <form onSubmit  = {handleLogin} className="text-white rounded-md  w-[20rem] outline-none  max-sm:text-xs mt-12">
             <div className="ml-8 gap-5 grid">
                 <h1 className="scroll-m-20 text-xl font-semibold tracking-tight text-black text-center ">Login</h1>
                
                <Input 
                type = "email"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                className="text-black"
                placeholder="Email address"
                
                />
                  
                <Input 
                    type = "password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    className = "text-black"
                    placeholder="Password"
                />

                <Button type = "submit"
                >Login</Button>
                {errorword && <p className="text-black">Error: {errorword}</p>}

            
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
             <h1 className="scroll-m-20 text-xl font-semibold tracking-tight text-black text-center ">Signup</h1>
            <Input 
            type = "name"
            value = {name}
            onChange = {(e) => setName(e.target.value)}
            className = "text-black "
            placeholder="Enter your name here"
            />

            <Input 
            type = "email"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            className = "text-black "
            placeholder="Email address"
            />

            <Input 
                type = "password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                className = "text-black "
                placeholder="Password"
            />

            <Button type = "submit"
            >Signup</Button>
            </div>

        </form>
    )

}

