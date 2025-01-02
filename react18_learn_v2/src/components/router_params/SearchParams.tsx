import {useSearchParams} from "react-router-dom";

/**
 * @desc：查询参数的获取
 *
 *
 * */
const SearchParams = () => {
    // []变量名，可以任意取，但满足xyz---setXyz 这样成对出现
    const [params, setParams] = useSearchParams();
    return (
        <div>
            <h6>查询参数的获取</h6>
            <p>{params.get("id")}</p>
            <button onClick={() => setParams("?id=100")}>更改查询参数</button>
        </div>
    )
}
export default SearchParams;