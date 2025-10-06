'use client'

import { motion } from 'framer-motion'
import { FileText, Calculator, Shield, TrendingUp, Users, Building2 } from 'lucide-react'

const ServicesHero = () => {
  const services = [
    { icon: FileText, title: 'Финансовый аудит', color: 'from-blue-500 to-cyan-600' },
    { icon: Calculator, title: 'Налоговое консультирование', color: 'from-green-500 to-emerald-600' },
    { icon: Shield, title: 'Внутренний аудит', color: 'from-purple-500 to-violet-600' },
    { icon: TrendingUp, title: 'Управленческий консалтинг', color: 'from-orange-500 to-red-600' },
    { icon: Users, title: 'Аудит персонала', color: 'from-pink-500 to-rose-600' },
    { icon: Building2, title: 'IT-аудит', color: 'from-indigo-500 to-blue-600' }
  ]

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center text-white mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Наши услуги
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Полный спектр профессиональных услуг по финансовому аудиту, 
            консультированию и управленческому консалтингу
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-sm font-semibold text-white group-hover:text-primary-200 transition-colors">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesHero
