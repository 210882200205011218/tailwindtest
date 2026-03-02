// 统一 fetch 封装，自动携带 token
import axios from "axios";
import Cookies from "js-cookie";
const http=axios.create({
  baseURL: "/api",
});



// 请求拦截器 — 自动带上 token
http.interceptors.request.use((config) => {
  const token = Cookies.get("token")
    console.log("token:", token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 响应拦截器 — 统一处理错误
http.interceptors.response.use(
  (response) => response.data,   // 成功直接返回 data
  (error) => {
    console.log("请求错误:", error.response?.data)  // 打印服务器返回的 JSON
    console.log("完整错误对象:", error)            // 打印完整错误信息
    return Promise.reject(error)
  }
)

export default http
