import React from "react";
import { useRouter } from "next/router";

function SingleNote() {
  const router = useRouter();

  const { id } = router.query;

  return <h1>Note {id}</h1>;
}

export default SingleNote;
