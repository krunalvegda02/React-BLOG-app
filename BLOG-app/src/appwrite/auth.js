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
        //TODO: call another method  to route on another page
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
      //* Remove Acccount from this seession....
      await this.account.deleteSession(); //* if we use sessions then it will remove account from all sessions
    } catch (error) {
      console.log("Appwrite aervice :: logout :: error", error);
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      console.log("Logged out successfully");
      return user;
    } catch (error) {
      console.log("Appwrite aervice :: get current User :: error", error);
    }
    return null;
  }
}

const authService = new AuthService();

export default authService;
