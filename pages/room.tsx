import React, { useState, useEffect } from "react"
import   appwriteService, { databases, DATABASE_ID, COLLECTION_ID_MESSAGES } from "@/src/appWriteConfig"
import { Models , ID, Query, Role, Permission, } from "appwrite";
import { Textarea } from "@/components/ui/textarea";
import {  Trash2  } from "lucide-react";
import { Button } from "@/components/ui/button";
import {useUser} from "@/src/user"
import PaperPlane from "@/public/images/paperPlane";
import { useRouter } from 'next/router'
import { deleteCookie } from 'cookies-next';
import { useRef } from "react";

// import  client, { databases, DATABASE_ID, COLLECTION_ID_MESSAGES } from "@/src/appWriteConfig"




// interface User {
    
//     isLoaded: boolean
//     isSignedIn : boolean
//     user : [id: string,
//   firstname: string,
//   lastname: string]
// }

const Room = () => {
    const [messages, setMessages] = useState<Models.Document[]>([])
    const [mezzBody, setMezzBody] = useState('')
    const {loading, user} = useUser()
    const router = useRouter()
     const messageRef = useRef<HTMLDivElement>(null);
   
  
    

    useEffect(() => { 
           if (!loading && !user){
            router.push("/loginz")
            }

        getMessages()

        //listen for events with the message collection
        //set unsub to thr retrun val of sub then call unsub

        const unsub = appwriteService.client.subscribe(`databases.${DATABASE_ID}.collections.${COLLECTION_ID_MESSAGES }.documents`,  (response: any) => {
        // Callback will be executed on changes for documents A and all files.
        
        //Add condition that listens 2 events
        // listen for creating event
        if (response.events.includes("databases.*.collections.*.documents.*.create")){
                console.log('Message was created')
                setMessages(prev => [response.payload, ...prev])

        }
        // console.log('real-time:',response);
        if (response.events.includes("databases.*.collections.*.documents.*.delete")){
                console.log('Message was deleted')
                //get id of the message here from payload
                setMessages(prev => prev.filter(messages => messages.$id !== response.payload.$id))
        } 
    
    });

    //clean up function 
    return () => {
        unsub()
    }
 
    }, [loading, user ,router])


   

    // create a message 
    const getSubmit = async (e: any) => {
        e.preventDefault()

        //set payload
        let payload = {
            user_id : user?.id,
            username : user?.name,   
            body: mezzBody   //set the messagebody w state
            
        }


        
        let permissions = [Permission.write(Role.user(String(user?.id)))]

        let  response = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID_MESSAGES,
            ID.unique(),
            payload, 
            permissions
        )
        console.log("Marked_up:", response)
        
        // update messages array with response object
        //Allows message to display below when it is sent
        // setMessages(prev => [response.payload, ...prev] )
        setMezzBody('')
         
    }


    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    //  useEffect(() => {
    //     messageRef.current?.scrollIntoView()

    // }, [messages])


    const getMessages = async () => {
        const response =  await databases.listDocuments(
            DATABASE_ID, 
            COLLECTION_ID_MESSAGES,
            [
                Query.orderDesc("$createdAt")
            ])
        console.log("RESPONSE", response)
        setMessages(response.documents)

    
    
    }


    //document  ==  message we want to deletex
    const deleteMessage = async (message_id: any) => {
        databases.deleteDocument(DATABASE_ID, COLLECTION_ID_MESSAGES, message_id);
        
        //update the messages array:
        // setMessages(prev => messages.filter(messages => messages.$id !== message_id))

    }
    return (

        <main className="" >
          
            {/* div className="mb-20 " */}
             
                 
            {/* messages container */}

            <div className="p-8 border rounded- bg-gray-900  min-h-screen  ">
            <Logout />
            <div className="mb-20 flex flex-col-reverse "> 
                {messages.map( messages => (
                    <div key = {messages.$id} className="flex flex-wrap flex-col gap-2 m-4 ">
                        <div className="flex justify-between items-center">
                            <p className="text-white">
                                {/* {user?.firstName} */}
                                {messages?.username ?   (
                                    <span>{messages.username}</span>
                                ) : ( 
                                    <span>Anonymous user</span>
                                )}
                                <small className="ml-[0.75rem] text-gray-400 text-[0.65rem]">{new Date(messages.$createdAt).toLocaleString()}</small>
                            </p>
                            {/* <small className="message-timestamp">{new Date(messages.$createdAt).toLocaleString()}</small> */}
                            {messages.$permissions.includes(`delete(\"user:${user?.id}")`) &&
                               (
                                <Trash2 
                                className = "text-white  "
                                onClick={() => {deleteMessage(messages.$id)}}/>
                               )
                            }

                            {/* <button onClick={() => {deleteMessage(messages.$id)}} 
                            className="text-white"> X</button> */}
                        </div>
                        <div className="p-4 text-gray-100  bg-fuchsia-800 rounded-[20px] max-w-full  break-words w-fit ">
                            <span>{messages.body}</span>
                        </div>
                    </div>
                )
                    
                )}
                
            </div>
                <div  ref = {messageRef} />

            <form  onSubmit={getSubmit} id = "message--form"  className="w-full bg-gray-900  fixed bottom-0  pb-[1rem]">
                <div className="flex">
                    <Textarea
                    // required
                    // maxLength={1000}
                    placeholder = "Whats on yo mind"
                    onChange={(e) => {setMezzBody(e.target.value)}}
                    value = {mezzBody}
                    className="text-black-100 w-[752px] px-4 h-[57px] py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-purple-400 max-[850px]:w-[652px] max-[750px]:w-[552px] max-[650px]:w-[452px]" > 
                    </Textarea>
                    <button type="submit" className="ml-2 w-[2.5rem] h-[2.5rem]  bg-purple-600 text-white rounded-lg -translate-x-14 mt-2">
                    <PaperPlane/>
                </button>
                </div>
            </form>
            </div> 

        </main>
     
    )
}
export default  Room
const Logout = () => {
        const {logout} = useUser()
        const handleLogout = async () => {
            deleteCookie("logged");
            await logout()
        }

        return (
            <Button onClick = {handleLogout} className="bg-black mt-4">Logout</Button>
        )
        
    }