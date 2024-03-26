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
