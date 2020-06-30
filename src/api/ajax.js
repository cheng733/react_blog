import ajax from './index'
//js
export const reqJsBase = (id) => ajax(`/js:${id}`)
//react
export const reqReactBase = () => ajax(`/react`)
//vue
export const reqVueBase = () => ajax(`/vue`)
//articleTitle
export const reqArticleHeader = () =>ajax('/all')
