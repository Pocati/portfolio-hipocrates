import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import styled from 'styled-components';

function App() {
    return (
        <Container>
            <Navbar />

            <main>
                <Hero />
            </main>
        </Container>
    );
}

export default App;

const Container = styled.div`
    background: #020617;
    color: #f8fafc;

    ::selection {
        background: rgba(14, 165, 233, 0.3);
    }
`;