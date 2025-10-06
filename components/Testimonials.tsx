'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Александр Петров',
      position: 'Генеральный директор',
      company: 'ООО "ТехноИнвест"',
      content: 'ООО Дело провело для нас комплексный финансовый аудит. Профессиональный подход, внимательность к деталям и качественные рекомендации помогли оптимизировать наши финансовые процессы.',
      rating: 5,
      avatar: 'AP'
    },
    {
      name: 'Мария Сидорова',
      position: 'Финансовый директор',
      company: 'АО "СтройГрупп"',
      content: 'Отличная работа команды! Аудит был проведен в срок, все рекомендации оказались очень полезными. Теперь мы регулярно обращаемся за консультациями.',
      rating: 5,
      avatar: 'МС'
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Управляющий партнер',
      company: 'ИП "Козлов и партнеры"',
      content: 'Профессиональный подход и высокое качество услуг. Команда ООО Дело помогла нам привести в порядок всю финансовую отчетность и оптимизировать процессы.',
      rating: 5,
      avatar: 'ДК'
    },
    {
      name: 'Елена Волкова',
      position: 'Главный бухгалтер',
      company: 'ООО "ТоргСервис"',
      content: 'Очень довольны результатом! Аудиторы проявили высокий профессионализм и помогли выявить важные моменты для улучшения нашей работы.',
      rating: 5,
      avatar: 'ЕВ'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 200 довольных клиентов доверяют нам свои финансовые процессы
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 lg:p-12 shadow-xl"
          >
            <div className="flex items-center justify-center mb-6">
              <Quote className="w-12 h-12 text-primary-600" />
            </div>

            <blockquote className="text-xl lg:text-2xl text-gray-800 text-center mb-8 leading-relaxed font-medium">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {testimonials[currentIndex].avatar}
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-primary-600 font-medium">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors duration-300"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </motion.button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors duration-300"
            >
              <ArrowRight className="w-6 h-6 text-gray-600" />
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { value: '200+', label: 'Довольных клиентов' },
            { value: '4.9/5', label: 'Средний рейтинг' },
            { value: '98%', label: 'Рекомендуют нас' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-2xl"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
