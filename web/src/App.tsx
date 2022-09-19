import "./styles/main.css";
import { MagnifyingGlassPlus } from "phosphor-react";

import logoImg from "./assets/Logo.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
        <img src={logoImg} />

        <h1 className="text-6xl text-white font-black mt-20">
          Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui.
        </h1>

        <div className="grid grid-cols-6 gap-6 mt-16">
            <a href="" className="relative rounded-lg overflow-hidden">
              <img src="./game1.png"/>

              <div className="w-full pt-16 pb-4 px-4 bg-game-grandient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white">League of Legends</strong>
                <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
              </div>
            </a>

            <a href="" className="relative rounded-lg overflow-hidden">
              <img src="./game2.png"/>

              <div className="w-full pt-16 pb-4 px-4 bg-game-grandient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white">Dota 2</strong>
                <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
              </div>
            </a>

            <a href="" className="relative rounded-lg overflow-hidden">
              <img src="./game3.png"/>

              <div className="w-full pt-16 pb-4 px-4 bg-game-grandient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white">Couter Strike</strong>
                <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
              </div>
            </a>

            <a href="" className="relative rounded-lg overflow-hidden">
              <img src="./game4.png"/>

              <div className="w-full pt-16 pb-4 px-4 bg-game-grandient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white">Apex Legend</strong>
                <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
              </div>
            </a>

            <a href="" className="relative rounded-lg overflow-hidden">
              <img src="./game5.png"/>

              <div className="w-full pt-16 pb-4 px-4 bg-game-grandient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white">Fortnite</strong>
                <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
              </div>
            </a>

            <a href="" className="relative rounded-lg overflow-hidden">
              <img src="./game6.png"/>

              <div className="w-full pt-16 pb-4 px-4 bg-game-grandient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white">World of Warcraft</strong>
                <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
              </div>
            </a>
        </div>

        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">

          <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">

            <div>
                <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
                <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
            </div>

            <button className="py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded flex items-center gap-3">
              <MagnifyingGlassPlus size={24} />
              Publique o anúncio
            </button>

          </div>

        </div>
    </div>
  )
}

export default App
