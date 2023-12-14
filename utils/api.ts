// utils.api.ts
import axios, { AxiosResponse } from 'axios';

const apiClient = axios.create({
    baseURL: 'http://your-server-address'
});

export const fetchData = async (endpoint: string): Promise<any> => {
    try {
        const response: AxiosResponse = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
