/**
 * Created by out_xu on 17/5/4.
 */
import React from 'react'
import { Link } from 'react-router'
import '../../static/css/success.css'

const CertreqSuccess = (props) => {
  return (
    <div className="main-content">
      <div className="display1">您的信息已经登记成功！<Link to="/">点此返回首页</Link>
      </div>
    </div>
  )
}

export default CertreqSuccess
