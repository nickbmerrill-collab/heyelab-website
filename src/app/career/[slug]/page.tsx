import { notFound } from "next/navigation";
import { getCareerBySlug, getAllCareerSlugs } from "@/data/career";
import DetailPage from "@/components/DetailPage";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCareerSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const career = getCareerBySlug(slug);
  if (!career) return {};
  return {
    title: `${career.org} — Career — Heyelab`,
    description: career.overview.slice(0, 160),
  };
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const career = getCareerBySlug(slug);
  if (!career) notFound();

  return (
    <DetailPage
      name={career.org}
      role={career.title}
      period={career.period}
      backHref="/#timeline"
      backLabel="Back to Career"
      overview={career.overview}
      achievements={career.achievements}
      challenges={career.challenges}
      processes={career.processes}
      lessons={career.lessons}
      gallery={career.gallery}
      tags={career.tags}
    />
  );
}
