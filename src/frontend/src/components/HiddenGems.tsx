import { Skeleton } from "@/components/ui/skeleton";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useGetHiddenGems } from "../hooks/useQueries";

const gemImages: Record<string, string> = {
  Bandipur: "/assets/generated/bandipur.dim_800x500.jpg",
  "Rara Lake": "/assets/generated/rara-lake.dim_800x500.jpg",
  Pashupatinath: "/assets/generated/pashupatinath.dim_800x500.jpg",
};

const fallbackColors = [
  "from-emerald-700 to-teal-900",
  "from-violet-700 to-indigo-900",
  "from-amber-600 to-orange-900",
  "from-sky-600 to-blue-900",
];

export default function HiddenGems() {
  const { data: gems, isLoading } = useGetHiddenGems();

  return (
    <section className="py-16 bg-[#F8F4F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-nepal-orange" />
            <span className="text-nepal-orange font-semibold text-sm uppercase tracking-wide">
              Off the Beaten Path
            </span>
          </div>
          <h2 className="text-3xl font-bold text-nepal-dark">Hidden Gems</h2>
          <p className="text-nepal-muted mt-2">
            Discover Nepal's lesser-known treasures that most tourists miss
          </p>
        </div>

        {isLoading ? (
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            data-ocid="gems.loading_state"
          >
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-48 rounded-2xl" />
            ))}
          </div>
        ) : (
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            data-ocid="gems.list"
          >
            {(gems ?? []).map((gem, i) => {
              const img = gemImages[gem.name];
              return (
                <motion.a
                  key={gem.name}
                  href={gem.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden h-44 sm:h-56 cursor-pointer"
                  data-ocid={`gems.item.${i + 1}`}
                >
                  {img ? (
                    <img
                      src={img}
                      alt={gem.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${fallbackColors[i % fallbackColors.length]}`}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="font-bold text-white text-base">
                      {gem.name}
                    </div>
                    <div className="text-white/70 text-xs mt-0.5">
                      {gem.region}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
