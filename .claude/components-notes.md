# 组件使用笔记

## GradientText 组件

### 字体大小调整

通过修改 `className` 属性来调整字体大小，使用 Tailwind CSS 的字体类：

```tsx
<GradientText
    colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
    animationSpeed={8}
    showBorder={true}
    className="text-6xl"  // 在这里设置字体大小
>
    欢迎来到盐焗虾的博客!!!
</GradientText>
```

### 常用字体大小类：

- `text-xl` - 20px
- `text-2xl` - 24px
- `text-3xl` - 30px
- `text-4xl` - 36px
- `text-5xl` - 48px
- `text-6xl` - 60px
- `text-7xl` - 72px
- `text-8xl` - 96px
- `text-9xl` - 128px

### 组合使用多个样式：

```tsx
className="text-6xl font-bold"        // 大号 + 加粗
className="text-5xl font-semibold"    // 大号 + 半粗
className="text-4xl tracking-wider"   // 大号 + 字间距
```

## ASCIIText 组件

### 常见问题

ASCIIText 组件需要明确的容器宽高才能正常渲染：

```tsx
<div className="w-full h-64 relative">  // 必须设置宽高
    <ASCIIText
        enableWaves
        asciiFontSize={4}
        text="欢迎来到盐焗虾的博客"
        textColor="#fefae0"
    />
</div>
```

如果文字不显示，检查：
1. 父容器是否有明确的宽高
2. 浏览器控制台是否有报错
3. 字体是否加载完成（需要加载 IBM Plex Mono 字体）
