import Image from 'next/image'
import Link from 'next/link'
export default async function HomePage() {
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h2 className="mb-4 text-2xl font-bold">Home Page</h2>
      <div className="rounded-lg border p-4 shadow-sm">
        <Image src="/home_page_image.png" alt="Home Page Image" width={600} height={300} />
        {/* Little navbar under the image */}
        <nav className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/plants"
            className="rounded-full border px-4 py-2 text-sm font-medium hover:bg-gray-100"
          >
            🌿 Plants
          </Link>
          <Link
            href="/merch"
            className="rounded-full border px-4 py-2 text-sm font-medium hover:bg-gray-100"
          >
            🛍️ Merch
          </Link>
        </nav>
      </div>
    </main>
  )
}

// <main className="container mx-auto min-h-screen max-w-3xl p-8">
//   <p className="mb-4 text-xl">Hei, jeg heter Elmir og jeg elsker planter!</p>

//   <h2 className="mb-4 text-2xl font-bold">Plant Collection</h2>

//   <ul className="space-y-6">
//     {plants.map((plant: any) => (
//       <li key={plant._id} className="rounded-lg border p-4 shadow-sm">
//         {plant.imageUrl && (
//           <img
//             src={plant.imageUrl}
//             alt={plant.name}
//             className="mb-3 h-48 w-full rounded-md object-cover"
//           />
//         )}

//         <h3 className="text-xl font-semibold">{plant.name}</h3>
//         <p className="text-gray-700">{plant.description}</p>
//       </li>
//     ))}
//   </ul>
// </main>
