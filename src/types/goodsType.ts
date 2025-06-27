export interface goodsStoreType {
    foodsList: goodsType[]
    activeIndex: number
    cartList: foodsType[]
}
export interface goodsType {
    tag: number
    name: string
    foods: foodsType[]
}

export interface foodsType {
    id: number
    name: string
    like_ratio_desc: string
    month_saled: number
    unit: string
    food_tag_list: string[]
    price: number
    picture: string
    description: string
    tag: string,
    count: number
}

export interface countType {
    onPlus: Function
    onMinus: Function
    count: number
}

export interface foodsCategoryType {
    name:string
    foods:foodsType[]
}