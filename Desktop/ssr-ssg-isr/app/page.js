import Image from "next/image";
import { myid } from "./mydata/datastore";
import Link from "next/link";

export default async function Home() {
  // let data = await fetch('https://api.vercel.app/blog')
  // let posts = await data.json()
  return (
    // <ul>
    //   {posts.map((post) => (
    //     <li key={post.id}>{post.title}</li>
    //   ))}
    // </ul>
    <div>
      this is SSR and SSG Page
      {
        myid && myid.map(id =>{
          return (
            <div key={id}>
              <Link href={`/dept/${id}`}> {id}</Link>

            </div>
          )
        })
      }
    </div>
  )
}
