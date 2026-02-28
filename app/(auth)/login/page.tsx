'use client'
import {useRouter} from "next/navigation"
import Galaxy from '../../../components/ui/Galaxy';
import GradientText from "@/components/GradientText";
import {Input} from "@/components/ui/input";
import SplitText from "@/components/SplitText";
import { Button } from "@/components/ui/button";
import TextPressure from "@/components/TextPressure";
import CircularText from "@/components/CircularText";
export default function LoginPage() {
    const router = useRouter()
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    function ToRegister() {
        // 跳转到注册页面
        router.push('/register')
    }
    function ToLogin() {
        // 跳转到登录页面
        router.push('/register')
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
                        <Input className={"w-100 mb-5 mt-2"}/>
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
                            <Input className={"w-100 mb-5 mt-2"}/>
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
                           <Input className={"w-40 mb-5 mt-2"}/>
                           <div className={"w-40 h-10 bg-amber-50"}></div>
                           {/*<img*/}
                           {/*    src=""*/}
                           {/*    alt="Event cover"*/}
                           {/*    className="w-28 "*/}
                           {/*/>*/}
                       </div>
                    </div>

                    <div className={"flex flex-row width-full gap-3 justify-between"}>
                        <Button variant="outline" onClick={ToLogin}>登录</Button>

                        <Button variant="outline" onClick={ToRegister}>注册</Button>

                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
}
