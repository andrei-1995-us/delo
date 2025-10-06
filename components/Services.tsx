'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FileText, 
  Calculator, 
  Shield, 
  TrendingUp, 
  Users, 
  Building2,
  ArrowRight,
  CheckCircle,
  X
} from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

type Service = {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: string
  bgColor: string
  detailedDescription: string
  benefits: string[]
  duration: string
  price: string
}

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const services: Service[] = [
    {
      icon: FileText,
      title: 'Финансовый аудит',
      description: 'Комплексная проверка финансовой отчетности и внутренних процессов компании',
      features: ['Проверка отчетности', 'Анализ рисков', 'Рекомендации', 'Отчетность'],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      detailedDescription: 'Финансовый аудит - это независимая проверка финансовой отчетности организации с целью выражения мнения о ее достоверности. Наши сертифицированные аудиторы проводят комплексный анализ всех финансовых операций, проверяют соответствие учетной политики законодательству и выявляют возможные риски.',
      benefits: [
        'Повышение доверия инвесторов и кредиторов',
        'Выявление финансовых рисков и возможностей',
        'Соответствие требованиям законодательства',
        'Улучшение системы внутреннего контроля'
      ],
      duration: '5-15 дней',
      price: 'от 100 000 руб.'
    },
    {
      icon: Calculator,
      title: 'Налоговое консультирование',
      description: 'Профессиональные консультации по налоговому планированию и оптимизации',
      features: ['Налоговое планирование', 'Оптимизация налогов', 'Консультации', 'Поддержка'],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      detailedDescription: 'Налоговое консультирование помогает оптимизировать налоговую нагрузку в рамках действующего законодательства. Наши эксперты разрабатывают индивидуальные схемы налогового планирования, консультируют по сложным налоговым вопросам и помогают минимизировать риски.',
      benefits: [
        'Снижение налоговой нагрузки',
        'Соблюдение налогового законодательства',
        'Минимизация налоговых рисков',
        'Оптимизация налоговых платежей'
      ],
      duration: '1-3 дня',
      price: 'от 25 000 руб.'
    },
    {
      icon: Shield,
      title: 'Внутренний аудит',
      description: 'Оценка эффективности внутренних процессов и системы контроля',
      features: ['Оценка процессов', 'Контроль качества', 'Анализ рисков', 'Улучшения'],
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      detailedDescription: 'Внутренний аудит - это независимая и объективная деятельность по предоставлению консультаций и гарантий, направленная на улучшение деятельности организации. Мы помогаем оценить эффективность системы внутреннего контроля и выявить возможности для оптимизации.',
      benefits: [
        'Повышение эффективности процессов',
        'Улучшение системы внутреннего контроля',
        'Выявление возможностей для оптимизации',
        'Снижение операционных рисков'
      ],
      duration: '3-7 дней',
      price: 'от 50 000 руб.'
    },
    {
      icon: TrendingUp,
      title: 'Управленческий консалтинг',
      description: 'Стратегическое планирование и оптимизация бизнес-процессов',
      features: ['Стратегическое планирование', 'Оптимизация процессов', 'Анализ KPI', 'Рекомендации'],
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      detailedDescription: 'Управленческий консалтинг направлен на повышение эффективности управления организацией. Мы помогаем разработать стратегию развития, оптимизировать бизнес-процессы, внедрить систему KPI и повысить общую эффективность компании.',
      benefits: [
        'Разработка стратегии развития',
        'Оптимизация бизнес-процессов',
        'Внедрение системы KPI',
        'Повышение эффективности управления'
      ],
      duration: '7-14 дней',
      price: 'от 75 000 руб.'
    },
    {
      icon: Users,
      title: 'Аудит персонала',
      description: 'Оценка эффективности HR-процессов и кадровой политики',
      features: ['HR-аудит', 'Оценка персонала', 'Кадровая политика', 'Обучение'],
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      detailedDescription: 'Аудит персонала помогает оценить эффективность HR-процессов, выявить проблемы в управлении персоналом и разработать рекомендации по улучшению кадровой политики. Мы анализируем процессы найма, обучения, мотивации и развития сотрудников.',
      benefits: [
        'Оценка эффективности HR-процессов',
        'Выявление проблем в управлении персоналом',
        'Разработка рекомендаций по кадровой политике',
        'Повышение эффективности работы персонала'
      ],
      duration: '5-10 дней',
      price: 'от 40 000 руб.'
    },
    {
      icon: Building2,
      title: 'IT-аудит',
      description: 'Проверка информационных систем и IT-инфраструктуры',
      features: ['IT-безопасность', 'Аудит систем', 'Анализ данных', 'Защита информации'],
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'bg-indigo-50',
      detailedDescription: 'IT-аудит - это комплексная проверка информационных систем, IT-инфраструктуры и процессов информационной безопасности. Мы оцениваем соответствие IT-систем бизнес-требованиям, выявляем уязвимости и разрабатываем рекомендации по улучшению.',
      benefits: [
        'Оценка IT-систем и инфраструктуры',
        'Выявление уязвимостей безопасности',
        'Соответствие требованиям информационной безопасности',
        'Оптимизация IT-процессов'
      ],
      duration: '7-12 дней',
      price: 'от 60 000 руб.'
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
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр аудиторских и консалтинговых услуг для вашего бизнеса
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-6 flex-grow">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 + featureIndex * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={() => setSelectedService(service)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Подробнее</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Нужна консультация по выбору услуг?
            </h3>
            <p className="text-xl text-primary-100 mb-8">
              Наши эксперты помогут подобрать оптимальный набор услуг для вашей компании
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Получить консультацию
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${selectedService.color} rounded-2xl flex items-center justify-center`}>
                    <selectedService.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                    <p className="text-gray-600">{selectedService.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* Detailed Description */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Описание услуги</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedService.detailedDescription}</p>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Преимущества</h4>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Что входит в услугу</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedService.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Срок выполнения</h5>
                    <p className="text-primary-600 font-medium">{selectedService.duration}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Стоимость</h5>
                    <p className="text-primary-600 font-medium">{selectedService.price}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedService(null)}
                  className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Закрыть
                </motion.button>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all text-center"
                >
                  Заказать услугу
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Services
