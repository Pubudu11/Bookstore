import { create } from 'zustand';
import {IUser, RegisterData} from '../types';
import { authAPI } from '../api/auth';

interface AuthState {
    user: IUser | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (userData: RegisterData) => Promise<void>;
    logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,

    login: async (email, password) => {
        set({ isLoading: true });
        try {
            const { user } = await authAPI.login({ email, password });
            set({ user, isAuthenticated: true });
        } finally {
            set({ isLoading: false });
        }
    },

    register: async (userData) => {
        set({ isLoading: true });
        try {
            const { user } = await authAPI.register(userData);
            set({ user, isAuthenticated: true });
        } finally {
            set({ isLoading: false });
        }
    },

    logout: () => {
        authAPI.logout();
        set({ user: null, isAuthenticated: false });
    }
}));
