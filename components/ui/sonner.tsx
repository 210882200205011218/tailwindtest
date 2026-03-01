"use client"

import {CircleCheckIcon, InfoIcon, Loader2Icon, OctagonXIcon, TriangleAlertIcon,} from "lucide-react"
import {useTheme} from "next-themes"
import {Toaster as Sonner, type ToasterProps} from "sonner"

const Toaster = ({...props}: ToasterProps) => {
    const {theme = "system"} = useTheme()

    return (
        <Sonner
            theme={theme as ToasterProps["theme"]}
            className="toaster group"
            position="top-center"
            richColors
            icons={{
                success: <CircleCheckIcon className="size-4"/>,
                info: <InfoIcon className="size-4"/>,
                warning: <TriangleAlertIcon className="size-4"/>,
                error: <OctagonXIcon className="size-4"/>,
                loading: <Loader2Icon className="size-4 animate-spin"/>,
            }}
            style={{
                "--normal-bg": "var(--popover)",
                "--normal-text": "var(--popover-foreground)",
                "--normal-border": "var(--border)",
                // Success - 薄荷灰绿
                "--success-bg": "hsl(150, 30%, 95%)",
                "--success-border": "hsl(150, 25%, 75%)",
                "--success-text": "hsl(150, 40%, 30%)",
                // Error - 玫瑰灰粉
                "--error-bg": "hsl(355, 30%, 95%)",
                "--error-border": "hsl(355, 25%, 75%)",
                "--error-text": "hsl(355, 40%, 35%)",
                // Warning - 米黄灰
                "--warning-bg": "hsl(40, 30%, 95%)",
                "--warning-border": "hsl(40, 25%, 75%)",
                "--warning-text": "hsl(40, 40%, 30%)",
                // Info - 雾霾蓝
                "--info-bg": "hsl(200, 30%, 95%)",
                "--info-border": "hsl(200, 25%, 75%)",
                "--info-text": "hsl(200, 40%, 30%)",
                // Loading - 薰衣草灰紫
                "--loading-bg": "hsl(260, 30%, 95%)",
                "--loading-border": "hsl(260, 25%, 75%)",
                "--loading-text": "hsl(260, 40%, 35%)",
                "--border-radius": "var(--radius)",
            } as React.CSSProperties}
            {...props}
        />
    )
}

export {Toaster}
