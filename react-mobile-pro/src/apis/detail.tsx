import $http from "@/utils/http.tsx";

/**
 * @文章详情页api
 * 请求中id是路径参数
 *
 * */
const getDetailById = (id: string) => {
    return $http.request({
        url: `/articles/${id}`,
        method: 'GET'
    })
}
export {getDetailById};