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
            第五届『图灵杯』NEUQ-ACM程序设计竞赛 个人赛
            <br />
            比赛规则 & 注意事项，请参赛选手认真阅读
          </div>
          <br />
        </div>

        <div key="rule-content-1">
          <p className="rule-content-title">
            #报名还在继续！
          </p >
          <p className="rule-content-content">

            <br />
            欢迎加入我们的 QQ 群（群号:516244766），以便于我们的的通知发送以及赛果分享！
          </p>
        </div>

        <div key="rule-content-1">
          <p className="rule-content-title">
            #大赛基本情况：
          </p >
          <p className="rule-content-content">
            从2014年举办第一届“图灵杯”程序设计大赛起，迄今已经成功地举办了四届，受到了全校热爱编程同学的欢迎，学生中的影响力越来越大。活动既突出专业特色又寓教于乐，不断提高学生的程序设计水平，在学生中形成了良好的科技创新氛围。比赛平台由ACM俱乐部技术部独立开发完成，组织运作也由ACM俱乐部组织协作开展。
            这项赛事的从无到有，从小到大，倾注了王和兴老师和一代代俱乐部成员的心血。经过全体成员的不懈努力，参赛人数逐年递增，图灵杯从第一届举办时只有不到百人参赛，到第四届图灵杯团队赛举办时已有来自全国八十多所高校的401支队伍，共计1203人参与比赛。
            这是一项与俱乐部共同发展的赛事，也见证了ACM在东秦这块沃土上的成长。现在的图灵杯已经成为了NEUQ-ACM的一张名片，它见证了我们这些ACMer的成长，也将激励东秦的ACMer不断攀登新的高峰。
          </p>
        </div>
        <div key="rule-content-2">
          <p className="rule-content-title">
            #大赛流程：
          </p >
          <p className="rule-content-content">
            1、 使用浏览器访问 <a href="http://turing.acmclub.cn/">图灵杯官网</a> 进行线上报名
            <br />
            2、 等待短信通知参赛账号、比赛地点及座位
            <br />
            3、 在2017年12月3日12：00前至比赛地点签到
            <br />
            4、 打开电脑桌面上的“图灵杯”文件夹根据提示操作
            <br />
            5、 比赛时间4个小时，在最后一小时封榜，不实时更新排名
            <br />
            6、 等待短信通知并出席颁奖典礼。
          </p>
        </div>
        <div key="rule-content-3">
          <p className="rule-content-title">
            #比赛规则：
          </p >
          <p className="rule-content-content">
            1、 个人参赛
            <br />
            2、 比赛时长4个小时、共12道题
            <br />

            3、 本次比赛现场使用NEUQ-OJ（http://oj.acmclub.cn），
            网络赛使用newoj(http://http://newoj.acmclub.cn/)
            参赛队员需预先报名、在现场使用比赛账号参赛，否则不计入成绩
            <br />

            4、 系统会根据每个账号解题数目及时间进行排名，每道试题用时以比赛开始至实体解答杯判定为正确为止，每提交一次错误答案会罚时20分钟。未进行答案提交的试题不计时。
            排名规则：做出的题数>时间，即在最短时间内做出最多的题为胜。
            <br />

            5、支持C/C++/Java三种语言，（编译环境）
            <br />

            6、比赛最后40分钟，比赛排名将封榜，将不实时显示排名，在比赛结束后公布最终排名。
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
            * 以下奖项仅为现场赛设置
            <br />
            > 一等奖10% 二等奖15% 三等奖20%
            <br />

            > 最佳女选手

            <br />

            >顽强拼搏选手

            <br />

            > 班级团队奖项

            >一等奖1队 ， 二等奖2队 ， 三等奖5队

            <br />

            >凡参赛者发纪念章徽章1枚
          </p>
        </div>
        <div key="rule-content-5">
          <p className="rule-content-title">
            #参赛须知：
          </p >
          <p className="rule-content-content">
            1、东北大学秦皇岛分校、燕山大学在校生可参加现场赛。
            <br />
            2、其余高校及社会人士可参加线上邀请赛，报名网络赛后周六统一短信发送比赛账号及密码。
            <br />
            3、入场验证：要求现场赛参赛选手携带学生证在赛前20分钟入场签到核验。网络赛12点准时开赛。
            <br />
            4、赛事工作人员将全程跟踪，如遇比赛系统崩溃，请保持秩序，工作人员将及时处理。
            <br />
            5、参赛人数较多，乘坐电梯及上下楼梯时请注意安全。
          </p>
        </div>
        <div>
          <p className="rule-content-title">创新赛制</p>
          <p className="rule-content-content">
            班级积分的具体规则如下：
            <br />
            （1）竞赛题目共12题，将分为3个梯级：
            <br />
            &nbsp;&nbsp;初级设6道题，其中5分、10分、20分的题各2道，满分为60分；
            <br />
            &nbsp;&nbsp;中级设3道题，每道题30分，满分为90分；
            <br />
            &nbsp;&nbsp;高级设3道题，每道题50分，满分为150分。
            <br />
            （2）参赛队员必须独立按照严格的输入输出要求提交每一题的解题程序。当通过这条题目时得到该题得分，其他任何情况均不得分。整场比赛得分为各题得分之和。提交罚时不计入得分。
            <br />
            （3）参赛队员可以在比赛中的任何时刻尝试解决任何梯级的题目。但只有当一支队伍的基础题人均分超过35分时，其本队进阶部分的题目分数才被判为有效。只有当其进阶题人均分超过35分时，其本队登顶部分的题目分数才被判为有效。
            <br />
            （4）在中级和高级题目中最先完整获得其中任一题分数的前 5 位队员，分别依次获得 50、40、30、20、10 分“先锋奖励”。当团队进阶或登顶成功后，计入该团队的有效分。
            <br />
            （5）班级得分首先根据所有班级成员的总有效得分进行排名。在决定获奖队伍时，如果多支队伍总有效分相同，则根据其最高级别的有效分进行排名；若还有并列，则根据其最高级别完整解决问题的总个数进行排名；若仍然并列，则获得并列名次。
          </p>

        </div>>
      </QueueAnim>
    </div>
  )
}

export default Rule
