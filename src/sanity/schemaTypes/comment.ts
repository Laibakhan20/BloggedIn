import { defineType } from "sanity"

export const comment = defineType( {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
      {
        name: 'postId',
        title: 'Post ID',
        type: 'reference',
        to: [{ type: 'post' }],
      },
      {
        name: 'text',
        title: 'Comment Text',
        type: 'text',
        validation: (Rule) => Rule.required().min(5).max(500),
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      },
    ],
  });
  