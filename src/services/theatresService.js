import Service from "./Service";

import request from "../utils/request";

class TheatresService extends Service {
  async getTheatres() {
    try {
      const response = await request('GET', 'theatres/get');
      super.checkIsSuccess(response);
      return response?.data?.data?.theatres;
    } catch (e) {
      super.catchError(e);
    }
  }

  async addTheatre(name: string, image: string, date: string) {
    try {
      const data = {
        name,
        image,
        date,
      };

      const response = await request('POST', 'theatres/create', data);
      super.checkIsSuccess(response);
      return response?.data?.data?.theatre;
    } catch (e) {
      super.catchError(e);
    }
  }

  async deleteTheatre(id: string) {
    try {
      const response = await request('DELETE', `theatres/delete/${id}`);
      super.checkIsSuccess(response);
      return response?.data?.data?.deletedTheatre;
    } catch (e) {
      super.catchError(e);
    }
  }
}

export default new TheatresService();
