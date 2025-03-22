import { motion } from 'framer-motion'
import { Database, Notebook as Robot, LineChart as ChartLine } from 'lucide-react'

export function KeyFeatures() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-8 text-gray-600"
          >
            Real-world communication is asynchronous, multimodal, and feedback-driven – qualities often missing in AI. <strong>Sketchtopia</strong> bridges this gap, introducing a novel framework for natural AI communication.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <div className="flex flex-col items-start">
              <div className="rounded-lg bg-primary-600/10 p-2 ring-1 ring-primary-600/20">
                <Database className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Large-Scale Asynchronous Sketch Dataset</h3>
              <p className="mt-2 text-base text-gray-600">
                Featuring 20K+ gameplay sessions, 263K+ sketches, iconic feedback, and open-ended vocabulary, it's an unparalleled resource for AI research.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="rounded-lg bg-primary-600/10 p-2 ring-1 ring-primary-600/20">
                <Robot className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Foundational Asynchronous AI Agents</h3>
              <p className="mt-2 text-base text-gray-600">
                Meet DRAWBOT and GUESSBOT, AI agents designed to communicate naturally in asynchronous sketch-based interactions.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="rounded-lg bg-primary-600/10 p-2 ring-1 ring-primary-600/20">
                <ChartLine className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Novel Benchmarking Metrics</h3>
              <p className="mt-2 text-base text-gray-600">
                Introducing metrics tailored for asynchronous multimodal AI: AAO, FRS, and MATS, establishing new benchmarks for the field.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}