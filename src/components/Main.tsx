import {ChevronLeft, ChevronRight, Play} from 'lucide-react';
import {BoxCart} from "./BoxCart";
import {Cart} from "./Cart";

export function Main() {
    return (
        <main className="flex-1 p-6">
          <div className=" flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1  hover:text-green-500">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1  hover:text-green-500">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10 mb-5">Good Afternoon</h1>

          <div className=" grid grid-cols-3 gap-4">
            <BoxCart/>
            <BoxCart/>
            <BoxCart/>
            <BoxCart/>
            <BoxCart/>
            <BoxCart/>
          </div>

          <h2 className="font-semibold text-2
          xl mt-10">Mede for Diego Shell Fernandes
          </h2>
          
          <div className="grid grid-cols-8 gap-4 mt-4">
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
          </div>

        </main>
      
    )
}