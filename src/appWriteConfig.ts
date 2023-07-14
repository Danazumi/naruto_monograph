 import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = '649e0c27a73447533bf2'
export const DATABASE_ID = '649e8e920f757143fc0d'
export const COLLECTION_ID_MESSAGES =  '649e8eba83ba94fd99ce'


 const client = new Client();
 const account = new Account(client)


 //remeber to hide this in environmental variable
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('649e0c27a73447533bf2');
    

 export const databases = new Databases(client);

export default client
export {account}


            ;
