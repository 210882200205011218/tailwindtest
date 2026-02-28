import http from "../request";
interface captchaType {
    captcha_id: string,
    captcha_img: string
}
// 验证码相关 API：图形验证码、邮箱验证码
export const GetCaptcha = () => {
    return http.get<captchaType>("/captcha").then(res => res.data)
}