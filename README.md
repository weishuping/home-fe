# fe-homework

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


### 开发步骤
1. 安装mock server ```npm install -g json-server```
2. 创建工程，配置vue.config.js
3. 安装依赖等
   ```vue-router``` ``` less ``` ```lodash``` ```jest``` ```vue/test/utils```
4. 拆分模块、组件，样式的公共抽取等

### 项目文档结构

|
|
src/
├── App.vue
├── api // 发送axios的封装
├── assets // 静态文件
│   ├── fonticons // 字体文件
│   ├── images // 非svg图片
│   ├── style // 样式
│       ├── base.less // 基础设置样式
│       ├── common.less // 页面公共样式
│       └── variable.less  // less 变量
│   ├── svgs // svg
├── components // 通用性的组件
│   ├── BaseCard // 基础的展示资源状态的卡片
│   ├── Basedialog // 基础弹窗组件
│   └── BaseTab // 基础tab切换组件
├── directives // 指令
│   └── outside.js // 点击外部事件指令
├── pages // 主页面文件夹
│   └── Home.vue // 某个具体的页面，提供唯一页面出口
├── main.js // 主入口
├── router
│   └── index.js // 路由
├── utils // 主入口
│   ├── constant // 模块常量
│   └── utils.js // 公共方法
├── views // 功能模块划分
│   ├── agent // agent页面
│       ├── modoles // 页面拆分的模块，包括列表展示组件、卡片展示组件、汇总卡片组件
│       └── AgentInfo  // agent页面主入口
│   ├── cruise // cruise页面
│   ├── dashboard // dashboard页面
│   ├── help // help页面
│   ├── menu // 头部/页脚组件
│   └── slider // 左侧菜单栏组件
├── App.vue // 入口文件
├── main.js // 入口js配置等
├── test
│   └── unit // 单元测试相关的文件
└── public // 静态资源存放、index模板

### 开发排期
- 10.28 熟悉业务、启动服务、创建工程
- 10.29 页面
- 11.2 交互、数据联调、UT