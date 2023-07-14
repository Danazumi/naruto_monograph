// pages/api/signup.js
import sdk from 'node-appwrite';
import { account } from '@/src/appWriteConfig';

const PROJECT_ID = '649e0c27a73447533bf2'
const API_KEY = "c03846e40f0f2b328433c8b78ae6e1f8e4b13b1ad490a010d8fa5f190ce3e1f7f1bfb86b6f83753b03d87f90bd50a30be4b28b953f3428893b8c6e5d5b05427ec9c895273b6278f317230c9de2f8212759f397e14b57a26417ca1bea917b74f6094523dcfc5c95351987606185871a493977c97c51a6471b344de2c8a460a22c"
export default async function handler(req: { body: { name: any; email: any; password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { id?: string; name?: string; email?: any; error?: string; }): void; new(): any; }; }; }) {
  const { name, email, password } = req.body;

  // Initialize SDK
  const client = new sdk.Client();
  const users = new sdk.Users(client);

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)
    .setKey(API_KEY);

  try {
    // Create user with node-appwrite
    const promise = users.create(email, password);
    const response = await promise;

    // Login and retrieve additional user data
    await account.createEmailSession(email, password);
    const { $id, name } = await account.get();

    res.status(200).json({ id: $id, name, email });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
}
