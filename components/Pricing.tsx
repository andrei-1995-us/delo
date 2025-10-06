'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Star, ArrowRight, Calculator } from 'lucide-react'
import { useState } from 'react'

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedPlan, setSelectedPlan] = useState('standard')


  const plans = [
    {
      id: 'basic',
      name: 'Базовый аудит',
      price: 'от 50 000',
      period: 'руб.',
      description: 'Подходит для малого бизнеса',
      features: [
        'Проверка основных документов',
        'Анализ финансовой отчетности',
        'Базовые рекомендации',
        'Отчет в течение 5 дней',
        'Консультация по результатам'
      ],
      color: 'from-gray-500 to-gray-600',
      popular: false
    },
    {
      id: 'standard',
      name: 'Стандартный аудит',
      price: 'от 150 000',
      period: 'руб.',
      description: 'Оптимальный выбор для среднего бизнеса',
      features: [
        'Полная проверка документов',
        'Анализ всех финансовых процессов',
        'Детальные рекомендации',
        'Отчет в течение 7 дней',
        'Консультация + поддержка',
        'Повторная проверка через 3 месяца'
      ],
      color: 'from-primary-500 to-primary-600',
      popular: true
    },
    {
      id: 'premium',
      name: 'Премиум аудит',
      price: 'от 300 000',
      period: 'руб.',
      description: 'Комплексный аудит для крупных компаний',
      features: [
        'Полный аудит всех процессов',
        'Анализ рисков и возможностей',
        'Стратегические рекомендации',
        'Отчет в течение 10 дней',
        'Персональный менеджер',
        'Годовая поддержка',
        'IT-аудит включен'
      ],
      color: 'from-gold-500 to-gold-600',
      popular: false
    }
  ]

  const additionalServices = [
    { name: 'Налоговое консультирование', price: 'от 25 000 руб.' },
    { name: 'IT-аудит', price: 'от 40 000 руб.' },
    { name: 'Аудит персонала', price: 'от 30 000 руб.' },
    { name: 'Управленческий консалтинг', price: 'от 50 000 руб.' }
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
            Стоимость услуг
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Прозрачное ценообразование без скрытых платежей. 
            Стоимость рассчитывается индивидуально для каждого проекта.
          </p>
        </motion.div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer flex flex-col h-full ${
                plan.popular 
                  ? 'border-primary-500 ring-4 ring-primary-100' 
                  : selectedPlan === plan.id
                  ? 'border-primary-500 ring-2 ring-primary-100'
                  : 'border-gray-200 hover:border-primary-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Популярный</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
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

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  selectedPlan === plan.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800'
                    : plan.popular
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700'
                }`}
              >
                <span>{selectedPlan === plan.id ? 'Выбран' : 'Выбрать план'}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Дополнительные услуги
            </h3>
            <p className="text-xl text-gray-600">
              Можем дополнить основной аудит дополнительными услугами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  {service.name}
                </h4>
                <p className="text-primary-600 font-semibold">
                  {service.price}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Нужна индивидуальная консультация?
            </h3>
            <p className="text-xl text-primary-100 mb-8">
              Свяжитесь с нами для расчета точной стоимости вашего проекта
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Получить расчет стоимости
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
