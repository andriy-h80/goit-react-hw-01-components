import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 42px;
  padding: 3px;

  max-width: 100%;
  width: 360px;

  border-radius: 8px;
  background-color: #e9eff;

  &:hover {
    background: #ecf0f3;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

export const Status = styled.span`
  display: block;
  margin-left: 26px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({status}) => status ? 'green' : 'red'};
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  width: 60px;

  border-radius: 50%;

  &:hover {
    background: #ecf0f3;
  }
`;

export const Name = styled.p`
  margin-left: 10px;
  color: #f92929;
  font-size: 16px;
  font-weight: 700;
`;