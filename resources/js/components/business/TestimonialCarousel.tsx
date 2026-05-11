import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Shahid Hasan",
    role: "UI/UX Design",
    rating: 4,
    text: "Explore a diverse selection of courses all in one platform, designed to cater to various learning needs and interests, making education more accessible and convenient. Explore a diverse selection of courses all in one platform, designed to cater to various learning needs and interests, making education",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    name: "Ayesha Rahman",
    role: "Full Stack Dev",
    rating: 5,
    text: "Explore a diverse selection of courses all in one platform, designed to cater to various learning needs and interests, making education more accessible and convenient. Explore a diverse selection of courses all in one platform, designed to cater to various learning needs and interests, making education",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 3,
    name: "Tanvir Ahmed",
    role: "Product Manager",
    rating: 5,
    text: "Explore a diverse selection of courses all in one platform, designed to cater to various learning needs and interests, making education more accessible and convenient. Explore a diverse selection of courses all in one platform, designed to cater to various learning needs and interests, making education",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 4,
    name: "Nadia Islam",
    role: "Data Scientist",
    rating: 4,
    text: "Explore a diverse selection of courses all in one platform, designed to cater to various learning needs and interests, making education more accessible and convenient. Explore a diverse selection of courses all in one platform, designed to cater to various learning needs and interests, making education",
    avatar: "https://i.pravatar.cc/150?img=56",
  },
  {
    id: 5,
    name: "Rafiq Hossain",
    role: "Frontend Engineer",
    rating: 5,
    text: "Explore a diverse selection of courses all in one platform, designed to cater to various learning needs and interests, making education more accessible and convenient. Explore a diverse selection of courses all in one platform, designed to cater to various learning needs and interests, making education",
    avatar: "https://i.pravatar.cc/150?img=18",
  },
];

const StarRating = ({ rating, active }: { rating: number; active: boolean }) => (
  <div className="flex gap-1 mt-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-5 h-5 transition-all duration-300 ${
          star <= rating
            ? active
              ? "text-amber-400"
              : "text-amber-300/60"
            : active
            ? "text-gray-300"
            : "text-gray-200/50"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const prev = () => {
    if (animating) return;
    setAnimating(true);
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    if (animating) return;
    setAnimating(true);
    setActive((a) => (a + 1) % testimonials.length);
  };

  useEffect(() => {
    const t = setTimeout(() => setAnimating(false), 400);
    return () => clearTimeout(t);
  }, [active]);

  const getIndex = (offset: number) =>
    (active + offset + testimonials.length) % testimonials.length;

  const cards = [
    { offset: -1, scale: "scale-90", opacity: "opacity-50", zIndex: "z-10", translateX: "-translate-x-8", blur: "" },
    { offset: 0,  scale: "scale-100", opacity: "opacity-100", zIndex: "z-20", translateX: "translate-x-0", blur: "" },
    { offset: 1,  scale: "scale-90", opacity: "opacity-50", zIndex: "z-10", translateX: "translate-x-8", blur: "" },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center px-4"
     
    >
      

      {/* Carousel */}
      <div className="relative w-full flex items-center justify-center" style={{ height: 360 }}>

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 z-30 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:shadow-indigo-100 hover:border-indigo-200 transition-all duration-200 active:scale-95"
          style={{ left: "calc(50% - 300px - 28px)" }}
          aria-label="Previous"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Cards */}
        <div className="relative flex items-center justify-center w-full h-full">
          {cards.map(({ offset, scale, opacity, zIndex, translateX }) => {
            const t = testimonials[getIndex(offset)];
            const isActive = offset === 0;
            return (
              <div
                key={t.id + "-" + offset}
                onClick={offset === -1 ? prev : offset === 1 ? next : undefined}
                className={`
                  absolute transition-all bg-[#F9F9F9] duration-400 ease-in-out
                  ${scale} ${opacity} ${zIndex} ${translateX}
                  ${!isActive ? "cursor-pointer" : ""}
                `}
                style={{
                  width: 520,
                  left: "50%",
                  transform: `translateX(calc(-50% + ${offset * 280}px)) ${isActive ? "scale(1)" : "scale(0.88)"}`,
                  transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <div
                  className={`rounded-2xl p-7 h-full flex flex-col transition-all duration-400 ${
                    isActive
                      ? "bg-white shadow-2xl shadow-indigo-100/60 border border-indigo-50"
                      : "bg-white/70 shadow-md border border-gray-100/80"
                  }`}
                  style={{ minHeight: 300 }}
                >
                  {/* Avatar + Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`rounded-full overflow-hidden flex-shrink-0 transition-all duration-300 ${
                        isActive
                          ? "w-16 h-16"
                          : "w-12 h-12"
                      }`}
                    >
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p
                        className={`font-semibold leading-tight transition-all duration-300 ${
                          isActive ? "text-gray-900 text-[18px]" : "text-gray-600 text-sm"
                        }`}
                      >
                        {t.name}
                      </p>
                      <p
                        className={`transition-all duration-300 ${
                          isActive ? "text-text40 text-[14px]" : "text-gray-400 text-xs"
                        }`}
                      >
                        {t.role}
                      </p>
                      <StarRating rating={t.rating} active={isActive} />
                    </div>
                  </div>

                  {/* Text */}
                  <p
                    className={`leading-relaxed transition-all duration-300 ${
                      isActive
                        ? "text-gray-600 text-sm"
                        : "text-gray-400 text-xs line-clamp-6"
                    }`}
                  >
                    {t.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 z-30 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 hover:text-indigo-600 hover:shadow-indigo-100 hover:border-indigo-200 transition-all duration-200 active:scale-95"
          style={{ right: "calc(50% - 300px - 28px)" }}
          aria-label="Next"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>


    </div>
  );
}
