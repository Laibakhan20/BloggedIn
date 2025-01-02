import { defineType, defineField } from "sanity";

export const post = defineType({
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),      //this field is required.
          }),
          defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {                     //Automatically generates the slug from the title.
              source: 'title',
              maxLength: 96,               //Limits slug length for SEO optimization.
            },
            validation: (Rule) => Rule.required(),         
          }),
          defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',             //Stores the date and time of publishing using ISO 8601 forma
          }),
          defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',                //Allows uploading an image.
            options: {
              hotspot: true,              // Enables cropping and focus adjustments in the Sanity Studio.
            },
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'array',
          of: [
            { type: 'block' },                //Enables formatted text
            { type: 'image' },                //Allows adding images within the blog body
          ],
        }),
        
          
        

    ],

})