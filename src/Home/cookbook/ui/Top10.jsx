import React, { Component } from 'react';
import {Top10Wrap} from './StyledCookBook';
class Top10 extends Component {
  render() {
    return (
      <Top10Wrap>
        <h1>美食大全</h1>
        <ul>
          <li>
            <div>
              <img src="http:\/\/s1.cdn.jiaonizuocai.com\/videoImg\/201510\/1313\/561c9a314c8bb.jpg\/OTAweDYwMA" alt=""/>
            </div>
            <div>
              <p>西芹泡椒爆鱿鱼</p>
              <p>
                <span>1000</span>
                浏览
                <span>1000</span>
                收藏
              </p>
            </div>
          </li>
          <li>
            <div>
              <img src="http:\/\/s1.cdn.jiaonizuocai.com\/videoImg\/201510\/1313\/561c9a314c8bb.jpg\/OTAweDYwMA" alt=""/>
            </div>
            <div>
              <p>西芹泡椒爆鱿鱼</p>
              <p>
                <span>1000</span>
                浏览
                <span>1000</span>
                收藏
              </p>
            </div>
          </li>
        </ul>
      </Top10Wrap>
    );
  }
}

export default Top10;