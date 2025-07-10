import Image from "next/image";
import {Client} from "./client";
import { Suspense } from "react";
import { dehydrate,HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient,trpc } from "@/trpc/server";

const Page = async () => {
const queryClient = getQueryClient();
const a = await queryClient.prefetchQuery(trpc.createAI.queryOptions({text:"Enock Prefetch"}));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading...</div>}>
    <Client />
    </Suspense>
    </HydrationBoundary>


    
  );
  
}
export default Page;
