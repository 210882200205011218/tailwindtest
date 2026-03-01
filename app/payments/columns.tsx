"use client"

import { ColumnDef } from "@tanstack/react-table"
import {LogsType} from "@/types/logs";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<LogsType>[] = [
    {
        accessorKey: "id",
        header: "ID"
    },
    {
        accessorKey: "createdAt",
        header: "日志时间"
    },
    {
        accessorKey: "method",
        header: "请求方法"
    },
    {
        accessorKey: "path",
        header: "请求路径"
    },{
        accessorKey: "duration",
        header: "延迟时间"
    }, {
        accessorKey: "userId",
        header: "用户Id"
    }, {
        accessorKey: "username",
        header: "用户名称"
    }, {
        accessorKey: "region",
        header: "IP地址"
    },{
        accessorKey: "userAgent",
        header: "请求方法"
    },{
        accessorKey: "requestBody",
        header: "请求体"
    },{
        accessorKey: "responseBody",
        header: "响应体"
    },{
        accessorKey: "errorMessage",
        header: "错误信息"
    },{
        accessorKey: "level",
        header: "用户权限"
    },{
        accessorKey: "module",
        header: "系统模块"
    },










]