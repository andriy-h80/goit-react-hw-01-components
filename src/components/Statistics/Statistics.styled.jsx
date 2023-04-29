import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-bottom: 5px;
  max-width: 100%;
  width: 360px;

  border-radius: 8px;
`;

export const Title = styled.h2`
  padding: 4px;

  border-bottom: 1px solid #d3d5e3;
  color: #f92929;
  font-weight: 700;
  font-size:  32px;

  text-transform: uppercase;
  text-align: center;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  padding: 3px;

  width: 100%;
  height: 100%;

  text-shadow: 0 0 1px #000;

  :first-of-type {
    border-bottom-left-radius: 8px;
  }

  :last-child {
    border-bottom-right-radius: 8px;
  }

  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  font-size: 12px;
  color: #ffffff;
`;

export const Percentage = styled.span`
  font-size: 19px;
  font-weight: 700;
  color: #ffffff;
`;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}