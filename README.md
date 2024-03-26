##### vue 插件开发并集成到 npm 上
`
  1. 在 src 文件中新建 plugins 目录
  2. 在 plugins 目录中，新建 index.js 文件
    const requireComponent = require.context('./', true, /\.vue$/)
    const install = (Vue) => {
        if (install.installed) return
        install.installed
        requireComponent.keys().forEach(element => {
            const config = requireComponent(element)
            if (config && config.default.name) {
                const componentName = config.default.name
                Vue.component(componentName, config.default || config)
            }
        });
    }
    
    if (typeof window !== 'undefined' && window.Vue) {
        install(window.Vue)
    }
    
    export default {
        install
    }
  3. 在 plugins 目录中新建各个组件

  4. 在 package.json 新增一条命令
    "lib": "vue-cli-service build --target lib --name cus-component --dest lib src/plugins/index.js"

    1) --target lib: 表示打包后的目录名称
    2) --name cus-component: 打包后的包名称
    3）--dest lib src/plugins/index.js： 打包的文件地址, 就是上面创建的 index地址

    // 添加下面配置项
    "private": false,
    "license": "MIT",
    "description": "描述",
    "main": "lib/cus-component.umd.min.js", // 打包后的 js 文件地址
  


  5.运行打包命令, 会生成打包文件。
    npm run lib
  
  6.登录 npm
    npm login
    注意：要切换镜像源为 npm 源地："https://registry.npmjs.org/"; 
    npm config list  查看镜像源地址
    npm config set registry https://registry.npmmirror.com/ 设置镜像源地址

  7. 发布
    npm publish

  8. 安装发布包名
    npm i 包名
  9. 在项目 main.js 上引入，全局引入。
    import install  from '包名'
    Vue.use(install)
`

