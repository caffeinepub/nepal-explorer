# Nepal Explorer

## Current State
New project. Empty backend and frontend scaffolding.

## Requested Changes (Diff)

### Add
- Home screen with category navigation cards: Places to Visit, Hotels, Local Guides, Travel Tips, Hidden Gems
- Places to Visit section: Kathmandu, Pokhara, Everest Base Camp, Lumbini -- each with image, description, and Google Maps link
- Hidden Gems section: lesser-known spots in Nepal with images and descriptions
- Hotels section: listing of affordable hotels with name, location, price range, contact info, and Google Maps link
- Local Guides section: trusted guides with name, specialty, languages spoken, contact info
- Travel Tips section: safety advice, cultural etiquette, local food recommendations, emergency contacts (police, ambulance, tourist helpline)
- Bottom tab navigation (mobile-first)
- All data stored in backend as static seed data
- Google Maps deep-links for directions (open in Maps app or browser)

### Modify
- N/A (new project)

### Remove
- N/A

## Implementation Plan
1. Backend: Define data types for Place, Hotel, Guide, TravelTip, HiddenGem; expose query functions returning static seed data
2. Frontend: Mobile-first layout with bottom tab navigation
3. Home screen with category cards
4. Places to Visit page with destination cards, images, Google Maps links
5. Hotels page with listing cards and contact info
6. Local Guides page with guide profile cards
7. Travel Tips page with sections: Safety, Etiquette, Food, Emergency Contacts
8. Hidden Gems page
9. All pages use consistent card design with Himalayan-inspired colors
