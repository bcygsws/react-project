import {useState} from "react";

/**
 * @desc:一、jsx或者tsx基本语法
 *
 * */
const showFigures = (num: number) => {
    if (num === 0) {
        return <div>无图模式</div>
    } else if (num === 1) {
        return <div>单图模式</div>
    } else if (num === 2) {
        return <div>双图模式</div>
    } else {
        return <div>三图模式</div>
    }
}
const list = [
    {
        id: 1,
        name: '张三'
    },
    {
        id: 2,
        name: '逍遥侯'
    },
    {
        id: 3,
        name: '李隆基' +
            ''
    },
    {
        id: 4,
        name: '许远'
    },
    {
        id: 5,
        name: '刘渊'
    },
    {
        id: 6,
        name: '袁承志'
    },
    {
        id: 7,
        name: '紫衣侯'
    },
]
const BaseGrammar = () => {
    const [flag, setFlag] = useState(true);
    return (
        <div>
            <h3>一、这是jsx或者tsx基本语法</h3>
            {/*变量渲染*/}
            <p>{'你好啊~~~~~~~'}</p>
            {/*五种获取时间戳的方式*/}
            <h6>{new Date().getTime()}</h6>
            <h6>{new Date().valueOf()}</h6>
            <h6>{Date.now()}</h6>
            <h6>{Number(new Date())}</h6>
            <h6>{Date.parse(new Date().toString())}</h6>
            {/*当前时间*/}
            <h6>{new Date().toLocaleString()}</h6>
            {/*匹配哪种模式,分支结构渲染*/}
            {showFigures(2)}
            {/*map实现list列表渲染*/}
            {
                list.map(item => <div key={item.id}>{item.name}</div>)
            }
            {/*分支选择*/}
            {flag && <div>我显示了吗？</div>}
            {flag ? <div>我显示了吗？</div> : <div>我隐藏了</div>}
            <button type="button" onClick={() => setFlag(!flag)}>点击按钮，切换显示或隐藏</button>

        </div>
    )

}
export default BaseGrammar;