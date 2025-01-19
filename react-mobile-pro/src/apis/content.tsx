// 根据频道id，请求列表
import $http from "@/utils/http.tsx";

const getCommentListById = (id: number) => {
    return $http.request({
        url: '',
        method: 'GET'
    })
}
export {
    getCommentListById
}