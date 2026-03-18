import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useGetPlaces } from "../hooks/useQueries";

const placeImages: Record<string, string> = {
  Kathmandu: "/assets/generated/kathmandu.dim_800x500.jpg",
  Pokhara: "/assets/generated/pokhara.dim_800x500.jpg",
  "Everest Base Camp": "/assets/generated/everest.dim_800x500.jpg",
  Lumbini: "/assets/generated/lumbini.dim_800x500.jpg",
};

export default function PlacesSection() {
  const { data: places, isLoading } = useGetPlaces();

  return (
    <section id="places" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1 h-6 bg-nepal-orange rounded-full" />
          <span className="text-nepal-orange font-semibold text-sm uppercase tracking-wide">
            Top Destinations
          </span>
        </div>
        <h2 className="text-3xl font-bold text-nepal-dark">Places to Visit</h2>
        <p className="text-nepal-muted mt-2">
          Explore Nepal's most iconic and awe-inspiring destinations
        </p>
      </div>

      {isLoading ? (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          data-ocid="places.loading_state"
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <div className="p-4 space-y-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          data-ocid="places.list"
        >
          {(places ?? []).map((place, i) => (
            <motion.div
              key={place.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
              data-ocid={`places.item.${i + 1}`}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={
                    placeImages[place.name] ??
                    "/assets/generated/kathmandu.dim_800x500.jpg"
                  }
                  alt={place.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <Badge className="absolute top-3 left-3 bg-white/90 text-nepal-dark text-xs">
                  <MapPin className="w-3 h-3 mr-1 text-nepal-orange" />
                  {place.region}
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-nepal-dark text-base mb-1">
                  {place.name}
                </h3>
                <p className="text-nepal-muted text-xs leading-relaxed mb-4 line-clamp-3">
                  {place.description}
                </p>
                <a
                  href={place.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`places.item.${i + 1}.button`}
                >
                  <Button
                    size="sm"
                    className="w-full bg-nepal-orange hover:bg-nepal-orange-light text-white text-xs"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Get Directions
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
