import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        console.log("ACOUNT CREATED");
        return this.login({email, password});
      } else {
        //console.log("Account created successfully:", userAccount);
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite service :: create Account :: error", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite service :: login :: error", error);
    }
  }


  async logout() {
    try {
      // Delete the current session
      await this.account.deleteSession('current'); // 'current' will target the active session
  
      console.log("Logged out successfully");
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
    }
  }
  
  

  async getCurrentUser() {
    try {
      console.log(this.account.get());
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: get current User :: error", error);
    }
    return null;
  }
}

const authService = new AuthService();

export default authService;
