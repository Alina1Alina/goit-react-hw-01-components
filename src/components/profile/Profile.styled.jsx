import styled from "styled-components";

export const Section = styled.div`
  margin-top: 50px;
  text-align: center;
  width: 400px;
  margin-left: auto;
  margin-right: auto;

`

export const Description = styled.div`
  background: rgba(255, 255, 255, 0.877);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px;
`

export const Image = styled.img`
    width: 120px;
    border-radius: 50%;
    
`

export const Username = styled.p`
color: black;
font-family: sans-serif;
font-size: 40px; 
margin: 0 auto;
font-weight: 500;
`

export const Tag = styled.p `
font-size: 30px;
font-family: sans-serif;
color: grey;
margin: 0 auto;
`

export const Location = styled.p`
font-size: 33px;
font-family: sans-serif;
color: grey;
margin: 0 auto;
`

export const Stats = styled.ul`
list-style: none;
background: rgb(214, 207, 207);
  
display: flex;
justify-content: center;
gap: 20px;
padding: 20px;
margin: 0 auto;
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.span`
  font-size: 20px;
`;
export const Quantity = styled.span`
  color: rgb(5, 5, 41);
  font-weight: 500;
`;

