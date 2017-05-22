/**
 * Created by out_xu on 17/5/4.
 */
import React from 'react'
import {Link} from 'react-router'
const Success = (props) => {
  return (
    <div className="main-content">
      <div className="display1">您的信息已经登记成功！<Link to="/">点此了解比赛规则</Link></div>
    </div>
  )
}

export default Success
