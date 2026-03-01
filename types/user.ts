// 用户相关类型定义（对应后端 UserModel）
//登录model
export interface LoginModel {
    username:string
    password:string
    captcha_id:string
    captcha_code:string
}

//登录返回数据

export interface LoginResponse {
    id: number
    username:string
    role: number
    token: string
}