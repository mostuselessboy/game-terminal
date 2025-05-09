import AnimatedCube from "./animated-cube"
import TelegramBlock from "./telegram-block"
import LightningBlock from "./lightning-block"
import SequenceAnimation from "./sequence-animation"

export default function ReimaginedCombinedCards() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4  text-white">
      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-[2rem] md:gap-y-[1rem] xl:gap-[3rem] xl:gap-y-[2.5rem] 2xl:gap-[1.5rem] 2xl:gap-y-[4rem] max-w-[1050px] w-full">
        {/* Top row becomes first two items stacked on mobile */}
        <div className="mx-auto w-full flex justify-center h-[176px] md:h-auto">
          <SequenceAnimation />
        </div>
        <div className="mx-auto w-full flex justify-center h-[229px] md:h-auto">
          <AnimatedCube />
        </div>

        {/* Bottom row becomes next two items stacked on mobile */}
        <div className="mx-auto w-full flex justify-center h-[192px] md:h-auto">
          <LightningBlock />
        </div>
        <div className="mx-auto w-full flex justify-center h-[202px] md:h-auto">
          <TelegramBlock />
        </div>
      </div>
    </main>
  )
}
