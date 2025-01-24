import {useNavigate, useSearchParams} from "react-router-dom";
import {getDetailById} from "@/apis/detail.tsx";
import {useEffect, useState} from "react";
import {NavBar} from "antd-mobile";
import './index.scss';

/**
 * @desc:根据文章id：art_id,请求文章详情数据
 *
 * */
export interface IDetail {
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

const Detail = () => {
    // 获取路由查询参数id /articles?id=fdasgaa
    const [params] = useSearchParams();
    // console.log(params);
    console.log(params.get('id'));// 编程式导航路由，文章详情id
    // 编程式导航
    const navigate = useNavigate();
    // 存储文章详情对象
    const [detail, setDetail] = useState<IDetail>();

    // 根据列表项文章id，请求文章详情数据
    useEffect(() => {
        const getDetail = async () => {
            try {
                const res = await getDetailById(params.get('id'));
                console.log(res);
                setDetail(res.data);
            } catch (e) {
                throw new Error(`出现错误：${e}`);
            }
        }
         getDetail();
    }, [])

    const back = () => {
        // 返回上一页
        navigate(-1);

    }
    return (
        <div className="detail-container">
            <NavBar onBack={back} style={{'--height': '50px'}}>{detail?.title}</NavBar>
            {/*dangerouslySetInnerHTML属性，是React中解析html片段的方法，dangerouslySetInnerHTML={{__html:detail?.content}}*/}
            <div className="content" dangerouslySetInnerHTML={{__html: detail?.content ?? ''}}>
            </div>
        </div>
  )
}
export default Detail;