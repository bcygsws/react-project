// 根据频道id，请求列表
import $http from "@/utils/http.tsx";

/**
 * @desc:有两个查询参数，channel_id和timestamp
 * channel_id是频道id，string类型
 * timestamp是时间戳，用来请求列表，string类型
 *
 * */
export interface IComment {
    channel_id: string;
    timestamp?: string;
}

const getCommentListById = (params: IComment) => {
    return $http.request({
        url: '/articles',
        method: 'GET',
        params
    })
}
export {
    getCommentListById
}