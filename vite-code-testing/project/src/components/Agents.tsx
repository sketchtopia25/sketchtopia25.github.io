import { motion } from 'framer-motion'

export function Agents() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Sketchtopia Agents
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our AI agents are designed to communicate naturally in asynchronous sketch-based interactions.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900">DRAWBOT</h3>
              <p className="mt-4 text-gray-600">
                A generative sketching agent powered by Stable Diffusion and adapter modules. DRAWBOT creates communicative sketches and adapts in real-time to guesses and feedback.
              </p>
              <img
                className="mt-8 rounded-xl shadow-xl ring-1 ring-gray-400/10"
                src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200"
                alt="DRAWBOT Interface"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-900">GUESSBOT</h3>
              <p className="mt-4 text-gray-600">
                An intelligent guessing agent that analyzes evolving canvases and game history to generate real-time guesses, actively participating in asynchronous communication.
              </p>
              <img
                className="mt-8 rounded-xl shadow-xl ring-1 ring-gray-400/10"
                src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1200"
                alt="GUESSBOT Interface"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}