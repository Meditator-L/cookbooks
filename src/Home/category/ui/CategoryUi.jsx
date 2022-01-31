import React from 'react';
import { CategoryWrap } from './Styledcategory';
import Search from '@c/Search/Search.jsx';
import Menu from './Menu';
const CategoryUi = (props) => {
  const { tabIndex, type, onCategoryUiClick } = props
  return (
    <CategoryWrap>
      <nav>
        <ul>
          <li className={tabIndex === 0 ? 'active' : ''}
            onClick={onCategoryUiClick(0)}
          >分类</li>
          <li
            className={tabIndex === 1 ? 'active' : ''}
            onClick={onCategoryUiClick(1)}
          >食材</li>
          <li className={tabIndex === 0 ? 'slide' : 'slide right'}></li>
        </ul>
      </nav>
      <Search
        outerbg="#fff"
        innerbg='#efefef'
        hasborder={false}
      ></Search>
      <Menu
        type={type}

      ></Menu>
    </CategoryWrap >
  );
}

export default CategoryUi