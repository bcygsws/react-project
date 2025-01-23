import "./index.scss";
import {List, Image} from "antd-mobile";
import {ArticleItem, getArticlesAPI, ListRes} from "@/apis/list";
import {useEffect, useState} from "react";
import {InfiniteScroll} from "antd-mobile";
import {useNavigate} from "react-router-dom";

type Prop = {
    id: number
}
const ListItem = (props: Prop) => {
    const {id} = props;
    console.log(typeof id);
    console.log(id);
    /**
     * @name:changeHandler
     * @description:切换标签页时，可以随时获取标签页的key值，
     * string类型
     *
     *
     * 1.在页面渲染初始阶段：传入的params参数是：{channel_id: '0', timestamp: new Date().toString()}
     * 2.在不同的频道切换期间：channel_id变化，使用useEffect钩子，让请求参数params依赖channel_id的变化
     *
     * @getArticlesAPI请求
     * 参数说明：
     * 两个查询参数：
     * channel_id, string类型  number+'',转换成string类型
     * timestamp， string类型  Date类型+'',转化成string
     *
     *
     * */
        // 将文章列表维护成一个状态变量
    const [articleInfo, setArticleInfo] = useState<ListRes>({
            results: [],
            pre_timestamp: new Date().getTime() + ''
        });
    useEffect(() => {
        async function getArticlesList() {
            try {
                // 注意：两个查询参数类型，都需要转换成string
                const res = await getArticlesAPI({channel_id: id + '', timestamp: new Date().getTime() + ''});
                console.log(res);
                setArticleInfo({
                    results: res.data.data.results,
                    pre_timestamp: res.data.data.pre_timestamp
                });
            } catch (e) {
                throw new Error(`出现错误：${e}`);
            }

        }

        getArticlesList();
    }, [id]);
    /**
     * @name:无限滚动组件-InfiniteScroll组件
     * @description:使用无限滚动，主要是编写loadMore方法里的逻辑，注意数据列表的格式
     * loadMore方法：
     * 1.状态量set方法更新：results[...旧列表，...新列表]
     * 2.渲染数据源为1中更新的results
     * results.map((item)=>{
     *
     * })
     * 3.新列表.length===0了，hasMore置为false,就会出现下拉动画了
     *
     * */
        // 是否还有更多，维护成状态变量hasMore,默认为true,表示还可以加载更多
    const [hasMore, setHasMore] = useState(true);
    // 加载下一页的逻辑
    const loadMore = async () => {
        // 上拉加载出发了
        console.log('上拉加载触发了……');
        // 获取数据：上一次请求得到的pre_timestamp,作为下拉刷新，请求新数据的参数
        const res = await getArticlesAPI({channel_id: id + '', timestamp: articleInfo.pre_timestamp});
        console.log(res);
        setArticleInfo({
            // results数组中：旧数据拼接上新数据,格式：[...oldList,...newList]
            results: [...articleInfo.results, ...res.data.data.results],
            pre_timestamp: res.data.data.pre_timestamp // 存好，作为下一次请求的参数
        });
        // 监听：请求不到数据了，显示"没有更多了"
        // 条件：新数据列表newList的数组长度
        if (res.data.data.results.length === 0) {
            setHasMore(false);
        }

    }

    /**
     * @name:goToDetails
     * @description:点击列表中的一条数据，发起详情页数据请求和路由跳转
     *
     * */
    const navigate = useNavigate();
    const goToDetails = (id: string) => {
        console.log(id);
        // 根据id请求数据
        // 路由跳转至详情页
        navigate(`/detail?id=${id}`);

    }
    return (<>
        <List>
            {articleInfo.results.map((item: ArticleItem) => (
                // 对于部分item的cover中没有images键，需要做三元表达式的判断处理
                <List.Item
                    key={item.art_id}
                    prefix={
                        <Image
                            src={item.cover.images ? item.cover.images[0] : ""}
                            style={{borderRadius: 20}}
                            fit='cover'
                            width={40}
                            height={40}
                        />
                    }
                    description={item.pubdate}
                    onClick={() => goToDetails(item.art_id)}
                >
                    {item.title}
                </List.Item>
            ))}
        </List>
        {/*阈值：threshold滚动到距离底部即将小于10像素时，才触发*/}
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={10}/>

    </>);
}
export default ListItem;