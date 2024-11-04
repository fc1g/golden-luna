import Title from "@/client/components/Title";
import { Button } from "@/client/components/ui/button";

import TestimonialsList from "@/client/components/ui/homepage/TestimonialsList";
import aga from "@/public/images/users/aga.webp";
import ania from "@/public/images/users/ania.webp";
import ewelina from "@/public/images/users/ewelina.webp";
import paulina from "@/public/images/users/paulina.webp";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";

type TestimonialData = {
  src: StaticImageData;
  username: string;
};

// TODO: imageAltText
const testimonials: TestimonialData[] = [
  { src: aga, username: "aga" },
  { src: ewelina, username: "ewelina" },
  { src: paulina, username: "paulina" },
  { src: ania, username: "ania" },
];

export default function Testimonials() {
  const t = useTranslations("homepage.testimonials");

  return (
    <section className="pb-8 pt-16 text-center lg:pb-16 lg:pt-24">
      <Title title={t("title")} subtitle={t("subtitle")} />

      <TestimonialsList>
        {testimonials.map(({ src, username }) => (
          <TestimonialsList.Testimonial
            key={username}
            src={src}
            username={username}
          />
        ))}
      </TestimonialsList>

      <div className="flex items-center justify-center">
        <Button size="lg" variant="outline" asChild>
          <a
            href="https://www.facebook.com/people/GoldenLuna/100089141321163/?sk=reviews"
            target="blank"
            rel="noopener noreferrer"
          >
            {t("leaveReview")} &rarr;
          </a>
        </Button>
      </div>
    </section>
  );
}
