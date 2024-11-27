/**
 * @desc:没有依赖
 *
 * */
import {useEffect, useState} from "react";
const NoDependency = () => {
    const [count, setCount] = useState(0);
    // 点击按钮，count值改变，useEffect里的内容，还是在组件初始渲染时执行了一次
    useEffect(() => {
        console.log('useEffect执行了---没有依赖');
    });
  return (
    <div>
      <h6>情形一、没有依赖</h6>
        <button onClick={() => setCount(count + 1)}>没有依赖时，初始渲染和组件更新时，都会执行一次</button>
    </div>
  )
};
export default NoDependency;