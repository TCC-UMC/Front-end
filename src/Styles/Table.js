import styled from 'styled-components';

export const Table = styled.table`
    overflow-x:auto;
    margin-top: 50px;
    border-collapse: collapse;
    border-spacing: 0px;
    padding: 5px;
    border: 1px solid black;
    font-size: 24px;
    width: 100%;
    text-align: center;
    th, td {
      padding: 5px 0;
      border: 1px solid black;
    }

    th {
      background-color: #008037;
      color: #fff;
    }
    @media (max-width: 800px) {
      font-size: 15px;
  }
`;