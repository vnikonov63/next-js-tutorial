import React from "react";
import { useRouter } from "next/router";

function Page() {
  const router = useRouter();

  const { params } = router.query;
  console.log(params);

  return <div>Params</div>;
}

export default Page;
