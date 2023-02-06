// type Key = number | string;

interface Good {
    name: string,
    img: string,
    price: number,
    hot: boolean,
    status: 0 | 1,
    create_time: number,
    desc: string,
    [propName:string]: any
}