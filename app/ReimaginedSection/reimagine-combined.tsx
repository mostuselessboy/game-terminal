import AnimatedCube from "./animated-cube"
import TelegramBlock from "./telegram-block"
import LightningBlock from "./lightning-block"
import SequenceAnimation from "./sequence-animation"

export default function ReimaginedCombinedCards() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 pt-10  text-white ">
      <div className="grid grid-cols-1 mx-auto w-fit gap-[1rem] md:grid-cols-2 md:gap-[4rem] md:gap-y-[1rem] xl:gap-[3rem] xl:gap-y-[2.5rem] 2xl:gap-[1.5rem] 2xl:gap-y-[4rem] max-w-[1050px] ">
        {/* Top row becomes first two items stacked on mobile */}
        <div className="mx-auto w-full flex justify-center h-[176px] md:h-auto">
          <SequenceAnimation />
        </div>
        <div className="mx-auto w-full flex justify-center h-[340px] md:h-auto ">
          <AnimatedCube />
        </div>

        {/* Bottom row becomes next two items stacked on mobile */}
        <div className="mx-auto w-full flex justify-center h-[200px] md:h-auto">
          <LightningBlock />
        </div>
        <div className="mx-auto w-full flex justify-center h-[280px] md:h-auto">
          <TelegramBlock />
        </div>
      </div>
    </main>
  )
}
