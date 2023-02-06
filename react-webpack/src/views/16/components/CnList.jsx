import React from 'react'

function time(val){
  const s = (Date.now()-Date.parse(val))/1000
  return (
    s/60 < 1
      ? Math.floor(s)+' 秒前'
      : s/60/60 < 1
        ? Math.floor(s/60)+' 分钟前'
        : s/60/60/24 < 1
          ? Math.floor(s/60/60)+' 小时前'
          : s/60/60/24/30 < 1
            ? Math.floor(s/60/60/24)+' 天前'
            : s/60/60/24/30/12 < 1
              ? Math.floor(s/60/60/24/30)+' 月前'
              : Math.floor(s/60/60/24/30/12)+' 年前'
  )
}

export default ({list}) => {
  console.log('------xx list', list)
  return (
    <div className='article-list'>
    {
      list.map(row=>(
        <div className='article' key={row.id}>
          <img src={row.author.avatar_url} />
          <div className='num'>
            <span>{row.reply_count}</span>
            <span>/</span>
            <span>{row.visit_count}</span>
          </div>
          {
            (row.top || row.good || row.first)
              && <span
                  className={`label ${(row.top || row.good)?"on":""}`}>
                  { row.label }
                </span>
          }

          <span className='title'>{row.title}</span>
          <span className='time'>{time(row.last_reply_at)}</span>
        </div>
      ))
    }
    </div>
  )
}
