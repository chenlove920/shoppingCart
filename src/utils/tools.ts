// 通过数组的方式组合成类名
export const getClassName = (...args: string[]) => {
    return args.reduce((prev, next) => prev + " " + next, "")
}


// 保留两位小数
export const roundToTwoDecimalPlaces = (...args: number[]) => {
    return args.reduce((prev, next) => Math.round(prev * 100 + next * 100) / 100, 0)
}