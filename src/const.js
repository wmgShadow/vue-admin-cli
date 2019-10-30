//通用、常量配置
import {getParams} from './utils/utils'



var host = window.location.protocol + '';

var CONST = {
    host: host,
    baseUrl: host + '/api/web/v3/coach',
    MicroMessenger: navigator.userAgent.indexOf('MicroMessenger') > -1,
    isiOS: !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    isAndroid: navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1,
    params: getParams()
}

export default CONST