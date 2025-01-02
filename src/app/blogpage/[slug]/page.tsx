import { fullblog } from '@/app/interface';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import React from 'react'

export const revalidate = 30;

async function getData(slug:string) {
  const query = `*[_type == "blog" && slug.current == '${slug}']{
   "slug": slug.current,
     title,
     body,
     mainImage,
     publishedAt,
     author,
 }[0]`;

 const data = await client.fetch(query);
 return data;
  
}


async function Blogdetail({params}: {params:{slug:string}}) {

  const data : fullblog = await getData(params.slug);

  return (
    <div className='bg-myblack small:h-full small:max-w-[430px] medium:h-full medium:max-w-[1535px] large:full large:max-w-[1728px] mx-auto text-white py-10 justify-center items-center flex px-4 flex-col'>
      <h1 className='text-center block mt-4 text-3xl sm:text-4xl leading-8 tracking-tight font-bold gap-2 mx-auto font-mono hover:text-mypurple'>{data.title}</h1>
      <div className='w-[130px] h-[0.2px] bg-white mt-8'></div>
      <Image
        src={urlFor(data.mainImage).url()}
        width={800}
        height={800}
        alt="Title Image"
        priority
        className="rounded-lg mt-8 border "
      />

       <div className="mt-16 prose prose-blue prose-lg prose-li:marker:text-primary prose-a:text-primary font-mono flex-col flex justify-center  mx-auto p-6 small:text-center medium:text-left text-base">
        <PortableText value={data.body} />
      </div>
      <div className='flex justify-between items-center gap-3 small:flex-col mt-7'>
      <p className="text-gray-500 text-sm">
          By <span className="font-semibold">{data.author}</span> {/* Author name */}
        </p>
        <p className="text-gray-500 text-sm">
          Published on {new Date(data.publishedAt).toDateString()}
        </p>
      </div>

    </div>
  )
}

export default Blogdetail