import { useQuery } from "@tanstack/react-query";
import type {
  EmergencyContact,
  Guide,
  Hotel,
  Place,
  TravelTip,
} from "../backend.d";
import { useActor } from "./useActor";

export function useGetPlaces() {
  const { actor, isFetching } = useActor();
  return useQuery<Place[]>({
    queryKey: ["places"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getPlaces();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetHiddenGems() {
  const { actor, isFetching } = useActor();
  return useQuery<Place[]>({
    queryKey: ["hiddenGems"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getHiddenGems();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetHotels() {
  const { actor, isFetching } = useActor();
  return useQuery<Hotel[]>({
    queryKey: ["hotels"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getHotels();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetGuides() {
  const { actor, isFetching } = useActor();
  return useQuery<Guide[]>({
    queryKey: ["guides"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getGuides();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetTravelTips() {
  const { actor, isFetching } = useActor();
  return useQuery<TravelTip[]>({
    queryKey: ["travelTips"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTravelTips();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetEmergencyContacts() {
  const { actor, isFetching } = useActor();
  return useQuery<EmergencyContact[]>({
    queryKey: ["emergencyContacts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getEmergencyContacts();
    },
    enabled: !!actor && !isFetching,
  });
}
