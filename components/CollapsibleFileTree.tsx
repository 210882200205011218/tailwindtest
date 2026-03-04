'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {FileIcon, FolderIcon, FileTextIcon, SettingsIcon, HomeIcon, ChevronRightIcon} from "lucide-react"
import React from "react";
import {useRouter} from "next/navigation";

type FileTreeItem = |{ name: string;url?:string }|{ name: string;icon:React.ComponentType;url?:string } | { name: string; icon?: React.ComponentType;items: FileTreeItem[] }  // 文件夹项

    export function CollapsibleFileTree() {
    const fileTree: FileTreeItem[] = [
        {
            name: "w",
            icon: FileTextIcon,  // 自定义图标
            items: [
                {
                    name: "文章列表",
                    icon: FileIcon,
                    url: "/admin/blog/articles"  // 子级URL
                },
                {
                    name: "创建文章",
                    icon: FileIcon,
                    url: "/admin/blog/create"
                },
            ],
        },
        {
            name: "设置",
            icon: SettingsIcon,
            url: "/admin/settings",
            items: [
                { name: "网站设置", url: "/admin/settings/site" },
                { name: "用户设置", url: "/admin/settings/user" },
            ],
        },
        {
            name: "首页",
            icon: HomeIcon,
            url: "/admin/home"  // 没有items表示是单个链接
        },
    ]
        const router = useRouter()
        const ToPage=(url:string)=>{
            router.push(url)
        }
        const renderItem = (fileItem: FileTreeItem) => {
        if ("items" in fileItem) {
            return (
                <Collapsible key={fileItem.name}>
                    <CollapsibleTrigger asChild>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="group hover:bg-accent hover:text-accent-foreground w-full justify-start transition-none"
                        >
                            <ChevronRightIcon className="transition-transform group-data-[state=open]:rotate-90" />
                            <FolderIcon />
                            {fileItem.name}
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="style-lyra:ml-4 mt-1 ml-5">
                        <div className="flex flex-col gap-1">
                            {fileItem.items.map((child) => renderItem(child))}
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            )
        }
        return (
            <Button
                key={fileItem.name}
                variant="link"
                size="sm"
                className="text-foreground w-full justify-start gap-2"
                onClick={()=>ToPage(fileItem.url?fileItem.url:"")}
            >
                <FileIcon />
                <span>{fileItem.name}</span>
            </Button>
        )
    }

    return (
        <Card className="mx-auto w-full max-w-[16rem] gap-2">
            <CardHeader>
                <Tabs defaultValue="explorer">
                        <h1>盐焗虾的博客后台</h1>
                </Tabs>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-1">
                    {fileTree.map((item) => renderItem(item))}
                </div>
            </CardContent>
        </Card>
    )
}
