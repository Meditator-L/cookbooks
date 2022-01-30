import React from 'react';
import PropTypes from 'prop-types';
import memoize  from 'memoize-one';

import { Container } from './StyledCookBook';
import Swiper from './Swiper';
import Search from '@c/Search/Search';
import HotCate from './HotCate';
import Top10 from './Top10';



//ui组件
const CookBookUi = (props) => {
  //过滤
  const swiper = memoize(list => list.slice(0, 5))
  const top10 = memoize(list => list.slice(0, 10))
  
  return (
    <Container>
      <header>
        美食大全
      </header>
      <Swiper list={swiper(props.list)}></Swiper>
      <Search></Search>
      <HotCate ></HotCate>
      <Top10 list={top10(props.list)}></Top10>
    </Container >
  )
}
 
CookBookUi.propTypes = {
  list:PropTypes.array
}

export default CookBookUi