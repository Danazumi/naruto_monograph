 import { Client, Databases, Account, Models } from 'appwrite';

export const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID  as string
export const DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID as string
export const COLLECTION_ID_MESSAGES =  process.env.NEXT_PUBLIC_COLLECTION_ID  as string
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL as string

 const client = new Client();
 const account = new Account(client)


 //remeber to hide this in environmental variable
client
    .setEndpoint(APP_URL)
    .setProject(PROJECT_ID);
    

 export const databases = new Databases(client);

// export default client
// export {account}

const appwriteService = {
    client,
    account,
    databases,
    getCurrentUser: async (): Promise<Models.User<Models.Preferences> | null> => {
        try {
            return await account.get();
        } catch (error) {
            console.error('Error fetching current user:', error);
            return null;
        }
    }
};

export default appwriteService;


            
