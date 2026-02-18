"use client";

import { faArrowRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function DealsBanner() {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Deal of the Day Card */}
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-emerald-500 to-teal-600 p-8 md:p-12 text-white">
              {/* Background Decorations */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-6">
                  <FontAwesomeIcon icon={faClock} className="text-xs" />
                  <span className="text-sm font-medium">Deal of the Day</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Fresh Organic Fruits
                </h3>
                <p className="text-white/90 text-lg mb-8 max-w-sm">
                  Get up to 40% off on selected organic fruits from our local
                  farms.
                </p>

                <div className="flex gap-4 mb-8">
                  {[
                    { value: "12", label: "Hours" },
                    { value: "45", label: "Mins" },
                    { value: "30", label: "Secs" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[70px] text-center border border-white/10"
                    >
                      <div className="text-2xl font-bold">{item.value}</div>
                      <div className="text-xs text-white/80 uppercase tracking-wider font-medium">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/deals"
                  className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl active:scale-95"
                >
                  Shop Now
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>

            {/* New Arrivals Card */}
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-orange-400 to-orange-500 p-8 md:p-12 text-white">
              {/* Background Decorations */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-6">
                  <span className="text-sm">✨</span>
                  <span className="text-sm font-medium">New Arrivals</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Exotic Vegetables
                </h3>
                <p className="text-white/90 text-lg mb-8 max-w-sm">
                  Discover the freshest selection of organic vegetables
                  harvested daily.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                    <div className="text-3xl font-black">25% OFF</div>
                  </div>
                  <div className="text-white/90 font-medium">
                    Use code:{" "}
                    <span className="bg-white text-orange-500 px-2 py-0.5 rounded font-bold ml-1">
                      FRESH25
                    </span>
                  </div>
                </div>

                <Link
                  href="/product?sort=newest"
                  className="inline-flex items-center gap-2 bg-white text-orange-500 px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl active:scale-95"
                >
                  Explore Now
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
