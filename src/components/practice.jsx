import Link from 'next/link';



export default function Header(){
return(
<header>
<h1 className="text-xl font-bold">eksisozluk</h1>
<nav  className="space-x-4">
        <Link href="/">Agenda</Link>
        <Link href="/">Debe</Link>
        <Link href="/">#spor</Link>
        <Link href="/">#ilişkiler</Link>
</nav>


</header>
);
}