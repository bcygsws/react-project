/*在apifox中发送请求后，使用工具生成的ts代码，稍加修改*/
import {ResType} from "@/apis/shared";
import {http} from '@/utils//index';

export type DetailDataType = {
    art_id: string;
    attitude: number;
    aut_id: string;
    aut_name: string;
    aut_photo: string;
    comm_count: number;
    content: string;
    is_collected: boolean;
    is_followed: boolean;
    like_count: number;
    pubdate: string;
    read_count: number;
    title: string;
}
const fetchDetailsAPI = (id: string) => {
    return http.request<ResType<DetailDataType>>({
        url: `/articles/${id}`
    });

}
export default fetchDetailsAPI;