import styled from 'styled-components';
import border from '@a/styled/border';
import ellipsis from '@a/styled/ellipsis';

const Container = styled.div`
header{
  height:.44rem;
  line-height:.44rem;
  text-align:center;
  font-size:.16rem;
  color:#fff;
  background-color:#ee742f
}
`
//解决swiper首次加载bug
const SwiperWrap = styled.div`
  height:0;
  font-size:0;
  padding-bottom:66.666667%;
  position:relative;
  .slider.am-carousel{
    position:static !important;
  }
`
//热门分类样式
const HotCateWrap = styled.div `
  h1 {
    height: .5rem;
    padding-left: .1rem;
    color: #666;
    line-height: .5rem;
    font-weight: normal;
    background-color: #fff;
    border-bottom: solid 1px #ccc;
  }
  > div {
    background-color: #fff;
    padding-top: .2rem;
    .grid-item {
      padding-bottom: .1rem;
      
      img {
        width: .6rem;
        height: .6rem;
        margin-bottom: .04rem;
        border-radius: .06rem;
        &[src='blank'] {
          display: none;
        }
      }
    }
    .am-grid-item-content {
      padding: 0 !important;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`
const H1Container =border(
  styled.h1`

  height: .5rem;
  padding-left: .1rem;
  color: #666;
  line-height: .5rem;
  font-weight: normal;
  border-bottom: solid 1px #ccc;
`
)

const Top10Wrap = styled.div`
  
  ul {
     display: flex;
     width:100%;
     flex-wrap:wrap;
     padding-left: .1rem;
     li {
       width:50%;
       padding-right: .1rem;
       img {
         width: 100%;
       }
       > div:last-child {
         display: flex;
         flex-direction:column;
         height:.6rem;
         background: #fff;
         margin-bottom: .1rem;
         justify-content: center;
         align-items: center;
         > p:first-child {
           font-size: .18rem;
         }
         > p:last-child {
           color: #666;
         }
       }
     }
  }
`
const SubTitle = ellipsis(
  styled.p``
)


export {Container,SwiperWrap,HotCateWrap,Top10Wrap,H1Container,SubTitle}