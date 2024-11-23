import styled from 'styled-components';

export const CountryListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.h1`
  padding: 2rem;
  text-align: center;
`;

export const CountryCard = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 250px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  background-color: #fff;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CountryName = styled.h3`
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: center;
  font-size: 18px;
`;

export const FlagImage = styled.img`
  width: 100px;
  height: 70px;
  object-fit: cover;
  border-radius: 4px;
`;

export const CountryLink = styled.a`
  text-decoration: none;
  color: #0070f3;
  font-size: 14px;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
