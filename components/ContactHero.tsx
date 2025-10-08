'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

const ContactHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Имитация отправки формы
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.')
      setFormData({ name: '', phone: '', message: '' })
    } catch (error) {
      toast.error('Произошла ошибка при отправке заявки. Попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+7 (993) 287-12-78',
      link: 'tel:+79932871278'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'alekrandrgrfg@gmail.com',
      link: 'mailto:alekrandrgrfg@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      value: 'Лялин пер., 12-14, Москва, 105064',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Часы работы',
      value: 'Пн-Пт: 9:00-18:00',
      link: '#'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Свяжитесь с нами
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Готовы обсудить ваш проект? Наши эксперты всегда готовы 
              предоставить профессиональную консультацию по всем вопросам 
              финансового аудита.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotateY: [0, 5, 0],
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Быстрая связь
                </h3>
                <p className="text-gray-300">
                  Оставьте заявку и мы свяжемся с вами в течение 15 минут
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Имя</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ваше имя"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Телефон</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+7 (999) 123-45-67"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Сообщение</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Расскажите о вашем проекте..."
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300"
                >
                  {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
