import { CheckCircle, Target, Rocket } from 'lucide-react'

export default function Roadmap() {
  const phases = [
    {
      icon: CheckCircle,
      title: 'Current',
      color: 'text-green-600 bg-green-100',
      items: ['Working prototype', '2 disease categories', 'Web application', '500+ user tests']
    },
    {
      icon: Target,
      title: '3-6 Months',
      color: 'text-blue-600 bg-blue-100',
      items: ['Production AI models', '10+ conditions', 'Mobile apps', 'Clinical validation']
    },
    {
      icon: Rocket,
      title: 'Long-term',
      color: 'text-purple-600 bg-purple-100',
      items: ['FDA/CE certification', 'Healthcare partnerships', '50K+ daily users', 'Global expansion']
    }
  ]

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Development Roadmap</h2>
        <p className="text-gray-600 text-center mb-12 text-lg">
          From hackathon project to global health platform
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, i) => (
            <div key={i} className="border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className={`${phase.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <phase.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.items.map((item, j) => (
                  <li key={j} className="text-gray-600 text-sm flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
