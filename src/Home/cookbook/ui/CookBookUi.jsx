import React from 'react';
import { Container } from './StyledCookBook';
import Swiper from './Swiper';
import Search from '@c/Search/Search';
import HotCate from './HotCate';
import Top10 from './Top10';

const CookBookUi = () => {
  return (
    <Container>
      <header>
        美食大全
      </header>
      <Swiper></Swiper>
      <Search></Search>
      <HotCate></HotCate>
      <Top10></Top10>
    </Container >
  )
}

export default CookBookUi