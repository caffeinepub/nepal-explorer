import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { DollarSign, Globe, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useGetHotels } from "../hooks/useQueries";

export default function HotelsSection() {
  const { data: hotels, isLoading } = useGetHotels();

  return (
    <section id="hotels" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1 h-6 bg-nepal-orange rounded-full" />
          <span className="text-nepal-orange font-semibold text-sm uppercase tracking-wide">
            Where to Stay
          </span>
        </div>
        <h2 className="text-3xl font-bold text-nepal-dark">Hotels & Stays</h2>
        <p className="text-nepal-muted mt-2">
          Affordable, comfortable accommodations for every budget
        </p>
      </div>

      {isLoading ? (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          data-ocid="hotels.loading_state"
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl p-5 border border-border space-y-3"
            >
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-9 w-full" />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          data-ocid="hotels.list"
        >
          {(hotels ?? []).map((hotel, i) => (
            <motion.div
              key={hotel.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-shadow p-5 flex flex-col gap-3"
              data-ocid={`hotels.item.${i + 1}`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-nepal-dark text-base">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-0.5 text-nepal-muted text-xs">
                    <MapPin className="w-3 h-3" />
                    {hotel.location}
                  </div>
                </div>
                <Badge className="bg-nepal-orange-pale text-nepal-orange border-0 text-xs whitespace-nowrap">
                  <DollarSign className="w-3 h-3 mr-0.5" />
                  {hotel.priceRange}
                </Badge>
              </div>

              <p className="text-nepal-muted text-sm leading-relaxed flex-1">
                {hotel.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href={`tel:${hotel.phone}`}
                  data-ocid={`hotels.item.${i + 1}.button`}
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-nepal-orange text-nepal-orange hover:bg-nepal-orange-pale text-xs"
                  >
                    <Phone className="w-3 h-3 mr-1" />
                    Call
                  </Button>
                </a>
                {hotel.website && (
                  <a
                    href={hotel.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="text-xs">
                      <Globe className="w-3 h-3 mr-1" />
                      Website
                    </Button>
                  </a>
                )}
                <a
                  href={hotel.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto"
                >
                  <Button
                    size="sm"
                    className="bg-nepal-orange hover:bg-nepal-orange-light text-white text-xs"
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    Directions
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
