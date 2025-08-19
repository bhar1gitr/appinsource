import { Phone, Mail, MapPin, Code, Smartphone, Globe, Users, Award, Zap } from "lucide-react"
import { useState } from "react"
import logo from './assets/logo2.png'

export default function AppinsourcePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Using EmailJS service (you'll need to set up an account)
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_4klcr59', // Replace with your EmailJS service ID
          template_id: 'template_lycwpam', // Replace with your EmailJS template ID
          user_id: 'Z9oVB3KveXbXKPxZb', // Replace with your EmailJS public key
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'hello@appinsource.com'
          }
        })
      });

      if (response.ok) {
        setSubmitStatus('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Fallback to mailto link
      const subject = encodeURIComponent('New Contact Form Message from ' + formData.name);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:hello@appinsource.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink, '_blank');
      setSubmitStatus('Opening your email client...');
    }

    setIsSubmitting(false);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                 <img src={logo} alt="Appinsource Logo" className="w-50" />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  style={{ color: '#770E01' }}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-opacity-80 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  style={{ '--tw-text-opacity': '1' }}
                  onMouseEnter={(e) => e.target.style.color = '#770E01'}
                  onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-opacity-80 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onMouseEnter={(e) => e.target.style.color = '#770E01'}
                  onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-opacity-80 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onMouseEnter={(e) => e.target.style.color = '#770E01'}
                  onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16" style={{ backgroundColor: '#336469' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Transform Your Ideas Into
              <span className="block" style={{ color: '#770E01' }}>Digital Solutions</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Appinsource is your trusted partner for innovative mobile apps, web development, and digital
              transformation. We turn your vision into reality with cutting-edge technology and expert craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105"
                style={{ backgroundColor: '#770E01' }}
              >
                Get Started
              </button>
              <button 
                className="text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-10 transition-all border-2"
                style={{ borderColor: '#770E01', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(119, 14, 1, 0.1)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2" style={{ color: '#770E01' }}>150+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" style={{ color: '#336469' }}>50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" style={{ color: '#770E01' }}>5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" style={{ color: '#336469' }}>24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#770E01' }}>About Appinsource</h2>
              <p className="text-gray-600 mb-6">
                Founded with a passion for innovation, Appinsource has been at the forefront of digital transformation,
                helping businesses of all sizes leverage technology to achieve their goals.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of experienced developers, designers, and strategists work collaboratively to deliver solutions
                that not only meet your requirements but exceed your expectations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Award className="h-6 w-6 mr-3" style={{ color: '#336469' }} />
                  <span className="text-gray-700">Award Winning</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 mr-3" style={{ color: '#770E01' }} />
                  <span className="text-gray-700">Expert Team</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 mr-3" style={{ color: '#336469' }} />
                  <span className="text-gray-700">Fast Delivery</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-6 w-6 mr-3" style={{ color: '#770E01' }} />
                  <span className="text-gray-700">Global Reach</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4" style={{ borderLeftColor: '#336469' }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#770E01' }}>Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To empower businesses through innovative technology solutions that drive growth, efficiency, and
                competitive advantage in the digital age.
              </p>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#770E01' }}>Our Vision</h3>
              <p className="text-gray-600">
                To be the leading technology partner that transforms ideas into impactful digital experiences, fostering
                innovation and success for our clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#770E01' }}>Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:border-opacity-50" 
                 style={{ borderTopColor: '#770E01', borderTopWidth: '4px' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" 
                   style={{ backgroundColor: 'rgba(119, 14, 1, 0.1)' }}>
                <Smartphone className="h-8 w-8" style={{ color: '#770E01' }} />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#336469' }}>Mobile App Development</h3>
              <p className="text-gray-600 mb-6">
                Native and cross-platform mobile applications for iOS and Android that deliver exceptional user
                experiences and robust functionality.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• iOS & Android Development</li>
                <li>• React Native & Flutter</li>
                <li>• UI/UX Design</li>
                <li>• App Store Optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:border-opacity-50" 
                 style={{ borderTopColor: '#336469', borderTopWidth: '4px' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" 
                   style={{ backgroundColor: 'rgba(51, 100, 105, 0.1)' }}>
                <Globe className="h-8 w-8" style={{ color: '#336469' }} />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#770E01' }}>Web Development</h3>
              <p className="text-gray-600 mb-6">
                Modern, responsive websites and web applications built with the latest technologies to ensure optimal
                performance and user engagement.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Frontend Development</li>
                <li>• Backend Development</li>
                <li>• E-commerce Solutions</li>
                <li>• CMS Development</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:border-opacity-50" 
                 style={{ borderTopColor: '#770E01', borderTopWidth: '4px' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" 
                   style={{ backgroundColor: 'rgba(119, 14, 1, 0.1)' }}>
                <Code className="h-8 w-8" style={{ color: '#770E01' }} />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#336469' }}>Custom Software</h3>
              <p className="text-gray-600 mb-6">
                Tailored software solutions designed to address your specific business challenges and streamline your
                operations for maximum efficiency.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Enterprise Software</li>
                <li>• API Development</li>
                <li>• Database Design</li>
                <li>• System Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-white" style={{ backgroundColor: '#770E01' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can help bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-4" style={{ color: '#336469' }} />
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-gray-200">+91 7259 131 865</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-4" style={{ color: '#336469' }} />
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-gray-200">info@appinsource.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4" style={{ color: '#336469' }} />
                  <div>
                    <div className="font-semibold text-white">Address</div>
                    <div className="text-gray-200">Regency Plaza, 215, Vithalwadi</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                      borderColor: '#336469',
                      color: 'white'
                    }}
                    placeholder="Your Name"
                    onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #336469'}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                      borderColor: '#336469',
                      color: 'white'
                    }}
                    placeholder="your@email.com"
                    onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #336469'}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                      borderColor: '#336469',
                      color: 'white'
                    }}
                    placeholder="Tell us about your project..."
                    onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #336469'}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                  ></textarea>
                </div>
                
                {submitStatus && (
                  <div className={`p-3 rounded-lg text-sm ${
                    submitStatus.includes('successfully') 
                      ? 'bg-green-100 text-green-800 border border-green-300' 
                      : submitStatus.includes('fill in all fields')
                      ? 'bg-red-100 text-red-800 border border-red-300'
                      : 'bg-blue-100 text-blue-800 border border-blue-300'
                  }`}>
                    {submitStatus}
                  </div>
                )}

                <button
                  className={`w-full text-white px-6 py-3 rounded-lg font-semibold transition-all transform ${
                    isSubmitting 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:opacity-90 hover:scale-105'
                  }`}
                  style={{ backgroundColor: '#336469' }}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-8" style={{ backgroundColor: '#336469' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src={logo} alt="Appinsource Logo" className="w-50" />
              <p className="text-gray-200 mt-2">Transforming ideas into digital reality</p>
            </div>
            <div className="text-gray-200 text-sm">© 2025 Appinsource. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}