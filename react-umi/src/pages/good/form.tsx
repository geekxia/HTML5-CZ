

// 常用类型

import { func } from "@umijs/deps/compiled/@hapi/joi"
import { catchClause } from "@umijs/deps/compiled/babel/types"
import { Z_HUFFMAN_ONLY } from "zlib"

const a: number = 200
const b: string = 'hello'
const c: boolean = true
const d: number[] = [1,2,3]
const e: Array<string> = ['a','b','c']
const f: Array<Array<number>> = [[1,2],[2]]
const g: any[] = [1,'a',true,{},[]]
// 元组：长度固定，并且每个位置的元素类型也是固定的数组。
const h: [number,boolean,string,number[]] = [1,true,'a',[1,2]]
const i: any = null
// const j: null = null
// const k: undefined = undefined
// const l: object = {a:1,b:2}

// 枚举类型：数量有限，并且其中的元素各不相同
enum Cate {
  office = '办公用品',
  car = '汽车生活',
  clothe = '男装女装'
}
console.log('---car', Cate.car)
console.log('---car', Cate['car'])

// 在类型语法中，interface可以用于自定义类型
// 在面向对象语法中，interface可以定义接口
// 什么是interface自定义类型：形状Shape
interface Man {
  name: string,
  age: number,
  addr?: string,
  level: 'gaozhong' | 'dazhang' | 'benke',  // '类型联合'
  [propName:string]: any,  // 支持扩展属性
  run: (a:number,b:string) => number,  // 函数类型，只用关注参数类型和返回值类型
  readonly gender: 0 | 1 | 2,
  children: any[]
}

let zs: Man = {
  name: '张三',
  age: 30,
  addr: '广东深圳',
  level: 'benke',
  run: (c:number,d:string) => {
    // do something
    return Number(c+d)
  },
  gender: 2,
  children: [1,'true',false]
}
zs.mobole = '110'
zs.checked = true
zs.name = '李四'

// type 自定义别名
type BasisType = number | string | boolean | 'unkwnow'
const m: BasisType = true
const n: BasisType = 'unkwnow'

interface A {
  a1: number,
  a2?: number
}
interface B {
  b1: string,
  b2: string
}
type C = A | B  // 类型联合
const c1: C = { a1:100, a2:200 }
const c2: C = { b1:'hello', b2:'world' }

type D = A & B   // 类型交叉
const d1: D = {
  a1: 100,
  a2: 200,
  b1: 'heheh',
  b2: '0233'
}

// 泛型：定义函数时，入参的类型是不确定的，使用“泛型”占位；只有当函数被真实调用时，再指定具体的类型。
function info<T> (a:T) {
  console.log('打印a的信息', a)
}
info<number>(1)
info<string>('2')
info<Man>(zs)

// 泛型
function swap<T,U> (a:T, b:U) : T {
  return a
}
const res: number = swap<number,string>(100,'hello')

// 类型推断：用 as 来推荐一个变量类型
const x: any = 'Hello World'
const len: number = (x as string).length

// never类型：
// 表示一个函数声明是没有返回值的，一般这个函数是死循环、抛出一个异常
function dw (a:number): never {
  throw new Error('hehe')
}

try {
  dw(100)
} catch (err) {
 console.log('err', err)
}


import { useState, useEffect } from 'react'

// 使用TS类型验证props
const GoodRow = ({name,price}: GoodRowProps) => {
  return (
    <div>{name} : {price}</div>
  )
}

export default () => {

  // 使用TS类型验证数据流
  const [name, setName] = useState<string>('lisi')
  const [list, setList] = useState<Array<Good>>([])

  useEffect(()=>{
    const arr: Array<Good> = [
      { 
        id: 1, 
        name: '手机', 
        desc:'', 
        status: 1, 
        create_time: 788, 
        img: '', 
        hot: false, 
        price: 10 
      }
    ]
    setList(arr)
  })

    return (
      <div>
        <h1>商品表单</h1>
        {
          list.map((ele:Good) => (
            <GoodRow key={ele.id} name={ele.name} price={ele.price} />
          ))
        }
      </div>
    )
  }
  