import {useState} from "react";

/**
 * @name:GenericParams
 * @description:useState泛型参数
 * 一旦useState使用了泛型：
 * 1.限制了useState传入的值都必须是User类型或者返回User类型数据的函数
 * 2.限制了setUser传入的类型，必须是User类型或者()=>User|undefined,
 * 其中undefined必须是在useState没有传入初始值时才生效
 *
 *
 * */
const GenericParams = () => {
    type User = {
        name: string;
        age: number;
    }
    const [user, setUser] = useState<User>({name: "Jack", age: 16});
    const changeUser = () => {
        setUser({...user, name: "Jack Ma"});
    }
    return (<div>
        <h2>一、useState泛型参数</h2>
        {/* 泛型参数：一种约束*/}
        <ul>
            <li>name值：{user.name}</li>
            <li>age值：{user.age}</li>
        </ul>
        <button onClick={changeUser}>更改user值</button>
    </div>)
}
export default GenericParams;