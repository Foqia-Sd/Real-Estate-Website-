import Navbar from '@/components/Navbar';
import PropertyDetails from '@/components/PropertyDetails';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;

  const property = await client.fetch(
    groq`*[_type == "property" && slug.current == $slug][0]`,
    { slug }
  );

  return (
    <>
      <Navbar />
      <PropertyDetails property={property} />
    </>
  );
}
