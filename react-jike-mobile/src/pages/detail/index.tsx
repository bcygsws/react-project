import fetchDetailsAPI, {DetailDataType} from "@/apis/detail";
import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {NavBar} from "antd-mobile";
import './index.scss';

/**
 *
 * @name:Detail
 * @description:详情页
 *
 * 1.获取查询参数，const [params]=useSearchParams();
 * 2.获取文章详情，对象
 *
 * */
const Detail = () => {
    // 获取路由查询参数
    const [params] = useSearchParams();
    const id = params.get('id');
    // 存储数据对象
    const [detailInfo, setDetailInfo] = useState<DetailDataType | null>(null);

    useEffect(() => {
        const getDetail = async () => {
            // 给id断言，它不是null,语法：id!
            // 变量！，表示非空断言符号
            try {
                const res = await fetchDetailsAPI(id!);
                console.log(res);
                // 修改detailInfo
                setDetailInfo(res.data.data);
            } catch (e) {
                throw new Error(`出现错误：${e}`);
            }
        }
        getDetail();
    }, [id]);
    /**
     * @name:backHandler
     * @description:返回按钮，onBack事件处理函数
     *
     * */
    const navigate = useNavigate();
    const backHandler = () => {
        navigate(-1);
    }
    /**
     * @name:加载中优化
     * @description:从后端请求数据，需要时间，detailInfo对象，开始为null
     *
     * */
    if (!detailInfo) {
        return <div>加载中……</div>
    }
    // 优化：以上加载中 模板detailInfo为null的情况，后续渲染避免一些类型错误提示
    return (<div className="detail-container">
        {/*详情页模板*/}
        <NavBar onBack={backHandler}>{detailInfo?.title}</NavBar>
        {/*渲染数据*/}
        {/*dangerouslySetInnerHTML属性，是React组件中，将html字符串插入到组件中的方法
        dangerously也表示要，"<p>abc</p>"，这个字符串就会插入到当前div中*/}
        <div dangerouslySetInnerHTML={{__html: detailInfo?.content}}></div>
    </div>)
}
export default Detail;