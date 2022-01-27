import styled from 'styled-components';

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
const SwiperWrap = styled.div`
  height:0;
  font-size:0;
  padding-bottom:66.666667%;
  position:relative;
  .slider.am-carousel{
    position:static !important;
  }
`

export {Container,SwiperWrap}