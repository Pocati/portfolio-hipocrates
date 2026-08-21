import { createSlice } from '@reduxjs/toolkit';
import previsaoDoTempoImage from '../../public/images/previsao_do_tempo.png';
import votacao from '../../public/images/votacao.jpg';
import efood from '../../public/images/efood.png';
import ferias from '../../public/images/gestaoferias.png';
import meddev from '../../public/images/meddev.png';
import mapeamento from '../../public/images/mapeamento.png';

const initialState = {
    selectedId: 1,
    list: [
        {
            id: 1,
            title: "App de Previsão do Tempo",
            description: "App de previsão do tempo que consome a API do OpenWeather, permitindo ao usuário buscar a previsão para qualquer cidade do mundo, exibindo informações como temperatura, umidade e condições climáticas (para cidades pequenas a API tende a ter limitações nos dados dos próximos 5 dias).",
            tech: ["React", "Styled-Components", "Typescript", "API REST"],
            link: "https://previs-o-do-tempo-o9p7.vercel.app/",
            image: previsaoDoTempoImage
        },
        {
            id: 2,
            title: "Sistema de Votação",
            description: "Sistema de votação online com interface intuitiva e feedback em tempo real. Este projeto será usado nas assembleias do meu condomínio, otimizando tempo que antes era usado para contagem manual dos votos via placas coloridas.",
            tech: ["React", "Styled-Components", "Typescript", "Autenticação e Validação"],
            link: "https://votacao-indol.vercel.app/",
            image: votacao
        },
        {
            id: 3,
            title: "Sistema de e-commerce",
            description: "Sistema de e-commerce que consome uma API para apresentar uma lista de restaurantes e suas comidas,  com funcionalidades de carrinho de compras, checkout e gerenciamento de produtos.",
            tech: ["React", "Styled-Components", "Typescript", "API REST", "Figma"],
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
        },
        {
            id: 5,
            title: "Agendamento de Consultas Médicas",
            description: "Sistema de agendamento de consultas médicas, que permite ao usuário agendar e gerenciar consultas online. Este projeto foi parte de um freelancer, porém ele foi descontinuiado e substituído por outro projeto que envolvia um agente de IA no whatsapp.",
            tech: ["React", "CSS", "JavaScript", "Gemini"],
            link: "https://meddev-bice.vercel.app/",
            image: meddev
        },
        {
            id: 6,
            title: "Mapeamento de Peças Cirúrgicas",
            description: "Mapeamento de peças cirúrgicas, similar ao paint/kleki.com, porém voltado para o mapeamento de peças cirúrgicas, poupando tempo dos macroscopistas ao mapear as peças complexas e permitindo uma interação mais direta com os interesses do mapeamento.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://mapeamento-macro.vercel.app/",
            image: mapeamento
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