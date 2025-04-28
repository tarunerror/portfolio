import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { socialLinks } from '../data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const socialIcons = [
    { 
      id: 'linkedin', 
      icon: <Linkedin size={20} />, 
      url: socialLinks.linkedin,
      label: 'LinkedIn'
    },
    { 
      id: 'github', 
      icon: <Github size={20} />, 
      url: socialLinks.github,
      label: 'GitHub'
    },
    { 
      id: 'email', 
      icon: <Mail size={20} />, 
      url: socialLinks.email,
      label: 'Email'
    },
  ];

  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Tarun Gautam</h3>
            <p className="text-secondary-300 mb-4">
              Passionate Software Engineer skilled in Full Stack Development, Java, and AI-powered applications.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target={social.id === 'email' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="bg-secondary-800 hover:bg-primary-600 text-white p-2 rounded-full transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    smooth={true}
                    duration={500}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-secondary-300">
              <li>
                <p className="font-medium">Email:</p>
                <a
                  href={socialLinks.email}
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                >
                  its.tarun01@gmail.com
                </a>
              </li>
              <li>
                <p className="font-medium">Phone:</p>
                <a
                  href={`tel:${socialLinks.phone}`}
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                >
                  {socialLinks.phone}
                </a>
              </li>
              <li>
                <p className="font-medium">Location:</p>
                <p>Punjab, India</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-800 pt-8 text-center text-secondary-400">
          <p>© {currentYear} Tarun Gautam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;