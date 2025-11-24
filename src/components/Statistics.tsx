import { Users, Clock, DollarSign, TrendingDown } from 'lucide-react'

export default function Statistics() {
  const stats = [
    { icon: Users, value: '2.6B', label: 'People lack healthcare access', color: 'from-blue-500 to-blue-600' },
    { icon: Clock, value: '4-8 weeks', label: 'Wait time for specialists', color: 'from-purple-500 to-purple-600' },
    { icon: DollarSign, value: '$150-300', label: 'Cost per consultation', color: 'from-green-500 to-green-600' },
    { icon: TrendingDown, value: '40%', label: 'Survival drop if late', color: 'from-red-500 to-red-600' }
  ]

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          The Healthcare Access Crisis
        </h2>
        <p className="text-blue-200 text-center mb-12 text-lg">
          Millions worldwide face barriers to basic medical care
        </p>
        
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className={`bg-gradient-to-r ${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
