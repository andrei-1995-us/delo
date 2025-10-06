'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Target, 
  Shield, 
  Users, 
  Award, 
  Heart, 
  Lightbulb,
  CheckCircle,
  Star
} from 'lucide-react'

const Values = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const values = [
    {
      icon: Target,
      title: 'Точность',
      description: 'Каждый проект выполняется с максимальной точностью и вниманием к деталям',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Shield,
      title: 'Надежность',
      description: 'Гарантируем конфиденциальность и безопасность ваших данных',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Users,
      title: 'Команда',
      description: 'Опытные специалисты с многолетним опытом в области аудита',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Award,
      title: 'Качество',
      description: 'Высокие стандарты качества и профессиональный подход к работе',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Heart,
      title: 'Забота',
      description: 'Индивидуальный подход к каждому клиенту и его потребностям',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50'
    },
    {
      icon: Lightbulb,
      title: 'Инновации',
      description: 'Используем современные технологии и методы аудита',
      color: 'from-yellow-500 to-amber-600',
      bgColor: 'bg-yellow-50'
    }
  ]

  const principles = [
    'Честность и прозрачность во всех процессах',
    'Профессиональная этика и конфиденциальность',
    'Непрерывное обучение и развитие',
    'Клиентоориентированный подход',
    'Инновационные решения и технологии'
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Наши ценности
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Принципы, которыми мы руководствуемся в работе с клиентами
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <value.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Principles Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
        >
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-gold-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Принципы нашей работы
            </h3>
            <p className="text-xl text-gray-600">
              Основы, на которых строится наша профессиональная деятельность
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors duration-300"
              >
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{principle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Values
