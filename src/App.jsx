import React, { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'

// Lazy load heavy components for better performance
const YieldStrategy = lazy(() => import('./components/YieldStrategy'))
const GiftGold = lazy(() => import('./components/GiftGold'))
const GoldVsINR = lazy(() => import('./components/GoldVsINR'))
const Comparison = lazy(() => import('./components/Comparison'))
const FAQ = lazy(() => import('./components/FAQ'))
const CTA = lazy(() => import('./components/CTA'))
const Footer = lazy(() => import('./components/Footer'))

import SectionLoader from './components/SectionLoader'

function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main id="main-content">
                <Hero />
                <div className="bg-walnut-50">
                <About />
                <Features />
                
                <Suspense fallback={<SectionLoader type="default" />}>
                    <YieldStrategy />
                </Suspense>
                
                <Suspense fallback={<SectionLoader type="cards" />}>
                    <GiftGold />
                </Suspense>
                
                {/* <Suspense fallback={<SectionLoader type="chart" />}>
                    <GoldVsINR />
                </Suspense> */}
                
                <Suspense fallback={<SectionLoader type="default" />}>
                    <Comparison />
                </Suspense>
                
                {/* <Suspense fallback={<SectionLoader type="features" />}>
                    <FAQ />
                </Suspense> */}
                
                <Suspense fallback={<SectionLoader type="default" />}>
                    <CTA />
                </Suspense>
                </div>
            </main>
            
            <Suspense fallback={<SectionLoader />}>
                <Footer />
            </Suspense>
            
        </div>
    )
}

export default App
