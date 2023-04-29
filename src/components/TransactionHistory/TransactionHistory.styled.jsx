import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: 24px;
  padding: 4px;
  font-size: 24px;
 
  width: 50%;
  border-radius: 16px;
`;

export const Thead = styled.thead`
  border-radius: 8px;
  background-color: #eeea9e;
  color: #f92929;
  font-size: 16px;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  :hover {
    background-color: #ecbc80;
    box-shadow: 0 6px 6px -6px #0E1119;
    color: #ffffff;
    text-shadow: 1px 1px 1px #400075;
  }
`;

export const Th = styled.th`
  padding: 8px 0;
  padding-left: 4px;
  text-align: left;

  :first-of-type {
    border-top-left-radius: 16px;
  }

  :last-child {
    border-top-right-radius: 16px;
  }
`;

export const Tb = styled.tbody`
  background-color: #ffffff;
`;

export const Td = styled.td`
  padding-left: 4px;
  border-right: 2px solid #eeea9e;
  border-bottom: 2px solid #eeea9e;

  :first-of-type {
    border-left: 2px solid #eeea9e;
  }
`;
