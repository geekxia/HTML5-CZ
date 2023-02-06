
const a: number = 100
const b: string = 'hello'
const c: boolean = true
const d: Array<number> = [1,2,3]
const e: string[] = ['a','b']
const f: any[] = [true,'45',90]
const g: Array<any> = ['ehl',9]

const h: any = null
const i: null = null
const j: undefined = undefined

const k: '张三' = '张三'


// 类型联合
const l: y = 900
const s: x = [1,2,3]

// 关注入参类型、返回值类型
function add (a: number, b: string) : number {
    console.log(a)
    console.log(b)
    return Number(a + b)
}
add(1, '2')

// 泛型，定义时给个占位符；使用时，再指定具体的类型。
function foo<T> (a: T, b: T) : T {
    return a
}
foo<number>(1, 2)
foo<boolean>(true,false)

function bar<T,U> (a: U, b: T) : void {
    console.log(a)
    console.log(b)
}
bar<number[], boolean>(true, [1,2,4])
bar<Array<number>, boolean>(true, [1,2,4])

import { useState, useEffect } from 'react'
const list = [
    {
        id: 1,
        name: '张三',
        age: '90',
        addr: '广东深圳',
        mobile: '110'
    }
]

const UserTable = (props: UserTableProps) => {
    return (
        <div>
            {
                props.list.map((ele:User)=>(
                    <div key={ele.id}>{ele.name} - {ele.age}</div>
                ))
            }
        </div>
    )
}

export default () => {

    const [num, setNum] = useState<string>('hello')
    const [xx, setXx] = useState<Array<object>>([])

    const [userList, setUserList] = useState<Array<User>>([])

    useEffect(()=>{
        setUserList(list)
    }, [])

    return (
        <>
            <div>学习TS</div>
            <UserTable list={userList} page={1} />
        </>
        
    )
}