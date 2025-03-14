import Link from "next/link";

export function Header() {
  return (
    <header className="max-w-[1200px] mx-auto">
      <div className="flex justify-between content-center py-10">
        <div className="font-bold text-2xl text-primary">
          <Link href={"/"}>KOSKO TAXI</Link>
        </div>
        <nav>
          <ul className="flex gap-7 text-third font-semibold">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/posts"}>Blog</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </nav>
        <div>
        <Link href={"https://facebook.com"} target="_blank" className="py-3 px-7 bg-primary text-white rounded-md">Book Now</Link>
        </div>
      </div>
    </header>
  );
}
