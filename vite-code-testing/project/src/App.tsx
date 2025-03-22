import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { KeyFeatures } from './components/KeyFeatures'
import { DatasetStats } from './components/DatasetStats'
import { Agents } from './components/Agents'
import { Results } from './components/Results'
import { Team } from './components/Team'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <KeyFeatures />
        <DatasetStats />
        <Agents />
        <Results />
        <Team />
      </main>
      <Footer />
    </div>
  )
}