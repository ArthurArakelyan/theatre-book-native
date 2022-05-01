import {AxiosResponse} from "axios";

import storage from "../utils/storage";

import type User from "../types/user";

class Service {
  async getUser(): User {
    const user: User = await storage.get('user');

    if (!user) {
      throw new Error('User does not registered');
    }

    return user;
  }

  checkIsSuccess(response: AxiosResponse) {
    if (!response?.data?.success) {
      throw new Error(response?.data?.message || 'Something went wrong');
    }
  }

  catchError(e) {
    console.error(e);
    throw new Error(e.message);
  }
}

export default Service;
