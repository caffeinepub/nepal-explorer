import { Building2, Lightbulb, MapPin, Users } from "lucide-react";
import { motion } from "motion/react";

const categories = [
  {
    id: "places",
    icon: MapPin,
    label: "Places to Visit",
    description: "Top destinations",
    color: "text-nepal-orange",
    bg: "bg-nepal-orange-pale",
  },
  {
    id: "hotels",
    icon: Building2,
    label: "Hotels & Stays",
    description: "Affordable options",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: "guides",
    icon: Users,
    label: "Local Guides",
    description: "Trusted experts",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    id: "tips",
    icon: Lightbulb,
    label: "Travel Tips",
    description: "Stay safe & aware",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

export default function CategoryCards() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative -mt-16 z-10 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {categories.map((cat, i) => (
          <motion.button
            key={cat.id}
            onClick={() => scrollTo(cat.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
            whileHover={{ y: -2 }}
            className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow p-4 flex flex-col items-center text-center gap-2 cursor-pointer"
            data-ocid={`category.${cat.id}.button`}
          >
            <div
              className={`w-12 h-12 rounded-xl ${cat.bg} flex items-center justify-center`}
            >
              <cat.icon className={`w-6 h-6 ${cat.color}`} />
            </div>
            <div>
              <div className="font-semibold text-nepal-dark text-sm leading-snug">
                {cat.label}
              </div>
              <div className="text-nepal-muted text-xs mt-0.5">
                {cat.description}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
