
const format=function (value) {
    return new Date(value).format('yyyy-MM-dd')
}
const add=function (value) {
    return value+=1
}
const time = function (value) {
    if (!value) {
        return '-'
    }
    var time = new Date(value);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    if(mm<10){
        mm='0'+mm
    }
    if(s<10){
        s='0'+s
    }
    var D=y+'年'+m+'月'+d+'日  '+h+':'+mm+':'+s
    return  D;
}
export default {
    format,
    time,
    add
}