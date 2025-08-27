import { defineQuery } from "next-sanity";
import { sanityFetch } from "./live";

export const getProperty = async () => {
    const ALL_PROPERTY_QUERY = defineQuery(`
    *[_type == "property"] {
          title,
          price,
          description,
          "images": images[].asset->url
        }
`);

    try {
        const property = await sanityFetch({
            query: ALL_PROPERTY_QUERY,
        });

        return property.data || [];
    } catch (error) {
        console.error("Error fetching all properties:", error);
        return [];
    }
};