import {useParams} from "react-router-dom";

const SonRouter = () => {
    const params = useParams();
    return (
        <div>
            <h6>路径参数或者叫动态参数的获取，son router</h6>
            <p>路径参数id: {params.id}</p>
        </div>
    )
}
export default SonRouter;