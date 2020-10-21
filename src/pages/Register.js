import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import Api from '../services/api';
import { history } from '../services/history';

import { Text, Right75 } from '../Styles/Logon';
import { InputRegister, Left25R, ButtonR } from '../Styles/Register';
import { FlexCenter } from '../Styles/FlexCenter';

import logo_umc from '../img/logo_umc.png';

export default function Register() {

  const [Nome, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Senha, setPassword] = useState('');
  const [Telefone, setTel] = useState('');
  const [CPF, setCpf] = useState('');
  const [Profissao, setProfession] = useState('');
  const [DataDeNascimento, setDate] = useState('');
  const [RGM, setRgm] = useState('');
  const [Curso, setCourse] = useState('');

  async function handleRegister(e) {
    e.preventDefault();

    const headers = {
      'Content-Type': 'application/json'
    }

    const data = {
      Nome,
      Email,
      Senha,
      Telefone,
      CPF,
      Profissao,
      Curso,
      RGM,
      DataDeNascimento,
    };
  
    try {
      const response = await Api.post('/auth/register', data, {
        headers: headers
      });
      
      if (response.status === 201) {
        console.log(response);
        alert("Cadastro efetuado com sucesso, use seu email e senha para logar.");
        return history.push('/');
      }
    } catch(err) {
      if (err) {
        console.log(err.response.data.error);
        alert(err.response.data.error)
      }
    }
    
  }

  return (
    <FlexCenter>
        <Left25R>
          <img src={logo_umc} width="65%" alt="logo_umc"/>
          <Text>Digite suas informações e clique em confirmar para se registrar</Text>
          <form onSubmit={handleRegister}>

            <InputRegister type="text" 
              placeholder="Nome" 
              value={Nome} 
              onChange={e => setName(e.target.value)}
              required/>

            <InputRegister type="email" 
              placeholder="Email"
              value={Email}
              onChange={e => setEmail(e.target.value)}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required />

            <InputRegister type="password" 
              placeholder="Senha" 
              value={Senha}
              onChange={e => setPassword(e.target.value)}
              required />

            <InputRegister type="text" 
              name="cpf" 
              value={CPF}
              onChange={e => setCpf(e.target.value)}
              title="Número de telefone precisa ser no formato xxx.xxx.xxx-xx" 
              placeholder="CPF: (xxx.xxx.xxx-xx)"
              required />

            <InputRegister type="text" 
              placeholder="Celular: (99) 9999-9999"
              value={Telefone}
              onChange={e => setTel(e.target.value)}
              required />

            <InputRegister type="text" 
              value={Profissao}
              onChange={e => setProfession(e.target.value)}
              placeholder="Profissão" 
              required />

            <InputRegister type="date"
              max="2010-12-31"
              min="1920-01-02"
              value={DataDeNascimento}
              onChange={e => setDate(e.target.value)}
              required />
            <br/>

            <InputRegister type="text" 
              value={RGM}
              onChange={e => setRgm(e.target.value)}
              placeholder="RGM"
              required />

            <InputRegister type="text"
              value={Curso}
              onChange={e => setCourse(e.target.value)}
              placeholder="Curso"
              required />

            <ButtonR buttonColor="#008037" type="submit">Cadastrar</ButtonR>

            <Link to="/" className="decoration-none">
              <ButtonR>Voltar</ButtonR>
            </Link>
          </form>
        </Left25R>
        <Right75 />
    </FlexCenter>
  );
}