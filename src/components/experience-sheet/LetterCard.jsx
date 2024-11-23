import styled from "styled-components";
import { IoIosArrowDropright } from "react-icons/io";

function LetterCard() {
  return (
    <Container>
      <TopContainer>
        <TitleText>구름톤 유니브 3기</TitleText>
        <DateContainer>
          <Date>2024.11.11 - 2024.12.12</Date>
          <RightArrow />
        </DateContainer>
      </TopContainer>
      <SubText>
        구름톤 유니브 3기를 진행하면서 AI가 한 번의 경험정리로 자기소개서
        작성해주는 플랫폼인 자소플에 참여했습니다! 네이버 서버 개발자 지원서
        네이버 서버 개발자 지원서 네이버 서버 개발자 지원서 네이버 서버 개발자
        지원서 네이버 서버 개발자 지원서 네이버 서버 개발자 지원서 네이버 서버
        개발자 지원서 네이버 서버 개발자 지원서 네이버 서버 개발자 지원서 네이버
        서버 개발자 지원서 네이버 서버 개발자 지원서
      </SubText>
      <HorizontalLine />
      <TagContainer>
        <Tag># 직무역량</Tag>
        <Tag># 지원동기 및 포부</Tag>
        <Tag># 도전 (성공 / 실패)</Tag>
        <Tag># 창의성 (문제해결 능력)</Tag>
      </TagContainer>
    </Container>
  );
}
export default LetterCard;

const Container = styled.div`
  width: 470px;

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
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  font-size: 10px;

  overflow: hidden;
  white-space: nowrap;
`;

const Tag = styled.div`
  width: fit-content;
  border: 0.5px solid var(--color-gray);
  border-radius: 20px;

  font-weight: var(--weight-medium);
  padding: 7px;

  background-color: var(--color-light-white);
  color: var(--color-black);
`;

const RightArrow = styled(IoIosArrowDropright)`
  color: var(--color-black);
  font-size: 14px;
  stroke-width: 10;
`;

const Date = styled.span`
  font-size: 12px;
  color: var(--color-dark-blue);
  font-weight: var(--weight-semi-bold);
`;

const DateContainer = styled.div`
  display: flex;
  gap: 10px;

  justify-content: center;
  align-items: center;
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-light-gray);
  margin-top: 10px;
`;
