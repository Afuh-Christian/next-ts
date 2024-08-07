"use client"
import BasicList from "@/components/BasicList";
import { Counter } from "@/components/Counter";
import Navbar from "@/components/Navbar";
import TemporaryDrawer from "@/components/TemporaryDrawer";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <>
<Counter/>
<div>Hello</div>
<div onClick={()=>router.push("/about")}>
  About
</div>
{/* <div className="flex flex-col">
<Link href="/about">about</Link>
<Link href="/products">products</Link>
<Link href="/services">services</Link>
</div> */}



<Navbar/>



   </>
  );
}
