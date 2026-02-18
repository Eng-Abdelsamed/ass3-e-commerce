"use client";

import {
  faPaperPlane,
  faStar,
  faEnvelopeOpenText,
  faGift,
  faUtensils,
  faShieldHalved,
  faRocket,
  faClock,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Newsletter() {
  return (
    <section className="py-4 px-4">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl flex flex-col lg:flex-row items-stretch border border-gray-100">
          {/* Left: Newsletter Content (White/Light) - 2x Size */}
          <div className="relative z-10 lg:flex-2 p-6 md:p-8 lg:p-10 flex flex-col justify-center border-b lg:border-b-0">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black mb-4 border border-emerald-100 w-fit uppercase tracking-widest text-emerald-700">
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
              <span>News Letter</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-2 tracking-tight leading-tight text-emerald-950">
              Stay Ahead with <br />
              <span className="text-emerald-500">Fresh Updates</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-6 max-w-md leading-relaxed font-medium">
              Organic recipes, seasonal deals & member perks delivered weekly.
            </p>

            {/* Newsletter Features Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6 text-center lg:max-w-md">
              {[
                { icon: faGift, label: "Best Deals" },
                { icon: faUtensils, label: "Weekly Recipes" },
                { icon: faShieldHalved, label: "Spam Free" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-1 group cursor-default"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center border border-emerald-100 group-hover:bg-emerald-100 transition-all">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-emerald-600 text-[10px]"
                    />
                  </div>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="group relative flex flex-col sm:flex-row gap-2 rounded-xl bg-gray-50 p-1.5 border border-gray-200 focus-within:border-emerald-500/50 mb-3 shadow-sm lg:max-w-xl"
            >
              <input
                type="email"
                placeholder="Enter email"
                className="w-full flex-1 bg-transparent px-3 py-2 text-emerald-950 placeholder:text-gray-400 focus:outline-none text-sm font-medium"
                required
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-2 text-xs font-black text-white hover:bg-emerald-700 active:scale-95 whitespace-nowrap lg:mr-1 shadow-lg shadow-emerald-600/20"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                Subscribe
              </button>
            </form>
            <p className="text-[10px] text-gray-400 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
              Joined by 50K+ subscribers
            </p>
          </div>

          {/* Right: Mobile App Content (Black/Dark) - 1x Size */}
          <div className="relative z-10 lg:flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-black/95 text-white lg:items-center lg:text-center">
            {/* Background Glow for Dark Section */}
            <div className="absolute top-0 right-0 h-full w-full pointer-events-none opacity-20 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-emerald-400/20 blur-[60px]"></div>
            </div>

            <div className="relative z-10">
              <div className="text-emerald-400 font-black text-[9px] tracking-[0.3em] mb-4 flex items-center gap-2 w-fit lg:mx-auto pb-1 border-b-2 border-emerald-500/50">
                <span className="text-base">📱</span> MOBILE PLATFORM
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-2 tracking-tight leading-tight">
                Experience the <br />
                <span className="text-emerald-400 underline decoration-emerald-500/30 underline-offset-4">
                  Perfect Shop
                </span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base mb-6 max-w-xs leading-relaxed font-medium mx-auto">
                Sync orders and grab app-only{" "}
                <span className="text-white font-black">15% discount.</span>
              </p>

              {/* Tech Highlights */}
              <div className="flex flex-wrap gap-4 mb-6 justify-center">
                {[
                  { icon: faRocket, label: "Flash Speed" },
                  { icon: faClock, label: "Live Sync" },
                  { icon: faMobileScreenButton, label: "Exclusive" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-emerald-500 text-[10px] opacity-80"
                    />
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mb-6 justify-center">
                <a
                  href="#"
                  className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl hover:scale-105 transition-all shadow-xl font-black"
                >
                  <FontAwesomeIcon icon={faApple} className="text-2xl" />
                  <div className="text-left">
                    <div className="text-[8px] uppercase font-bold leading-none opacity-60">
                      App Store
                    </div>
                    <div className="text-sm leading-none mt-1">Download</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 bg-emerald-950/40 text-white border border-emerald-500/30 px-4 py-2 rounded-xl hover:bg-emerald-500/10 transition-all hover:scale-105 shadow-xl backdrop-blur-md"
                >
                  <FontAwesomeIcon
                    icon={faGooglePlay}
                    className="text-xl text-emerald-400"
                  />
                  <div className="text-left">
                    <div className="text-[8px] uppercase font-bold leading-none opacity-60">
                      Google Play
                    </div>
                    <div className="text-sm font-black leading-none mt-1">
                      Get it on
                    </div>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-3 py-2 px-4 rounded-xl bg-white/5 border border-white/5 w-fit mx-auto">
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-[9px]"
                    />
                  ))}
                </div>
                <div className="text-[10px] font-black tracking-tight">
                  4.9{" "}
                  <span className="text-gray-500 font-medium ml-1">
                    • 100K+ Users
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
