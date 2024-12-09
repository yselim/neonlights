import Image from "next/image";
import Link from "next/link";
import SearchBar from "./searchBar";

export default function AppBar() {
  return (
    <div className="flex flex-col border ">
      <div className="flex border gap-3 pt-4 pb-4">
        <Link href={"/"} className="mr-10">
          <Image src="/logo.png" alt="logo of the app" width={40} height={40} />
        </Link>

        <SearchBar />
        <div className="flex-1"></div>
        <div className="">Sign In</div>
        <div className="">Register</div>
      </div>
      <div className="flex border justify-between">
        <div>gündem</div>
        <div>debe</div>
        <div>sorunsallar</div>
        <div>#spor</div>
        <div>#ilişkiler</div>
        <div>#yaşam</div>
        <div>...</div>
        <div></div>
      </div>
    </div>
  );
}
