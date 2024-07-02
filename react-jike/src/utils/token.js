/**
 * @description:封装token的存、取和删除方法
 *
 * */
const TOKENKEY = "token_key";
const setToken = (token) => {
	localStorage.setItem(TOKENKEY, token);
}
const getToken = () => {
	return localStorage.getItem(TOKENKEY);
}
const removeToken = () => {
	localStorage.removeItem(TOKENKEY);
}
export {
	setToken,
	getToken,
	removeToken
}