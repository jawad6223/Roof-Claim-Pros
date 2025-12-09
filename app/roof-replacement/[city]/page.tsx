import { cities } from "@/data/cities";
import CityPage from "@/components/layout/CityPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

interface PageProps {
  params: Promise<{ city: string }>;
}

const normalizeCityName = (name: string): string => {
  try {
    return decodeURIComponent(name).toLowerCase().replace(/-/g, ' ').replace(/%20/g, ' ').trim();
  } catch {
    return name.toLowerCase().replace(/-/g, ' ').replace(/%20/g, ' ').trim();
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: cityParam } = await params;
  const normalizedParam = normalizeCityName(cityParam);
  const city = cities.find((c) => c.name.toLowerCase() === normalizedParam);

  if (!city) {
    return {};
  }

  const title = `Free Roof Replacement Quotes in ${city.name}, ${city.state} After Storm`;
  const description = `Get a free roof replacement quote in ${city.name}, ${city.state} after storm damage. Reliable, fast, and affordable roofing services.`;

  return {
    title,
    description,
  };
}

export default async function CityPageRoute({ params }: PageProps) {
  const { city: cityParam } = await params;
  const normalizedParam = normalizeCityName(cityParam);
  const city = cities.find((c) => c.name.toLowerCase() === normalizedParam);

  if (!city) {
    notFound();
  }

  return <CityPage city={city} />;
}
