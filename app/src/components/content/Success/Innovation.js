/**
 * Created by out_xu on 17/6/12.
 */
import React from 'react'
import qq from '../../../static/images/qq.png'

const Innovation = (props) => {
  const {location: {query}} = props
  return (
    <div className="success-title">
      <div>
        您好，您已经成功报名「科技 · 新知」 大讲堂第一讲。
        {+query.id > 1 && <div>您是第 <span style={{fontSize: 26}}>{query.id}</span> 位报名的同学。</div>}
      </div>
      <br />
      <div className="success-info">
        活动时间： 2017/06/02 19:30
        <br />
        活动地点： 科技楼9024
      </div>
      {+query.id > 1 && <div>
        <br />
        在活动结束后，
        <br />
        凭此页面将获得京东商城赞助的 <span style={{fontSize: 26}}>礼品一份</span>
      </div>}
      <br />
      此外有个 <span style={{fontSize: 26}}>不情之请</span>
      <br />
      希望您能帮助我们将此活动带向您的朋友们，让更多人了解新科技，让我们了解互联网安全！
      <br />
      <span style={{fontSize: 26}}>点击右上角分享</span>
      <br />
      <br />
      <div>
        <img src={qq} width={120} />
      </div>
    </div>
  )
}

Innovation.propTypes = {}
Innovation.defaultProps = {}

export default Innovation
