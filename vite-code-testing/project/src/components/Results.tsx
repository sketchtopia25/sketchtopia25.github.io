import { motion } from 'framer-motion'

export function Results() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Research Results
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive evaluation demonstrates the effectiveness of Sketchtopia's approach to asynchronous multimodal communication.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900">Asynchronous Action Overlap (AAO)</h3>
              <p className="mt-4 text-gray-600">
                Measures the simultaneity of agent actions, quantifying the natural flow of asynchronous interaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900">Feedback Responsiveness Score (FRS)</h3>
              <p className="mt-4 text-gray-600">
                Evaluates how effectively agents respond to feedback, measuring the quality of communication adaptation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900">Multimodal Action Timing (MATS)</h3>
              <p className="mt-4 text-gray-600">
                Assesses the human-like timing and pacing of agent interactions across different modalities.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}