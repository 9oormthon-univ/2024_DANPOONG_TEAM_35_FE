import React from "react";
import styled from "styled-components";
import { IoIosArrowDropright } from "react-icons/io";

function SheetCard({ title, subtext, tags }) {
  const safeTags = Array.isArray(tags) ? tags : [];

  return (
    <Container>
      <TopContainer>
        <TitleText>{title}</TitleText>
        <RightArrow />
      </TopContainer>
      <SubText>{subtext}</SubText>
      <TagContainer>
        {safeTags.length > 0 ? (
          safeTags.map((tag, index) => <Tag key={index}>{tag}</Tag>)
        ) : (
          <Tag>No Tags</Tag>
        )}
      </TagContainer>
    </Container>
  );
}
export default SheetCard;

const Container = styled.div`
  width: 200px;
  cursor: pointer;
  &:hover {
    border: 1px solid #246beb;
  }

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

  background-color: var(--color-dark-blue);
  color: white;
`;

const Tag = styled.div`
  width: fit-content;
  border-radius: 4px;

  font-size: 10px;
  font-weight: var(--weight-medium);
  padding: 5px;

  background-color: var(--color-light-blue);
  color: var(--color-navy);
`;

const RightArrow = styled(IoIosArrowDropright)`
  color: var(--color-black);
  font-size: 14px;
  stroke-width: 10;
`;
