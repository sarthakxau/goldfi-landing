/**
 * ==========================================
 * PART 1: MODULE PRELOADER & VENDOR LIBRARIES
 * (React, React DOM, Scheduler)
 * ==========================================
 */

/* Module Preloader Polyfill */
(function() {
  const Z = document.createElement("link").relList;
  if (Z && Z.supports && Z.supports("modulepreload")) return;
  for (const Y of document.querySelectorAll('link[rel="modulepreload"]')) p(Y);
  new MutationObserver(Y => {
    for (const R of Y)
      if (R.type === "childList")
        for (const _ of R.addedNodes)
          _.tagName === "LINK" && _.rel === "modulepreload" && p(_)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function G(Y) {
    const R = {};
    return Y.integrity && (R.integrity = Y.integrity), Y.referrerPolicy && (R.referrerPolicy = Y.referrerPolicy), Y.crossOrigin === "use-credentials" ? R.credentials = "include" : Y.crossOrigin === "anonymous" ? R.credentials = "omit" : R.credentials = "same-origin", R
  }

  function p(Y) {
    if (Y.ep) return;
    Y.ep = !0;
    const R = G(Y);
    fetch(Y.href, R)
  }
})();

/* React Library Bundle */
var df = { exports: {} }, Su = {};
var Nm;
function i1() { if (Nm) return Su; Nm = 1; var N = Symbol.for("react.transitional.element"), Z = Symbol.for("react.fragment"); function G(p, Y, R) { var _ = null; if (R !== void 0 && (_ = "" + R), Y.key !== void 0 && (_ = "" + Y.key), "key" in Y) { R = {}; for (var al in Y) al !== "key" && (R[al] = Y[al]) } else R = Y; return Y = R.ref, { $$typeof: N, type: p, key: _, ref: Y !== void 0 ? Y : null, props: R } } return Su.Fragment = Z, Su.jsx = G, Su.jsxs = G, Su }
var Em;
function f1() { return Em || (Em = 1, df.exports = i1()), df.exports }
var f = f1(), of = { exports: {} }, B = {};

/* React DOM / Scheduler Bundle */
var Tm;
function s1() { /* ... (Minified React Logic) ... */ if (Tm) return B; Tm = 1; /* [Truncated for readability - Standard React 19 source] */ var N = Symbol.for("react.transitional.element"), Z = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"); /* ... */ B.version = "19.2.3"; return B }
var jm;
function Af() { return jm || (jm = 1, of.exports = s1()), of.exports }
var Ft = Af(), mf = { exports: {} }, zu = {}, hf = { exports: {} }, rf = {};
var _m;
function d1() { return _m || (_m = 1, (function(N) { /* ... (Scheduler Logic) ... */ })(rf)), rf }
var Mm;
function o1() { return Mm || (Mm = 1, hf.exports = d1()), hf.exports }
var pf = { exports: {} }, Cl = {};
var Om;
function m1() { if (Om) return Cl; Om = 1; var N = Af(); /* ... (React DOM Internals) ... */ Cl.version = "19.2.3"; return Cl }
var Dm;
function h1() { if (Dm) return pf.exports; Dm = 1; function N() { try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N) } catch (Z) { console.error(Z) } } return N(), pf.exports = m1(), pf.exports }
var Um;
function r1() { if (Um) return zu; Um = 1; var N = o1(), Z = Af(), G = h1(); /* ... (React DOM Client Logic) ... */ zu.createRoot = function(l, t) { /* ... */ return new sf(t) }; zu.hydrateRoot = function(l, t, a) { /* ... */ return new Qn(t) }; zu.version = "19.2.3"; return zu }

var Hm;
function p1() {
  if (Hm) return mf.exports;
  Hm = 1;
  function N() { try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N) } catch (Z) { console.error(Z) } }
  return N(), mf.exports = r1(), mf.exports
}

var y1 = p1(); // React DOM Client instance


/**
 * ==========================================
 * PART 2: APPLICATION UTILITIES & HELPERS
 * ==========================================
 */

// String formatters (kebab-case, CamelCase, PascalCase)
const x1 = N => N.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  v1 = N => N.replace(/^([A-Z])|[\s-_]+(\w)/g, (Z, G, p) => p ? p.toUpperCase() : G.toLowerCase()),
  Cm = N => {
    const Z = v1(N);
    return Z.charAt(0).toUpperCase() + Z.slice(1)
  },
  // ClassName joiner
  Bm = (...N) => N.filter((Z, G, p) => !!Z && Z.trim() !== "" && p.indexOf(Z) === G).join(" ").trim(),
  // Check for Aria props
  g1 = N => {
    for (const Z in N)
      if (Z.startsWith("aria-") || Z === "role" || Z === "title") return !0
  };

/**
 * ==========================================
 * PART 3: ICON LIBRARY (LUCIDE REACT)
 * ==========================================
 */

// Default SVG attributes
var b1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// Base Icon Component
const A1 = Ft.forwardRef(({ color: N = "currentColor", size: Z = 24, strokeWidth: G = 2, absoluteStrokeWidth: p, className: Y = "", children: R, iconNode: _, ...al }, D) => 
  Ft.createElement("svg", {
    ref: D,
    ...b1,
    width: Z,
    height: Z,
    stroke: N,
    strokeWidth: p ? Number(G) * 24 / Number(Z) : G,
    className: Bm("lucide", Y),
    ...!R && !g1(al) && { "aria-hidden": "true" },
    ...al
  }, [
    ..._.map(([z, F]) => Ft.createElement(z, F)),
    ...Array.isArray(R) ? R : [R]
  ])
);

// Helper to create specific icons
const jl = (N, Z) => {
  const G = Ft.forwardRef(({ className: p, ...Y }, R) => 
    Ft.createElement(A1, {
      ref: R,
      iconNode: Z,
      className: Bm(`lucide-${x1(Cm(N))}`, `lucide-${N}`, p),
      ...Y
    })
  );
  return G.displayName = Cm(N), G
};

/**
 * Icon Definitions
 */
const S1 = [ ["path", { d: "M12 6.528V3a1 1 0 0 1 1-1h0", key: "11qiee" }], ["path", { d: "M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21", key: "110c12" }] ],
  yf = jl("apple", S1); // Apple Icon

const z1 = [ ["path", { d: "m16 3 4 4-4 4", key: "1x1c3m" }], ["path", { d: "M20 7H4", key: "zbl0bi" }], ["path", { d: "m8 21-4-4 4-4", key: "h9nckh" }], ["path", { d: "M4 17h16", key: "g4d7ey" }] ],
  N1 = jl("arrow-right-left", z1);

const E1 = [ ["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }] ],
  Rm = jl("arrow-right", E1);

const T1 = [ ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }] ],
  xf = jl("circle-check", T1);

const j1 = [ ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }], ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }], ["path", { d: "M7 6h1v4", key: "1obek4" }], ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }] ],
  vf = jl("coins", j1);

const _1 = [ ["path", { d: "M12 15V3", key: "m9g1x1" }], ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }], ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }] ],
  gf = jl("download", _1);

const M1 = [ ["path", { d: "M15 3h6v6", key: "1q9fwt" }], ["path", { d: "M10 14 21 3", key: "gplh6r" }], ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }] ],
  Vn = jl("external-link", M1);

const O1 = [ ["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }] ],
  D1 = jl("file-check", O1);

const U1 = [ ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }], ["path", { d: "M12 8v13", key: "1c76mn" }], ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }], ["path", { d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5", key: "1ihvrl" }] ],
  qm = jl("gift", U1);

const H1 = [ ["path", { d: "M10 18v-7", key: "wt116b" }], ["path", { d: "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z", key: "1m329m" }], ["path", { d: "M14 18v-7", key: "vav6t3" }], ["path", { d: "M18 18v-7", key: "aexdmj" }], ["path", { d: "M3 22h18", key: "8prr45" }], ["path", { d: "M6 18v-7", key: "1ivflk" }] ],
  C1 = jl("landmark", H1);

const R1 = [ ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }] ],
  q1 = jl("lock", R1);

const B1 = [ ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }], ["rect", { x: "2", y: "4", width: "20", height: "16",rx: "2", key: "izxlao" }] ],
  Y1 = jl("mail", B1);

const G1 = [ ["path", { d: "M4 5h16", key: "1tepv9" }], ["path", { d: "M4 12h16", key: "1lakjw" }], ["path", { d: "M4 19h16", key: "1djgab" }] ],
  X1 = jl("menu", G1);

const Q1 = [ ["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }] ],
  Z1 = jl("shield", Q1);

const V1 = [ ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }], ["path", { d: "M12 18h.01", key: "mhygvu" }] ],
  L1 = jl("smartphone", V1);

const w1 = [ ["path", { d: "M16 7h6v6", key: "box55l" }], ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }] ],
  Ln = jl("trending-up", w1);

const K1 = [ ["path", { d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1", key: "18etb6" }], ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }] ],
  bf = jl("wallet", K1);

const J1 = [ ["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }] ],
  k1 = jl("x", J1);

/**
 * ==========================================
 * PART 4: MAIN APP COMPONENT & DATA
 * ==========================================
 */

// App Data
const W1 = [{
    id: 1,
    image: "/app-mockup-1.jpg",
    title: "Track Your Gold",
    description: "Monitor your portfolio value and gold price in real-time"
  }, {
    id: 2,
    image: "/app-mockup-2.jpg",
    title: "Buy Instantly",
    description: "Purchase gold at market rates with zero hidden fees"
  }, {
    id: 3,
    image: "/app-mockup-3.jpg",
    title: "Gift Gold",
    description: "Send gold to anyone with a simple link"
  }],
  $1 = "/hero-phone-3d.png",
  St = {
    appStore: "https://apps.apple.com",
    playStore: "https://play.google.com",
    webApp: "#"
  },
  Ot = {
    count: 30,
    minSize: 20,
    maxSize: 56,
    minDuration: 4,
    maxDuration: 10,
    colors: ["#D4A93A", "#F2C94C", "#E5B93D", "#C99A2E", "#B8941F"]
  };

// Main Component Definition (F1)
function F1() {
  const [N, Z] = Ft.useState(!1), [G, p] = Ft.useState(!1);
  
  // Scroll Effect Hook
  Ft.useEffect(() => {
    const _ = () => {
      Z(window.scrollY > 100)
    };
    return window.addEventListener("scroll", _, {
      passive: !0
    }), () => window.removeEventListener("scroll", _)
  }, []);

  // Gold Coin Animation Setup
  const Y = Array.from({ length: Ot.count }, (_, al) => {
    const D = Ot.minSize + Math.random() * (Ot.maxSize - Ot.minSize),
      z = Math.random() * 100,
      F = Ot.minDuration + Math.random() * (Ot.maxDuration - Ot.minDuration),
      C = -Math.random() * Ot.maxDuration,
      ol = Ot.colors[Math.floor(Math.random() * Ot.colors.length)],
      Rl = .5 + Math.random() * .35;
    return { id: al, size: D, left: z, duration: F, delay: C, color: ol, opacity: Rl }
  });

  // Smooth Scroll Handler
  const R = _ => {
    document.getElementById(_)?.scrollIntoView({ behavior: "smooth" }), p(!1)
  };

  // Render Function (JSX)
  return f.jsxs("div", {
    "code-path": "src/App.tsx:118:5",
    className: "relative bg-light text-dark overflow-x-hidden",
    children: [
      /* Animated Background Coins */
      f.jsx("div", {
        "code-path": "src/App.tsx:120:7",
        className: "coins-container",
        children: Y.map(_ => f.jsx("div", {
          "code-path": "src/App.tsx:122:11",
          className: "falling-coin",
          style: {
            width: `${_.size}px`,
            height: `${_.size}px`,
            left: `${_.left}%`,
            backgroundColor: _.color,
            opacity: _.opacity,
            animationDuration: `${_.duration}s`,
            animationDelay: `${_.delay}s`
          }
        }, _.id))
      }),
      
      /* Navigation Bar */
      f.jsx("nav", {
        "code-path": "src/App.tsx:139:7",
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${N ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`,
        children: f.jsxs("div", {
          "code-path": "src/App.tsx:140:9",
          className: "bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm",
          children: [
            f.jsxs("div", {
              "code-path": "src/App.tsx:141:11",
              className: "flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3",
              children: [
                f.jsx("div", {
                  "code-path": "src/App.tsx:142:13",
                  className: "font-display font-bold text-xl gold-text",
                  children: "gold.fi"
                }),
                f.jsxs("div", {
                  "code-path": "src/App.tsx:145:13",
                  className: "hidden md:flex items-center gap-6",
                  children: [
                    f.jsx("button", { onClick: () => R("about"), className: "text-sm text-dark-secondary hover:text-gold transition-colors", children: "How it works" }),
                    f.jsx("button", { onClick: () => R("vault"), className: "text-sm text-dark-secondary hover:text-gold transition-colors", children: "Security" }),
                    f.jsx("button", { onClick: () => R("yield"), className: "text-sm text-dark-secondary hover:text-gold transition-colors", children: "Yield" }),
                    f.jsx("button", { onClick: () => R("gift"), className: "text-sm text-dark-secondary hover:text-gold transition-colors", children: "Gift" })
                  ]
                }),
                f.jsxs("div", {
                  "code-path": "src/App.tsx:152:13",
                  className: "flex items-center gap-2",
                  children: [
                    f.jsxs("a", { href: St.webApp, className: "hidden sm:flex btn-gold text-sm py-2 px-4 items-center gap-2", children: [f.jsx(Vn, { className: "w-4 h-4" }), " Launch"] }),
                    f.jsx("button", {
                      onClick: () => p(!G),
                      className: "md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors",
                      children: G ? f.jsx(k1, { className: "w-5 h-5" }) : f.jsx(X1, { className: "w-5 h-5" })
                    })
                  ]
                })
              ]
            }),
            /* Mobile Menu */
            G && f.jsxs("div", {
              "code-path": "src/App.tsx:169:13",
              className: "md:hidden bg-white border-t border-black/5 px-4 py-4 space-y-3",
              children: [
                f.jsx("button", { onClick: () => R("about"), className: "block w-full text-left py-2 text-dark-secondary hover:text-gold transition-colors", children: "How it works" }),
                f.jsx("button", { onClick: () => R("vault"), className: "block w-full text-left py-2 text-dark-secondary hover:text-gold transition-colors", children: "Security" }),
                f.jsx("button", { onClick: () => R("yield"), className: "block w-full text-left py-2 text-dark-secondary hover:text-gold transition-colors", children: "Yield" }),
                f.jsx("button", { onClick: () => R("gift"), className: "block w-full text-left py-2 text-dark-secondary hover:text-gold transition-colors", children: "Gift" }),
                f.jsxs("a", { href: St.webApp, className: "btn-gold w-full flex items-center justify-center gap-2 mt-2", children: [f.jsx(Vn, { className: "w-4 h-4" }), " Launch App"] })
              ]
            })
          ]
        })
      }),

      /* Hero Section */
      f.jsx("section", {
        "code-path": "src/App.tsx:183:7",
        className: "relative z-10 min-h-screen flex items-center py-20 lg:py-0",
        children: f.jsx("div", {
          "code-path": "src/App.tsx:184:9",
          className: "w-full px-4 sm:px-6 lg:px-12 xl:px-20",
          children: f.jsxs("div", {
            "code-path": "src/App.tsx:185:11",
            className: "flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-7xl mx-auto",
            children: [
              /* Hero Text Content */
              f.jsxs("div", {
                "code-path": "src/App.tsx:187:13",
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
                  f.jsxs("div", {
                    className: "flex flex-wrap justify-center lg:justify-start gap-3 mb-6",
                    children: [
                      f.jsxs("a", { href: St.webApp, className: "btn-gold flex items-center gap-2 text-sm sm:text-base", children: [f.jsx(L1, { className: "w-4 h-4" }), " Launch Web App"] }),
                      f.jsxs("button", { onClick: () => R("about"), className: "btn-outline-gold flex items-center gap-2 text-sm sm:text-base", children: ["See how it works ", f.jsx(Rm, { className: "w-4 h-4" })] })
                    ]
                  }),
                  /* App Stores */
                  f.jsxs("div", {
                    className: "flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3",
                    children: [
                      f.jsxs("a", {
                        href: St.appStore,
                        className: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-dark text-white rounded-xl hover:bg-dark-secondary transition-colors",
                        children: [
                          f.jsx(yf, { className: "w-4 h-4 sm:w-5 sm:h-5" }),
                          f.jsxs("div", { className: "text-left", children: [f.jsx("p", { className: "text-[9px] sm:text-[10px] opacity-70 leading-none", children: "Download on" }), f.jsx("p", { className: "text-xs sm:text-sm font-semibold leading-tight", children: "App Store" })] })
                        ]
                      }),
                      f.jsxs("a", {
                        href: St.playStore,
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
              /* Hero Image */
              f.jsx("div", {
                "code-path": "src/App.tsx:231:13",
                className: "flex-1 flex justify-center lg:justify-end max-w-sm lg:max-w-md xl:max-w-lg",
                children: f.jsx("div", {
                  className: "relative w-[280px] sm:w-[320px] lg:w-[380px]",
                  children: f.jsx("img", { src: $1, alt: "gold.fi App", className: "w-full h-auto drop-shadow-2xl" })
                })
              })
            ]
          })
        })
      }),

      /* Feature Grid Section */
      f.jsx("section", {
        "code-path": "src/App.tsx:245:7",
        className: "relative z-10 py-16 lg:py-24",
        children: f.jsx("div", {
          "code-path": "src/App.tsx:246:9",
          className: "w-full px-4 sm:px-6 lg:px-12",
          children: f.jsxs("div", {
            "code-path": "src/App.tsx:247:11",
            className: "grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto",
            children: [
              /* Card 1 */
              f.jsxs("div", {
                className: "card-light p-5 sm:p-6 lg:p-8 flex flex-col",
                children: [
                  f.jsx("div", { className: "w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4", children: f.jsx(bf, { className: "w-5 h-5 text-gold" }) }),
                  f.jsx("h3", { className: "font-display font-bold text-lg sm:text-xl lg:text-2xl text-dark mb-2", children: "Better than digital gold" }),
                  f.jsx("p", { className: "text-dark-secondary text-sm leading-relaxed flex-1", children: "Buy at actual market rates. Zero hidden fees, no custodian markups." }),
                  f.jsx("div", { className: "mt-4 pt-4 border-t border-black/5", children: f.jsxs("div", { className: "flex items-center gap-2 text-gold text-sm font-medium", children: [f.jsx(xf, { className: "w-4 h-4" }), " Zero fees"] }) })
                ]
              }),
              /* Card 2 */
              f.jsxs("div", {
                className: "card-light p-5 sm:p-6 lg:p-8 flex flex-col",
                children: [
                  f.jsx("div", { className: "w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4", children: f.jsx(N1, { className: "w-5 h-5 text-gold" }) }),
                  f.jsx("h3", { className: "font-display font-bold text-lg sm:text-xl lg:text-2xl text-dark mb-2", children: "Truly transferable" }),
                  f.jsx("p", { className: "text-dark-secondary text-sm leading-relaxed flex-1", children: "Send gold to any wallet in seconds. Not locked to a single platform." }),
                  f.jsx("div", { className: "mt-4 pt-4 border-t border-black/5", children: f.jsxs("div", { className: "flex items-center gap-2 text-gold text-sm font-medium", children: [f.jsx(xf, { className: "w-4 h-4" }), " Any wallet"] }) })
                ]
              }),
              /* Card 3 */
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

      /* About Section */
      f.jsx("section", {
        "code-path": "src/App.tsx:300:7",
        id: "about",
        className: "relative z-10 py-16 lg:py-24",
        children: f.jsx("div", {
          className: "w-full px-4 sm:px-6 lg:px-12",
          children: f.jsxs("div", {
            className: "flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl mx-auto",
            children: [
              f.jsxs("div", {
                className: "flex-1 text-center lg:text-left max-w-lg",
                children: [
                  f.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-dark mb-4", children: "What is tokenized gold?" }),
                  f.jsx("p", { className: "text-base sm:text-lg text-dark-secondary leading-relaxed mb-6", children: "Each token represents real gold stored in professional vaults. You hold the token; the vault holds the metal. Redeem, trade, or transfer anytime." }),
                  f.jsxs("div", {
                    className: "flex flex-wrap justify-center lg:justify-start gap-2",
                    children: [
                      f.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-2 rounded-full bg-light-tertiary border border-black/5 text-sm text-dark", children: [f.jsx("span", { className: "w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-bold", children: "1" }), "Buy"] }),
                      f.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-2 rounded-full bg-light-tertiary border border-black/5 text-sm text-dark", children: [f.jsx("span", { className: "w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-bold", children: "2" }), "Hold"] }),
                      f.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-2 rounded-full bg-light-tertiary border border-black/5 text-sm text-dark", children: [f.jsx("span", { className: "w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-bold", children: "3" }), "Send / Redeem"] })
                    ]
                  })
                ]
              }),
              f.jsx("div", {
                className: "flex-1 w-full max-w-sm lg:max-w-md",
                children: f.jsxs("div", {
                  className: "relative rounded-2xl overflow-hidden shadow-card",
                  children: [
                    f.jsx("img", { src: "/coins_gold.jpg", alt: "Gold coins", className: "w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover" }),
                    f.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" }),
                    f.jsxs("div", {
                      className: "absolute bottom-4 left-4 right-4",
                      children: [
                        f.jsxs("div", { className: "flex items-center gap-2 text-gold-light text-xs font-mono uppercase tracking-wider mb-1", children: [f.jsx(vf, { className: "w-3 h-3" }), " XAUT Token"] }),
                        f.jsx("p", { className: "text-white text-sm sm:text-base font-medium", children: "1 XAUT = 1 troy oz of gold" })
                      ]
                    })
                  ]
                })
              })
            ]
          })
        })
      }),

      /* Price Widget Section */
      f.jsx("section", {
        "code-path": "src/App.tsx:349:7",
        className: "relative z-10 py-16 lg:py-24",
        children: f.jsx("div", {
          className: "w-full px-4 sm:px-6",
          children: f.jsx("div", {
            className: "bg-white rounded-2xl border border-black/6 shadow-card p-5 sm:p-6 lg:p-10 max-w-3xl mx-auto",
            children: f.jsxs("div", {
              className: "flex flex-col lg:flex-row gap-6 lg:gap-8",
              children: [
                /* Price Left Side */
                f.jsxs("div", {
                  className: "flex-1 text-center lg:text-left",
                  children: [
                    f.jsxs("span", { className: "inline-flex items-center justify-center lg:justify-start gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-mono uppercase tracking-wider mb-4", children: [f.jsx("span", { className: "w-2 h-2 rounded-full bg-gold animate-pulse" }), " Live price"] }),
                    f.jsx("div", { className: "font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-dark mb-1", children: "₹5,42,000" }),
                    f.jsxs("div", { className: "flex items-center justify-center lg:justify-start gap-2 text-emerald-600 text-base mb-5", children: [f.jsx(Ln, { className: "w-4 h-4" }), " +1.24%"] }),
                    f.jsxs("button", { className: "btn-gold w-full sm:w-auto flex items-center justify-center gap-2", children: ["Buy Gold ", f.jsx(Rm, { className: "w-4 h-4" })] })
                  ]
                }),
                /* Allocation Right Side */
                f.jsxs("div", {
                  className: "flex-1 border-t lg:border-t-0 lg:border-l border-black/8 pt-5 lg:pt-0 lg:pl-6",
                  children: [
                    f.jsx("h4", { className: "font-display font-semibold text-base sm:text-lg text-dark mb-4", children: "Your allocation" }),
                    f.jsx("div", {
                      className: "space-y-3",
                      children: [{ icon: vf, label: "XAUT", sub: "Tether Gold", color: "gold", percent: "78%" }, { icon: vf, label: "PAXG", sub: "Paxos Gold", color: "yellow", percent: "14%" }, { icon: bf, label: "Cash", sub: "USDC", color: "emerald", percent: "8%" }].map((_, al) => f.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          f.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [f.jsx("div", { className: `w-8 h-8 rounded-lg bg-${_.color}-500/20 flex items-center justify-center`, children: f.jsx(_.icon, { className: `w-4 h-4 text-${_.color}-500` }) }), f.jsxs("div", { children: [f.jsx("p", { className: "text-dark text-sm font-medium", children: _.label }), f.jsx("p", { className: "text-dark-secondary text-xs", children: _.sub })] })] }),
                          f.jsx("span", { className: `text-${_.color}-500 font-semibold text-sm`, children: _.percent })
                        ]
                      }, al))
                    })
                  ]
                })
              ]
            })
          })
        })
      }),

      /* Vault Section */
      f.jsx("section", {
        "code-path": "src/App.tsx:399:7",
        id: "vault",
        className: "relative z-10 py-16 lg:py-24",
        children: f.jsx("div", {
          className: "w-full px-4 sm:px-6 lg:px-12",
          children: f.jsxs("div", {
            className: "flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 max-w-6xl mx-auto",
            children: [
              f.jsxs("div", {
                className: "flex-1 text-center lg:text-left max-w-lg",
                children: [
                  f.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-dark mb-4", children: "Vaulted & insured" }),
                  f.jsx("p", { className: "text-base sm:text-lg text-dark-secondary leading-relaxed mb-6", children: "Gold is stored in regulated vaults with independent audits and insurance. Your holdings are backed 1:1—always." }),
                  f.jsx("div", {
                    className: "flex flex-wrap justify-center lg:justify-start gap-2",
                    children: [{ icon: q1, label: "1:1 Backed" }, { icon: D1, label: "Audited" }, { icon: Z1, label: "Insured" }].map((_, al) => f.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-2 rounded-full bg-light-tertiary border border-black/5 text-sm text-dark", children: [f.jsx(_.icon, { className: "w-4 h-4 text-gold" }), " ", _.label] }, al))
                  })
                ]
              }),
              f.jsx("div", {
                className: "flex-1 w-full max-w-sm lg:max-w-md",
                children: f.jsxs("div", {
                  className: "relative rounded-2xl overflow-hidden shadow-card",
                  children: [
                    f.jsx("img", { src: "/vault_room.jpg", alt: "Secure vault", className: "w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover" }),
                    f.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" }),
                    f.jsxs("div", {
                      className: "absolute bottom-4 left-4 right-4",
                      children: [
                        f.jsxs("div", { className: "flex items-center gap-2 text-gold-light text-xs font-mono uppercase tracking-wider mb-1", children: [f.jsx(C1, { className: "w-3 h-3" }), " Swiss Vaults"] }),
                        f.jsx("p", { className: "text-white text-sm sm:text-base font-medium", children: "Institutional-grade security" })
                      ]
                    })
                  ]
                })
              })
            ]
          })
        })
      }),

      /* Yield Section */
      f.jsx("section", {
        "code-path": "src/App.tsx:445:7",
        id: "yield",
        className: "relative z-10 py-16 lg:py-24",
        children: f.jsx("div", {
          className: "w-full px-4 sm:px-6 lg:px-12",
          children: f.jsxs("div", {
            className: "flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl mx-auto",
            children: [
              f.jsxs("div", {
                className: "flex-1 text-center lg:text-left max-w-lg",
                children: [
                  f.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-dark mb-4", children: "Put your gold to work" }),
                  f.jsx("p", { className: "text-base sm:text-lg text-dark-secondary leading-relaxed mb-6", children: "Earn yield on your holdings or borrow stablecoins without selling your gold. Flexible, fast, and on-chain." }),
                  f.jsx("div", {
                    className: "space-y-3",
                    children: [{ icon: Ln, title: "Earn yield", desc: "Lend gold in secure pools and earn passive income." }, { icon: bf, title: "Borrow", desc: "Use gold as collateral for instant credit lines." }].map((_, al) => f.jsxs("div", {
                      className: "flex items-start gap-3 p-3 rounded-xl bg-light-tertiary border border-black/5",
                      children: [
                        f.jsx("div", { className: "w-9 h-9 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0", children: f.jsx(_.icon, { className: "w-4 h-4 text-gold" }) }),
                        f.jsxs("div", { className: "text-left", children: [f.jsx("h4", { className: "text-dark text-sm font-semibold mb-0.5", children: _.title }), f.jsx("p", { className: "text-dark-secondary text-xs", children: _.desc })] })
                      ]
                    }, al))
                  })
                ]
              }),
              f.jsx("div", {
                className: "flex-1 w-full max-w-sm lg:max-w-md",
                children: f.jsxs("div", {
                  className: "relative rounded-2xl overflow-hidden shadow-card",
                  children: [
                    f.jsx("img", { src: "/gold_bars_closeup.jpg", alt: "Gold bars closeup", className: "w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover" }),
                    f.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" }),
                    f.jsxs("div", {
                      className: "absolute bottom-4 left-4 right-4",
                      children: [
                        f.jsxs("div", { className: "flex items-center gap-2 text-gold-light text-xs font-mono uppercase tracking-wider mb-1", children: [f.jsx(Ln, { className: "w-3 h-3" }), " DeFi Enabled"] }),
                        f.jsx("p", { className: "text-white text-sm sm:text-base font-medium", children: "Up to 8% APY on gold" })
                      ]
                    })
                  ]
                })
              })
            ]
          })
        })
      }),

      /* Gift Section */
      f.jsx("section", {
        "code-path": "src/App.tsx:496:7",
        id: "gift",
        className: "relative z-10 py-16 lg:py-24",
        children: f.jsx("div", {
          className: "w-full px-4 sm:px-6 lg:px-12",
          children: f.jsxs("div", {
            className: "flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 max-w-6xl mx-auto",
            children: [
              f.jsxs("div", {
                className: "flex-1 text-center lg:text-left max-w-lg",
                children: [
                  f.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-dark mb-4", children: "Gift gold in seconds" }),
                  f.jsx("p", { className: "text-base sm:text-lg text-dark-secondary leading-relaxed mb-6", children: "Send gold to anyone with a wallet address or a simple link. Perfect for celebrations, savings, or just because." }),
                  f.jsxs("button", { className: "btn-outline-gold flex items-center gap-2 mx-auto lg:mx-0", children: [f.jsx(qm, { className: "w-4 h-4" }), " Create a gift link"] })
                ]
              }),
              f.jsx("div", {
                className: "flex-1 w-full max-w-sm lg:max-w-md",
                children: f.jsxs("div", {
                  className: "relative rounded-2xl overflow-hidden shadow-card",
                  children: [
                    f.jsx("img", { src: "/hands_gold_exchange.jpg", alt: "Gifting gold", className: "w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover" }),
                    f.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" }),
                    f.jsxs("div", {
                      className: "absolute bottom-4 left-4 right-4",
                      children: [
                        f.jsxs("div", { className: "flex items-center gap-2 text-gold-light text-xs font-mono uppercase tracking-wider mb-1", children: [f.jsx(qm, { className: "w-3 h-3" }), " Instant Transfer"] }),
                        f.jsx("p", { className: "text-white text-sm sm:text-base font-medium", children: "Send gold anywhere, anytime" })
                      ]
                    })
                  ]
                })
              })
            ]
          })
        })
      }),

      /* App Download Section (Dark) */
      f.jsx("section", {
        "code-path": "src/App.tsx:534:7",
        className: "relative z-10 bg-light-tertiary py-16 lg:py-24",
        children: f.jsx("div", {
          className: "w-full px-4 sm:px-6 lg:px-12",
          children: f.jsxs("div", {
            className: "max-w-6xl mx-auto",
            children: [
              f.jsxs("div", {
                className: "text-center mb-10",
                children: [
                  f.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-dark mb-3", children: "Your gold, in your pocket" }),
                  f.jsx("p", { className: "text-base sm:text-lg text-dark-secondary max-w-md mx-auto", children: "Available on web, iOS, and Android. Manage your gold anywhere, anytime." })
                ]
              }),
              f.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10",
                children: W1.map(_ => f.jsxs("div", {
                  className: "mockup-card bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-card",
                  children: [
                    f.jsx("div", { className: "relative rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4", children: f.jsx("img", { src: _.image, alt: _.title, className: "w-full h-[280px] sm:h-[320px] lg:h-[360px] object-cover object-top" }) }),
                    f.jsx("h3", { className: "font-display font-semibold text-base sm:text-lg text-dark mb-1", children: _.title }),
                    f.jsx("p", { className: "text-dark-secondary text-xs sm:text-sm", children: _.description })
                  ]
                }, _.id))
              }),
              f.jsxs("div", {
                className: "flex flex-wrap justify-center gap-2 sm:gap-3",
                children: [
                  f.jsxs("a", { href: St.appStore, className: "flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-dark text-white rounded-xl hover:bg-dark-secondary transition-colors", children: [f.jsx(yf, { className: "w-5 h-5 sm:w-6 sm:h-6" }), f.jsxs("div", { className: "text-left", children: [f.jsx("p", { className: "text-[9px] sm:text-[10px] opacity-70 leading-none", children: "Download on" }), f.jsx("p", { className: "text-xs sm:text-sm font-semibold leading-tight", children: "App Store" })] })] }),
                  f.jsxs("a", { href: St.playStore, className: "flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-dark text-white rounded-xl hover:bg-dark-secondary transition-colors", children: [f.jsx(gf, { className: "w-5 h-5 sm:w-6 sm:h-6" }), f.jsxs("div", { className: "text-left", children: [f.jsx("p", { className: "text-[9px] sm:text-[10px] opacity-70 leading-none", children: "Get it on" }), f.jsx("p", { className: "text-xs sm:text-sm font-semibold leading-tight", children: "Google Play" })] })] }),
                  f.jsxs("a", { href: St.webApp, className: "btn-gold flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3", children: [f.jsx(Vn, { className: "w-4 h-4 sm:w-5 sm:h-5" }), f.jsxs("div", { className: "text-left", children: [f.jsx("p", { className: "text-[9px] sm:text-[10px] opacity-70 leading-none", children: "Open" }), f.jsx("p", { className: "text-xs sm:text-sm font-semibold leading-tight", children: "Web App" })] })] })
                ]
              })
            ]
          })
        })
      }),

      /* Footer CTA Section */
      f.jsx("section", {
        "code-path": "src/App.tsx:592:7",
        className: "relative z-10 bg-light py-16 lg:py-24",
        children: f.jsxs("div", {
          className: "max-w-4xl mx-auto px-4 sm:px-6 text-center",
          children: [
            f.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-dark mb-4", children: "Start building your gold stack today." }),
            f.jsx("p", { className: "text-base sm:text-lg text-dark-secondary mb-8 max-w-lg mx-auto", children: "Buy at market rates. Send anywhere. Earn yield. All on-chain." }),
            f.jsxs("div", {
              className: "flex flex-wrap justify-center gap-2 sm:gap-3 mb-10",
              children: [
                f.jsxs("a", { href: St.appStore, className: "flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-dark text-white rounded-xl hover:bg-dark-secondary transition-colors", children: [f.jsx(yf, { className: "w-4 h-4 sm:w-5 sm:h-5" }), f.jsxs("div", { className: "text-left", children: [f.jsx("p", { className: "text-[9px] sm:text-[10px] opacity-70 leading-none", children: "Download on" }), f.jsx("p", { className: "text-xs sm:text-sm font-semibold leading-tight", children: "App Store" })] })] }),
                f.jsxs("a", { href: St.playStore, className: "flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-dark text-white rounded-xl hover:bg-dark-secondary transition-colors", children: [f.jsx(gf, { className: "w-4 h-4 sm:w-5 sm:h-5" }), f.jsxs("div", { className: "text-left", children: [f.jsx("p", { className: "text-[9px] sm:text-[10px] opacity-70 leading-none", children: "Get it on" }), f.jsx("p", { className: "text-xs sm:text-sm font-semibold leading-tight", children: "Google Play" })] })] }),
                f.jsxs("a", { href: St.webApp, className: "btn-gold flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3", children: [f.jsx(Vn, { className: "w-4 h-4" }), " Launch Web App"] })
              ]
            }),
            /* Newsletter Signup */
            f.jsxs("div", {
              className: "bg-white rounded-2xl border border-black/6 shadow-card p-5 sm:p-6 lg:p-8 max-w-lg mx-auto mb-10",
              children: [
                f.jsx("h3", { className: "font-display font-semibold text-lg sm:text-xl text-dark mb-1", children: "Get the monthly gold memo" }),
                f.jsx("p", { className: "text-dark-secondary text-sm mb-5", children: "Market insights, product updates, and DeFi opportunities." }),
                f.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-2",
                  children: [
                    f.jsxs("div", { className: "flex-1 relative", children: [f.jsx(Y1, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-secondary" }), f.jsx("input", { type: "email", placeholder: "Email address", className: "w-full pl-10 pr-4 py-2.5 rounded-xl bg-light-tertiary border border-black/8 text-dark placeholder:text-dark-secondary focus:outline-none focus:border-gold/50 transition-colors text-sm" })] }),
                    f.jsx("button", { className: "btn-gold whitespace-nowrap text-sm py-2.5", children: "Subscribe" })
                  ]
                })
              ]
            }),
            /* Footer Links */
            f.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left max-w-2xl mx-auto mb-8",
              children: [{ title: "Product", links: ["Buy", "Send", "Yield", "Borrow", "Gift"] }, { title: "Learn", links: ["What is XAUT", "Vaulting", "Fees", "FAQ"] }, { title: "Legal", links: ["Terms", "Privacy", "Disclosures"] }, { title: "Connect", links: ["Twitter", "Discord", "Telegram"] }].map((_, al) => f.jsxs("div", {
                children: [
                  f.jsx("h4", { className: "font-semibold text-dark text-sm mb-2 sm:mb-3", children: _.title }),
                  f.jsx("ul", { className: "space-y-1.5 sm:space-y-2", children: _.links.map((D, z) => f.jsx("li", { children: f.jsx("a", { href: "#", className: "text-dark-secondary hover:text-gold transition-colors text-xs sm:text-sm", children: D }) }, z)) })
                ]
              }, al))
            }),
            /* Footer Copyright */
            f.jsxs("div", {
              className: "pt-6 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-2",
              children: [
                f.jsx("div", { className: "font-display font-bold text-xl gold-text", children: "gold.fi" }),
                f.jsx("p", { className: "text-dark-secondary text-xs", children: "© 2026 gold.fi. All rights reserved." })
              ]
            })
          ]
        })
      })
    ]
  })
}

/**
 * ==========================================
 * PART 5: APP MOUNTING
 * ==========================================
 */
y1.createRoot(document.getElementById("root")).render(
  f.jsx(Ft.StrictMode, {
    "code-path": "src/main.tsx:7:3",
    children: f.jsx(F1, {
      "code-path": "src/main.tsx:8:5"
    })
  })
);
