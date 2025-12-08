import { Star } from "lucide-react";
import Image from "next/image";

export const TrustSignals = () => {
  const reviews = [
    {
      name: "David Thompson",
      location: "Dallas, TX",
      review: "Got my roof replaced completely free! The team was professional and handled everything with my insurance.",
      photo: "/testimonial/Pic-1.webp"
    },
    {
      name: "Michael Chen",
      location: "Houston, TX",
      review: "Amazing service! They made the entire process so easy. Highly recommend to anyone needing roof work.",
      photo: "/testimonial/Pic-2.webp"
    },
    {
      name: "Mike Chen",
      location: "Austin, TX",
      review: "Free inspection led to a full roof replacement.",
      photo: "/testimonial/Pic-3.webp"
    },
    {
      name: "Sarah Johnson",
      location: "San Antonio, TX",
      review: "Professional team from start to finish. The insurance claim process was seamless.",
      photo: "/testimonial/Pic-4.webp"
    },
    {
      name: "Emily Rodriguez",
      location: "Fort Worth, TX",
      review: "Best decision I made! They handled everything and I only paid my deductible.",
      photo: "/testimonial/Pic-5.webp"
    },
    {
      name: "Robert Williams",
      location: "El Paso, TX",
      review: "Outstanding service! The inspection was thorough and the roof replacement was top quality.",
      photo: "/testimonial/Pic-6.webp"
    }
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4 font-medium">As seen on</p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="bg-white border-2 border-gray-200 rounded-lg px-6 py-3 shadow-sm">
                <span className="text-2xl font-bold text-gray-900">ABC</span>
                <span className="text-xs text-gray-500 block mt-1">Local Affiliate</span>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg px-6 py-3 shadow-sm">
                <span className="text-2xl font-bold text-red-600">NBC</span>
                <span className="text-xs text-gray-500 block mt-1">Local Affiliate</span>
              </div>
            </div>
          </div>

          <div className="bg-[#122E5F]/90 border-2 border-[#122E5F] rounded-xl p-4 text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-white">
              💰 100% Free – We get paid by roofers, not you!
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 text-center mb-4">
              What Our Customers Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                      <Image src={review.photo} alt={review.name} className="rounded-full w-full h-full object-cover" width={48} height={48} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">
                            {review.name}
                          </p>
                          <p className="text-xs text-gray-500">{review.location}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {review.review}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

