import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  source: "Google" | "Yelp";
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    text: "Absolutely amazing service! The staff is so professional and the salon is spotless. My nails have never looked better. I've been coming here for over 2 years and they never disappoint.",
    source: "Google",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    rating: 5,
    text: "Love this place! Very clean, great customer service, and reasonable prices. The nail art is beautiful and lasts for weeks. Highly recommend!",
    source: "Yelp",
    date: "2024-01-10"
  },
  {
    id: 3,
    name: "Jennifer Lee",
    rating: 5,
    text: "Best nail salon in Aiken! The technicians are skilled and take their time to do quality work. The atmosphere is relaxing and they follow all safety protocols.",
    source: "Google",
    date: "2024-01-08"
  },
  {
    id: 4,
    name: "Ashley Brown",
    rating: 5,
    text: "I'm so picky about my nails and this salon exceeds my expectations every time. Clean tools, professional staff, and beautiful results. Worth every penny!",
    source: "Yelp",
    date: "2024-01-05"
  },
  {
    id: 5,
    name: "Rachel Davis",
    rating: 5,
    text: "Fantastic experience! The salon is modern and clean, staff is friendly and professional. My gel manicure lasted 3 weeks without chipping. Will definitely return!",
    source: "Google",
    date: "2024-01-02"
  },
  {
    id: 6,
    name: "Lisa Wilson",
    rating: 5,
    text: "Outstanding service and attention to detail. The pedicure was so relaxing and my feet feel amazing. The facility is immaculate and the staff is wonderful.",
    source: "Yelp",
    date: "2023-12-28"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
};

export const Reviews = () => {
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-primary">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <StarRating rating={Math.round(averageRating)} />
            <span className="text-2xl font-semibold text-primary">
              {averageRating.toFixed(1)}
            </span>
            <span className="text-muted-foreground">
              ({totalReviews}+ reviews)
            </span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear what our satisfied customers have to say about their experience at Nail Pro & Spa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="glass-effect border-primary/10 hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <StarRating rating={review.rating} />
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        review.source === "Google"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }`}
                    >
                      {review.source}
                    </span>
                  </div>
                </div>
                
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-1 w-8 h-8 text-primary/20" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    {review.text}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-primary">{review.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(review.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.google.com/maps/place/Nail+Pro+%26+Spa/@33.5607,-81.7196,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Leave a Google Review
            </a>
            <a
              href="https://www.yelp.com/biz/nail-pro-and-spa-aiken"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Review on Yelp
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Share your experience and help others discover our services
          </p>
        </div>
      </div>
    </section>
  );
};