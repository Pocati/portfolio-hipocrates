import { useSelector, useDispatch } from 'react-redux';
import { setSelectedProject } from '../features/projectSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';

import {
    Section,
    ProjectsList,
    Title,
    ProjectButton,
    ChevronWrapper,
    ContentArea,
    ProjectCard,
    ImageContainer,
    ProjectImage,
    InfoContainer,
    TechList,
    TechTag,
    ProjectTitle,
    Description,
    ProjectLink
} from './styles.js';

const Hero = () => {
    const dispatch = useDispatch();

    const { list, selectedId } = useSelector(
        (state) => state.projects
    );

    const activeProject =
        list.find((p) => p.id === selectedId) || list[0];

    return (
        <Section>
            <ProjectsList>
                <Title>
                    Projetos Selecionados
                </Title>

                {list.map((project) => (
                    <ProjectButton
                        key={project.id}
                        $active={selectedId === project.id}
                        onClick={() =>
                            dispatch(
                                setSelectedProject(project.id)
                            )
                        }
                    >
                        <span>{project.title}</span>

                        <ChevronWrapper
                            $active={
                                selectedId === project.id
                            }
                        >
                            <ChevronRight />
                        </ChevronWrapper>
                    </ProjectButton>
                ))}
            </ProjectsList>

            <ContentArea>
                <AnimatePresence mode="wait">
                    <ProjectCard
                        key={activeProject.id}
                        initial={{
                            opacity: 0,
                            x: 20
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        exit={{
                            opacity: 0,
                            x: -20
                        }}
                        transition={{
                            duration: 0.4
                        }}
                    >
                        <ImageContainer>
                            <ProjectImage
                                src={activeProject.image}
                                alt={activeProject.title}
                            />
                        </ImageContainer>

                        <InfoContainer>
                            <TechList>
                                {activeProject.tech.map(
                                    (t) => (
                                        <TechTag key={t}>
                                            {t}
                                        </TechTag>
                                    )
                                )}
                            </TechList>

                            <ProjectTitle>
                                {activeProject.title}
                            </ProjectTitle>

                            <Description>
                                {
                                    activeProject.description
                                }
                            </Description>

                            <ProjectLink
                                href={activeProject.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Acessar Projeto

                                <ExternalLink
                                    size={18}
                                />
                            </ProjectLink>
                        </InfoContainer>
                    </ProjectCard>
                </AnimatePresence>
            </ContentArea>
        </Section>
    );
};

export default Hero;