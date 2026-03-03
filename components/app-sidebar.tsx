import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub,
    SidebarMenuSubButton, SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {FileText, ShoppingCart, Users} from "lucide-react";
import {CollapsibleFileTree} from "@/components/CollapsibleFileTree";

function AppSidebar() {
    const projects = [
        { name: "博客系统", url: "/admin/blog", icon: FileText,
            items: [  // 子菜单数组
                { name: "文章列表", url: "/admin/blog/articles" },
                { name: "创建文章", url: "/admin/blog/create" },
                { name: "分类管理", url: "/admin/blog/categories" },
            ]     },
        { name: "电商平台", url: "/admin/shop", icon: ShoppingCart,
            items: [
                { name: "商品列表", url: "/admin/shop/products" },
                { name: "订单管理", url: "/admin/shop/orders" },
                { name: "库存管理", url: "/admin/shop/inventory" },
            ]    },
        { name: "用户管理", url: "/admin/users", icon: Users },
    ]
    return (
        <Sidebar>

            <SidebarContent>
               <SidebarGroup>
                   <CollapsibleFileTree></CollapsibleFileTree>
               </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                 可以放用户信息或退出按钮
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar