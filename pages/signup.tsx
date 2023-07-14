import useAuth from "@/context/useAuth";
import Router from "next/navigation"
import React from "react";
import Signup from "@/components/ui/signup";
import { useRouter } from "next/router";

const SignupPage = () => {
    const router = useRouter()
    const {authStatus} = useAuth()

    if (authStatus) {
        router.replace("/room")
        return <></>
    }
    return (
    
        <section className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <Signup />
        </section>
    
    )
}


//  import { Client, Databases, Account, ID } from 'appwrite';

// export const PROJECT_ID = '649e0c27a73447533bf2'
// export const DATABASE_ID = '649e8e920f757143fc0d'
// export const COLLECTION_ID_MESSAGES =  '649e8eba83ba94fd99ce'

// type CreateUserAccount = {
//     email: string,
//     password: string,
//     name: string,
// }

// type LoginUserAccount = {
//     email: string,
//     password: string,
// }


//  const client = new Client();
//  const account = new Account(client)


//  //remeber to hide this in environmental variable
// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('649e0c27a73447533bf2');

//  export const databases = new Databases(client);
//  export  { account}

//  export class AppwriteService {
//     //create a new record of user inside appwrite
//     async createUserAccount({email, password, name}: CreateUserAccount) {
//         try {
//             const userAccount = await account.create(ID.unique(), email, password, name)
//             if (userAccount) {
//                 return this.login({email, password})
//             } else {
//                 return userAccount
//             }    
//         } catch (error:any) {
//             throw error
//         }

    
//     }

//     async login( { email, password }: LoginUserAccount) {
//        try {
//             return await account.createEmailSession(email, password)
//        } catch (error:any) {
//          throw error
//        }
//     }

//     async isLoggedIn(): Promise<boolean> {
//         try {
//             const data = await this.getCurrentUser();
//             return Boolean(data)
//         } catch (error) {}

//         return false
//     }

//     async getCurrentUser() {
//         try {
//             return account.get()
//         } catch (error) {
//             console.log("getcurrentUser error: " + error)
            
//         }

//         return null
//     }

//     async logout() {
//         try {
//             return await account.deleteSession("current")
//         } catch (error) {
//             console.log("logout error: " + error)
//         }
//     }

    
// }

// const appwriteService = new AppwriteService()

// export default appwriteService