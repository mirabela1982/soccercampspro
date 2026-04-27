export type Camp = {
  id: string;
  club: string;
  name: string;
  city: string;
  country: string;
  date: string;
  venue: string;
  ageGroup: string;
  price: string;
  image: string;
};

export type Club = {
  id: string;
  name: string;
  description: string;
  camps: number;
  cities: number;
  image: string;
  badgeColor: string;
};

export type NewsItem = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
};

export const featuredCamps: Camp[] = [
  {
    id: "1",
    club: "Arsenal",
    name: "Arsenal Soccer School Summer Camp",
    city: "Toronto",
    country: "Canada",
    date: "Jul 6 – Jul 10",
    venue: "York University Fields",
    ageGroup: "Ages 8–16",
    price: "$895",
    image:
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "2",
    club: "Paris Saint-Germain",
    name: "PSG Academy Summer Camp",
    city: "New York",
    country: "USA",
    date: "Jul 13 – Jul 17",
    venue: "Chelsea Piers Field House",
    ageGroup: "Ages 7–15",
    price: "$1,150",
    image:
      "https://images.unsplash.com/photo-1602274422510-fc34d6b59c25?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "3",
    club: "FC Bayern",
    name: "FC Bayern Youth Camp",
    city: "Los Angeles",
    country: "USA",
    date: "Aug 3 – Aug 7",
    venue: "UCLA North Athletic Field",
    ageGroup: "Ages 9–17",
    price: "$1,050",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
  },
];

export const topClubs: Club[] = [
  {
    id: "arsenal",
    name: "Arsenal",
    description:
      "Train with the official methodology of one of England's most iconic clubs.",
    camps: 12,
    cities: 6,
    image:
      "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "bg-cta",
  },
  {
    id: "psg",
    name: "Paris Saint-Germain",
    description:
      "Experience the Parisian style of play through PSG's official youth program.",
    camps: 9,
    cities: 5,
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "bg-primary",
  },
  {
    id: "bayern",
    name: "FC Bayern",
    description:
      "Learn the German champions' methodology and competitive mindset.",
    camps: 8,
    cities: 4,
    image:
      "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "bg-accent",
  },
];

export const news: NewsItem[] = [
  {
    id: "1",
    category: "Camps",
    title: "Arsenal Soccer School returns to Toronto for Summer 2026",
    excerpt:
      "The official Arsenal youth program lands in Canada with new dates and expanded age groups.",
    date: "Apr 22, 2026",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "2",
    category: "Clubs",
    title: "PSG Academy expands to three new US cities",
    excerpt:
      "Paris Saint-Germain announces a wider footprint in North America for the upcoming youth season.",
    date: "Apr 14, 2026",
    image:
      "https://images.unsplash.com/photo-1606925207923-c2c89c4e1da6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "3",
    category: "Trips",
    title: "Soccer Trips: behind the scenes of an international experience",
    excerpt:
      "From training to stadium visits, see what families experience on a Soccer Camps Pro trip.",
    date: "Mar 30, 2026",
    image:
      "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=1200&q=80",
  },
];

export const countries = ["United States", "Canada", "Mexico", "Spain", "United Kingdom"];
export const cities = ["New York", "Toronto", "Los Angeles", "Miami", "Vancouver", "Chicago"];
export const clubs = ["Arsenal", "Paris Saint-Germain", "FC Bayern", "Real Madrid", "AC Milan"];
export const ageGroups = ["6–9", "10–13", "14–17", "All ages"];
export const months = ["June", "July", "August", "September", "October"];
