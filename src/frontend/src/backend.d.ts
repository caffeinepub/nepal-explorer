import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface TravelTip {
    title: string;
    content: string;
    category: TravelTipCategory;
}
export interface EmergencyContact {
    name: string;
    description: string;
    phone: string;
}
export interface Guide {
    name: string;
    languages: Array<string>;
    description: string;
    email: string;
    specialty: string;
    phone: string;
}
export interface Hotel {
    name: string;
    description: string;
    website: string;
    googleMapsUrl: string;
    priceRange: string;
    phone: string;
    location: string;
}
export interface Place {
    region: string;
    name: string;
    description: string;
    googleMapsUrl: string;
    imageKeyword: string;
}
export enum TravelTipCategory {
    Food = "Food",
    Safety = "Safety",
    Etiquette = "Etiquette",
    Emergency = "Emergency"
}
export interface backendInterface {
    getEmergencyContacts(): Promise<Array<EmergencyContact>>;
    getGuides(): Promise<Array<Guide>>;
    getHiddenGems(): Promise<Array<Place>>;
    getHotels(): Promise<Array<Hotel>>;
    getPlaces(): Promise<Array<Place>>;
    getTravelTips(): Promise<Array<TravelTip>>;
}
