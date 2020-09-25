import React from 'react';
import {Link} from 'react-router-dom'
import { Text, Right75 } from '../Styles/Logon';
import {InputRegister, Left25R, ButtonR, BoxAluno} from '../Styles/Register';
import {FlexCenter} from '../Styles/FlexCenter';
import logo_umc from '../img/logo_umc.png';

export default function Register() {
  return (
    <FlexCenter>
        <Left25R>
          <img src={logo_umc} width="65%" alt="logo_umc"/>
          <Text>Digite suas informações e clique em confirmar para se registrar</Text>
          <form>
            <InputRegister type="text" placeholder="Nome" required/>
            <InputRegister type="email" placeholder="Email" 
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required/>
            <InputRegister type="password" placeholder="Senha" required/>
            <InputRegister type="text" name="cpf" 
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
              placeholder="CPF: (xxx.xxx.xxx-xx)"/>
            <InputRegister type="text" placeholder="Celular: (99) 9999-9999" 
              pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})" 
              title="Número de telefone precisa ser no formato (99) 9999-9999" 
              required="required"  />
            <InputRegister type="text" placeholder="Profissão" required/>
            <InputRegister type="date" required="required" maxlength="10" name="date" 
              pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" min="1920-01-01" max="2010-01-01" />
            <br/>
            <BoxAluno>
              <input type="checkbox" id="checkbox" />
              <label>Sou aluno da UMC</label>
            </BoxAluno>
            <InputRegister type="text" placeholder="RGM"/>
            <InputRegister type="text" placeholder="Curso"/>
            <ButtonR buttonColor="#008037" type="submit">Cadastrar</ButtonR>
            <Link to="/" className="decoration-none"><ButtonR>Voltar</ButtonR></Link>
          </form>
        </Left25R>
        <Right75 />
    </FlexCenter>
  );
}