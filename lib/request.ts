// 统一 fetch 封装，自动携带 token
import axios from "axios";
const http=axios.create({
  baseURL: "/api",
});



// 请求拦截器 — 自动带上 token
http.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 响应拦截器 — 统一处理错误
http.interceptors.response.use(
  (response) => response.data,   // 成功直接返回 data
  (error) => {
    if (error.response?.status === 401) {
      // token 过期，跳转登录
      localStorage.removeItem("token")
      window.location.href = "/login"
    }
    return Promise.reject(error)
  }
)

export default http
