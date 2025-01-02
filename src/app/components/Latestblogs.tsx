import React from 'react'
import { urlFor } from '@/sanity/lib/image'
import { Image } from 'next-sanity/image'
import { SimplifiedProduct } from '../interface'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import { PortableText } from 'next-sanity'
import { Button } from '@/components/ui/button'

async function getData() {
  const query = `
  *[_type == "blog"] | order(publishedAt desc)[0...4] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
  }`;

  const data = await client.fetch(query);

  return data;

  
}

async function Latest () {

  const data: SimplifiedProduct[] = await getData();

  return (
    <div className='bg-[#202020] flex justify-center items-center small:max-w-[430px] medium:max-w-[1535px] large:max-w-[1728px] mx-auto pt-10 '>
        {/**/}
     <section className="py-8 px-4 bg-[#202020]">
      <h2 className="text-2xl font-bold mb-4 text-white font-rale py-6">Our Latest Blogs</h2>
      <div className="grid grid-cols-1  medium:grid-cols-3 large:grid-cols-4 gap-7" >
        {data.map((post, idx) => (
          <div key={idx} className=" overflow-hidden shadow-lg hover:scale-105 transition-transform" >
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              width={300}
              height={300}
              className='rounded-md bg-myblack object-contain object-center'
            />
            <div className="p-4 bg-zinc-700  w-[300px] h-[300px] text-white mt-3 px-4" >
              <h3 className="text-xl font-semibold line-clamp-3 text-dark leading-tight mb-2 font-mono tracking-wide py-2">{post.title}</h3>
              <div className="prose text-gray-200 truncate line-clamp-3 font-mono font-normal">
              <PortableText value={post.body} />
              </div>
              <div className='w-full h-[0.1px] bg-black my-3 '></div>
              {/* Read More dynamic Link */}
              <Button className="w-full py-1 bg-myblack hover:bg-mypurple text-white font-rale rounded-sm mt-6">
              <Link href={`/blogpage/${post.slug.current}`}>Read More</Link>
            </Button>
              
            </div>

          </div>

        

        ))}

      </div>
      </section>

    </div>
  )
}

export default Latest