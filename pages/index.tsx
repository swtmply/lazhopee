import { NavBar } from "@/components/navigation/NavBar";

export default function Home() {
  return <>
    <main>
      <div className="mx-14 my-2.5">
        <NavBar />
        <div className="m-28">
          <div className="grid grid-cols-2 gap-2 w-685 h-480">
            <div className="col-span-1 space-y-14">
              <div className="w-3/4 space-y-14">
                <h1 className="text-9xl">
                  float in space.
                </h1>
                <p>From spacesuit to oxygen tank. We got it all for you.</p>
              </div>
              <div className="px-4 py-2 bg-slate-950 text-slate-100 w-fit">SHOP NOW</div>
            </div>

            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
    </main>
  </>

}
