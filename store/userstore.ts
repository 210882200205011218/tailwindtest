//用户信息存储
import { create } from 'zustand'
import {LoginResponse} from "@/types/user";
import Cookies from "js-cookie";
import {persist} from "zustand/middleware";
export interface UserState {
    user: LoginResponse | null
    isLogin: boolean
    token: string | null  // ← 添加这行

    // Actions
    setUser: (user: LoginResponse) => void
    setToken: (token: string) => void  // ← 添加这行
    getUser: () => LoginResponse | null  // 添加 getter
    getToken: () => string | null        // 添加 getter
    logout: () => void
}
export const useUserStore = create<UserState>()(
    persist(
        (set,get) => ({
            user: null,
            token: Cookies.get('token') || null,
            isLogin: false,

            setUser: (user) => {
                set({ user, isLogin: true })
            },
            setToken: (token) => {
                Cookies.set('token', token, { expires: 7 })
                set({ token })
            },
            getUser: () => get().user,      // 添加
            getToken: () => get().token,    // 添加
            logout: () => {
                Cookies.remove('token')
                set({ user: null, token: null, isLogin: false })
            },
        }),
        {
            name: 'user', // localStorage key
            partialize: (state:UserState) => ({
                user: state.user,
                isLogin: state.isLogin,
            }),
        }
    )
)