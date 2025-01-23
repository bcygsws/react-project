import {useState} from "react";

/**
 *
 * @name:UnitedType
 * @description:有时，暂时我们不能明确需要为useState传入何种类型的初始值，此时可传入一个null
 * 若知道其一种可能的类型，比如：User；可以使用联合类型作为泛型
 * <User|null>
 *
 * */
const UnitedType = () => {
    // 使用type关键字定义一个类型别名
    type User = {
        name: string;
        age: number;
    }
    const [user, setUser] = useState<User | null>(null);
    const changeHandler = (user: User | null) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    }
    return (<div>
        <h2>二、useState初始值类型不明确或者联合类型</h2>
        <ul>
            <li>name值：{user?.name}</li>
            <li>age值：{user?.age}</li>
        </ul>
        <button onClick={() => changeHandler(null)}>传入null,更改user值</button>
        <button onClick={() => changeHandler({name: "魏无忌", age: 18})}>更改user值</button>
    </div>)
}
export default UnitedType;