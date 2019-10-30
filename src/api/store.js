import * as Api from './api';
var update = function (params, success, error) {
    Api.get({
        url: '/update',
        params: params
    }, success, error)
}

var insert = function (params, success, error) {
    Api.post({
        url: '/insert',
        params: params
    }, success, error)
}
var sweepstakes = function (params, success, error) {
        Api.get({
            url: '/api/movie/',
            params: params
        }, success, error)
    }
var activeView = function (params, success, error) {
        Api.get({
            url: '/api/web/activity/voice-broadcast-activity/view.htm',
            params: params
        }, success, error)
    }
var myAwardList = function (params, success, error) {
        Api.get({
            url: '/api/web/activity/voice-broadcast-activity/my-award-list.htm',
            params: params
        }, success, error)
    }

export {
    update,
    sweepstakes,
    activeView,
    myAwardList,
    insert
}