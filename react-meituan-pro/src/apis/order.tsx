import {$http} from "@/utils";

/**
 * @desc:点餐页相关api
 *
 *
 * */
export interface IOrder {
    tag: string
    name: string
    id: string
    foods: Array<IFood>
}

export interface IFood {
    id: number
    price: number
    description: string
    food_tag_list: string[]
    like_ratio_desc: string
    month_saled: number
    name: string
    picture: string
    tag: string
    unit: string
}

const getFoodListAPI = () => {
    return $http.request({
        url: 'takeaway'
    })
}
const getOrderObjAPI = (id: string) => {
    return $http.request({
        url: `takeaway/${id}`
    })

}
export {
    getFoodListAPI,
    getOrderObjAPI
}