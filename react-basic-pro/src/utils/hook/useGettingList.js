/**
 * 自定义hook
 * @请求数据
 *
 * */
import axios from "axios";
import {useEffect} from "react";
import comFn from "../ComFn";

export default async function useGettingList(url, fn) {
	useEffect(() => {
		async function getList() {
			const {status, data} = await axios.get(url);
			if (status === 200) {
				fn(data.sort(comFn("like")));
			}

		}

		getList();

	}, []);
}