import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const property = defineType({
    name: 'property',
    title: 'Properties',
    type: 'document',
    icon: HomeIcon,

    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options:{source: 'name'}
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{type: 'image'}]
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'string',
        },
        
    ]
})