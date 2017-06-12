/**
 * Created by out_xu on 17/5/4.
 */
import React from 'react'
import { Link } from 'react-router'
import '../../../static/css/success.css'
import jd from '../../../static/images/jd.png'
const CertreqSuccess = (props) => {
  const {location: {search}} = props
  return (
    <div>
      {search ? <div className="display1">您的信息已经登记成功！<Link to="/turingFeedback">点此为本次竞赛填写反馈问卷</Link></div> :
        <div className="display1">感谢填写反馈问卷！</div> }
      <br />
      <div style={{fontSize: 16}}>
        特别感谢 <a>甲骨文（河北）OAEC 人才产业基地 </a> 及 <a>京东</a> 对本次竞赛的大力支持。如果对赛事有槽点，欢迎大家移步 <a href="https://www.zhihu.com/question/60957012?utm_source=qq&utm_medium=social"> 知乎</a>吐槽。
        <br />
        此外有个 <span style={{fontSize: 26}}>不情之请</span>
        <br />
        由于赛事举办过程中事务繁多，一直忘记了跟京东的合作，让我们帮助宣传大学生的京东身份认证。请方便的同学能用微信扫描以下二维码，进行京东校园身份认证，以感谢京东对本次活动的赞助！
        感谢各位参赛队伍，从这个链接做一下认证，京东会对认证通过的同学有很多优惠措施，拜托了！！！
        <br />
        <br />
        <img src={jd} width='200' />
      </div>

    </div>
  )
}

export default CertreqSuccess
