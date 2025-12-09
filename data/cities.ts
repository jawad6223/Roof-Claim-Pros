import { City } from "@/types/AuthType";
import { Clock, FileText, Shield } from "lucide-react";

export const cities: City[] = [
    { name: 'Miami', state: 'FL', description: 'Miami is known for its tropical storms and hurricane season.' },
    { name: 'Dallas', state: 'TX', description: 'Dallas experiences high winds and hailstorms that can damage roofs.' },
    { name: 'Los Angeles', state: 'CA', description: 'Roof replacement in LA after heavy rain or wildfires is crucial for safety.' },
    { name: 'Chicago', state: 'IL', description: 'Chicago has harsh winters and storm damage is common in the region.' },
    { name: 'Houston', state: 'TX', description: 'Houston’s humid climate and hurricanes can cause significant roof damage.' },
    { name: 'New York', state: 'NY', description: 'New York experiences heavy snow and ice storms that can damage roofs.' },
    { name: 'San Francisco', state: 'CA', description: 'San Francisco experiences heavy rain and wind storms that can damage roofs.' },
    { name: 'Seattle', state: 'WA', description: 'Seattle experiences heavy rain and wind storms that can damage roofs.' },
    { name: 'Atlanta', state: 'GA', description: 'Atlanta experiences heavy rain and wind storms that can damage roofs.' },
    { name: 'Boston', state: 'MA', description: 'Boston experiences heavy snow and ice storms that can damage roofs.' },
  ];

  export const whyChooseUs = [
    {
      id: 1,
      icon: Shield,
      title: "Free Professional Inspection",
      description:
        "Our licensed experts will assess your roof damage at no cost to you.",
    },
    {
      id: 2,
      icon: FileText,
      title: "Trusted Insurance Navigators",
      description:
        "Our team guides you through the claim process and advocates for you every step of the way. We handle all paperwork and work directly with your insurance company.",
    },
    {
      id: 3,
      icon: Clock,
      title: "Fast & Reliable Service",
      description:
        "Quick response time to protect your home from further damage.",
    },
  ];