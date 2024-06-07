/**
 *@sass/scss的默认支持+css模块化
 * 1.关于sass/scss的支持：只需要在create-react-app脚手架创建的项目中，安装sass包，无需其他任何配置，就可以使用sass/scss预处理样式了
 * 2.关于css模块化
 * 2.1 需要将.scss或者.sass文件名，改造成 文件名.module.scss 或者 文件名.module.sass的形式
 * 2.2 由直接import "./xxx/basic.scss"导入样式，变成import StyleObj from "";的形式
 * 3.3 将类名改造一下
 * 例如：className="container"
 * 改成 className={styleObj.container}
 *
 *
 * */
// 导入样式文件
import styleTest from "./css/base.module.scss";

export default function MyTest() {
    return (<div className={styleTest.container}>
        <h1 className={styleTest.title}>测试脚手架工具create-react-app对sass的支持</h1>
    </div>)
}