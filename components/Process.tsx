'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  MessageCircle, 
  FileText, 
  Search, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Users,
  Award
} from 'lucide-react'

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Консультация',
      description: 'Обсуждение ваших потребностей и целей аудита',
      details: ['Анализ требований', 'Определение объема работ', 'Составление плана'],
      color: 'from-blue-500 to-cyan-600',
      duration: '1-2 дня'
    },
    {
      number: '02',
      icon: FileText,
      title: 'Планирование',
      description: 'Разработка детального плана аудиторской проверки',
      details: ['Составление программы', 'Распределение ресурсов', 'Согласование сроков'],
      color: 'from-green-500 to-emerald-600',
      duration: '2-3 дня'
    },
    {
      number: '03',
      icon: Search,
      title: 'Проведение аудита',
      description: 'Выполнение аудиторских процедур и тестирование',
      details: ['Сбор документов', 'Анализ данных', 'Тестирование систем'],
      color: 'from-purple-500 to-violet-600',
      duration: '5-15 дней'
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Отчетность',
      description: 'Подготовка и представление аудиторского заключения',
      details: ['Составление отчета', 'Рекомендации', 'Презентация результатов'],
      color: 'from-orange-500 to-red-600',
      duration: '2-3 дня'
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Быстрое выполнение',
      description: 'Средний срок аудита 7-10 дней'
    },
    {
      icon: Users,
      title: 'Команда экспертов',
      description: 'Опытные аудиторы с международными сертификациями'
    },
    {
      icon: Award,
      title: 'Гарантия качества',
      description: '100% соответствие международным стандартам'
    }
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
            Как мы работаем
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Четкий и прозрачный процесс работы от консультации до получения результатов
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative mb-16">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-600 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {step.title}
                </h3>

                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {step.description}
                </p>

                <div className="space-y-3 mb-6">
                  {step.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.2 + detailIndex * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    <Clock className="w-4 h-4" />
                    <span>{step.duration}</span>
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Преимущества нашей работы
            </h3>
            <p className="text-xl text-gray-600">
              Почему клиенты выбирают именно нас
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-primary-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
