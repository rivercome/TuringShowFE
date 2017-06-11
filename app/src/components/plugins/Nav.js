import React, { PropTypes } from 'react'
import TweenOne from 'rc-tween-one'
import { Menu } from 'antd'
import goto from '../../utils/goto'
import logo from '../../static/images/acm_logo_long.png'
import {Link} from 'react-router'
const Item = Menu.Item
class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      phoneOpen: false,
    }
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    })
  }

  handleClick = (e) => {
    goto('/' + e.key)
  }

  render () {
    const props = {...this.props}
    const isMode = props.isMode
    delete props.isMode
    const navData = {'turing': '了解图灵杯', 'innovation': '科技 · 新知','certreq': '图灵杯证书','applyInnovation': '报名大讲堂' }
    const navChildren = Object.keys(navData)
      .map((key, i) => (<Item key={key}>{navData[key]}</Item>))
    return (
      <TweenOne
        animation={{opacity: 0, type: 'from'}}
        className='header'
      >
        <TweenOne
          className={`${this.props.className}-logo`}
          animation={{x: -30, type: 'from', ease: 'easeOutQuad'}}
          id={`${this.props.id}-logo`}
        >
          <Link to="/"><img width="100%" src={logo} /></Link>
        </TweenOne>
        {isMode ? (<div
          className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
          id={`${this.props.id}-menu`}
        >
          <div
            className={`${this.props.className}-phone-nav-bar`}
            onClick={() => {
              this.phoneClick()
            }}
          >
            <em />
            <em />
            <em />
          </div>
          <div
            className={`${this.props.className}-phone-nav-text`}
          >
            <Menu
              defaultSelectedKeys={props.path}
              mode="inline"
              theme="dark"
              onClick={this.handleClick}
            >
              {navChildren}
            </Menu>
          </div>
        </div>) : (<TweenOne
          className={`${this.props.className}-nav`}
          animation={{x: 30, type: 'from', ease: 'easeOutQuad'}}
        >
          <Menu
            mode="horizontal" defaultSelectedKeys={props.path}
            id={`${this.props.id}-menu`}
            onClick={this.handleClick}
          >
            {navChildren}
          </Menu>
        </TweenOne>)}
      </TweenOne>
    )
  }
}

Header.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string,
}

Header.defaultProps = {
  className: 'header',
}

export default Header
