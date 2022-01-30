import React from 'react';
import { Carousel } from 'antd-mobile';
import PropTypes from 'prop-types';

import { SwiperWrap } from './StyledCookBook';

const Swiper = (props) => {
  return (
    <SwiperWrap>
      <Carousel
        autoplay={true}
        infinite>
        {
          //防止首次加载时数组为空
        props.list.length >0 && props.list.map(value => {
            return (
              <img key={value.id} src={value.img} alt="" />
            )
          })
        }
      </Carousel>
    </SwiperWrap>
  );
};

Swiper.propTypes = {
  list: PropTypes.array
}

export default Swiper