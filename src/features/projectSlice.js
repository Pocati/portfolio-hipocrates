import { createSlice } from '@reduxjs/toolkit';
import previsaoDoTempoImage from '../../public/images/previsao_do_tempo.png';
import sistemaLoginImage from '../../public/images/sistema-login.png';


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