import React from 'react'
import { Link } from 'react-router'
import turing from '../../../static/images/qqgroup.png'

const Turing = (props) => {
  console.log(props.location.search)
  const message = props.location.search === '?update' ? '更新' : '登记成功'
  return (
    <div className="display1">您的信息已经{message}！<Link to="/rule">点此了解比赛规则</Link><br />
      <br />
      <div>
        <img src={turing} width={300} />
      </div>
    </div>
  )
}
export default Turing
