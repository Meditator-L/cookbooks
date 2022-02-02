import styled from 'styled-components';

const ellipsis = WrappedComp => {
  return styled(WrappedComp)`
  overflow:hiddern;
  text-overflow: ellipsis;
  dispaly: -webkit-box;    
  -webkit-box-orient: vertical;    
  -webkit-line-clamp: ${({lc}) => lc || 1};    
  `
}

export default ellipsis