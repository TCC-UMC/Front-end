import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Api from '../services/api';
import { history } from '../services/history';

import { Text, Right75 } from '../Styles/Logon';
import { InputRegister, Left25R, ButtonR } from '../Styles/Register';
import { FlexCenter } from '../Styles/FlexCenter';

export default function Register() {

  const [Nome, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Senha, setPassword] = useState('');
  const [ConfirmarSenha, setConfirmarSenha] = useState('');
  const [Telefone, setTel] = useState('');
  const [CPF, setCpf] = useState('');
  const [Profissao, setProfession] = useState('');
  const [DataDeNascimento, setDate] = useState('');
  const [RGM, setRgm] = useState('');
  const [Curso, setCourse] = useState('');

  async function handleRegister(e) {
    e.preventDefault();

    if(Senha !== ConfirmarSenha) {
      return alert('As senhas precisam ser iguais.');
    }

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
          <Text>Digite seus dados e clique em confirmar.</Text>
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
              required />

            <InputRegister type="password" 
              placeholder="Senha" 
              value={Senha}
              onChange={e => setPassword(e.target.value)}
              required />

            <InputRegister type="password"
              placeholder="Confirmar senha"
              value={ConfirmarSenha}
              onChange={e => setConfirmarSenha(e.target.value)}
              required />

            <InputRegister type="text" 
              name="cpf" 
              value={CPF}
              onChange={e => setCpf(e.target.value)}
              title="Número de CPF precisa ser no formato xxx.xxx.xxx-xx" 
              placeholder="CPF: (xxx.xxx.xxx-xx)"
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
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

            <InputRegister
              placeholder='Data: yyyy-mm-dd'
              type="text"
              patter='[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])'
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
          <br/>
          <br/>
        </Left25R>
        <Right75 />
    </FlexCenter>
  );
}