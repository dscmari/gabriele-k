import Breadcrumbs from "@/app/components/Breadcrumps";
import { client } from "../../src/sanity/client";
import { type SanityDocument } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { SquareArrowOutUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Heilpraktikerin für Psychotherapie - Gabriele Kramer | Blogartikel zu Themen der psychischen Gesundheit",
};

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  publishedAt,
  body,
  "imageUrl": image.asset->url,
  "excerpt": array::join(body[0].children[].text, "")
}`;
const options = { next: { revalidate: 30 } };

export default async function Blog() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div className="">
      <Breadcrumbs className="hidden md:block pt-4 px-4 lg:px-32 font-semibold" />
      <div className="flex flex-col px-4 sm:px-16 lg:px-32 pt-12 lg:pt-32 lg:pb-16 xl:max-w-3/4 2xl:max-w-2/3">
        <span className="font-light text-sm mx-auto lg:mx-0">
          Einblicke & Wissen
        </span>
        <h1 className="text-center lg:text-start mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold">
          Heilpraktikerin für Psychotherapie - Blog
        </h1>
        <h2 className="text-center lg:text-start">
          Gedanken, Erfahrungen und Fachwissen rund um psychische Gesundheit,
          Heilpraktiker für Psychotherapie und den Weg zu mehr innerer Balance
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-24 lg:gap-12 m-8 mt-24 lg:m-32">
        {posts.map((post) => (
          <div key={post._id} className="bg-white dark rounded-xl dark:border flex flex-col justify-end">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={600}
              height={400}
              className="w-auto mx-auto rounded-t-xl"
            />
            <div className="mx-4 my-2 flex flex-col items-start">
              <Link
                href={`/${post.slug.current}`}
                className="gap-2 pt-4  underline font-semibold text-lg text-custom-blue"
                target="_blank"
              >
                {post.title}
              </Link>
              <p className="text-sm font-light text-custom-blue dark:!text-custom-blue">
                {post.excerpt?.substring(0, 140)}...
              </p>
              <Link
                href={`/${post.slug.current}`}
                className="flex gap-2 pt-4 items-center text-sm font-semibold text-custom-blue"
                target="_blank"
              >
                Zum Post
                <SquareArrowOutUpRight className="shrink-0" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
