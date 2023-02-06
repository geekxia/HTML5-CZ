import React from 'react'
import PropTypes from 'prop-types'

const ThemeToggle = ({value, onChange}) => {

  const change = ev => {
    const key = ev.target.name
    // 把最新的theme回传给父组件
    onChange({ ...value, [key]: ev.target.value })
  }

  return (
    <div>
      <span>前景色：</span>
      <input type="color" name='color' value={value.color} onChange={change} />
      <span>背景色：</span>
      <input type="color" name='background' value={value.background} onChange={change} />
    </div>
  )
}

ThemeToggle.propTypes = {
  value: PropTypes.shape({
    color: PropTypes.string,
    background: PropTypes.string
  }),
  onChange: PropTypes.func
}

ThemeToggle.defaultProps = {
  value: {
    color: '#000000',
    background: '#ffffff'
  }
}

export default ThemeToggle
