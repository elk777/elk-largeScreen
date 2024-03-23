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