import { motion } from 'framer-motion'
import { Github, Globe, Twitter } from 'lucide-react'

const team = [
  {
    name: 'Mohd Hozaifa Khan',
    role: 'Research Lead',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Leading research in multimodal AI communication and sketch-based interaction.',
    links: {
      website: 'https://www.linkedin.com/in/mohd-hozaifa-khan-361b7814a/',
      twitter: 'https://twitter.com/hozaifakhan94',
      github: 'https://github.com/hozaifakhan94',
    },
  },
  {
    name: 'Ravi Kiran Sarvadevabhatla',
    role: 'Principal Investigator',
    imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Expert in computer vision and multimodal learning at IIIT Hyderabad.',
    links: {
      website: 'https://www.linkedin.com/in/ravi-kiran-s/',
      twitter: 'https://twitter.com/RaviKiranCVIT',
      github: 'https://github.com/ravikiran0606',
    },
  },
]

export function Team() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet the Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The researchers behind Sketchtopia, pushing the boundaries of multimodal AI communication.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {team.map((person) => (
            <li key={person.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-primary-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a href={person.links.website} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Website</span>
                    <Globe className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a href={person.links.twitter} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a href={person.links.github} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">GitHub</span>
                    <Github className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}