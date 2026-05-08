import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
    min-height: 100vh;
    padding: 6rem 1.5rem 3rem;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    align-items: center;

    background: #020617;

    @media (min-width: 1024px) {
        flex-direction: row;
        padding: 6rem 3rem 3rem;
    }
`;

export const ProjectsList = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 1024px) {
        width: 33.333%;
    }
`;

export const Title = styled.h2`
    color: #64748b;

    text-transform: uppercase;
    letter-spacing: 0.2em;

    font-size: 0.875rem;
    font-weight: bold;

    margin-bottom: 1rem;
`;

export const ProjectButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;

    border-radius: 1rem;
    border: 1px solid;

    cursor: pointer;

    transition: all 0.3s ease;

    background: ${({ $active }) =>
        $active
            ? 'rgba(14, 165, 233, 0.1)'
            : 'transparent'};

    border-color: ${({ $active }) =>
        $active ? '#0ea5e9' : '#1e293b'};

    color: ${({ $active }) =>
        $active ? '#38bdf8' : '#94a3b8'};

    &:hover {
        border-color: ${({ $active }) =>
            $active ? '#0ea5e9' : '#475569'};
    }

    span {
        font-size: 1.125rem;
        font-weight: 500;
    }
`;

export const ChevronWrapper = styled.div`
    transition: transform 0.3s ease;

    transform: ${({ $active }) =>
        $active
            ? 'rotate(90deg)'
            : 'rotate(0deg)'};

    @media (min-width: 768px) {
        transform: rotate(0deg);
    }
`;

export const ContentArea = styled.div`
    width: 100%;
    position: relative;

    @media (min-width: 768px) {
        height: 500px;
    }

    @media (min-width: 1024px) {
        width: 66.666%;
    }
`;

export const ProjectCard = styled(motion.div)`
    width: 100%;
    min-height: 500px;

    background: rgba(15, 23, 42, 0.5);

    border: 1px solid #1e293b;
    border-radius: 1.5rem;

    overflow: hidden;

    display: flex;
    flex-direction: column;

    box-shadow: 0 25px 50px -12px
        rgba(0, 0, 0, 0.25);

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 12rem;

    overflow: hidden;

    @media (min-width: 768px) {
        width: 50%;
        height: 100%;
    }
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;

    filter: grayscale(100%);

    transition: all 0.7s ease;

    &:hover {
        filter: grayscale(0%);
    }
`;

export const InfoContainer = styled.div`
    padding: 2rem;
    gap: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 768px) {
        width: 50%;
    }
`;

export const TechList = styled.div`
    display: flex;
    gap: 0.5rem;

    flex-wrap: wrap;

    margin-bottom: 1rem;
`;

export const TechTag = styled.span`
    font-size: 10px;

    background: #1e293b;
    color: #cbd5e1;

    padding: 0.25rem 0.5rem;

    border-radius: 0.25rem;

    letter-spacing: -0.03em;
`;

export const ProjectTitle = styled.h3`
    font-size: 1.875rem;
    font-weight: bold;

    color: white;

    margin-bottom: 1rem;
`;

export const Description = styled.p`
    color: #94a3b8;

    line-height: 1.7;

    margin-bottom: 2rem;
`;

export const ProjectLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    width: fit-content;

    padding: 0.75rem 1.5rem;

    border-radius: 9999px;

    background: #0ea5e9;
    color: white;

    font-weight: bold;

    transition: background 0.3s ease;

    &:hover {
        background: #0284c7;
    }
`;