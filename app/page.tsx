// we are learning here Nested Routing in this coding.

import Link from "next/link"


export default function Home() {
  return (
   
   <div>
    <h1>I am Home Page </h1>
    <br />
    <h2>below are the pages in this website</h2>
    <hr/>
    <Link href="/products">
    
    </Link>
    <br />
    <Link href="/catogery/crypto">I am crypto page</Link>
    <br />
    <Link href="/sports">I am Sports page</Link>
    <br />
    <Link href="/products/product1">If you want direct link to Product1, Please click here</Link>
    <br />
   </div> 
  )

}