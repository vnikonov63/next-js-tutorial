import React from "react";
import Link from "next/link";

function Pages() {
  return (
    <div>
      <h1>Index Page</h1>
      <Link href="/notes">
        <a>Link to the list of all notes</a>
      </Link>
    </div>
  );
}

export default Pages;
