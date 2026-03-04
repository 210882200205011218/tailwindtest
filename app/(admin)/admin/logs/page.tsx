'use client'
import {columns} from "@/app/payments/columns"
import {DataTable} from "@/app/payments/data-table"
import {LogsType} from "@/types/logs";
import {useEffect, useState} from "react";
import {GetLogs} from "@/lib/api/logs";


export default function Logs() {

    const [data, setData] = useState<LogsType[]>([])
    const fetchLogs = async () => {
        const res = await GetLogs()

        setData(res.data)  // ✅ 设置数据
        console.log(data)

    }
    useEffect(() => {
        fetchLogs()
    }, [])
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data}/>
        </div>
    )
}