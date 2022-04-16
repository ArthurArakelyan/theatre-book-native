import request from "../utils/request";

class TheatresService {
  async getTheatres() {
    try {
      const response = await request('GET', 'theatres/get');

      if (!response?.data?.success) {
        throw new Error(response?.data?.message || 'Something went wrong.');
      }

      return response?.data?.data?.theatres;
    } catch (e) {
      console.log(e);
    }
  }

  async addTheatre(name: string, image: string) {
    try {
      const data = {
        name,
        image,
        date: new Date('2022-12-12T12:12').toISOString(),
      };

      const response = await request('POST', 'theatres/create', data);

      if (!response?.data?.success) {
        throw new Error(response?.data?.message || 'Something went wrong.');
      }

      return response?.data?.data?.theatre;
    } catch (e) {
      console.error(e);
    }
  }
}

export default new TheatresService();
