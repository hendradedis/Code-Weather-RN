import axios from 'axios';
export const BASE_URL = 'https://api.openweathermap.org/';

export const API = {
  // if we using header
  //   async get(url: string, headers?: any): Promise<any> {
  async get(url: string): Promise<any> {
    const response = await axios.get(url, {
      baseURL: BASE_URL,
      //   headers,
    });

    return response?.data;
  },
  async post(url: string, body?: any): Promise<any> {
    const response = await axios.post(url, body, {
      baseURL: BASE_URL,
    });

    return response?.data;
  },
  async patch(url: string, body?: any): Promise<any> {
    const response = await axios.patch(url, body, {
      baseURL: BASE_URL,
    });

    return response?.data;
  },
  async put(url: string, body?: any): Promise<any> {
    const response = await axios.put(url, body, {
      baseURL: BASE_URL,
    });

    return response?.data;
  },
};
