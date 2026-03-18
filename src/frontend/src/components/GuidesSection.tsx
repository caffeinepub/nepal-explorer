import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Globe2, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useGetGuides } from "../hooks/useQueries";

const avatarColors = [
  "bg-orange-100 text-nepal-orange",
  "bg-blue-100 text-blue-700",
  "bg-emerald-100 text-emerald-700",
  "bg-violet-100 text-violet-700",
  "bg-amber-100 text-amber-700",
];

export default function GuidesSection() {
  const { data: guides, isLoading } = useGetGuides();

  return (
    <section id="guides" className="py-16 bg-[#F8F4F1] px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-6 bg-nepal-orange rounded-full" />
            <span className="text-nepal-orange font-semibold text-sm uppercase tracking-wide">
              Local Experts
            </span>
          </div>
          <h2 className="text-3xl font-bold text-nepal-dark">Local Guides</h2>
          <p className="text-nepal-muted mt-2">
            Connect with trusted, certified guides who know Nepal's secrets
          </p>
        </div>

        {isLoading ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            data-ocid="guides.loading_state"
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-5 space-y-3">
                <div className="flex gap-3">
                  <Skeleton className="w-12 h-12 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-2/3" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
                <Skeleton className="h-16 w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            data-ocid="guides.list"
          >
            {(guides ?? []).map((guide, i) => (
              <motion.div
                key={guide.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-shadow p-5"
                data-ocid={`guides.item.${i + 1}`}
              >
                <div className="flex gap-3 mb-3">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${avatarColors[i % avatarColors.length]}`}
                  >
                    {guide.name[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-nepal-dark text-base">
                      {guide.name}
                    </h3>
                    <Badge className="mt-1 bg-nepal-orange-pale text-nepal-orange border-0 text-xs">
                      {guide.specialty}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  <Globe2 className="w-3.5 h-3.5 text-nepal-muted flex-shrink-0" />
                  <span className="text-nepal-muted text-xs">
                    {guide.languages.join(" · ")}
                  </span>
                </div>

                <p className="text-nepal-muted text-sm leading-relaxed mb-4">
                  {guide.description}
                </p>

                <div className="flex gap-2">
                  <a
                    href={`tel:${guide.phone}`}
                    className="flex-1"
                    data-ocid={`guides.item.${i + 1}.button`}
                  >
                    <Button
                      size="sm"
                      className="w-full bg-nepal-orange hover:bg-nepal-orange-light text-white text-xs"
                    >
                      <Phone className="w-3 h-3 mr-1" />
                      Call
                    </Button>
                  </a>
                  <a href={`mailto:${guide.email}`} className="flex-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-nepal-orange text-nepal-orange hover:bg-nepal-orange-pale text-xs"
                    >
                      <Mail className="w-3 h-3 mr-1" />
                      Email
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
