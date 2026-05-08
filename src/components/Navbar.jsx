import { Github, Linkedin } from 'lucide-react';
import * as S from './styles.js';

const Navbar = () => {
    return (
        <S.Navbar>
            <S.Logo>
                Hipócrates Matheus{' '}
                <span>Dev Front-End</span>
            </S.Logo>

            <S.Links>
                <S.IconLink
                    href="https://github.com/pocati"
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub de Hipócrates Matheus"
                >
                    <Github size={22} />
                </S.IconLink>

                <S.IconLink
                    href="https://www.linkedin.com/in/hip%C3%B3crates-matheus-78054a213/"
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn de Hipócrates Matheus"
                >
                    <Linkedin size={22} />
                </S.IconLink>
            </S.Links>
        </S.Navbar>
    );
};

export default Navbar;