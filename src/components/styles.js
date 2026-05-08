import styled from 'styled-components';

export const Navbar = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 50;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 1.5rem;

    border-bottom: 1px solid #1e293b;

    background: rgba(2, 6, 23, 0.5);
    backdrop-filter: blur(12px);
`;

export const Logo = styled.span`
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: -0.05em;
    color: white;

    span {
        color: #0ea5e9;
    }
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

export const IconLink = styled.a`
    color: #94a3b8;
    transition: color 0.3s ease;

    &:hover {
        color: #38bdf8;
    }
`;