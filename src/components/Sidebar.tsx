import { Home as HomeIcon, Search, Library } from 'lucide-react';
import { Nav } from './Nav';


export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <Nav />
    </aside>
  )
}