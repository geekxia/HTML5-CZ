// 自定义类型（约束后端数据）
interface User {
    name: string,   // 必填属性
    age: string,
    addr: string,
    mobile?: string,
    hot?: boolean,
    children?: any[],
    [propName:string]: any   // 接收任何多余的字段
}

interface UserTableProps {
    list: Array<User>,
    page?: number
}

// 别名
type x = (number | number[] | null)
type y = (number | string)