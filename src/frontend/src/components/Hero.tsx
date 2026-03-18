import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const scrollDown = () => {
    document.getElementById("places")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-[92vh] flex items-center"
      style={{
        background: `linear-gradient(to bottom, rgba(15,10,5,0.55) 0%, rgba(15,10,5,0.45) 60%, rgba(200,90,46,0.35) 100%), url('/assets/generated/nepal-hero.dim_1200x600.jpg') center/cover no-repeat`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-nepal-orange-light" />
            <span className="text-white/80 text-sm font-medium tracking-wide uppercase">
              Federal Democratic Republic of Nepal
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-4">
            <span className="text-nepal-orange-light">Discover</span> Nepal:
            <br />
            <span className="text-white">Your Journey</span>
            <br />
            <span className="text-white">Awaits</span>
          </h1>
          <p className="text-white/75 text-lg mb-8 leading-relaxed">
            Explore ancient temples, soaring peaks, and rich culture. Your
            complete guide to the world's most magnificent destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={scrollDown}
              size="lg"
              className="bg-nepal-orange hover:bg-nepal-orange-light text-white font-semibold px-8 shadow-lg"
              data-ocid="hero.explore.primary_button"
            >
              Start Exploring
            </Button>
            <Button
              onClick={() =>
                document
                  .getElementById("tips")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              size="lg"
              variant="outline"
              className="border-white/60 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
              data-ocid="hero.tips.secondary_button"
            >
              Travel Tips
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.6,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </div>
    </section>
  );
}
