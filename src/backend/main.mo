import Array "mo:core/Array";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";

actor {
  type Place = {
    name : Text;
    description : Text;
    region : Text;
    googleMapsUrl : Text;
    imageKeyword : Text;
  };

  type Hotel = {
    name : Text;
    location : Text;
    priceRange : Text;
    phone : Text;
    website : Text;
    googleMapsUrl : Text;
    description : Text;
  };

  type Guide = {
    name : Text;
    specialty : Text;
    languages : [Text];
    phone : Text;
    email : Text;
    description : Text;
  };

  type TravelTipCategory = {
    #Safety;
    #Etiquette;
    #Food;
    #Emergency;
  };

  type TravelTip = {
    category : TravelTipCategory;
    title : Text;
    content : Text;
  };

  type EmergencyContact = {
    name : Text;
    phone : Text;
    description : Text;
  };

  let places = [
    {
      name = "Mount Everest";
      description = "The highest mountain in the world, located in the Himalayas.";
      region = "Solukhumbu";
      googleMapsUrl = "https://maps.google.com/?q=Mount+Everest";
      imageKeyword = "Mount+Everest";
    },
    {
      name = "Pokhara";
      description = "A city known for its beautiful lakes and mountain views.";
      region = "Gandaki";
      googleMapsUrl = "https://maps.google.com/?q=Pokhara";
      imageKeyword = "Pokhara";
    },
  ];

  let hiddenGems = [
    {
      name = "Rara Lake";
      description = "A stunning lake located in the remote Mugu district.";
      region = "Mugu";
      googleMapsUrl = "https://maps.google.com/?q=Rara+Lake";
      imageKeyword = "Rara+Lake";
    },
    {
      name = "Tsum Valley";
      description = "A hidden valley with rich Tibetan culture.";
      region = "Gorkha";
      googleMapsUrl = "https://maps.google.com/?q=Tsum+Valley";
      imageKeyword = "Tsum+Valley";
    },
  ];

  let hotels = [
    {
      name = "Hotel Everest View";
      location = "Solukhumbu";
      priceRange = "$100-$200";
      phone = "+977-1234567890";
      website = "https://hoteleverestview.com";
      googleMapsUrl = "https://maps.google.com/?q=Hotel+Everest+View";
      description = "A luxury hotel with stunning views of Mount Everest.";
    },
    {
      name = "Lake View Resort";
      location = "Pokhara";
      priceRange = "$50-$100";
      phone = "+977-0987654321";
      website = "https://lakeviewresort.com";
      googleMapsUrl = "https://maps.google.com/?q=Lake+View+Resort";
      description = "Affordable resort by the lake in Pokhara.";
    },
  ];

  let guides = [
    {
      name = "Ram Bahadur";
      specialty = "Trekking";
      languages = ["Nepali", "English"];
      phone = "+977-1122334455";
      email = "ram.bahadur@email.com";
      description = "Experienced trekking guide with over 20 years of experience.";
    },
    {
      name = "Sita Gurung";
      specialty = "Cultural Tours";
      languages = ["Nepali", "English", "French"];
      phone = "+977-5566778899";
      email = "sita.gurung@email.com";
      description = "Expert in Nepalese culture and history.";
    },
  ];

  let travelTips = [
    {
      category = #Safety;
      title = "Altitude Sickness";
      content = "Ascend slowly to avoid altitude sickness in high regions.";
    },
    {
      category = #Etiquette;
      title = "Temple Etiquette";
      content = "Remove shoes before entering temples and monasteries.";
    },
  ];

  let emergencyContacts = [
    {
      name = "Police";
      phone = "100";
      description = "Emergency police contact number in Nepal.";
    },
    {
      name = "Fire Department";
      phone = "101";
      description = "Emergency fire department contact number in Nepal.";
    },
  ];

  public query ({ caller }) func getPlaces() : async [Place] {
    places;
  };

  public query ({ caller }) func getHiddenGems() : async [Place] {
    hiddenGems;
  };

  public query ({ caller }) func getHotels() : async [Hotel] {
    hotels;
  };

  public query ({ caller }) func getGuides() : async [Guide] {
    guides;
  };

  public query ({ caller }) func getTravelTips() : async [TravelTip] {
    travelTips;
  };

  public query ({ caller }) func getEmergencyContacts() : async [EmergencyContact] {
    emergencyContacts;
  };
};
