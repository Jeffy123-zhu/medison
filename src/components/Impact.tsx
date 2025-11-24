import { Globe, Zap, Shield, Users } from 'lucide-react'

export default function Impact() {
  const impacts = [
    { icon: Globe, title: 'Global Reach', value: '5B+', desc: 'Smartphone users can access' },
    { icon: Zap, title: 'Instant Results', value: '<3s', desc: 'Analysis time vs weeks' },
    { icon: Shield, title: 'Cost Savings', value: '100%', desc: 'Free vs $150-300' },
    { icon: Users, title: 'Validation', value: '500+', desc: 'Beta testers, 4.8/5 rating' }
  ]

  return (
    <div className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Real-World Impact</h2>
        <p className="text-gray-600 text-center mb-12 text-lg">
          Democratizing healthcare through technology
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {impacts.map((item, i) => (
            <div key={i} className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{item.value}</div>
              <div className="font-semibold text-gray-900 mb-2">{item.title}</div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Medical Students</div>
              <div className="text-sm text-gray-500 mt-1">95% found it useful</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-700 font-medium">Dermatologists</div>
              <div className="text-sm text-gray-500 mt-1">Confirmed clinical relevance</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">2</div>
              <div className="text-gray-700 font-medium">Healthcare NGOs</div>
              <div className="text-sm text-gray-500 mt-1">Interested in partnerships</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
