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

  static async getSchoolYears(id: string): Promise<Year[]> {
    const resp = await axios.get<{ data: School }>(
      `/schools/${id}?populate[years][populate]=%2A`,
    );

    return resp.data.data.attributes.years.data;
  }

  static async getYear(id: string): Promise<Year> {
    const resp = await axios.get<{ data: Year }>(`/years/${id}?populate=*`);

    return resp.data.data;
  }
}
