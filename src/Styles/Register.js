import styled from 'styled-components';
import {Input, Left25, Button} from './Logon';

export const InputRegister = styled(Input)`
    width: 80%;
    margin: 5px 0;
    padding: 5px 10px;
  @media(max-width: 800px) {
    font-size: 16px;
  }
`;

export const Left25R = styled(Left25)`
  margin-top: 0;
`;

export const ButtonR = styled(Button)`
  width: 45%;
  margin: 20px 5px 0;
  padding: 0;
  font-size: 28px;
  @media(max-width: 800px) {
    width: 40%;
    font-size: 24px;
  }
`;

