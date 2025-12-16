import React, { useState } from 'react';

// --- DADOS MOCK (Mantidos) ---
const mockMensagens = [
  { id: 1, remetente: 'Colecionador Silva', assunto: 'Interesse na "Onda Roxo"', data: 'Hoje, 14:30', lida: false },
  { id: 2, remetente: 'Galeria ArteViva', assunto: 'Proposta de Colaboração', data: 'Ontem, 09:15', lida: true },
  { id: 3, remetente: 'Suporte E-commerce', assunto: 'Atualização do Perfil', data: '01/12/2025, 10:00', lida: true },
  { id: 4, remetente: 'Comprador XPTO', assunto: 'Dúvida sobre envio', data: '01/12/2025, 08:00', lida: false },
];
const mockProdutos = [
  { id: 1, nome: 'Onda Roxo', preco: 350.00, fotos: 3, vendas: 12, visualizacoes: 850, avaliacoes: 4.8 },
  { id: 2, nome: 'Retrato Verde', preco: 1200.00, fotos: 5, vendas: 5, visualizacoes: 420, avaliacoes: 4.5 },
];
const mockVendas = {
  total: 17,
  valorTotal: 15500.00,
  pendentes: 3,
};

// --- Componente Principal ---

export default function ArtistaDashboard() {
  const [secçãoAtiva, setSecçãoAtiva] = useState('Mensagens');

  // ----------------------------------------------------
  // ESTILOS: TEMA ROXO/VERDE & LARGURA AJUSTADA
  // ----------------------------------------------------
  const estilos = {
    dashboard: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#f4f4f4',
    },
    // 1. BARRA LATERAL (Nova Largura e Cor)
    sidebar: {
      width: '300px', // <-- LARGURA AJUSTADA
      backgroundColor: '#4b0082', // <-- ROXO PROFUNDO
      color: 'white',
      padding: '20px 0',
      boxShadow: '2px 0 5px rgba(0,0,0,0.3)',
      display: 'flex',
      flexDirection: 'column',
    },
    logo: {
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '30px',
      color: '#1e5631', // <-- VERDE DESTAQUE
      textShadow: '0 1px 3px rgba(0,0,0,0.5)'
    },
    navItem: {
      padding: '15px 30px', // <-- LARGURA AJUSTADA
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      borderLeft: '5px solid transparent',
    },
    navItemAtivo: {
      padding: '15px 30px',
      cursor: 'pointer',
      backgroundColor: '#35005e', // Roxo mais escuro
      borderLeft: '5px solid #1e5631', // <-- VERDE DESTAQUE
      fontWeight: 'bold',
    },
    // 2. CONTEÚDO PRINCIPAL (Novo Preenchimento)
    mainContent: {
      flex: 1,
      padding: '50px', // <-- LARGURA AJUSTADA
      overflowY: 'auto',
    },
    header: {
      marginBottom: '40px',
      borderBottom: '2px solid #ddd',
      paddingBottom: '15px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    titulo: {
      color: '#4b0082', // <-- ROXO PROFUNDO (Título)
      fontSize: '2.5rem',
      fontWeight: '600'
    },
    // Estilos Comuns
    card: {
      backgroundColor: 'white',
      padding: '30px', // Mais padding
      borderRadius: '12px', // Bordas mais arredondadas
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      marginBottom: '30px',
    },
    input: {
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '6px',
      width: '100%',
      marginBottom: '20px',
      boxSizing: 'border-box',
    },
    // Botão Principal (Usando o degradê do Cadastro)
    botao: {
      padding: '14px 25px',
      background: 'linear-gradient(to right, #4b0082, #1e5631)', // <-- DEGRADÊ ROXO/VERDE
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'opacity 0.3s',
      fontWeight: 'bold',
      boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
    },
    // Indicador de Mensagem Não Lida (Cor de Destaque)
    pontoNaoLido: {
      height: '10px',
      width: '10px',
      backgroundColor: '#1e5631', // <-- VERDE DESTAQUE
      borderRadius: '50%',
      display: 'inline-block',
      marginRight: '10px',
    }
  };

  // ----------------------------------------------------
  // SECÇÕES DO DASHBOARD (Lógica MANTIDA)
  // ----------------------------------------------------

  const SecçãoMensagens = () => (
    <div style={estilos.card}>
      <h3>✉️ Caixa de Entrada</h3>
      <p style={{ color: '#666', marginBottom: '20px' }}>Comunicação com colecionadores e a equipe.</p>

      {mockMensagens.map(msg => (
        <div
          key={msg.id}
          style={{
            padding: '15px',
            borderBottom: '1px solid #eee',
            cursor: 'pointer',
            backgroundColor: msg.lida ? 'transparent' : '#f0e6fa', // Roxo muito claro
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {!msg.lida && <span style={estilos.pontoNaoLido}></span>}
            <div style={{ marginLeft: msg.lida ? '20px' : '0px' }}>
              <span style={{ fontWeight: msg.lida ? 'normal' : 'bold', color: msg.lida ? '#444' : '#4b0082' }}>{msg.remetente}</span>
              <p style={{ fontSize: '0.9em', color: msg.lida ? '#666' : '#333' }}>{msg.assunto}</p>
            </div>
          </div>

          <span style={{ fontSize: '0.8em', color: '#999' }}>{msg.data}</span>
        </div>
      ))}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button style={estilos.botao}>Ver Mensagens Arquivadas</button>
      </div>
    </div>
  );

  const SecçãoPerfil = () => (
    <div style={estilos.card}>
      <h3>🖼️ Editar Bio e Perfil</h3>
      <p style={{ color: '#666', marginBottom: '20px' }}>Conte a sua história e inspire colecionadores.</p>
      <label style={{ display: 'block', marginBottom: '5px' }}>Sua Bio:</label>
      <textarea style={{ ...estilos.input, height: '100px' }} placeholder="Fale sobre seu estilo e inspirações..."></textarea>
      <label style={{ display: 'block', marginBottom: '5px' }}>Link Instagram:</label>
      <input style={estilos.input} placeholder="https://instagram.com/seu-perfil" />
      <button style={estilos.botao}>Salvar Perfil</button>
    </div>
  );

  const SecçãoProdutos = () => (
    <div style={estilos.card}>
      <h3>✨ Anunciar Novo Produto</h3>
      <label style={{ display: 'block', marginBottom: '5px' }}>Nome da Obra:</label>
      <input style={estilos.input} placeholder="Ex: Crepúsculo na Montanha" />
      <label style={{ display: 'block', marginBottom: '5px' }}>Preço (€):</label>
      <input type="number" style={estilos.input} placeholder="1500.00" />
      <label style={{ display: 'block', marginBottom: '5px' }}>Carrossel de Fotos (Simulado):</label>
      <div style={{ ...estilos.card, border: '2px dashed #ccc', textAlign: 'center', padding: '30px' }}>
        <p>📎 **Placeholder para Carregamento de Múltiplas Imagens**</p>
        <input type="file" multiple />
      </div>
      <button style={estilos.botao}>Publicar Obra</button>
    </div>
  );

  const SecçãoVendas = () => (
    <>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        {/* Cards de Métricas */}
        <div style={{ ...estilos.card, flex: 1, textAlign: 'center', borderBottom: '5px solid #4b0082' }}>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Vendas Totais</p>
          <h2 style={{ color: '#4b0082', fontSize: '2.5rem' }}>{mockVendas.total}</h2>
        </div>
        <div style={{ ...estilos.card, flex: 1, textAlign: 'center', borderBottom: '5px solid #1e5631' }}>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Valor Vendido</p>
          <h2 style={{ color: '#1e5631', fontSize: '2.5rem' }}>€ {mockVendas.valorTotal.toFixed(2)}</h2>
        </div>
        <div style={{ ...estilos.card, flex: 1, textAlign: 'center', borderBottom: '5px solid #8e44ad' }}>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Pedidos Pendentes</p>
          <h2 style={{ color: '#8e44ad', fontSize: '2.5rem' }}>{mockVendas.pendentes}</h2>
        </div>
      </div>
    </>
  );

  // --- Função para renderizar o conteúdo ativo (Mantida) ---
  const renderizarConteudo = () => {
    switch (secçãoAtiva) {
      case 'Perfil':
        return <SecçãoPerfil />;
      case 'Produtos':
        return <SecçãoProdutos />;
      case 'Vendas':
        return <SecçãoVendas />;
      case 'Mensagens':
        return <SecçãoMensagens />;
      default:
        return <h2>Selecione uma opção ao lado.</h2>;
    }
  };

  // ----------------------------------------------------
  // RENDERIZAÇÃO FINAL (JSX)
  // ----------------------------------------------------

  return (
    <div style={estilos.dashboard}>

      {/* 1. BARRA LATERAL (Sidebar) */}
      <div style={estilos.sidebar}>
        <div style={estilos.logo}>Painel Artista</div>

        {['Mensagens', 'Perfil', 'Produtos', 'Vendas'].map(secção => (
          <div
            key={secção}
            style={secçãoAtiva === secção ? estilos.navItemAtivo : estilos.navItem}
            onClick={() => setSecçãoAtiva(secção)}
          >
            {secção}
          </div>
        ))}
      </div>

      {/* 2. ÁREA DE CONTEÚDO PRINCIPAL */}
      <div style={estilos.mainContent}>
        <div style={estilos.header}>
          <h1 style={estilos.titulo}>{secçãoAtiva}</h1>
          <p>O seu canal de comunicação.</p>
        </div>

        {renderizarConteudo()}
      </div>
    </div>
  );
}