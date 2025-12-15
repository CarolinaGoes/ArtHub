import React, { useState, useEffect } from 'react';

// --- DADOS MOCK: Itens do Carrinho ---
const mockCarrinho = [
    { id: 101, nome: 'Estudo Abstrato em Roxo', preco: 450.00, quantidade: 1, disponivel: true },
    { id: 102, nome: 'Miniatura de Paisagem', preco: 85.00, quantidade: 2, disponivel: false },
    { id: 103, nome: 'Escultura de Argila (Pré-Venda)', preco: 1500.00, quantidade: 1, disponivel: true },
    { id: 104, nome: 'Desenho a Carvão', preco: 120.00, quantidade: 1, disponivel: true },
];

// --- Componente Principal ---

export default function Carrinho() {
    
    // --- 1. LÓGICA DE RESPONSIVIDADE E ESTADOS ---
    const [larguraTela, setLarguraTela] = useState(window.innerWidth);
    const [formaPagamento, setFormaPagamento] = useState('PIX'); // Novo estado para a forma de pagamento
    const breakpoint = 768;

    useEffect(() => {
        const handleResize = () => setLarguraTela(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const isMobile = larguraTela < breakpoint;


    // --- 2. ESTILOS (TEMA ROXO/VERDE & RESPONSIVO) ---
    const estilos = {
        carrinhoTela: {
            minHeight: '100vh',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            backgroundColor: '#f4f4f4',
            padding: isMobile ? '20px' : '50px',
        },
        card: {
            maxWidth: '1200px',
            margin: '0 auto',
            backgroundColor: 'white',
            padding: isMobile ? '20px' : '40px',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
        },
        titulo: {
            color: '#4b0082',
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            marginBottom: isMobile ? '15px' : '30px',
            borderBottom: '2px solid #eee',
            paddingBottom: '10px'
        },
        tabelaHeader: {
            display: 'flex', 
            padding: isMobile ? '10px' : '15px', 
            backgroundColor: '#f0f0f0', 
            fontWeight: 'bold', 
            borderBottom: '2px solid #ddd',
            fontSize: isMobile ? '0.8em' : '1em'
        },
        tabelaLinha: {
            display: 'flex', 
            padding: isMobile ? '10px' : '15px', 
            borderBottom: '1px solid #eee', 
            alignItems: 'center',
            fontSize: isMobile ? '0.9em' : '1em'
        },
        // Estilo Comum para Opções de Pagamento (Flexbox)
        opcoesPagamento: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '10px' : '20px',
            marginTop: '30px',
            marginBottom: '30px',
            padding: isMobile ? '0' : '15px 0',
            borderTop: '1px solid #ddd',
            borderBottom: '1px solid #ddd'
        },
        // Container individual de opção
        opcaoItem: {
            flex: 1,
            padding: '15px',
            border: `2px solid ${formaPagamento === 'PIX' ? '#1e5631' : '#ddd'}`,
            borderRadius: '8px',
            cursor: 'pointer',
            backgroundColor: formaPagamento === 'PIX' ? '#f0f7f0' : 'white', // Verde claro para PIX ativo
        },
        opcaoItemDireto: {
            flex: 1,
            padding: '15px',
            border: `2px solid ${formaPagamento === 'Direto' ? '#4b0082' : '#ddd'}`,
            borderRadius: '8px',
            cursor: 'pointer',
            backgroundColor: formaPagamento === 'Direto' ? '#f5f0fa' : 'white', // Roxo claro para Direto ativo
        },
        botao: {
            padding: isMobile ? '12px 15px' : '14px 25px',
            background: 'linear-gradient(to right, #4b0082, #1e5631)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
            width: isMobile ? '100%' : '300px',
            marginTop: '20px'
        },
        resumoContainer: {
            marginTop: '30px', 
            textAlign: 'right', 
            padding: isMobile ? '10px 0' : '0'
        },
        subtotalTexto: {
            color: '#1e5631',
            fontSize: isMobile ? '1.5rem' : '2rem',
            marginBottom: '10px',
            fontWeight: 'bold'
        }
    };

    // --- 3. LÓGICA DE CÁLCULO ---
    const subtotal = mockCarrinho
        .filter(item => item.disponivel)
        .reduce((total, item) => total + item.preco * item.quantidade, 0);

    // Função de Exemplo para Checkout
    const handleCheckout = () => {
        alert(`Processando o pagamento via: ${formaPagamento}. Total: € ${subtotal.toFixed(2)}`);
        // Aqui seria a lógica real para enviar o pedido ao backend
    };

    // --- 4. RENDERIZAÇÃO FINAL (JSX) ---
    return (
        <div style={estilos.carrinhoTela}>
            <div style={estilos.card}>
                <h1 style={estilos.titulo}>🛍️ Seu Carrinho de Compras</h1>
                
                {/* Tabela de Itens (Mantida) */}
                <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
                    {/* ... Código da Tabela ... */}
                    <div style={estilos.tabelaHeader}>
                        <span style={{ flex: 4 }}>Obra de Arte</span>
                        <span style={{ flex: 1, textAlign: 'center' }}>Qtd</span>
                        <span style={{ flex: 2, textAlign: 'right' }}>Preço Unit.</span>
                        <span style={{ flex: 2, textAlign: 'right' }}>Total</span>
                    </div>

                    {mockCarrinho.map(item => (
                        <div key={item.id} style={{ ...estilos.tabelaLinha, backgroundColor: item.disponivel ? 'white' : '#fff0f0' }}>
                            <span style={{ flex: 4, color: item.disponivel ? '#444' : 'red', fontWeight: item.disponivel ? 'normal' : 'bold' }}>
                                {item.nome}
                                {!item.disponivel && <span style={{ fontSize: '0.9em', color: 'red', marginLeft: '10px' }}> (Esgotado)</span>}
                            </span>
                            <span style={{ flex: 1, textAlign: 'center' }}>{item.quantidade}</span>
                            <span style={{ flex: 2, textAlign: 'right' }}>€ {item.preco.toFixed(2)}</span>
                            <span style={{ flex: 2, textAlign: 'right', fontWeight: 'bold' }}>€ {(item.preco * item.quantidade).toFixed(2)}</span>
                        </div>
                    ))}
                </div>

                {/* NOVO: SECÇÃO DE FORMA DE PAGAMENTO */}
                <h2 style={{ color: '#4b0082', fontSize: '1.5rem', marginTop: '40px', marginBottom: '20px' }}>
                    Escolha a Forma de Pagamento
                </h2>

                <div style={estilos.opcoesPagamento}>
                    {/* OPÇÃO 1: PIX */}
                    <div 
                        style={{...estilos.opcaoItem, border: `2px solid ${formaPagamento === 'PIX' ? '#1e5631' : '#ddd'}`}} 
                        onClick={() => setFormaPagamento('PIX')}
                    >
                        <input 
                            type="radio" 
                            name="paymentMethod" 
                            checked={formaPagamento === 'PIX'} 
                            onChange={() => setFormaPagamento('PIX')}
                            style={{ marginRight: '10px' }}
                        />
                        <label style={{ fontWeight: 'bold', color: '#1e5631' }}>
                            PIX ⚡ (Pagamento Imediato)
                        </label>
                        <p style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>
                            Transferência instantânea via QR Code. Liberação rápida do pedido.
                        </p>
                    </div>

                    {/* OPÇÃO 2: DIRETO COM O ARTISTA */}
                    <div 
                        style={{...estilos.opcaoItemDireto, border: `2px solid ${formaPagamento === 'Direto' ? '#4b0082' : '#ddd'}`}} 
                        onClick={() => setFormaPagamento('Direto')}
                    >
                        <input 
                            type="radio" 
                            name="paymentMethod" 
                            checked={formaPagamento === 'Direto'} 
                            onChange={() => setFormaPagamento('Direto')}
                            style={{ marginRight: '10px' }}
                        />
                        <label style={{ fontWeight: 'bold', color: '#4b0082' }}>
                            Direto com o Artista (Negociação)
                        </label>
                        <p style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>
                            Enviaremos os dados de contacto para acertar o pagamento manualmente (ex: transferência bancária, PayPal).
                        </p>
                    </div>
                </div>

                {/* Área de Resumo e Checkout */}
                <div style={estilos.resumoContainer}>
                    <div style={{ padding: isMobile ? '15px 0' : '15px', borderTop: '2px solid #ddd', marginTop: '15px' }}>
                        <p style={estilos.subtotalTexto}>
                            Subtotal: € {subtotal.toFixed(2)}
                        </p>
                        <p style={{ color: '#666', fontSize: '0.9em' }}>
                            Forma de Pagamento selecionada: **{formaPagamento}**.
                        </p>
                    </div>

                    <button style={estilos.botao} onClick={handleCheckout}>
                        Finalizar Pedido com {formaPagamento}
                    </button>
                </div>
            </div>
        </div>
    );
}