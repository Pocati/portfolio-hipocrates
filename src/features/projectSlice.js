import { createSlice } from '@reduxjs/toolkit';
import previsaoDoTempoImage from '../../public/images/previsao_do_tempo.png';
import sistemaLoginImage from '../../public/images/sistema-login.png';
import efood from '../../public/images/efood.png';
import ferias from '../../public/images/gestaoferias.png';

const initialState = {
    selectedId: 1,
    list: [
        {
            id: 1,
            title: "App de Previsão do Tempo",
            description: "App de previsão do tempo que consome a API do OpenWeather, permitindo ao usuário buscar a previsão para qualquer cidade do mundo, exibindo informações como temperatura, umidade e condições climáticas (para cidades pequenas a API tende a ter limitações nos dados dos próximos 5 dias).",
            tech: ["React", "Styled-Components", "Typescript"],
            link: "https://previs-o-do-tempo-o9p7.vercel.app/",
            image: previsaoDoTempoImage
        },
        {
            id: 2,
            title: "Sistema de Login",
            description: "Sistema de autenticação com validação de formulário, que utiliza os dados salvos no LocalStorage e com feedback visual para erros.",
            tech: ["React", "Styled-Components", "Typescript"],
            link: "https://sistema-login-n3gc-jk22x8dwg-hipocrates-projects.vercel.app/",
            image: sistemaLoginImage
        },
        {
            id: 3,
            title: "Sistema de e-commerce",
            description: "Sistema de e-commerce que consome uma API para apresentar uma lista de restaurantes e suas comidas,  com funcionalidades de carrinho de compras, checkout e gerenciamento de produtos. Este projeto foi feito durante a conclusão do meu curso de Dev Front-End pela EBAC. Até agora o projeto mais desafiador que já fiz.",
            tech: ["React", "Styled-Components", "Typescript", "API REST"],
            link: "https://efood-rust-eight.vercel.app/",
            image: efood
        },
        {
            id: 4,
            title: "Gerenciamento de férias",
            description: "Sistema de gerenciamento de férias, que permite ao usuário cadastrar funcionários e gerir as férias em um modo mais eficiente. Fiz este projeto para ajudar uma colega de trabalho a organizar férias entre funcionários de vários setores diferentes, apesar do projeto ter sido bem aceito, infelizmente não pode ser usado. Foi um ótimo desafio para mim, pois foi aí que enxerguei que consigo ajudar as pessoas com ideias.",
            tech: ["HTML", "CSS", "JavaScript", "Gemini", "Firebase"],
            link: "https://ferias-enfermagem.vercel.app/",
            image: ferias
        }
    ],
};

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setSelectedProject: (state, action) => {
            state.selectedId = action.payload;
        },
    },
});

export const { setSelectedProject } = projectSlice.actions;
export default projectSlice.reducer;