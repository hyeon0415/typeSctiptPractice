// @ts-check (ts파일한테 js파일을 확인하라고 알리는 역할, ts가 오류를 체크함)
/**
 * init project 
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url 
 * @returns boolean
 */
export function init(config){
    return true;
}
/**
 * Exits the program
 * @param {number} code 
 * @returns number
 */
export function exit(code){
    return code + 1;
}