import Link from "next/link";
import { type SanityDocument } from "next-sanity";



import { client } from "../sanity/client";


const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <p className="text-xl mb-4">
        Hei, jeg heter Elmir og jeg elsker planter!
      </p>

      <img
        src="https://images.squarespace-cdn.com/content/v1/514f916de4b04c6ad186e00d/1588779228945-F4WGW8ZN8X8N1KKSUCGX/STAYIN_ALIVE_PLANT.gif?format=2500w"
        alt="Plant dancing"
        style={{ width: "400px" }}
      />
    </main>
  );
}