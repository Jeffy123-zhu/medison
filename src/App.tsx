import { useState } from 'react'
import { Upload, Activity, Brain, Heart, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import Statistics from './components/Statistics'
import Impact from './components/Impact'
import Roadmap from './components/Roadmap'

interface AnalysisResult {
  prediction: string
  confidence: number
  details: string
  risk_level: 'low' | 'medium' | 'high'
}

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [analysisType, setAnalysisType] = useState<'skin' | 'xray'>('skin')

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setResult(null)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAnalyze = async () => {
    if (!selectedFile) return
    setLoading(true)
    
    setTimeout(() => {
      const mockResult: AnalysisResult = {
        prediction: analysisType === 'skin' ? 'Benign Nevus' : 'Normal',
        confidence: Math.floor(Math.random() * 20) + 80,
        details: 'This is a demo result. In production, this would use real AI models.',
        risk_level: 'low'
      }
      setResult(mockResult)
      setLoading(false)
    }, 2000)
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-600 bg-green-50'
      case 'medium': return 'text-yellow-600 bg-yellow-50'
      case 'high': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">MediScan AI</h1>
                <p className="text-sm text-gray-500">Medical Image Analysis Platform</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Making Medical Diagnostics Accessible
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            AI-powered medical imaging platform providing instant, free preliminary diagnostics
          </p>
        </div>

        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setAnalysisType('skin')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              analysisType === 'skin'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Heart className="w-5 h-5 inline mr-2" />
            Skin Lesion Detection
          </button>
          <button
            onClick={() => setAnalysisType('xray')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              analysisType === 'xray'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Activity className="w-5 h-5 inline mr-2" />
            Chest X-Ray Analysis
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Upload Image</h3>
            
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors">
              {preview ? (
                <div className="space-y-4">
                  <img src={preview} alt="Preview" className="max-h-64 mx-auto rounded-lg" />
                  <label className="cursor-pointer inline-block">
                    <span className="text-blue-600 hover:text-blue-700 font-medium">
                      Change Image
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                  </label>
                </div>
              ) : (
                <label className="cursor-pointer block">
                  <Upload className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-400">Supports JPG, PNG formats</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            <button
              onClick={handleAnalyze}
              disabled={!selectedFile || loading}
              className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 inline mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Brain className="w-5 h-5 inline mr-2" />
                  Start AI Analysis
                </>
              )}
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Analysis Results</h3>
            
            {result ? (
              <div className="space-y-6">
                <div className={`p-4 rounded-lg ${getRiskColor(result.risk_level)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Risk Level</span>
                    <span className="uppercase font-bold">{result.risk_level}</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Diagnosis</span>
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{result.prediction}</p>
                </div>

                <div>
                  <span className="text-gray-600 block mb-2">Confidence</span>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all"
                        style={{ width: `${result.confidence}%` }}
                      />
                    </div>
                    <span className="font-bold text-lg">{result.confidence}%</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">{result.details}</p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0" />
                    <p className="text-sm text-yellow-800">
                      This result is for reference only and cannot replace professional medical diagnosis.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <Brain className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Upload an image and click analyze</p>
                <p className="text-sm mt-2">AI will provide diagnostic insights in seconds</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Statistics />
      <Impact />
      <Roadmap />

      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-2">
            Built for HealTech Innovators Hackathon 2025
          </p>
          <p className="text-sm text-gray-500">
            Technology should serve humanity. Healthcare is a human right, not a privilege.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
