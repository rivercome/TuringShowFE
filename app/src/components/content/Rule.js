import React from 'react'
import QueueAnim from 'rc-queue-anim'
import '../../static/css/rule.css'
const Rule = (props) => {
  return (
    <div>
      <QueueAnim
        type='right'
        className="main-content"
        delay={300}
        duration={600}
      >
        <div className="form-content-header" key="form-content-header">
          <div className="form-content-header-title">
            第四届 NEUQ-ACM 图灵杯程序设计大赛（团队赛）
            <br />
            比赛规则 & 注意事项，请参赛选手认真阅读
          </div>
          <br />
        </div>
        <div key="rule-content-1">
          <p className="rule-content-title">
            #大赛基本情况：
          </p >
          <p className="rule-content-content">
            NEUQ-ACM "图灵杯"程序设计大赛始于2012年，在每个学年第一学期举办个人赛，第二学期举办团队赛。本学期将于2017年6月11日举办第四届团队赛。自 NEUQ-ACM
            第一届“图灵杯”程序设计大赛以来，累计约有136所高校参赛，在去年11月举办的第四届个人赛中，共有来自清华大学、北京大学、电子科技大学等67所高校的497名选手参赛，基本覆盖全国各地知名高校。
          </p>
        </div>
        <div key="rule-content-2">
          <p className="rule-content-title">
            #大赛流程：
          </p >
          <p className="rule-content-content">
            1、 使用浏览器登陆「url」进行线上报名
            <br />
            2、 等待短信通知参赛账号、比赛地点及座位
            <br />
            3、 在2017年6月11日9:40至比赛地点签到
            <br />
            4、 打开电脑桌面上的“图灵杯”文件夹根据提示操作
            <br />
            5、 比赛时间5个小时，在最后一小时封榜，不实时更新排名
            <br />
            6、 等待短信通知并出席颁奖典礼。
          </p>
        </div>
        <div key="rule-content-3">
          <p className="rule-content-title">
            #比赛规则：
          </p >
          <p className="rule-content-content">
            1、 组队参赛，2～3人一队
            <br />
            2、 比赛时长5个小时、共10道题
            <br />

            3、 本次比赛使用NEUQ-OJ（http://oj.acmclub.cn），参赛队员需预先报名、在现场使用比赛账号参赛，否则不计入成绩
            <br />

            4、 系统会根据每个账号解题数目及时间进行排名，每道试题用时以比赛开始至实体解答杯判定为正确为止，每提交一次错误答案会罚时20分钟。未进行答案提交的试题不计时。
            排名规则：做出的题数>时间，即在最短时间内做出最多的题为胜。
            <br />

            5、支持C/C++/Java三种语言，（编译环境）
            <br />

            6、比赛最后一小时，比赛排名将封榜，将不实时显示排名，在比赛结束后公布最终排名。
            <br />

            7、 本次竞赛机器无法连接互联网，只可访问我校内部局域网，不允许使用u盘、手机等电子设备，但可携带最多两本纸质书籍。
            <br />

            8、 为了保证比赛公平公正地举行，我们会对所有提交的代码进行查重，如发现涉嫌代码雷同，将取消其获奖资格。
          </p>
        </div>


        <div key="rule-content-4">
          <p className="rule-content-title">
            #奖项设置：
          </p >
          <p className="rule-content-content">
            1、特等奖1队，专为AK队设置，无AK队不颁发
            <br />
            2、一等奖10%
            <br />
            3、二等奖20%
            <br />
            4、三等奖30%
            <br />
            5、首杀奖10队，颁发给每道题第一个提交正确的队伍。可重复颁发，可与上述奖项重叠。
            <br />
            6、优秀新人奖3队，排名最高的前三个纯2016级队伍，可与上述奖项重叠。
            <br />
            7、优秀女生奖3队，排名最高的前三个女生队伍，可与上述奖项重叠。
          </p>
        </div>
        <div key="rule-content-5">
          <p className="rule-content-title">
            #参赛条件&比赛须知：
          </p >
          <p className="rule-content-content">
            1、 东北大学秦皇岛分校、燕山大学在校生可参加现场赛
            <br />
            2、 其余高校及社会人士可参加线上邀请赛，在neuq-oj注册账号即可同步参赛。
            <br />
            3、 入场验证：要求现场赛参赛选手携带学生证在赛前20分钟入场签到核验。
            <br />
            4、赛事工作人员将全程跟踪，如遇比赛系统崩溃，请保持秩序，工作人员将及时处理。
            <br />
            5、参赛人数较多，乘坐电梯及上下楼梯时请注意安全。
          </p>
        </div>

      </QueueAnim>
    </div>
  )
  }

  export default Rule
