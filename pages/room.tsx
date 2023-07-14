import React, { useState, useEffect } from "react"
import  client, { databases, DATABASE_ID, COLLECTION_ID_MESSAGES } from "@/src/appWriteConfig"
import { Models , ID, Query, Role, Permission, AppwriteException} from "appwrite";
import { Client } from "appwrite";
import { Trash, Trash2, TrashIcon } from "lucide-react";
import { NextPage } from "next";
import {useUser} from "@/src/user"
import PrivateRoutes from "./privateRoutes";


import { v4 as uuidv4 } from "uuid";



// interface User {
    
//     isLoaded: boolean
//     isSignedIn : boolean
//     user : [id: string,
//   firstname: string,
//   lastname: string]
// }

const Room  = () => {
    const [messages, setMessages] = useState<Models.Document[]>([])
    const [mezzBody, setMezzBody] = useState('')
    const {user} = useUser()
    

   
    
    useEffect(() => { 
        getMessages()

        //listen for events with the message collection
        //set unsub to thr retrun val of sub then call unsub

        const unsub = client.subscribe(`databases.${DATABASE_ID}.collections.${COLLECTION_ID_MESSAGES }.documents`,  (response: any) => {
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
 
    }, [])


    // create a message 
    const getSubmit = async (e: any) => {
        e.preventDefault()

        //set payload
        let payload = {
            user_id : user?.id,
            username : user?.name,   
            body: mezzBody   //set the messagebody w state
            
        }

        // let permissions: string[] | undefined = [Permission.write(Role.user(String(payload.user_id )))]
        
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
        // setMessages(prev => [response.payload, ...prev] 
        setMezzBody('')
        
    }

    const getMessages = async () => {
        const response =  await databases.listDocuments(
            DATABASE_ID, 
            COLLECTION_ID_MESSAGES,
            [
                Query.orderAsc("$createdAt")
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
        
   

        <main className="container">
             <Logout />
            {/* create form here */}
            <form  onSubmit={getSubmit} id = "message--form">
                <div>
                    <textarea
                    // required
                    // maxLength={1000}
                    placeholder = "Whats on yo mind"
                    onChange={(e) => {setMezzBody(e.target.value)}}
                    value = {mezzBody}
                    className="text-white" > 
                    </textarea>
                </div>

                <div className="send-btn--wrapper">
                    <input type="submit" className="btn btn--secondary"  value = "Send" />
                </div>


            </form>

            {/* messages container */}

            <div className="room--container">
            <div> 
                {messages.map( messages => (
                    <div key = {messages.$id} className="message--wrapper">
                        <div className="message--header">
                            <p className="text-white">
                                {/* {user?.firstName} */}
                                {messages?.username ?(
                                    <span>{messages.username}</span>
                                ) : ( 
                                    <span>Anonymous user</span>
                                )}
                                <small className="message-timestamp">{new Date(messages.$createdAt).toLocaleString()}</small>
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
                        <div className="message--body">
                            <span>{messages.body}</span>
                        </div>
                    </div>
                )
                    
                )}
            </div>
            </div> 
        </main>

        
    )
}
export default  Room

const Logout = () => {
        const {logout} = useUser()
        const handleLogout = async () => {
            await logout()
        }

        return (
            <button onClick = {handleLogout}>Logout</button>
        )
        
    }