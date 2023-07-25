import { Play} from 'lucide-react';

export function BoxCart() {
    return (
        <div className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <img src="/albun2.jpg" width={104} height={120} alt='Capa do álbum' />
              <strong>DELUXE</strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </div>
    )
}