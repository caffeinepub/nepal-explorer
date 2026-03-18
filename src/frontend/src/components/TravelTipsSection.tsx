import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, Heart, Shield, Utensils } from "lucide-react";
import { motion } from "motion/react";
import type { TravelTip } from "../backend.d";
import { TravelTipCategory } from "../backend.d";
import { useGetTravelTips } from "../hooks/useQueries";

const categoryConfig: Record<
  string,
  { icon: typeof Shield; color: string; bg: string; label: string }
> = {
  [TravelTipCategory.Safety]: {
    icon: Shield,
    color: "text-red-600",
    bg: "bg-red-50",
    label: "Safety",
  },
  [TravelTipCategory.Etiquette]: {
    icon: Heart,
    color: "text-pink-600",
    bg: "bg-pink-50",
    label: "Cultural Etiquette",
  },
  [TravelTipCategory.Food]: {
    icon: Utensils,
    color: "text-amber-600",
    bg: "bg-amber-50",
    label: "Food & Dining",
  },
  [TravelTipCategory.Emergency]: {
    icon: AlertCircle,
    color: "text-orange-600",
    bg: "bg-orange-50",
    label: "Emergency",
  },
};

export default function TravelTipsSection() {
  const { data: tips, isLoading } = useGetTravelTips();

  const grouped = (tips ?? []).reduce(
    (acc, tip) => {
      const key = tip.category as string;
      if (!acc[key]) acc[key] = [];
      acc[key].push(tip);
      return acc;
    },
    {} as Record<string, TravelTip[]>,
  );

  return (
    <section id="tips" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1 h-6 bg-nepal-orange rounded-full" />
          <span className="text-nepal-orange font-semibold text-sm uppercase tracking-wide">
            Smart Travel
          </span>
        </div>
        <h2 className="text-3xl font-bold text-nepal-dark">
          Travel Tips & Resources
        </h2>
        <p className="text-nepal-muted mt-2">
          Everything you need to know for a safe and enriching journey
        </p>
      </div>

      {isLoading ? (
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          data-ocid="tips.loading_state"
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-border p-5 space-y-3"
            >
              <Skeleton className="h-10 w-10 rounded-xl" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-20 w-full" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(grouped).map(([category, categoryTips], colIndex) => {
            const cfg = categoryConfig[category] ?? {
              icon: Shield,
              color: "text-gray-600",
              bg: "bg-gray-50",
              label: category,
            };
            const isFirst = colIndex === 0;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: colIndex * 0.1, duration: 0.5 }}
                className={`rounded-2xl p-5 ${
                  isFirst
                    ? "bg-nepal-orange text-white"
                    : "bg-white border border-border shadow-card"
                }`}
                data-ocid={`tips.item.${colIndex + 1}`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    isFirst ? "bg-white/20" : cfg.bg
                  }`}
                >
                  <cfg.icon
                    className={`w-5 h-5 ${isFirst ? "text-white" : cfg.color}`}
                  />
                </div>
                <h3
                  className={`font-bold text-lg mb-3 ${isFirst ? "text-white" : "text-nepal-dark"}`}
                >
                  {cfg.label}
                </h3>
                <Accordion type="single" collapsible className="space-y-1">
                  {categoryTips.map((tip, ti) => (
                    <AccordionItem
                      key={tip.title}
                      value={`tip-${category}-${ti}`}
                      className={`border rounded-xl px-3 ${
                        isFirst
                          ? "border-white/20 bg-white/10"
                          : "border-border"
                      }`}
                      data-ocid={`tips.item.${colIndex + 1}.panel`}
                    >
                      <AccordionTrigger
                        className={`text-sm font-medium py-2.5 hover:no-underline ${
                          isFirst ? "text-white" : "text-nepal-dark"
                        }`}
                      >
                        {tip.title}
                      </AccordionTrigger>
                      <AccordionContent
                        className={`text-xs pb-3 leading-relaxed ${
                          isFirst ? "text-white/80" : "text-nepal-muted"
                        }`}
                      >
                        {tip.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
}
