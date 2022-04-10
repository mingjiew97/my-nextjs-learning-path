import { Global } from '@emotion/react'

const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
          border-radius: 12px;
        }
      `}
  />
);
export default GridItemStyle;
