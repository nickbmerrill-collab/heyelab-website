import { notFound } from "next/navigation";
import { getVentureBySlug, getAllVentureSlugs } from "@/data/ventures";
import DetailPage from "@/components/DetailPage";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllVentureSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const venture = getVentureBySlug(slug);
  if (!venture) return {};
  return {
    title: `${venture.name} — Heyelab`,
    description: venture.overview.slice(0, 160),
  };
}

export default async function VentureDetailPage({ params }: Props) {
  const { slug } = await params;
  const venture = getVentureBySlug(slug);
  if (!venture) notFound();

  return (
    <DetailPage
      name={venture.name}
      role={venture.role}
      period={venture.period}
      metric={venture.metric}
      metricLabel={venture.metricLabel}
      backHref="/#ventures"
      backLabel="Back to Ventures"
      overview={venture.overview}
      achievements={venture.achievements}
      challenges={venture.challenges}
      processes={venture.processes}
      lessons={venture.lessons}
      gallery={venture.gallery}
      pressLinks={venture.pressLinks}
    />
  );
}
