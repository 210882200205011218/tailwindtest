export interface LogsType{
    id:number
    createdAt:string
    method:string
    path:string
    statusCode:number
    duration:number
    userId:string
    username:string
    ip:string
    region:string
    userAgent:string
    requestBody:string
    responseBody:string
    errorMessage:string
    level:string
    module:string
}