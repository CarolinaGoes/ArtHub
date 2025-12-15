export const COLORS = {
    BG: 'rgba(255,255,255,0.85)',
    PRIMARY: 'rgba(149,0,255,0.68)',
    SECONDARY: 'rgba(0,195,255,0.67)',
    CARD_BG: 'rgba(255,255,255,0.1)',
    BORDER: 'rgba(255,255,255,0.2)',
    DARK_TXT: '#1f1c1cff',
    LIGHT_TXT: '#ffffff',
    STRONG_BTN: '#ffbb00ff',
    STRONG_TXT: '#fffb00ff',
    SOFT_BTN: '#00ffaaab',
    SOFT_TXT: '#fffb00e0',
    PRICE_TXT: '#ffae00ff',
};

const localStyles = {




    pageBackground: {
        minHeight: '100vh',
        width: '100%',

        background: `linear-gradient(120deg, ${COLORS.PRIMARY}, ${COLORS.SECONDARY})`,
        backgroundAttachment: 'fixed',
        userSelect: 'none',
    },

    container: {

        height: '100%',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        userSelect: 'none',
        paddingTop: '10rem',
    },

    header: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3.8rem',
        backgroundColor: 'rgba(0,0,0,0.35)',
        backdropFilter: 'blur(6px)',
        borderBottom: `1px solid ${COLORS.BORDER}`,
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        alignItems: 'center',

        padding: '0 1.5rem',
        zIndex: 1000,
        userSelect: 'none',

    },

    logo: {
        fontSize: '200%',
        fontWeight: '900',
        fontFamily: 'Montserrat, sans-serif',
        color: COLORS.STRONG_TXT,
        userSelect: 'none',
    },

    searchBox: {
        
        width: '50%',
        maxWidth: '50rem',
        margin: '2rem',
        padding: '0.5rem 1rem',
        display: 'flex',
        borderRadius: '1.5rem',
        backgroundColor: COLORS.CARD_BG,
        border: `1px solid ${COLORS.BORDER}`,
    },

    searchInput: {
        marginLeft: '0.6rem',
        background: 'none',
        border: 'none',
        color: 'white',
        width: '100%',
        outline: 'none',
    },

    heroButton: {
        display: 'flex',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        borderRadius: '1.5rem',
        backgroundColor: COLORS.STRONG_BTN,
        color: '#000',
        fontWeight: '600',
        cursor: 'pointer',
        border: `1px solid ${COLORS.BORDER}`,
        userSelect: 'none',
        justifyContent: 'center',
    },

    headerRight: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
        gap: '0.5rem',
        padding: 0,
        left: '0',
    },

    login: {
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        userSelect: 'none',
        color: COLORS.SOFT_TXT,
        padding: '0 1rem',
    },

    linksAcesso: {
        display: 'flex',
        padding: '1rem',
        fontSize: '2rem',
        userSelect: 'none',
        cursor: 'pointer',
        color: COLORS.LIGHT_TXT,


    },

    heroSection: {
        minHeight: '45vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '3rem 1rem',
    },

    heroTitle: {
        fontSize: '2.8rem',
        fontWeight: '900',
        marginBottom: '1rem',
        color: `${COLORS.LIGHT_TXT}`,
    },

    heroSubtitle: {
        fontSize: '1.3rem',
        opacity: 0.9,
        marginBottom: '1.8rem',
        maxWidth: '40rem',
    },





    categoryBar: {
        display: 'flex',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        padding: '0.7rem 1rem',
        borderBottom: `2px solid ${COLORS.BORDER}`,
        marginBottom: '2rem',
        gap: '0.5rem',
    },

    categoryItem: (isActive) => ({
        padding: '0.5rem 1rem',
        margin: '0 0.2rem',
        borderRadius: '1.5rem',
        backgroundColor: isActive ? COLORS.STRONG_BTN : 'rgba(255,255,255,0.15)',
        color: isActive ? '#000' : 'white',
        fontWeight: '600',
        cursor: 'pointer',
        border: `1px solid ${COLORS.BORDER}`,
        userSelect: 'none',
    }),

    sectionTitle: {
        fontSize: '1.9rem',
        fontWeight: '800',
        marginBottom: '1.2rem',
        color: COLORS.STRONG_TXT,
        textShadow: '0 0 6px rgba(0,0,0,0.3)',
    },

    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(13rem, 1fr))',
        gap: '1.5rem',
    },

    card: {
        backgroundColor: `${COLORS.CARD_BG}`,
        padding: '1rem',
        borderRadius: '0.6rem',
        border: `1px solid ${COLORS.BORDER}`,
        backdropFilter: 'blur(4px)',
        transition: 'transform .2s',
        cursor: 'pointer',
    },

    cardImage: (color) => ({
        height: '10rem',
        borderRadius: '0.5rem',
        background: `linear-gradient(145deg, ${color}, white)`,
        marginBottom: '0.7rem',
        border: `1px solid rgba(255,255,255,0.3)`,
    }),

    promoBanner: {
        margin: '3rem 0',
        padding: '2rem',
        background: 'rgba(0,0,0,0.35)',
        borderRadius: '0.7rem',
        textAlign: 'center',
        backdropFilter: 'blur(4px)',
        border: `1px solid ${COLORS.BORDER}`,
    },

    footer: {
        marginTop: '3rem',
        textAlign: 'center',
        padding: '1rem 0',
        color: 'white',
        borderTop: `1px solid ${COLORS.BORDER}`,
        fontSize: '0.9rem',
        opacity: 0.85,
        userSelect: 'none',
    },
};

export default localStyles;
