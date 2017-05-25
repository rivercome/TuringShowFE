/**
 * Created by out_xu on 17/5/4.
 */
import React from 'react'
import { Link } from 'react-router'
const Success = (props) => {
  const {location: {search=''}} = props
  console.log(search)
  return (
    <div className="main-content">
      <div className="display1">您的信息已经登记成功！
        {search==='?turing'?<Link to="/rule">点此了解比赛规则</Link>:<Link to="/innovation">点此回到首页</Link>}
      </div>
    </div>
  )
}

export default Success
