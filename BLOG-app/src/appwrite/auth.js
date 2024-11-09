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

  async creatAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(), email, password, name
      );
      if (userAccount) {
        //TODO: call another method
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite aervice :: userACCOUNT :: error", error);
    }
  }

  async login() {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite aervice :: login :: error", error);
    }
  }

  async logout() {
    try {                                           //* Remove Acccount from this seession.... 
        await this.account.deleteSession();         //* if we use sessions then it will remove account from all sessions          
    } catch (error) {                                  
      console.log("Appwrite aervice :: logout :: error", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite aervice :: getCurrentUser :: error", error);
    }
    return null;
  }
}

const authService = new AuthService();

export default authService;
