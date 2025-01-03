import { client } from "@/sanity/lib/client";
import {SimplifiedProduct } from "../interface";
import Link from "next/link";
import { Image } from "next-sanity/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { Button } from "@/components/ui/button";
import CommentSection from "../components/Comment";



async function getData() {
    const query = `
    *[_type == "blog"] | order(publishedAt desc) {
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

export default async function Bloggallery() {
    const data: SimplifiedProduct[] = await getData();
    
    
    return(
        <div className='bg-[#202020] flex justify-center items-center small:max-w-[430px] medium:max-w-[1535px] large:max-w-[1728px] mx-auto flex-col text-white'>
        {/**/}
     <section className="py-8 px-4 bg-[#202020]">
     <h1 className="medium:text-4xl small:text-5xl font-extrabold tracking-widest text-white font-eb py-8  mx-auto flex justify-center items-center">Blog Gallery</h1>
     <div className='w-[130px] h-[0.2px] bg-white mx-auto mb-8' ></div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-[#202020] pt-7" >
        {data.map((post, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform" >
            
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              width={300}
              height={300}
              className='w-full rounded-md bg-myblack object-contain object-center'
            />
            <div className="p-4 bg-zinc-700  w-full h-[300px] text-white mt-3 px-4" >
              <h3 className="text-xl font-semibold line-clamp-3 text-dark leading-tight mb-2 font-mono tracking-wide py-2">{post.title}</h3>
             
              <div className="prose text-gray-200 truncate line-clamp-3 font-mono font-normal">
              <PortableText value={post.body} />
              </div>
              <div className='w-full h-[0.02px] bg-black my-3 '></div>
              <p className="text-gray-400 text-sm mb-4 font-rale">
                  {new Date(post.publishedAt).toDateString()}
                </p>
              {/* Read More dynamic Link */}
              <Button className="w-full py-1 bg-myblack hover:bg-mypurple text-white rounded-sm font-rale">
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