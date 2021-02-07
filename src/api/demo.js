/**
 * 方便复用接口
 */
import service from "@/util/service"

const searchLanguage = params => service({
    url: '/GET/language',
    method: 'get',
    params
})

export {
    searchLanguage
}
