// header底部滑动栏api
import $http from '../utils/http.tsx';
// 获取滑动栏选项列表
const getTabList = () => {
    return $http.request({
        url: '/channels',
        method: 'get'
    })
}
export {
    getTabList
}