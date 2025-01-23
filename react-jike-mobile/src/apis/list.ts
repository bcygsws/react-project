import {http} from "@/utils/index";
import {ResType} from './shared';

/**
 * @列表先关的api
 *
 * */

// 定义接口返回数据的通用类型, 抽离在shared.ts文件中
//  type是数据结构的抽象，不明确的先使用泛型 <T>/T 代替
// type ResType<T> = {
//     data: T
//     message: string
// }


// 1.请求频道列表
// 定义特殊数据的类型
export type ChannelItem = {
    id: number
    name: string
}
type ChannelRes = {
    channels: ChannelItem[]
}
const getChannelsAPI = () => {
    // http.request<>()是axios用于匹配ts语法的
    return http.request<ResType<ChannelRes>>({
        url: '/channels'
    })

}

// 2.请求文章列表
// 定义特殊数据类型
export type ArticleItem = {
    art_id: string
    title: string
    aut_id: string // 作者id
    comm_count: number // 文章评论数量
    pubdate: string // 发布时间
    aut_name: string // 作者姓名
    is_top: number // 0 未置顶，1表示置顶；文章是否置顶
    cover: {
        type: number
        images?: string[] // 有的文章列表，没有定义images
    }

}
export type ListRes = {
    results: ArticleItem[]
    pre_timestamp: string
}
// 查询参数的类型
type ReqParams = {
    channel_id: string
    timestamp: string
}
const getArticlesAPI = (params: ReqParams) => {
    return http.request<ResType<ListRes>>({
        url: '/articles',
        // 有两个查询参数，channel_id 和 timestamp
        params
    })
}


export {
    getChannelsAPI,
    getArticlesAPI
}