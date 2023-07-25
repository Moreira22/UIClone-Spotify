import { Home as HomeIcon, Search, Library } from 'lucide-react';
export function Nav() {
    return (
        <>

            <nav className="space-y-5 mt-10 ">
                <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200  hover:text-green-500">
                    <HomeIcon />
                    Home
                </a>
                <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200  hover:text-green-500">
                    <Search />
                    Search
                </a>
                <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200  hover:text-green-500">
                    <Library />
                    You Library
                </a>
            </nav>
            <nav className="mt-6 pt-6 border-t border-zinc{1200 flex flex-col gap-3">
                <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">My Playlist</a>
                <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hits Brasil</a>
                <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</a>
                <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Funk</a>
                <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Pagode</a>
            </nav>
        </>
    )
}