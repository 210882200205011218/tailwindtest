'use client'
import { Button } from "@/components/ui/button"
import { redirect, useRouter } from "next/navigation"
import Galaxy from '../../../components/ui/Galaxy';
export default function LoginPage() {
    const router = useRouter()

    function handleregister() {
        // 跳转到登录页面
        router.push('/register')
    }
    return <div className="w-full top-0 left-0  h-screen relative bg-black">
        <div className="absolute inset-0">
            <Galaxy transparent={false} />
        </div>

        <div className="relative z-10">
            
        </div>

    </div>
}
