import React from 'react';
import localStyles, { COLORS } from '../../components/style.jsx';

const favoritosMock = [
  {
    id: 1,
    nome: 'Arte Abstrata',
    artista: 'Ana Souza',
    preco: 120.0,
  },
  {
    id: 2,
    nome: 'Ilustração Digital',
    artista: 'Carlos Lima',
    preco: 89.9,
    cor: COLORS.SECONDARY,
  },
];

export default function Favorites() {
  return (
    <div style={localStyles.pageBackground}>
      <div style={localStyles.container}>

        <h2 style={localStyles.sectionTitle}>
          💛 Meus Favoritos
        </h2>

        {favoritosMock.length === 0 ? (
          <p style={{ opacity: 0.8 }}>
            Você ainda não adicionou produtos aos favoritos.
          </p>
        ) : (
          <div style={localStyles.grid}>
            {favoritosMock.map((produto) => (
              <div key={produto.id} style={localStyles.card}>

                <div style={localStyles.cardImage(produto.cor)} />

                <p style={{ fontSize: '0.85rem', opacity: 0.85 }}>
                  {produto.artista}
                </p>

                <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                  {produto.nome}
                </h3>

                <p
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: '800',
                    color: COLORS.PRICE_TXT,
                  }}
                >
                  € {produto.preco.toFixed(2)}
                </p>

                <button
                  style={{
                    marginTop: '0.7rem',
                    width: '100%',
                    padding: '0.5rem',
                    borderRadius: '0.4rem',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: COLORS.SOFT_BTN,
                    fontWeight: '700',
                  }}
                >
                  Remover dos favoritos
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
