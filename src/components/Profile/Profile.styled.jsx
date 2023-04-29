import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  margin: 0 auto;
  margin-top: 25px;
  padding: 4px;

  max-width: 100%;
  width: 360px;
  
  border-radius: 8px;
  background-color: #eeea9e;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
//   gap: 10px;
  margin-bottom: 4px;
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 15px;
  height: 150px;
  width: 150px;

  border-radius: 50%;

  &:hover {
    background: #ffffff;
  }
`;

export const Name = styled.p`
  margin: 10px;
  color: #f92929;
  font-size: 32px;
  font-weight: 400;
  text-shadow: 1px 1px 1px #fff;
`;

export const Tag = styled.p`
  margin: 10px;
  color: #3f4fd0;
  font-size: 16px;
  font-weight: 500;
`;

export const Location = styled.p`
  margin: 10px;
  color: #f92929;
  font-size: 16px;
  font-weight: 500;
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 5px;
  padding: 4px;
  width: 100%;
`;

export const StatsItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;

  :first-child {
    margin-left: 5px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  :not(:last-child){
  border-right: 1px dotted #3f4fd0;

  }
`;

export const Label = styled.span`
  margin: 0px 5px;
  color: #3f4fd0;
  font-size: 16px;   
  font-weight: 500;
`;

export const Quantity = styled.span`
  color: #f92929;
  font-size: 28px;
  font-weight: 700;
  text-shadow: 1px 1px 1px #fff;
`;