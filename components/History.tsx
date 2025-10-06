'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Award, Users, TrendingUp } from 'lucide-react'

const History = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const milestones = [
    {
      year: '2008',
      title: 'Основание компании',
      description: 'ООО Дело было основано с целью предоставления качественных аудиторских услуг',
      icon: Calendar,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      year: '2012',
      title: 'Первые крупные проекты',
      description: 'Начало работы с крупными корпоративными клиентами и международными компаниями',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600'
    },
    {
      year: '2015',
      title: 'Расширение команды',
      description: 'Команда выросла до 20+ специалистов с международными сертификациями',
      icon: Users,
      color: 'from-purple-500 to-violet-600'
    },
    {
      year: '2018',
      title: 'Международное признание',
      description: 'Получение международных сертификаций и признание на мировом уровне',
      icon: Award,
      color: 'from-orange-500 to-red-600'
    },
    {
      year: '2020',
      title: 'Цифровая трансформация',
      description: 'Внедрение современных IT-решений и автоматизация аудиторских процессов',
      icon: TrendingUp,
      color: 'from-pink-500 to-rose-600'
    },
    {
      year: '2023',
      title: 'Лидерство в отрасли',
      description: 'Становление одним из ведущих аудиторских агентств в регионе',
      icon: Award,
      color: 'from-indigo-500 to-blue-600'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            История компании
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 15 лет развития и совершенствования в области финансового аудита
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-primary-800 rounded-full"></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${milestone.color} text-white rounded-full px-4 py-2 mb-4`}>
                      <milestone.icon className="w-4 h-4" />
                      <span className="text-sm font-semibold">{milestone.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-16 h-16 bg-gradient-to-r ${milestone.color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <milestone.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Сегодня</h3>
          <p className="text-xl text-primary-100 mb-8">
            ООО Дело - это команда профессионалов, готовая решать самые сложные задачи в области финансового аудита
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-primary-100">Лет опыта</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-primary-100">Клиентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Проектов</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-primary-100">Успеха</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default History
