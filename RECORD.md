### 问题记录

1、vue3中使用echarts遇到使用resize()出现错误「Cannot read properties of undefined (reading 'getBaseAxis')」

原因：使用ref()去接住echarts.init()初始化的实例对象，ref()让其变为了响应式对象，得到是原实例对象的代理对象，当我们改动屏幕大小尺寸，除非resize无法获取

解决：

```javascript
// 使用markRaw()取消代理，得到对象本身
import { markRaw } from 'vue'
let chart = ref(null)
chart.value = markRaw(echarts.init(chart.value))
```

2、vue3中在<style scoped>导致echarts检测不到父容器的大小，导致尺寸自适应失效





### vitepress遇到的问题

1、按着官网步骤生成项目，产生的package.json文件 只有"scripts"这个属性，没有对应的依赖包信息「后续部署到github上会出错，后续我是自行添加的vitepress」

2、部署成功之后，图片和修改默认css样式失效

```javascript
// .vitepress/config.mjs
themeConfig: {
    logo: '/common/icon.png',
}
// .vitepress/theme/custom.css下修改的默认样式失效

// 以上内容本地正常，部署到线上失效

图片：根据最新官网在根目录新建public文件夹，把静态资源放到里面
使用的时候直接 /icon.png 即可

自定义样式：之前有查看官方文档和相关文章进行修改：package.json中对应的vitepress版本不一样导致样式失效，使用最新版本即可正常显示
```

