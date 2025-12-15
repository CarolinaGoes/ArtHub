import React, { useState, useEffect } from 'react';
import localStyles, { COLORS } from '../../components/style.jsx';
import { useNavigate } from 'react-router-dom';
import AppRouter from '../../router/AppRouter.jsx';



const produtosDestaque = [
    { id: 1, nome: 'Onda Vibrante', preco: 150.00, artista: 'C. Vieira', cor: '#ff4d6d' },
    { id: 2, nome: 'Pop Art Ciano', preco: 89.99, artista: 'A. Sousa', cor: '#00b4d8' },
    { id: 3, nome: 'Blocos Neométricos', preco: 220.50, artista: 'J. Pinto', cor: '#8338ec' },
    { id: 4, nome: 'Retrô Abstrato', preco: 99.00, artista: 'R. Lopes', cor: '#ffbe0b' },
];

const categorias = ['Quadros', 'Esculturas', 'Acessórios', '3D', 'Retratos'];

export default function Home() {

    const navigate = useNavigate();

    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);




    const CardProduto = ({ produto }) => (

        <div style={localStyles.card}>

            <div style={localStyles.cardImage(produto.cor)} />

            <div style={{ display: 'flex', flexDirection: 'row', gap: '0.3rem', justifyContent: 'space-between' }}>

                <div >
                    <p style={{ fontSize: '0.85rem', opacity: 0.85 }}>{produto.artista}</p>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>{produto.nome}</h3>
                    <p style={{ fontSize: '1.2rem', fontWeight: '800', color: COLORS.PRICE_TXT }}>
                        € {produto.preco.toFixed(2)}
                    </p>
                </div>
                <div style={{ ...localStyles.linksAcessostyle, justifyContent: 'right', fontSize: '2rem', }}> ♥ </div>

            </div>
        </div >

    );



    return (
        <div style={localStyles.pageBackground}>

            {/* HEADER */}
            <header style={localStyles.header}>
                <div style={localStyles.logo}>ART.HUB</div>

                {!isMobile && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{...localStyles.searchBox, justifyContent: 'center'}}>
                            🔍
                            <input type="text" placeholder="Buscar..." style={localStyles.searchInput} />
                        </div>
                        <button  style={localStyles.heroButton}>Pesquisar</button>

                    </div>)}

                <div style={localStyles.headerRight}>

                    <div
                        style={localStyles.login}
                        onClick={() => navigate('/Cadastro')}
                    >
                        Login
                    </div>
                    {!isMobile ? (
                        <>
                      <div
                        style={localStyles.linksAcesso}
                        onClick={() => navigate('/favoritos')}
                    >
                        ♥ 
                    </div>
                    <div
                        style={localStyles.linksAcesso}
                        onClick={() => navigate('/ArtistaDashboard')}
                    >
                        👤
                    </div>
                    <div
                        style={localStyles.linksAcesso}
                        onClick={() => navigate('/Carrinho')}
                    >
                        🛒
                    </div>
                    

                        </>
                    ) : <div style={localStyles.linksAcesso}>☰</div>
                    }

                </div>
            </header>

            <div style={localStyles.container}>

                {/* HERO */}
                {isMobile && (
                    <>
                        <div style={localStyles.searchBox}>
                            🔍
                            <input type="text" placeholder="Buscar..." style={localStyles.searchInput} />
                        </div>
                        <button style={localStyles.heroButton}>Pesquisar</button>
                    </>)}

                <section style={localStyles.heroSection}>
                    <h1 style={localStyles.heroTitle}>TODO TIPO DE ARTE EM UM SÓ LUGAR!</h1>
                    <h2 style={localStyles.heroSubtitle}>Mais cor. Mais criatividade. Mais você.</h2>


                </section>


                {/* CATEGORIAS */}
                <section style={localStyles.categoryBar}>
                    {categorias.map((c, i) => (
                        <div key={c} style={localStyles.categoryItem(i === 0)}>{c}</div>
                    ))}
                </section>

                {/* DESTAQUES */}
                <h2 style={localStyles.sectionTitle}>🔥 Destaques</h2>

                <div style={localStyles.grid}>
                    {produtosDestaque.map(p => (
                        <CardProduto key={p.id} produto={p} />

                    ))}
                </div>

                {/* BANNER */}
                <section style={localStyles.promoBanner}>
                    <h3 style={{ fontSize: '1.6rem', marginBottom: '0.8rem' }}>
                        Obras com frete grátis!
                    </h3>
                    <button style={localStyles.heroButton}>Comprar Agora</button>
                </section>

                {/* FOOTER */}
                <footer style={localStyles.footer}>
                    © {new Date().getFullYear()} ART.HUB — Criando arte sem limites.
                </footer>

            </div>
        </div>
    );
}
