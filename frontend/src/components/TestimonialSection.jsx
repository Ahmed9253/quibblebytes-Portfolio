// TestimonialSlider.jsx
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Utility function to join class names conditionally
const cn = (...classes) => classes.filter(Boolean).join(" ");

const testimonials = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Samuel Green",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Alex Johnson",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Emily Rose",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1 < testimonials.length ? prev + 1 : 0));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev - 1 >= 0 ? prev - 1 : testimonials.length - 1
    );
  };

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    }
    const indexes = [
      (currentIndex - 1 + testimonials.length) % testimonials.length,
      currentIndex,
      (currentIndex + 1) % testimonials.length,
    ];
    return indexes.map((i) => testimonials[i]);
  };

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <div className="flex justify-center items-center gap-4 mb-2">
            <div className="h-px w-16 bg-gray-500"></div>
            <h3 className="text-sm text-gray-300 font-semibold tracking-widest uppercase">
              Testimonials
            </h3>
            <div className="h-px w-16 bg-gray-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-400">
            What our clients have to say
          </h2>
        </div>

        <div className="relative flex items-center justify-center">
          <button
            onClick={goToPrev}
            className="absolute left-0 z-10 p-3 text-white hover:text-green-400 bg-green-500/10 rounded-full"
          >
            <FaArrowLeft size={24} />
          </button>

          <div
            className={cn(
              "grid gap-4 w-full max-w-5xl",
              isMobile ? "grid-cols-1" : "grid-cols-3"
            )}
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "bg-black border border-white/10 px-6 py-10 rounded-xl relative transition-all duration-300",
                  isMobile || (!isMobile && index === 1)
                    ? "shadow-[0_0_5px_5px] shadow-green-400 border-green-500 scale-105 z-10"
                    : "opacity-70 scale-95"
                )}
              >
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-black"
                  />
                </div>
                <h4 className="mt-12 text-lg font-bold">{testimonial.name}</h4>
                <p className="mt-2 text-sm text-gray-300">{testimonial.text}</p>
              </div>
            ))}
          </div>

          <button
            onClick={goToNext}
            className="absolute right-0 z-10 p-3 text-white hover:text-green-400 bg-green-500/10 rounded-full"
          >
            <FaArrowRight size={24} />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-2 w-4 rounded-full bg-white/20 transition-all duration-300",
                index === currentIndex ? "bg-green-400 w-6" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
