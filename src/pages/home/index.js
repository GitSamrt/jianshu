import React, { PureComponent } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { BackTop } from './style'

import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'

class Home extends PureComponent {

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img 
              className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              alt=""
            />
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
          {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
        </HomeWrapper>
      </div>
    )
  }


  componentDidMount() {
    this.props.changHomeData();
    this.bindEvent();
  }
  
  componentWillMount() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvent() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.get('home').get('showScroll')
})


const mapDispatchToProps = (dispatch) => ({
  changHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})




export default connect(mapStateToProps, mapDispatchToProps)(Home)