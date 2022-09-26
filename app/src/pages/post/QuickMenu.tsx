import React from 'react';
import { css, cx } from '@emotion/css';
import { color, font } from '../../styles';
import PostWriter from './PostWriter';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/root';

interface PostInfoProps {
  quickMenu?: boolean;
  close: () => void;
}

function QuickMenu(props: PostInfoProps) {
  const { close } = props;
  const reduxData = useSelector(
    (state: RootState) => state.post.data.response.board,
  );

  const showDDAYContent = () => {
    if (!reduxData.isDeadline) {
      if (reduxData.decimalDay !== null) {
        return reduxData.decimalDay
          ? css`
              background-color: ${color.subtle};
              color: ${color.main};
              content: 'D ${reduxData.decimalDay}';
            `
          : css`
              background-color: ${color.main};
              color: white;
              content: 'D-DAY';
            `;
      }
      return css`
        background-color: ${color.main};
        color: white;
        content: '상시';
      `;
    } else {
      return css`
        background-color: ${color.dark1};
        color: white;
        content: '마감';
      `;
    }
  };

  const common = css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    width: 1128px;
    background-color: white;
    border-radius: 0px 0px 6px 6px;
    box-shadow: 0px 4px 4px 0px #0000001a;
    padding: 0px 24px 20px 24px;
    color: ${color.dark1};
    .title {
      margin-top: 20px;
      display: flex;
      align-items: center;
      height: 21px;
      ${font.size[16]}
      ${font.weight[700]}
      :after {
        width: 47px;
        height: 24px;
        ${showDDAYContent()}
        ${font.size[14]}
        ${font.weight[400]}
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2px 0px 0px 16px;
      }
    }
    .price {
      ${font.size[14]}
      ${font.weight[400]}
      height: 24px;
      :after {
        content: '${reduxData.price ? '원' : ''}';
        margin: 0px 0px 0px 4px;
      }
    }
    .userData {
      margin-right: 16px;
    }
  `;

  return (
    <div className={cx(common)}>
      <div>
        <p className="title">{reduxData.title}</p>
        <p className="price">
          {reduxData.price ? reduxData.price.toLocaleString() : '무료'}
        </p>
      </div>
      <PostWriter close={close} />
    </div>
  );
}

export default QuickMenu;