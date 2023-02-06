import React, { PureComponent } from 'react'

export default class StudyForm extends PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      desc: '',
      lucky: '#000000',
      level: '',
      gender: '',
      favArr: []   // 多选
    }
  }

  // 通常建议复用onChange的事件处理器，统一收集表单的值
  change (ev, key) {

    if (key==='favArr') {
      console.log('---changed', ev.target.checked, ev.target.value)
      const { checked, value } = ev.target
      this.setState(_=>{
        return {
          favArr: checked ? [..._.favArr, value] : _.favArr.filter(ele=>ele!==value)
        }
      })
    } else {
      this.setState({ [key]: ev.target.value })
    }
  }

  submit () {
    const data = {
      // name: document.getElementById('name').value
      // name: this.refs.name.value,
      name: this.state.name
    }
    console.log('提交', this.state)
  }

  render () {
    const { name, desc, lucky, level, gender, favArr } = this.state
    return (
      <div>
        <h1>学习表单绑定</h1>

        <div>
          <span>姓名：</span>
          <input
            type="text" id='name' ref='name'
            value={name}
            onChange={ev=>this.change(ev,'name')}
          />
        </div>

        <div>
          <span>介绍：</span>
          <textarea
            cols="30" rows="3"
            value={desc}
            onChange={ev=>this.change(ev,'desc')}
          />
        </div>

        <div>
          <span>幸运色：</span>
          <input
            type="color"
            value={lucky}
            onChange={ev=>this.change(ev,'lucky')}
          />
        </div>

        <div>
          <span>学历：</span>
          {/* select value 是受控， 不是 option value */}
          <select value={level} onChange={ev=>this.change(ev,'level')}>
            {
              [
                {id:1,label:'高中',value:'gaozhong'},
                {id:2,label:'大专',value:'dazhuang'},
                {id:3,label:'本科',value:'benke'}
              ].map(ele=>(
                <option key={ele.id} value={ele.value}>{ele.label}</option>
              ))
            }
          </select>
        </div>

        <div>
          <span>性别：</span>
          {
            [
              {id:1,label:'男',value:'man'},
              {id:2,label:'女',value:'woman'},
              {id:3,label:'保密',value:'unknow'}
            ].map(ele=>(
              <span key={ele.id}>
                {/* 对 type=radio来讲，value是用于ev.target.value取值，checked才是用于受控的 */}
                <input
                  type="radio"
                  value={ele.value}
                  checked={gender===ele.value}
                  onChange={ev=>this.change(ev,'gender')}
                />
                <span>{ele.label}</span>
              </span>
            ))
          }
        </div>

        <div>
          <span>爱好：</span>
          {
            [
              {id:1,label:'篮球',value:'basketball'},
              {id:2,label:'编程',value:'coding'},
              {id:3,label:'跑步',value:'running'},
              {id:4,label:'读书',value:'book'}
            ].map(ele=>(
              <span key={ele.id}>
                <input
                  type="checkbox"
                  value={ele.value}
                  checked={favArr.includes(ele.value)}
                  onChange={ev=>this.change(ev,'favArr')}
                />
                <span>{ele.label}</span>
              </span>
            ))
          }
        </div>



        <button onClick={()=>this.submit()}>提交</button>
      </div>
    )
  }
}
