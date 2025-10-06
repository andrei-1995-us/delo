'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, Mail, Award, GraduationCap } from 'lucide-react'

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const teamMembers = [
    {
      name: 'Александр Петров',
      position: 'Генеральный директор',
      experience: '15+ лет опыта',
      education: 'МГУ, Финансовый менеджмент',
      certifications: ['CPA', 'CFA'],
      avatar: 'АП',
      description: 'Эксперт в области финансового аудита с международным опытом'
    },
    {
      name: 'Мария Сидорова',
      position: 'Главный аудитор',
      experience: '12+ лет опыта',
      education: 'ВШЭ, Бухгалтерский учет',
      certifications: ['ACCA', 'CIA'],
      avatar: 'МС',
      description: 'Специалист по внутреннему аудиту и управлению рисками'
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Ведущий консультант',
      experience: '10+ лет опыта',
      education: 'МГИМО, Международные финансы',
      certifications: ['CISA', 'PMP'],
      avatar: 'ДК',
      description: 'Эксперт по IT-аудиту и цифровой трансформации'
    },
    {
      name: 'Елена Волкова',
      position: 'Старший аудитор',
      experience: '8+ лет опыта',
      education: 'РЭУ им. Плеханова, Аудит',
      certifications: ['CPA', 'CIA'],
      avatar: 'ЕВ',
      description: 'Специалист по налоговому консультированию'
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
            Наша команда
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональные аудиторы с многолетним опытом и международными сертификациями
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{member.avatar}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-2">
                  {member.position}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {member.description}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-gold-500" />
                  <span className="text-sm text-gray-600">{member.experience}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-600">{member.education}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {member.certifications.map((cert, certIndex) => (
                    <span
                      key={certIndex}
                      className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center space-x-3 mt-6 pt-4 border-t border-gray-100">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 bg-gray-100 hover:bg-primary-100 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4 text-gray-600" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 bg-gray-100 hover:bg-primary-100 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 text-gray-600" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Почему выбирают нашу команду?</h3>
            <p className="text-xl text-primary-100">
              Профессионализм, опыт и индивидуальный подход к каждому клиенту
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-100">Лет средний опыт команды</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-primary-100">Международных сертификаций</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-100">Профессиональная подготовка</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team
