import styled from '@emotion/styled';
import Img from '../img/Img';
import Commenter from '../comment/Commenter';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/root';

interface DefaultProps {
  handleModalView: () => void;
  commentIndex: number;
  replyIndex: number;
}

const ReplyItem = (props: DefaultProps) => {
  const { commentIndex, handleModalView, replyIndex } = props;
  const { replyContent, replyCreatedAt, replyWriterPhotoUrl } = useSelector(
    (state: RootState) => state.comment.data[commentIndex].replies[replyIndex],
  );

  return (
    <Wrapper>
      <ProfileImageWrapper>
        <Img
          src={'https://d2ffbnf2hpheay.cloudfront.net/' + replyWriterPhotoUrl}
        />
      </ProfileImageWrapper>
      <CommentSection>
        <Commenter
          commentIndex={commentIndex}
          handleModalView={handleModalView}
        />
        <CommentHeader>
          <span id="comment-created-date">{replyCreatedAt}</span>
          <p>{replyContent}</p>
        </CommentHeader>
      </CommentSection>
    </Wrapper>
  );
};

export default ReplyItem;

const Wrapper = styled.li`
  display: flex;
  margin: 16px 0;
`;

const ProfileImageWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(132, 131, 141, 0.25);
  border-radius: 50px;
  margin-right: 12px;
  cursor: pointer;
`;

const CommentSection = styled.section`
  width: 100%;
`;

const CommentHeader = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #a7a7ad;
  }
`;
