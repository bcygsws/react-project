import {useEffect, useState} from "react";
import {getCommentListById} from "@/apis/content.tsx";
import {Image, InfiniteScroll, List} from "antd-mobile";
// 配置
// import {RightOutline} from "antd-mobile-icons";
import {useNavigate} from "react-router-dom";

/**
 * @desc:接收父组件传过来的id，请求得到当前频道下的列表
 *
 *
 * */
export interface IList {
    pre_timestamp: string;
    results: IRes[];
}

export interface IRes {
    art_id: string;
    aut_id: string;
    aut_name: string;
    comm_count: number;
    cover: ICover[];
    is_top: number;
    pubdate: string;
    title: string;

}

export interface ICover {
    type: number;
    images: string[];
}

// 不传id时，默认请求推荐频道下的列表；设置默认值为{id:'0'}
const ListItem = ({id}: { id: string } = {id: '0'}) => {
    console.log(id);
    // console.log(typeof id);

    // hasMore最终为false时，滚动也就到底了
    const [hasMore, setHasMore] = useState(true);
    // react编程式导航，useNavigate()
    const navigate = useNavigate();
    const goToDetails = (id: string) => {
        // 点击列表项，跳转到详情页
        navigate(`/details?id=${id}`);
    }

    // 存储当前id频道下，评论列表内容
    const [articleInfo, setArticleInfo] = useState<IList>({
        results: [],
        pre_timestamp: Date.now() + ''
    });
    // 根据id，获取当前id频道下的评论列表
    // 注：此处依赖id,是抽象了两种情况；id默认传过来为'0',这是推荐频道；id为其他频道时，重新根据id请求数据
    useEffect(() => {
        async function getArticleById() {
            try {
                const res = await getCommentListById({channel_id: id, timestamp: Date.now() + ''});
                console.log(res);
                setArticleInfo({
                    results: res.data.results,
                    pre_timestamp: res.data.pre_timestamp
                })

            } catch (e) {
                throw new Error(`出现错误：${e}`);
            }
        }

        getArticleById();

    }, [id])

    /**
     * @desc:loadMore
     * 滚动条滚动时，触发的事件
     *
     * */
    const loadMore = async () => {
        // 测试滚动条动作事件
        console.log('滚动条滚动了');
        const res = await getCommentListById({channel_id: id, timestamp: articleInfo.pre_timestamp});
        console.log(res);
        // [...oldData,...newData]
        setArticleInfo({
            results: [...articleInfo.results, ...res.data.results],
            pre_timestamp: res.data.pre_timestamp
        })
        // 新数据为空，则hasMore置为false，到底了
        if (res.data.results.length === 0) {
            setHasMore(false);
        }


    }
    return (
        <>
            <List>
                {
                    articleInfo.results.map((item: IRes) => {
                        return (<List.Item key={item.art_id}
                                           prefix={
                                               <Image
                                                   src={item.cover.images ? item.cover.images[0] : ""}
                                                   width={40}
                                                   height={40}
                                                   style={{borderRadius: 20}}
                                                   fit='cover'

                                               />
                                           }
                            // extra={<RightOutline fontSize={18} color="#ccc"/>}
                                           description={item.pubdate}
                                           onClick={() => goToDetails(item.art_id)}
                        >
                            {item.title}
                        </List.Item>)
                    })
                }

            </List>
            {/*无限滚动插件*/}
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={10}/>
        </>
    )
}
export default ListItem;