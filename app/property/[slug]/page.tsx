// app/property/[slug]/page.tsx
import Navbar from '@/components/Navbar'
import PropertyDetails from '@/components/PropertyDetails'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

// fetch property by slug
async function getProperty(slug: string) {
  const query = groq`*[_type == "property" && slug.current == $slug][0]{
    name,
    description,
    price,
    images,
    slug
  }`;
  return client.fetch(query, { slug });
}

// this is a Server Component (no "use client")
export default async function PropertyPage({ params }: { params: { slug: string } }) {
  const property = await getProperty(params.slug);

  if (!property) {
    return <div className="p-6 text-red-500">Property not found!</div>;
  }

  return (
    <>
      <Navbar />
      <PropertyDetails property={property} />
    </>
  );
}
