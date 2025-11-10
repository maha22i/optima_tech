"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mail, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { colors } from "@/utils/colors";
import { contactInfo } from "@/utils/contact";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Fonction pour déterminer si un chemin est actif
  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Nouvelle configuration de navigation, plus complète et explicite
  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Nos services", href: "/services" },
    { name: "Qui sommes nous", href: "/about" },
    { name: "Nos réalisations", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Recrutement", href: "/recruitment" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3 shadow-lg" : "py-4"
        }`}
        style={{
          backgroundColor: isScrolled
            ? `${colors.dominant.light}`
            : `${colors.dominant.light}f8`,
          backdropFilter: "blur(20px)",
          borderBottom: isScrolled
            ? `1px solid ${colors.dominant.border}20`
            : "none",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* On utilise flex simple pour pouvoir centrer la navigation */}
          <div className="flex items-center h-14 sm:h-16 lg:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group pl-4 sm:pl-6 lg:pl-8"
              onClick={closeMenu}
            >
              <motion.div
                className="relative flex items-center justify-center"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/logo-netlink.png"
                  alt="Logo Netlink Solutions"
                  width={144}
                  height={144}
                  className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 object-contain transition-all duration-300"
                  priority
                  quality={95}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation – centré grâce à flex-1 */}
            <nav className="hidden lg:flex justify-center items-center space-x-1 mx-auto text-base lg:text-sm xl:text-base">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-2 py-1 text-xs xl:text-sm font-medium transition-all duration-200 rounded-lg group ${
                      isActivePath(item.href)
                        ? "text-white"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {isActivePath(item.href) && (
                      <div
                        className="absolute inset-0 rounded-lg"
                        style={{ backgroundColor: colors.accent.primary }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                    {!isActivePath(item.href) && (
                      <div
                        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{
                          backgroundColor: `${colors.accent.primary}10`,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center ml-2">
              {/* CTA Button – sans flèche */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg cursor-pointer ml-2 text-xs xl:text-sm"
                  style={{
                    backgroundColor: colors.support.primary,
                    color: colors.text.inverse,
                  }}
                >
                  <span>Devis personnalisé</span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={toggleMenu}
              className="lg:hidden relative p-3 rounded-xl transition-all duration-200 ml-auto mr-4 sm:mr-6 lg:mr-8"
              style={{
                backgroundColor: isMenuOpen
                  ? colors.accent.primary
                  : `${colors.dominant.border}30`,
                color: isMenuOpen ? colors.text.inverse : colors.text.primary,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-72 sm:w-80 max-w-[85vw] z-50 lg:hidden"
              style={{ backgroundColor: colors.dominant.light }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div
                  className="flex items-center justify-between p-4 sm:p-6 border-b"
                  style={{ borderColor: colors.dominant.border }}
                >
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/logo-removebg.png"
                      alt="Logo Netlink Solutions"
                      width={80}
                      height={80}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      priority
                      quality={95}
                    />
                  </div>
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-lg transition-colors duration-200"
                    style={{ backgroundColor: `${colors.dominant.border}30` }}
                  >
                    <X size={20} style={{ color: colors.text.primary }} />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 py-4 sm:py-6">
                  <nav className="px-4 sm:px-6 space-y-1 sm:space-y-2">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium transition-all duration-200 ${
                            isActivePath(item.href)
                              ? "text-white"
                              : "text-gray-700 hover:text-gray-900"
                          }`}
                          style={{
                            backgroundColor: isActivePath(item.href)
                              ? colors.accent.primary
                              : "transparent",
                          }}
                          onClick={closeMenu}
                        >
                          <span>{item.name}</span>
                          {!isActivePath(item.href) && (
                            <ArrowRight size={16} className="opacity-40" />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Contact Info */}
                  <motion.div
                    className="mt-8 px-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <div className="space-y-4">
                      <h3
                        className="text-sm font-semibold uppercase tracking-wide"
                        style={{ color: colors.text.secondary }}
                      >
                        Contact
                      </h3>
                      <div className="space-y-3">
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200"
                          style={{
                            backgroundColor: `${colors.support.primary}08`,
                          }}
                        >
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: colors.support.primary }}
                          >
                            <Mail
                              size={16}
                              style={{ color: colors.text.inverse }}
                            />
                          </div>
                          <div>
                            <div
                              className="text-sm font-medium"
                              style={{ color: colors.text.primary }}
                            >
                              {contactInfo.email}
                            </div>
                            <div
                              className="text-xs"
                              style={{ color: colors.text.secondary }}
                            >
                              Écrivez-nous
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Mobile CTA */}
                <motion.div
                  className="p-6 border-t"
                  style={{ borderColor: colors.dominant.border }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full px-6 py-4 font-semibold rounded-xl transition-all duration-200 active:scale-95 shadow-lg cursor-pointer"
                    style={{
                      backgroundColor: colors.support.primary,
                      color: colors.text.inverse,
                    }}
                    onClick={closeMenu}
                  >
                    <span>Demander un devis</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
