import { PortableText, type SanityDocument } from "next-sanity";
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { client } from "../../src/sanity/client";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import ContactBtn from "../components/buttons/ContactBtn";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug },
    options,
  );

  if (!post) {
    return { title: "Post nicht gefunden" };
  }

  return {
    title: post.seoTitle,
  };
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options,
  );

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;
  const postImageUrl_2 = post.image_2
    ? urlFor(post.image_2)?.width(550).height(310).url()
    : null;
  const postImageUrl_3 = post.image_3
    ? urlFor(post.image_3)?.width(550).height(310).url()
    : null;

  //console.log(post)
  return (
    <main className="sanity-container pb-24 lg:pb-32">
      <Link
        href="/blog/"
        className="hidden lg:block mt-4 px-4  md:mt-8 md:px-8 lg:px-16 lg:px-32 font-light text-sm dark:text-custom-white"
      >
        <ArrowLeft className="size-10 text-neutral-500" />
      </Link>
      <div className="flex flex-col items-center max-w-4xl mx-4 lg:mx-auto">
        {postImageUrl && (
          <Image
            src={postImageUrl}
            alt={post.title}
            width={600}
            height={400}
            className="rounded-xl mt-16 dark:border dark:border-darkmode-white"
          />
        )}
        <span className="font-light text-sm mx-auto mt-24 lg:mt-32">Blog</span>
        <h1 className="mt-4 lg:mt-8 text-center lg:!text-3xl/12 xl:!text-5xl/14 lg:px-16 xl:px-32 !font-bold">
          {post.title}
        </h1>
        <p className="text-sm font-light text-center">
          {new Date(post.publishedAt).toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }) || "Datum unbekannt"}
        </p>
        <div className="mt-4 lg:mt-8 lg:px-16 xl:px-32 sanity-text">
          {Array.isArray(post.body) && <PortableText value={post.body} />}
        </div>
        {postImageUrl_2 && (
          <Image
            src={postImageUrl_2}
            alt={post.title}
            width={600}
            height={400}
            className=" rounded-xl mt-16 "
          />
        )}
        <div className="mt-4 lg:mt-8 lg:px-16 xl:px-32 sanity-text">
          {Array.isArray(post.body_2) && <PortableText value={post.body_2} />}
        </div>
        {postImageUrl_3 && (
          <Image
            src={postImageUrl_3}
            alt={post.title}
            width={600}
            height={400}
            className=" rounded-xl mt-16 "
          />
        )}
        <div className="mt-4 lg:mt-8 lg:px-16 xl:px-32 sanity-text">
          {Array.isArray(post.body_3) && <PortableText value={post.body_3} />}
        </div>
        <ContactBtn className="lg:self-start lg:mx-16 xl:mx-32 " />
      </div>
    </main>
  );
}
