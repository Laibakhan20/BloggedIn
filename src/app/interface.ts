import { TypedObject } from "sanity";

export interface SimplifiedProduct {
    title: string; // Title of the blog
    slug: {
      current: string; // Slug for the blog
    };
    author: string; // Author's name
    publishedAt: string; // Date and time in ISO format
    mainImage: {
      asset: {
        _id: string; // Image ID
        url: string; // Image URL
      };
    };
    body: Array<BodyBlock | BodyImage>; // Union type for handling both blocks and images in the body
  }
  
  // Interface for Text Block
  interface BodyBlock {
    _type: 'block'; // Indicates this is a text block
    children: Array<{
      text: string; // The actual text content
    }>;
  }
  
  // Interface for Image in the Body
  interface BodyImage {
    _type: 'image'; // Indicates this is an image
    asset: {
      _id: string; // Image ID
      url: string; // Image URL
    };
    alt?: string; // Optional alt text for accessibility
  }

  export interface Post {
    _id: string;
  title: string;
  slug: {
    current: string; // Slug for the blog
  }; 
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  author: string;
  body?: TypedObject[];
  publishedAt: string;
  Post: string;
}

export interface fullblog {
  title: string;
  slug: string;
  mainImage: {
    asset: {
      url: string;
    };
  }; // Changed `any` to structured type
  body: TypedObject[]; // Correct type
  publishedAt: string;
  author: string;
}

export interface Comment {
  id: string;
  author: string;
  text: string;
}


  
  