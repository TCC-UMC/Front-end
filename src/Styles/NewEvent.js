import styled from 'styled-components';
import { Input } from '../Styles/Logon';
import { FlexCenter } from '../Styles/FlexCenter'

export const ContainerC = styled(FlexCenter)`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  display: inherit;
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 800px) {
    width: 90%;
    padding: 10px;
    font-size: 14px;
  }  
`;

export const InputN = styled(Input)`
  width: unset;
  margin-right: 10px;
`;

export const Row = styled.div`
  text-align: center;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  input, select {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

select {
  width: 100%;
}

input {
  width: 96%;
}

  textarea {
    width: 99%;
    height: 100%;
  }

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

@media (max-width: 425px) {
    input {
      width: 90%;
    }
    select {
      width: 100%;
    }
    textarea {
      width: 98%;
    }
  }  
`;

export const Col25 = styled.div`
  float: left;
  width: 25%;
  margin-top: 6px;
`;

export const Col75 = styled.div`
  float: left;
  width: 74%;
  margin-top: 6px;
`;