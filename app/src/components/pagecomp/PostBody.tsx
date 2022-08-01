import React from 'react';
import { css, cx } from '@emotion/css';
import { Box, TextEditor } from '..';
import { font } from '../../styles';
import { Props } from '../../pages/post/Container';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/root';

// 본문, 거래 참고 사항
interface PostBodyProps {
  data?: Props;
  view?: boolean;
  getValue?: boolean;
}
function PostBody(props: PostBodyProps) {
  const { view, getValue } = props;
  const reduxData = useSelector((state: RootState) => state.post.data.response);

  const style = css`
    margin: ${view ? '32px 0px 16px 0px' : '32px 0px 64px 0px'};
    .body {
      padding: ${view && '16px 0px 16px 24px'};
      ${font.size[14]}
      ${font.weight[400]}
      word-break: break-all;
      .rdw-editor-main {
        height: 349px !important;
        padding: 0px !important;
      }
      .DraftEditor-editorContainer {
        padding: 6px;
      }
    }

    .description-scrollBox {
      width: 1080px;
      height: 365px;
      overflow-y: auto;
    }
    .description-box {
      height: fit-content;
    }
  `;

  const body = () => {
    return view ? (
      <div className="description-scrollBox">
        <div
          className="description-box"
          dangerouslySetInnerHTML={{
            __html:
              reduxData.board.description && reduxData.authorization
                ? reduxData.board.description
                : '게시글 상세 조회는 로그인을 하고 이용 하시길 바랍니다.',
          }}
        />
      </div>
    ) : (
      <TextEditor size={379} />
    );
  };

  return (
    <div className={cx(style)}>
      <Box size={[1128, 397]} className="body">
        {body()}
      </Box>
    </div>
  );
}

export default PostBody;
