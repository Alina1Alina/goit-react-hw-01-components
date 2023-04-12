import styled from "styled-components";

export const StyledList = styled.ul`
  margin-top: 60px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

    
`
export const StyledItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: whitesmoke;
  width: 230px;
    
`

export const StyledStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.isOnline ? 'green' : 'red'};
  display: block;
`;

// export const StyledOnline = styled.span`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: green;
//   color: green;
// `;