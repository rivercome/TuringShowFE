import React from 'react'
import { Link } from 'react-router'
import turing from '../../../static/images/turing2017.png'

const Turing = (props) => {
  return (
    <div className="display1">您的信息已经登记成功！<Link to="/rule">点此了解比赛规则</Link><br />
      <br />
      <div>
        <img src={turing} width={300} />
      </div>
    </div>
  )
}
export default Turing
