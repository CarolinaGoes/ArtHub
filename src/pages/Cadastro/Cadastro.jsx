import React, { useState } from 'react';

export default function Cadastro() {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    senha: '',
    tipoUsuario: 'comprador'
  });

  const aoMudar = (evento) => {
    const { name, value } = evento.target;
    setDados((dadosAnteriores) => ({
      ...dadosAnteriores,
      [name]: value
    }));
  };

  const aoEnviar = (evento) => {
    evento.preventDefault();
    console.log('Dados cadastrados:', dados);
    alert(`Bem-vindo, ${dados.nome}! Vamos colorir o mundo.`);
  };

  // --- ESTILOS (Banner Superior e Formulário Central) ---
  const estilos = {
    paginaInteira: {
      display: 'flex',
      flexDirection: 'column', 
      height: '100vh',
      width: '100vw',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#f4f4f4', 
      overflow: 'auto' 
    },
    // PARTE SUPERIOR: O Banner Artístico
    bannerSuperior: {
      height: '25vh', 
      background: 'linear-gradient(135deg, #4b0082 0%, #1e5631 100%)', // Degradê roxo/verde
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      padding: '20px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
    },
    // PARTE INFERIOR: O Formulário
    areaFormulario: {
      flex: 1, 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 20px',
    },
    // O Cartão central do Formulári
    boxFormulario: {
      width: '100%',
      maxWidth: '500px', 
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)', 
    },
    arteTitulo: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      textShadow: '0 1px 5px rgba(0,0,0,0.5)'
    },
    arteTexto: {
      fontSize: '1rem',
      opacity: 0.8,
    },
    tituloCadastro: {
      color: '#4b0082',
      fontSize: '1.8rem',
      marginBottom: '10px'
    },
    subtituloCadastro: {
      color: '#666',
      marginBottom: '30px',
      textAlign: 'center'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#333',
      fontWeight: '600'
    },
    input: {
      width: '100%',
      padding: '12px',
      marginBottom: '20px',
      borderRadius: '6px',
      border: '1px solid #ddd',
      fontSize: '16px',
      backgroundColor: '#f9f9f9',
      boxSizing: 'border-box'
    },
    botao: {
      width: '100%',
      padding: '14px',
      background: 'linear-gradient(to right, #8e44ad, #27ae60)', // Botão degradê
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
    },
    linkLogin: {
      marginTop: '20px',
      textAlign: 'center',
      fontSize: '14px',
      color: '#666'
    }
  };

  return (
    <div style={estilos.paginaInteira}>
      
      {/* PARTE SUPERIOR: Banner Artístico */}
      <div style={estilos.bannerSuperior}>
        <h1 style={estilos.arteTitulo}>Arte & Alma</h1>
        <p style={estilos.arteTexto}>
          Crie a sua conta e faça parte da nossa galeria.
        </p>
      </div>

      {/* PARTE INFERIOR: Formulário */}
      <div style={estilos.areaFormulario}>
        <div style={estilos.boxFormulario}>
          <h2 style={estilos.tituloCadastro}>Registe-se Agora</h2>
          <p style={estilos.subtituloCadastro}>Preencha os dados abaixo.</p>

          <form onSubmit={aoEnviar}>
            {/* Campos do Formulário */}
            <div>
              <label style={estilos.label}>Nome Completo</label>
              <input
                type="text"
                name="nome"
                value={dados.nome}
                onChange={aoMudar}
                style={estilos.input}
                placeholder="Seu nome"
                required
              />
            </div>

            <div>
              <label style={estilos.label}>Email</label>
              <input
                type="email"
                name="email"
                value={dados.email}
                onChange={aoMudar}
                style={estilos.input}
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label style={estilos.label}>Senha</label>
              <input
                type="password"
                name="senha"
                value={dados.senha}
                onChange={aoMudar}
                style={estilos.input}
                placeholder="Mínimo 6 caracteres"
                required
              />
            </div>

            <div style={{marginBottom: '20px'}}>
              <label style={estilos.label}>Eu sou:</label>
              <select
                name="tipoUsuario"
                value={dados.tipoUsuario}
                onChange={aoMudar}
                style={estilos.input}
              >
                <option value="comprador">Comprador</option>
                <option value="artista">Artista</option>
              </select>
            </div>

            <button type="submit" style={estilos.botao}>
              Cadastrar
            </button>
            
            <p style={estilos.linkLogin}>
              Já tem uma conta? <a href="#" style={{color: '#4b0082', fontWeight: 'bold'}}>Entrar</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}