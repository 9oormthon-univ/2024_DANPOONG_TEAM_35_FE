import styled from "styled-components";
import { IoIosArrowDropright } from "react-icons/io";

function NewsCard() {
  return (
    <Container>
      <TopContainer>
        <TitleText>구름톤 유니브 3기</TitleText>
        <RightArrow />
      </TopContainer>
      <SubText>
        구름톤 유니브 3기를 진행하면서 AI가 한 번의 경험정리로 자기소개서
        작성해주는 플랫폼인 자소플에 참여했습니다!
      </SubText>
      <TagContainer>
        <TitleTag>리더십</TitleTag>
        <Tag>창의력</Tag>
        <Tag>도전</Tag>
        <Tag>열정</Tag>
      </TagContainer>
    </Container>
  );
}
export default NewsCard;

const Container = styled.div`
  width: 200px;

  background-color: white;
  border: 1px solid var(--color-light-gray);
  border-radius: 10px;
  padding: 20px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TitleText = styled.p`
  font-size: 14px;
  font-weight: var(--weight-bold);

  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const SubText = styled.p`
  font-size: 12px;
  font-weight: var(--weight-light);
  line-height: 1.4;

  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  font-size: 10px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const TitleTag = styled.div`
  width: fit-content;
  border-radius: 4px;

  font-weight: var(--weight-bold);
  padding: 5px;

  background-color: var(--color-dark-mint);
  color: white;
`;

const Tag = styled.div`
  width: fit-content;
  border-radius: 4px;

  font-weight: var(--weight-medium);
  padding: 5px;

  background-color: var(--color-light-blue);
  color: var(--color-dark-mint);
`;

const RightArrow = styled(IoIosArrowDropright)`
  color: var(--color-black);
  font-size: 14px;
  stroke-width: 10;
`;
