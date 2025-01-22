import api from './axios';
import { LoginCredentials, AuthResponse , RegisterRequest} from '../types';
export const authAPI = {
    login: async (credentials: LoginCredentials) => {
        const { data } = await api.post<AuthResponse>('/api/auth/user/signin/', credentials);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        return data;
    },

    // register: async (userData: RegisterData) => {
    //     const { data } = await api.post<AuthResponse>('/auth/register', userData);
    //     localStorage.setItem('token', data.token);
    //     return data;
    // },
    register: async (userData: RegisterRequest): Promise<AuthResponse> => {
        const { data } = await api.post<AuthResponse>('/api/auth/user/signup', userData);
        if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
        }
        return data;
    },
    logout: () => {
        localStorage.removeItem('token');
    }
};