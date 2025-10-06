'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MapPin, Clock, Building2, FileText } from 'lucide-react'

const ContactInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const contactDetails = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+7 (993) 287-12-78',
      description: 'Звоните в любое время',
      link: 'tel:+79932871278',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'alekrandrgrfg@gmail.com',
      description: 'Пишите нам письма',
      link: 'mailto:alekrandrgrfg@gmail.com',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      value: 'Москва, Россия',
      description: 'Наш офис',
      link: '#',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Clock,
      title: 'Часы работы',
      value: 'Пн-Пт: 9:00-18:00',
      description: 'Время приема',
      link: '#',
      color: 'from-orange-500 to-red-600'
    }
  ]

  const companyInfo = [
    {
      icon: Building2,
      title: 'ООО Дело',
      description: 'Официальное название компании'
    },
    {
      icon: FileText,
      title: 'ИНН: 5507304580',
      description: 'Идентификационный номер налогоплательщика'
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
            Контактная информация
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactDetails.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group border border-gray-100"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <contact.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {contact.title}
              </h3>
              
              <p className="text-lg font-semibold text-primary-600 mb-2">
                {contact.value}
              </p>
              
              <p className="text-gray-600 text-sm">
                {contact.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Company Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Информация о компании
            </h3>
            <p className="text-xl text-gray-600">
              ООО Дело - ваш надежный партнер в области финансового аудита
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {info.title}
                    </h4>
                    <p className="text-gray-600">
                      {info.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-lg text-gray-700">
              <strong>Деятельность по проведению финансового аудита</strong>
            </p>
            <p className="text-gray-600 mt-2">
              Профессиональные услуги с гарантией качества
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactInfo
