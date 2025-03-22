import { motion } from 'framer-motion'
import { Gamepad, Pencil, MessageSquare, ThumbsUp, Users } from 'lucide-react'

const stats = [
  { name: 'Sessions', value: '20K+', icon: Gamepad },
  { name: 'Sketches', value: '263K+', icon: Pencil },
  { name: 'Guesses', value: '56K+', icon: MessageSquare },
  { name: 'Feedback', value: '19K+', icon: ThumbsUp },
  { name: 'Players', value: '916', icon: Users },
]

export function DatasetStats() {
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
            Dataset Highlights
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore the richness of Sketchtopia, capturing diverse human communication strategies in a collaborative game setting.
          </p>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-5"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.name} className="flex flex-col bg-white p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  <Icon className="mx-auto h-6 w-6 text-primary-600" />
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            )
          })}
        </motion.dl>
      </div>
    </section>
  )
}