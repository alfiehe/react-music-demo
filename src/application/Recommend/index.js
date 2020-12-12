import React from 'react';
import Slider from '../../components/slider'
import RecommendList from '../../components/recommendList';
import { connect } from "react-redux";
import * as actionTypes from './store/actionCreators';

function Recommend(props) {
  const { bannerList, recommendList } = props;

  const { getBannerDataDispatch, getRecommendListDataDispatch } = props;

  React.useEffect(() => {
    getBannerDataDispatch();
    getRecommendListDataDispatch();
    //eslint-disable-next-line
  }, []);

  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];

  // mock数据
  const mockBannerList = [1, 2, 3, 4].map(item => {
    return {
      imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg"
    }
  });

  // mock数据
  const mockRecommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
    return {
      id: 1,
      picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
      playCount: 17171122,
      name: "朴树、许巍、李健、郑钧、老狼、赵雷"
    }
  });

  return (
    <>
      <Slider data={bannerListJS} />
      <RecommendList data={recommendListJS} />
    </>
  )
}

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state) => ({
  // 不要在这里将数据 toJS
  // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList']),
});
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList());
    },
  }
};

// 将 ui 组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));