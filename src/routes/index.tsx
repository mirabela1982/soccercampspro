import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { SearchBar } from "@/components/site/SearchBar";
import { FeaturedCamps } from "@/components/site/FeaturedCamps";
import { TopClubs } from "@/components/site/TopClubs";
import { ExperienceCards } from "@/components/site/ExperienceCards";
import { WhyUs } from "@/components/site/WhyUs";
import { TripsBlock } from "@/components/site/TripsBlock";
import { LatestNews } from "@/components/site/LatestNews";
import { Newsletter } from "@/components/site/Newsletter";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Soccer Camps Pro — Find the Best Youth Soccer Camps" },
      {
        name: "description",
        content:
          "Discover official and trusted youth soccer camps from top international clubs like Arsenal, PSG and FC Bayern. Search by country, city, club, age group and month.",
      },
      {
        property: "og:title",
        content: "Soccer Camps Pro — Find the Best Youth Soccer Camps",
      },
      {
        property: "og:description",
        content:
          "Official youth soccer camps from top international clubs across North America.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "twitter:image",
        content:
          "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1400&q=80",
      },
    ],
  }),
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SearchBar />
        <FeaturedCamps />
        <TopClubs />
        <ExperienceCards />
        <WhyUs />
        <TripsBlock />
        <LatestNews />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
