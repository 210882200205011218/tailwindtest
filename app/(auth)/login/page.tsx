'use client'
import {useRouter} from "next/navigation"
import Galaxy from '../../../components/ui/Galaxy';
import GradientText from "@/components/GradientText";
import {Input} from "@/components/ui/input";
import SplitText from "@/components/SplitText";
import { Button } from "@/components/ui/button";
export default function LoginPage() {
    const router = useRouter()
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    function handleregister() {
        // 跳转到注册页面
        router.push('/register')
    }

    return <div className="w-full top-0 left-0  h-screen relative bg-black">
        <div className="absolute inset-0">
            <Galaxy transparent={false}/>
        </div>

        <div className="relative z-10 w-full h-screen flex items-start justify-center pt-20">
            <div className="w-full h-full ">
                <GradientText
                    colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                    animationSpeed={8}
                    showBorder={true}
                    className="text-9xl"
                >
                    欢迎来到盐焗虾的博客!!!
                </GradientText>

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
                            rootMargin="-100px"
                            textAlign="left"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                        <Input className={"w-100 mb-5 mt-2"}/>
                    </div>

                    <div className={"flex flex-col justify-center mt-10"}>
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
                                rootMargin="-100px"
                                textAlign="left"
                                onLetterAnimationComplete={handleAnimationComplete}
                            />
                            <Input className={"w-100 mb-5 mt-2"}/>
                        </div>
                    </div>
                    <div className={"flex flex-row width-full justify-between"}>
                        <Button className="w-11">
                            登录
                        </Button>
                        <Button>
                            注册
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    </div>
}
