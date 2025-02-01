import './index.scss';
import {SearchBar, Tabs} from "antd-mobile";

const Home = () => {
    return (<div className="home-container">
        {/*头部标签栏*/}
        <div className="tabbar">
            {/*点菜、评价、商家tabs*/}
            <div className="left">
                <Tabs>
                    <Tabs.Tab title='点菜' key='fruits'>
                        菠萝
                    </Tabs.Tab>
                    <Tabs.Tab title='评价' key='vegetables'>
                        西红柿
                    </Tabs.Tab>
                    <Tabs.Tab title='商家' key='animals'>
                        蚂蚁
                    </Tabs.Tab>
                </Tabs>

            </div>
            {/*检索*/}
            <div className="right">
                <SearchBar placeholder="搜索"/>
            </div>
        </div>
        <div className="bot">
            <div className="bot-left">a左右</div>
            <div className="bot-right">ddfdd</div>
        </div>

    </div>)
}
export default Home;