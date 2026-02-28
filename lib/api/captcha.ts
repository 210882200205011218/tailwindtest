import http from "../request";
import { verifycaptchaType,captchaType } from "@/types/captcha";
import { ResultType } from "@/types/result";
// 验证码相关 API：图形验证码、邮箱验证码
export const GetCaptcha = (): Promise<ResultType<captchaType>> => {
    return http.get("/captcha") ;
}

//验证验证码
export const VerifyCaptcha = (captcha: verifycaptchaType): Promise<ResultType<null>> => {
    return http.post("/captcha/verify", {
        captcha
    }) ;
}