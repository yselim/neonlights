// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-green-100 py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">EksiSozluk Clone</h1>
      <nav className="space-x-4 justify-items-center allign-centre">
        <Link href="/">Agendartfsg</Link>
        <Link href="/">Debe</Link>
        <Link href="/">#spor</Link>
        <Link href="/">#ilişkiler</Link>
      </nav>
    </header>
  );
}
