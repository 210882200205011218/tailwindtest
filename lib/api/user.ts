// 用户相关 API：登录、注册、用户信息、修改密码
//登录接口

import http from "@/lib/request";
import {LoginModel, LoginResponse} from "@/types/user";
import {ResultType} from "@/types/result";

export function login(data:LoginModel):Promise<ResultType<LoginResponse>> {
  return http.post("/users/login", data)
}