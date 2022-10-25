import Link from 'next/link';
import React from 'react'

export default function Button({title, link}) {
  return (
    <div>
      <Link href={link} className="">
        <a className="bg-bluelight p-3 text-blueindigo hover:text-white hover:bg-blueindigo rounded-lg hover:transition duration-300">
          {title}
        </a>
      </Link>
    </div>
  );
}
