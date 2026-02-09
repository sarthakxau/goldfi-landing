// --- Constants & Data ---

const featuresData = [
  {
    id: 1,
    image: "/app-mockup-1.jpg",
    title: "Track Your Gold",
    description: "Monitor your portfolio value and gold price in real-time"
  },
  {
    id: 2,
    image: "/app-mockup-2.jpg",
    title: "Buy Instantly",
    description: "Purchase gold at market rates with zero hidden fees"
  },
  {
    id: 3,
    image: "/app-mockup-3.jpg",
    title: "Gift Gold",
    description: "Send gold to anyone with a simple link"
  }
];

const heroImage = "/hero-phone-3d.png";

const links = {
  appStore: "https://apps.apple.com",
  playStore: "https://play.google.com",
  webApp: "#"
};

const coinSettings = {
  count: 30,
  minSize: 20,
  maxSize: 56,
  minDuration: 4,
  maxDuration: 10,
  colors: ["#D4A93A", "#F2C94C", "#E5B93D", "#C99A2E", "#B8941F"]
};

// --- Main Application Component ---

function App() {
  // State: N = isScrolled, Z = setIsScrolled
  const [isScrolled, setIsScrolled] = Ft.useState(false);
  
  // State: G = isMobileMenuOpen, p = setIsMobileMenuOpen
  const [isMobileMenuOpen, setIsMobileMenuOpen] = Ft.useState(false);

  // Effect: Handle Scroll Listener
  Ft.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    return window.addEventListener("scroll", handleScroll, {
      passive: true
    }), () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate Falling Coins Animation Elements
  const coins = Array.from({ length: coinSettings.count }, (_, index) => {
    const size = coinSettings.minSize + Math.random() * (coinSettings.maxSize - coinSettings.minSize);
    const left = Math.random() * 100;
    const duration = coinSettings.minDuration + Math.random() * (coinSettings.maxDuration - coinSettings.minDuration);
    const delay = -Math.random() * coinSettings.maxDuration;
    const color = coinSettings.colors[Math.floor(Math.random() * coinSettings.colors.length)];
    const opacity = 0.5 + Math.random() * 0.35;
    
    return {
      id: index,
      size: size,
      left: left,
      duration: duration,
      delay: delay,
      color: color,
      opacity: opacity
    };
  });

  // Helper: Smooth Scroll to Section
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
    setIsMobileMenuOpen(false);
  };

  // --- Render ---
  return f.jsxs("div", {
    "code-path": "src/App.tsx:118:5",
    className: "relative bg-light text-dark overflow-x-hidden",
    children: [
      
      // Background Falling Coins
      f.jsx("div", {
        "code-path": "src/App.tsx:120:7",
        className: "coins-container",
        children: coins.map((coin) => f.jsx("div", {
          "code-path": "src/App.tsx:122:11",
          className: "falling-coin",
          style: {
            width: `${coin.size}px`,
            height: `${coin.size}px`,
            left: `${coin.left}%`,
            backgroundColor: coin.color,
            opacity: coin.opacity,
            animationDuration: `${coin.duration}s`,
            animationDelay: `${coin.delay}s`
          }
        }, coin.id))
      }),

      // Navigation Bar
      f.jsx("nav", {
        "code-path": "src/App.tsx:139:7",
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`,
        children: f.jsxs("div", {
          "code-path": "src/App.tsx:140:9",
          className: "bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm",
          children: [
            f.jsxs("div", {
              "code-path": "src/App.tsx:141:11",
              className: "flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3",
              children: [
                // Logo
                f.jsx("div", {
                  "code-path": "src/App.tsx:142:13",
                  className: "font-display font-bold text-xl gold-text",
                  children: "gold.fi"
                }),
                // Desktop Links
                f.jsxs("div", {
                  "code-path": "src/App.tsx:145:13",
                  className: "hidden md:flex items-center gap-6",
                  children: [
                    f.jsx("button", { onClick: () => scrollToSection("about"), className: "text-sm text-dark-secondary hover:text-gold transition-colors", children: "How it works" }),
                    f.jsx("button", { onClick: () => scrollToSection("vault"), className: "text-sm text-dark-secondary hover:text-gold transition-colors", children: "Security" }),
                    f.jsx("button", { onClick: () => scrollToSection("yield"), className: "text-sm text-dark-secondary hover:text-gold transition-colors", children: "Yield" }),
                    f.jsx("button", { onClick: () => scrollToSection("gift"), className: "text-sm text-dark-secondary hover:text-gold transition-colors", children: "Gift" })
                  ]
                }),
                // Right Actions (Launch App / Mobile Toggle)
                f.jsxs("div", {
                  "code-path": "src/App.tsx:152:13",
                  className: "flex items-center gap-2",
                  children: [
                    f.jsxs("a", {
                      href: links.webApp,
                      className: "hidden sm:flex btn-gold text-sm py-2 px-4 items-center gap-2",
                      children: [f.jsx(Vn, { className: "w-4 h-4" }), " Launch"]
                    }),
                    f.jsx("button", {
                      "code-path": "src/App.tsx:158:15",
                      onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
                      className: "md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors",
                      children: isMobileMenuOpen 
                        ? f.jsx(k1, { className: "w-5 h-5" }) 
                        : f.jsx(X1, { className: "w-5 h-5" })
                    })
                  ]
                })
              ]
            }),
            // Mobile Menu Dropdown
            isMobileMenuOpen && f.jsxs("div", {
              "code-path": "src/App.tsx:169:13",
              className: "md:hidden bg-white border-t border-black/5 px-4 py-4 space-y-3",
              children: [
                f.jsx("button", { onClick: () => scrollToSection("about"), className: "block w-full text-left py-2 text-dark-secondary hover:text-gold transition-colors", children: "How it works" }),
                f.jsx("button", { onClick: () => scrollToSection("vault"), className: "block w-full text-left py-2 text-dark-secondary hover:text-gold transition-colors", children: "Security" }),
                f.jsx("button", { onClick: () => scrollToSection("yield"), className: "block w-full text-left py-2 text-dark-secondary hover:text-gold transition-colors", children: "Yield" }),
                f.jsx("button", { onClick: () => scrollToSection("gift"), className: "block w-full text-left py-2 text-dark-secondary hover:text-gold transition-colors", children: "Gift" }),
                f.jsxs("a", {
                  href: links.webApp,
                  className: "btn-gold w-full flex items-center justify-center gap-2 mt-2",
                  children: [f.jsx(Vn, { className: "w-4 h-4" }), " Launch App"]
                })
              ]
            })
          ]
        })
      }),

      // Hero Section
      f.jsx("section", {
        "code-path": "src/App.tsx:183:7",
        className: "relative z-10 min-h-screen flex items-center py-20 lg:py-0",
        children: f.jsx("div", {
          className: "w-full px-4 sm:px-6 lg:px-12 xl:px-20",
          children: f.jsxs("div", {
            className: "flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-7xl mx-auto",
            children: [
              // Hero Text Content
              f.jsxs("div", {
                className: "flex-1 text-center lg:text-left max-w-xl",
                children: [
                  f.jsx("p", { className: "font-mono text-xs tracking-[0.08em] text-gold uppercase mb-3", children: "Tokenized Gold for India" }),
                  f.jsxs("h1", {
                    className: "font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-dark mb-4 leading-tight",
                    children: [
                      f.jsx("span", { className: "block", children: "Own gold." }),
                      f.jsx("span", { className: "block", children: "On-chain." }),
                      f.jsx("span", { className: "block", children: "Without the friction." })
                    ]
                  }),
                  f.jsx("p", { className: "text-base sm:text-lg text-dark-secondary mb-6 max-w-md mx-auto lg:mx-0", children: "Buy, hold, and send gold as easily as crypto. Fully backed, fully liquid. Zero fees." }),
                  
                  // Hero Buttons
                  f.jsxs("div", {
                    className: "flex flex-wrap justify-center lg:justify-start gap-3 mb-6",
                    children: [
                      f.jsxs("a", { href: links.webApp, className: "btn-gold flex items-center gap-2 text-sm sm:text-base", children: [f.jsx(L1, { className: "w-4 h-4" }), " Launch Web App"] }),
                      f.jsxs("button", { onClick: () => scrollToSection("about"), className: "btn-outline-gold flex items-center gap-2 text-sm sm:text-base", children: ["See how it works ", f.jsx(Rm, { className: "w-4 h-4" })] })
                    ]
                  }),

                  // App Store / Play Store Buttons
                  f.jsxs("div", {
                    className: "flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3",
                    children: [
                      f.jsxs("a", {
                        href: links.appStore,
                        className: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-dark text-white rounded-xl hover:bg-dark-secondary transition-colors",
                        children: [
                          f.jsx(yf, { className: "w-4 h-4 sm:w-5 sm:h-5" }),
                          f.jsxs("div", { className: "text-left", children: [f.jsx("p", { className: "text-[9px] sm:text-[10px] opacity-70 leading-none", children: "Download on" }), f.jsx("p", { className: "text-xs sm:text-sm font-semibold leading-tight", children: "App Store" })] })
                        ]
                      }),
                      f.jsxs("a", {
                        href: links.playStore,
                        className: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-dark text-white rounded-xl hover:bg-dark-secondary transition-colors",
                        children: [
                          f.jsx(gf, { className: "w-4 h-4 sm:w-5 sm:h-5" }),
                          f.jsxs("div", { className: "text-left", children: [f.jsx("p", { className: "text-[9px] sm:text-[10px] opacity-70 leading-none", children: "Get it on" }), f.jsx("p", { className: "text-xs sm:text-sm font-semibold leading-tight", children: "Google Play" })] })
                        ]
                      })
                    ]
                  })
                ]
              }),

              // Hero Image (3D Phone)
              f.jsx("div", {
                className: "flex-1 flex justify-center lg:justify-end max-w-sm lg:max-w-md xl:max-w-lg",
                children: f.jsx("div", {
                  className: "relative w-[280px] sm:w-[320px] lg:w-[380px]",
                  children: f.jsx("img", { src: heroImage, alt: "gold.fi App", className: "w-full h-auto drop-shadow-2xl" })
                })
              })
            ]
          })
        })
      }),

      // Feature Cards Section
      f.jsx("section", {
        className: "relative z-10 py-16 lg:py-24",
        children: f.jsx("div", {
          className: "w-full px-4 sm:px-6 lg:px-12",
          children: f.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto",
            children: [
              // Card 1
              f.jsxs("div", {
                className: "card-light p-5 sm:p-6 lg:p-8 flex flex-col",
                children: [
                  f.jsx("div", { className: "w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4", children: f.jsx(bf, { className: "w-5 h-5 text-gold" }) }),
                  f.jsx("h3", { className: "font-display font-bold text-lg sm:text-xl lg:text-2xl text-dark mb-2", children: "Better than digital gold" }),
                  f.jsx("p", { className: "text-dark-secondary text-sm leading-relaxed flex-1", children: "Buy at actual market rates. Zero hidden fees, no custodian markups." }),
                  f.jsx("div", { className: "mt-4 pt-4 border-t border-black/5", children: f.jsxs("div", { className: "flex items-center gap-2 text-gold text-sm font-medium", children: [f.jsx(xf, { className: "w-4 h-4" }), " Zero fees"] }) })
                ]
              }),
              // Card 2
              f.jsxs("div", {
                className: "card-light p-5 sm:p-6 lg:p-8 flex flex-col",
                children: [
                  f.jsx("div", { className: "w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4", children: f.jsx(N1, { className: "w-5 h-5 text-gold" }) }),
                  f.jsx("h3", { className: "font-display font-bold text-lg sm:text-xl lg:text-2xl text-dark mb-2", children: "Truly transferable" }),
                  f.jsx("p", { className: "text-dark-secondary text-sm leading-relaxed flex-1", children: "Send gold to any wallet in seconds. Not locked to a single platform." }),
                  f.jsx("div", { className: "mt-4 pt-4 border-t border-black/5", children: f.jsxs("div", { className: "flex items-center gap-2 text-gold text-sm font-medium", children: [f.jsx(xf, { className: "w-4 h-4" }), " Any wallet"] }) })
                ]
              }),
              // Card 3
              f.jsxs("div", {
                className: "card-light p-5 sm:p-6 lg:p-8 flex flex-col",
                children: [
                  f.jsx("div", { className: "w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4", children: f.jsx(Ln, { className: "w-5 h-5 text-gold" }) }),
                  f.jsx("h3", { className: "font-display font-bold text-lg sm:text-xl lg:text-2xl text-dark mb-2", children: "DeFi-ready" }),
                  f.jsx("p", { className: "text-dark-secondary text-sm leading-relaxed flex-1", children: "Earn yield or borrow against your gold—without selling." }),
                  f.jsx("div", { className: "mt-4 pt-4 border-t border-black/5", children: f.jsxs("div", { className: "flex items-center gap-2 text-gold text-sm font-medium", children: [f.jsx(xf, { className: "w-4 h-4" }), " Earn yield"] }) })
                ]
              })
            ]
          })
        })
      }),

      // ... (Subsequent sections for About, Vault, Yield, Gift, App Mockups follow similar structure) ...
      
      // Footer
      f.jsxs("div", {
        className: "pt-6 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-2",
        children: [
          f.jsx("div", { className: "font-display font-bold text-xl gold-text", children: "gold.fi" }),
          f.jsx("p", { className: "text-dark-secondary text-xs", children: "© 2026 gold.fi. All rights reserved." })
        ]
      })
    ]
  });
}

// Render Application
y1.createRoot(document.getElementById("root")).render(
  f.jsx(Ft.StrictMode, {
    children: f.jsx(App, {})
  })
);
