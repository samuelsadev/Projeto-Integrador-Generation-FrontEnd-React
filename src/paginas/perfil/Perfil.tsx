import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../util/toastAlerta'
import fotoPerfil from '../../assets/perfil.png'
import cuidadoImage from "../../assets/cuidado.jpg"
import './Perfil.css';

function Perfil() {
  let navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
          toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
            navigate("/login")
        }
    }, [usuario.token])
    
  return (
    <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
      <img className='w-full h-72 object-cover border-b-8 border-white' src={cuidadoImage} alt="Capa do Perfil" />
      <img src={fotoPerfil} alt='Foto de perfil' className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
      <div className="relative mt-[-6rem] h-72 flex flex-col bg-sky-100 items-center justify-center">
        <p className='text'>Nome: {usuario.nome} </p>
        <p className='text'>Email: {usuario.usuario}</p>
      </div>
    </div>
  )
}

export default Perfil