import http from "@/lib/request";
import {ResultType} from "@/types/result";
import {LogsType} from "@/types/logs";

export const GetLogs = (): Promise<ResultType<LogsType[]>> => {
    return http.get("/logs") ;
}