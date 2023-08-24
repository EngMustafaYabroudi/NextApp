import Link from "next/link";
export default function Navbar() {
return <div>
    <Link href={'/'}>Home</Link>
    <Link href={'/about'}>about</Link>
    <Link href={'/about/us'}>about us</Link>
    <Link href={'/about/someone'}>about SomeOne</Link>
    <Link href={'/listofposts'}>List Of Posts</Link>
</div>
}