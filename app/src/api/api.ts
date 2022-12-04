import axios from 'axios';
import School from '../types/school';
import Year from '../types/year';

axios.defaults.baseURL = 'https://notes-strapi.aikenahac.com/api';

export default class API {
  static baseUrl = 'https://notes-strapi.aikenahac.com';

  static async getSchools(): Promise<School[]> {
    const resp = await axios.get<{ data: School[] }>('/schools?populate=*');

    return resp.data.data;
  }

  static async getYears(): Promise<Year[]> {
    const resp = await axios.get<{ data: Year[] }>('/schools?populate=*');

    return resp.data.data;
  }
}
