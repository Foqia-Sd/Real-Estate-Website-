import Navbar from '@/components/Navbar';
import PropertyDetails from '@/components/PropertyDetails';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

interface PageProps {
  params: Promise<{ slug: string }>; // 👈 Fix: params can be a Promise
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params; // 👈 Await it properly

  const property = await client.fetch(
    groq`*[_type == "property" && slug.current == $slug][0]`,
    { slug }
  );

  if (!property) {
    return (
      <>
        <Navbar />
        <div className="p-8 text-center text-red-500">
          Property not found.
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <PropertyDetails property={property} />
    </>
  );
}
