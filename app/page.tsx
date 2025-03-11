import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] font-[family-name:var(--font-geist-sans)]">
      {/* Navigation - Glassmorphism effect */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-[#0f172a]/80 border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="flex justify-between items-center p-5 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <svg 
              className="w-9 h-9 text-indigo-600 dark:text-indigo-400" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 text-transparent bg-clip-text">TechConsult</span>
          </div>
          <div className="hidden md:flex gap-8">
            {["Services", "About", "Process", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section - With animated gradient */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 -z-10"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-700/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-300/20 dark:bg-violet-700/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-8">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-xs font-medium mb-2">
              Innovative IT Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Transforming Ideas into <span className="bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 text-transparent bg-clip-text">Digital Reality</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Expert software development and IT consulting services tailored to elevate your business in the digital landscape.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-4 font-medium transition-all shadow-lg hover:shadow-indigo-500/25"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="rounded-full border border-gray-300 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 px-8 py-4 font-medium transition-all"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-3xl -z-10 blur-xl"></div>
            <svg 
              className="w-full h-auto drop-shadow-xl" 
              viewBox="0 0 800 600" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="400" cy="300" r="200" fill="url(#paint0_linear)" fillOpacity="0.2" />
              <path d="M550 250H250V450H550V250Z" fill="#6366F1" fillOpacity="0.1" stroke="#6366F1" strokeWidth="2" />
              <path d="M500 200H300V400H500V200Z" fill="#8B5CF6" fillOpacity="0.1" stroke="#8B5CF6" strokeWidth="2" />
              <path d="M450 150H350V350H450V150Z" fill="#A78BFA" fillOpacity="0.1" stroke="#A78BFA" strokeWidth="2" />
              <circle cx="400" cy="250" r="20" fill="#6366F1" />
              <circle cx="350" cy="300" r="15" fill="#8B5CF6" />
              <circle cx="450" cy="300" r="15" fill="#A78BFA" />
              <defs>
                <linearGradient id="paint0_linear" x1="250" y1="150" x2="550" y2="450" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366F1" />
                  <stop offset="1" stopColor="#A78BFA" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white dark:bg-[#111827] border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "200+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "99%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 text-transparent bg-clip-text mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50 dark:from-[#111827] dark:to-indigo-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-xs font-medium mb-4">
              Our Expertise
            </div>
            <h2 className="text-4xl font-bold mb-4">Comprehensive IT Services</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We deliver cutting-edge solutions tailored to your business needs, helping you stay ahead in the digital transformation journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies and frameworks.",
                icon: (
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z" />
                  </svg>
                )
              },
              {
                title: "Database Development",
                description: "Robust database design, optimization, and management solutions for efficient data handling.",
                icon: (
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.14 2 5 3.57 5 5.5v13c0 1.93 3.14 3.5 7 3.5s7-1.57 7-3.5v-13C19 3.57 15.86 2 12 2zm0 2c3.31 0 5 1.12 5 1.5S15.31 7 12 7 7 5.88 7 5.5 8.69 4 12 4zM7 7.5c1.14.73 2.97 1.5 5 1.5s3.86-.77 5-1.5v4c0 .38-1.69 1.5-5 1.5S7 11.88 7 11.5v-4zm0 6c1.14.73 2.97 1.5 5 1.5s3.86-.77 5-1.5v4c0 .38-1.69 1.5-5 1.5S7 17.88 7 17.5v-4z" />
                  </svg>
                )
              },
              {
                title: "Advanced Analytics",
                description: "Data-driven insights and business intelligence solutions to power strategic decisions.",
                icon: (
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 12H3v8h2v-8zm16 4h-2v4h2v-4zm-4-8h-2v12h2V8zm-4 4h-2v8h2v-8z" />
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                  </svg>
                )
              },
              {
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and migration services for enhanced performance and security.",
                icon: (
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                  </svg>
                )
              },
              {
                title: "Mobile Development",
                description: "Native and cross-platform mobile applications designed for seamless user experiences.",
                icon: (
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                    <path d="M12 16.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z" />
                  </svg>
                )
              },
              {
                title: "IT Consulting",
                description: "Strategic technology planning and implementation guidance to achieve business objectives.",
                icon: (
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                  </svg>
                )
              }
            ].map((service, index) => (
              <div key={index} className="group p-8 bg-white dark:bg-[#1e293b] rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-800">
                <div className="mb-6 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl inline-block group-hover:bg-indigo-100 dark:group-hover:bg-indigo-800/30 transition-colors text-indigo-600 dark:text-indigo-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white dark:bg-[#111827]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <svg 
                className="w-full h-auto rounded-2xl" 
                viewBox="0 0 800 600" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="800" height="600" rx="20" fill="#F3F4F6" />
                <circle cx="400" cy="200" r="60" fill="#6366F1" />
                <circle cx="280" cy="300" r="50" fill="#8B5CF6" />
                <circle cx="520" cy="300" r="50" fill="#A78BFA" />
                <circle cx="340" cy="400" r="40" fill="#6366F1" opacity="0.7" />
                <circle cx="460" cy="400" r="40" fill="#8B5CF6" opacity="0.7" />
                <path d="M320 240L480 240" stroke="#6366F1" strokeWidth="4" strokeLinecap="round" />
                <path d="M280 340L520 340" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round" />
                <path d="M340 440L460 440" stroke="#A78BFA" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-xs font-medium mb-2">
                About Us
              </div>
              <h2 className="text-4xl font-bold mb-4">Your Trusted Technology Partner</h2>
              <p className="text-gray-600 dark:text-gray-300">
                With over a decade of experience, we've helped businesses of all sizes transform their digital presence and operations. Our team of experts combines technical expertise with business acumen to deliver solutions that drive real results.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  "Expert team of certified developers and consultants",
                  "Proven track record of successful project delivery",
                  "Tailored solutions that align with your business goals",
                  "Ongoing support and maintenance services"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-6 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/30 dark:to-[#111827]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-xs font-medium mb-4">
              Our Approach
            </div>
            <h2 className="text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our streamlined process ensures efficient delivery of high-quality solutions that meet your specific requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your business, goals, and challenges to define the project scope."
              },
              {
                step: "02",
                title: "Planning",
                description: "We create a detailed roadmap with timelines, milestones, and resource allocation."
              },
              {
                step: "03",
                title: "Development",
                description: "Our team builds your solution using agile methodologies with regular updates and feedback."
              },
              {
                step: "04",
                title: "Delivery & Support",
                description: "We deploy your solution and provide ongoing maintenance and support."
              }
            ].map((process, index) => (
              <div key={index} className="relative p-8 bg-white dark:bg-[#1e293b] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                <div className="absolute -top-5 left-8 px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg text-white font-bold">
                  {process.step}
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">{process.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white dark:bg-[#111827]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-xs font-medium mb-4">
              Client Feedback
            </div>
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "TechConsult transformed our outdated systems into a modern digital platform that has significantly improved our operational efficiency.",
                author: "Sarah Johnson",
                position: "CTO, Innovate Inc."
              },
              {
                quote: "The team's expertise in database development helped us create a robust system that scales with our growing business needs.",
                author: "Michael Chen",
                position: "Director of IT, GrowthTech"
              },
              {
                quote: "Their analytics solution provided us with insights that have directly contributed to a 30% increase in our conversion rates.",
                author: "Emily Rodriguez",
                position: "Marketing Director, ConvertPro"
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl">
                <svg className="w-10 h-10 text-indigo-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 dark:text-gray-200 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 -z-10"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-indigo-100">
            Contact us today to discuss how our services can help you achieve your technology goals.
          </p>
          <div className="bg-white dark:bg-[#1e293b] p-10 rounded-2xl shadow-2xl max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <textarea 
              placeholder="How can we help you?" 
              rows={4} 
              className="w-full p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-6"
            ></textarea>
            <button className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-6 py-4 font-medium transition-all shadow-lg">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg 
                  className="w-7 h-7 text-indigo-400" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 text-transparent bg-clip-text">TechConsult</span>
              </div>
              <p className="text-gray-400">
                Transforming businesses through innovative technology solutions.
              </p>
              <div className="flex gap-4 pt-2">
                {/* Social media icons */}
                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {["Web Development", "Database Development", "Advanced Analytics", "Cloud Solutions", "Mobile Development", "IT Consulting"].map((service) => (
                  <li key={service}>
                    <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">{service}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {["About Us", "Our Process", "Careers", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>123 Tech Street</li>
                <li>San Francisco, CA 94107</li>
                <li>contact@techconsult.com</li>
                <li>(123) 456-7890</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} TechConsult. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}