import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertTriangle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useGetEmergencyContacts } from "../hooks/useQueries";

export default function EmergencySection() {
  const { data: contacts, isLoading } = useGetEmergencyContacts();

  return (
    <section id="emergency" className="py-16 bg-red-50 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-nepal-dark">
              Emergency Contacts
            </h2>
            <p className="text-nepal-muted text-sm">
              Save these numbers before you travel
            </p>
          </div>
        </div>

        {isLoading ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            data-ocid="emergency.loading_state"
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-5 space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            data-ocid="emergency.list"
          >
            {(contacts ?? []).map((contact, i) => (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white rounded-2xl border-2 border-red-100 p-5 flex flex-col gap-3"
                data-ocid={`emergency.item.${i + 1}`}
              >
                <div>
                  <h3 className="font-bold text-nepal-dark text-base">
                    {contact.name}
                  </h3>
                  <p className="text-nepal-muted text-xs mt-1 leading-relaxed">
                    {contact.description}
                  </p>
                </div>
                <a
                  href={`tel:${contact.phone}`}
                  data-ocid={`emergency.item.${i + 1}.button`}
                >
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg h-12">
                    <Phone className="w-5 h-5 mr-2" />
                    {contact.phone}
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
