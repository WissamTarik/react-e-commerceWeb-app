export function isString(value:unknown):value is string{
    return typeof value=="string"
}
export function checkToken(){
    return localStorage.getItem('token')!==null
}