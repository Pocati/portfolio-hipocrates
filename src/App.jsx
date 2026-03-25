import Navbar from './components/Navbar';
import Hero from './sections/Hero';

function App() {
  return (
    <div className="bg-slate-950 text-slate-50 selection:bg-sky-500/30">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;