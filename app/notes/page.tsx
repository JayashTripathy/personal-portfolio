import React from 'react'
import { allNotes  } from "content-collections";

type Props = {}

function page({}: Props) {

  console.log(allNotes, "jkediawso")
  return (
    <div>
       <ul>
      {allNotes.map((post) => (
        <li key={post._meta.path}>
          <a href={`/posts/${post._meta.path}`}>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
          </a>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default page