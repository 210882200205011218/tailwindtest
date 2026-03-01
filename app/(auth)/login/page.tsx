'use client'
import {useRouter} from "next/navigation"
import Galaxy from '../../../components/ui/Galaxy';
import {Input} from "@/components/ui/input";
import SplitText from "@/components/SplitText";
import {Button} from "@/components/ui/button";
import CircularText from "@/components/CircularText";
import {GetCaptcha} from "@/lib/api/captcha";
import {verifycaptchaType} from "@/types/captcha";
import {useState} from "react";
import {toast} from "sonner";
import {LoginModel} from "@/types/user";
import {login} from "@/lib/api/user";
import {useUserStore} from "@/store/userstore";

export default function LoginPage() {
    const user = useUserStore(state => state)
    const [captcha_img, setcaptcha_img] = useState<string>("")
    const [verifyCaptcha, setVerifyCaptcha] = useState<verifycaptchaType>({
        captcha_id: "",
        captcha_code: ""
    })
    const [verifyInfo, setVerifyInfo] = useState<LoginModel>({
        username: "",
        password: "",
        captcha_id: "",
        captcha_code: ""
    })
    const router = useRouter()

    const HandleMessageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVerifyInfo(prev => prev ? {...prev, captcha_code: e.target.value} : prev)
    }
    const HandleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVerifyInfo(prev => prev ? {...prev, username: e.target.value} : prev)
    }
    const HandlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVerifyInfo(prev => prev ? {...prev, password: e.target.value} : prev)
    }

    function ToRegister() {
        // 跳转到注册页面
        router.push('/register')
    }

    const VerifyCode = async () => {
        console.log(verifyInfo)
        try {
            const res = await login(verifyInfo)

            if (res.code == 200) {
                const data = res.data
                console.log(JSON.stringify(data))
                user.setToken(data.token)
                user.setUser(data)
                return true
            } else {
                console.log(res.message)
                return false
            }
        } catch (e) {
            console.log("登录失败" + e)
            console.log("错误响应数据:", (e as any).response?.data)  // 打印服务器返回的 JSON

            return false
        }
    }


    const ToLogin = async () => {
        if (await VerifyCode()) {
            //登录
            toast.success("登录成功", {
                duration: 3000,
                description: "跳转主页中"
            })
            setTimeout(() => {
                // router.push('/register')
            }, 3000)
        } else {
            toast.error("验证码错误", {
                duration: 3000,
                description: "请重新输入"
            })
        }
    }
    const GetCaptchaCode = async () => {
        try {
            const res = await GetCaptcha()
            const data = res.data
            setcaptcha_img(data.captcha_img)
            setVerifyInfo(prev => prev ? {
                ...prev,
                captcha_id: data.captcha_id
            } : prev)
            console.log(data.captcha_id)
        } catch (e: any) {
            console.log("获取验证码错误", e)
            console.log("错误响应数据:", e.response?.data)
        }
    }

    return <div className="w-full top-0 left-0  h-screen relative bg-black">
        <div className="absolute inset-0">
            <Galaxy transparent={false}/>
        </div>

        <div className="relative z-10 w-full h-screen flex items-start justify-center pt-20">
            <div className="w-full h-full ">
                <div className="w-full h-full ">
                    <CircularText
                        text="欢迎来到盐焗虾的博客"
                        onHover="goBonkers"
                        spinDuration={20}

                    />

                    <div className={"flex flex-col justify-center mt-20 items-center"}>
                        <div className={"p-2 flex flex-col items-start"}>
                            <SplitText
                                text="请输入账号名称"
                                className="text-2xl font-semibold text-cyan-50"
                                delay={50}
                                duration={1.25}
                                ease="power3.out"
                                splitType="chars"
                                from={{opacity: 0, y: 40}}
                                to={{opacity: 1, y: 0}}
                                threshold={0.1}
                                rootMargin="0px"
                                textAlign="left"
                            />
                            <Input className={"w-100 mb-5 mt-2  text-amber-50 bg-gray-400"}
                                   value={verifyInfo.username}
                                   onChange={HandleUsernameInput}/>
                        </div>

                        <div className={"flex flex-col justify-center"}>
                            <div className={"p-2 flex flex-col items-start"}>
                                <SplitText
                                    text="请输入密码"
                                    className="text-2xl font-semibold text-cyan-50"
                                    delay={50}
                                    duration={1.25}
                                    ease="power3.out"
                                    splitType="chars"
                                    from={{opacity: 0, y: 40}}
                                    to={{opacity: 1, y: 0}}
                                    threshold={0.1}
                                    rootMargin="0px"
                                    textAlign="left"
                                />
                                <Input className={"w-100 mb-5 mt-2  text-amber-50 bg-gray-400"}
                                       value={verifyInfo.password}
                                       onChange={HandlePasswordInput}/>
                            </div>
                        </div>
                        {/*验证码*/}
                        <div className={"p-2 flex flex-col items-start"}>
                            <SplitText
                                text="请输入验证码"
                                className="text-2xl font-semibold text-cyan-50"
                                delay={50}
                                duration={1.25}
                                ease="power3.out"
                                splitType="chars"
                                from={{opacity: 0, y: 40}}
                                to={{opacity: 1, y: 0}}
                                threshold={0.1}
                                rootMargin="0px"
                                textAlign="left"
                            />
                            <div className={"flex flex-row gap-10 w-100 items-center"}>
                                <Input className={"w-40 mb-5 mt-2 text-amber-50 bg-gray-400"}
                                       value={verifyInfo.captcha_code} onChange={HandleMessageInput}/>
                                {/* <div className={"w-40 h-10 bg-amber-50"} onClick={GetCaptchaCode}></div> */}
                                {captcha_img ? (
                                    <img
                                        src={captcha_img}
                                        alt="验证码"
                                        className="w-28 bg-white"
                                        onClick={GetCaptchaCode}
                                    />
                                ) : (
                                    <div
                                        className="w-28 h-10 bg-gray-200 cursor-pointer flex items-center justify-center text-sm text-gray-500"
                                        onClick={GetCaptchaCode}>
                                        点击获取验证码
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className={"flex flex-row width-full gap-3 justify-between"}>
                            <Button type="button" variant="outline" onClick={ToLogin}>登录</Button>

                            <Button type="button" variant="outline" onClick={ToRegister}>注册</Button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
}
