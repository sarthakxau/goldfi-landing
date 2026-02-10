import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Comparison from './components/Comparison'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen bg-light">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Features />
                <Comparison />
                <CTA />
            </main>
            <Footer />
        </div>
    )
}

export default App
