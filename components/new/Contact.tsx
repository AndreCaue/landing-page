"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail, Send, X } from "lucide-react";

export default function ContactFab() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6" />,
      href: "https://wa.me/5519995598944",
      color: "bg-green-500 hover:bg-green-600",
      delay: 0.1,
    },
    {
      name: "E-mail",
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:andrecaue@outlook.com",
      color: "bg-blue-500 hover:bg-blue-600",
      delay: 0.2,
    },
    {
      name: "Telegram",
      icon: <Send className="w-6 h-6" />,
      href: "https://t.me/+5519995598944",
      color: "bg-sky-500 hover:bg-sky-600",
      delay: 0.3,
    },
  ];

  return (
    <div className="fixed bottom-18 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <div className="mb-4 flex flex-col items-center gap-4">
            {contacts.map((contact) => (
              <motion.a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                transition={{ duration: 0.3, delay: contact.delay }}
                className={`${contact.color} text-white p-4 rounded-full shadow-xl transform-gpu transition-all hover:scale-110 active:scale-95`}
                aria-label={contact.name}
                title={contact.name}
              >
                {contact.icon}
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-linear-to-r from-cyan-400 via-white to-purple-600 text-purple-400 black w-16 h-16 rounded-full shadow-2xl flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-purple-400/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 135 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? (
          <X className="w-8 h-8 rotate-45" />
        ) : (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </motion.button>
    </div>
  );
}
