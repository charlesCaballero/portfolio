import Circles from "@/components/Circles";

export default function Home() {
  return (
    <main className="h-screen p-10">
      <div className="text-left pt-60 z-50 relative">
        <article className="m-auto w-1/2">
          <p className="font-medium text-2xl text-slate-600 tacking-wide">
            Hi! My name is
          </p>
          <h1 className="font-black text-[70px] tracking-wider text-blue-900">
            Charles Caballero.
          </h1>
          <h1 className="font-bold text-[45px] tracking-wide text-gray-600">
            I design, build, and deploy web apps.
          </h1>
          <p className="text-lg py-5">
            I'm a full stack developer passionate in building user-friendly,
            elegant, and amazing web applications.
          </p>
        </article>
      </div>
      <Circles>
        <Circles.Gradient
          radius={"xl"}
          gradientDirection="bottom"
          opacity="opacity-[0.2]"
          position={"bottom-[-350px] left-[-300px]"}
        />
        <Circles.Gradient
          radius={"lg"}
          gradientDirection="bottom"
          position={"right-[-200px] bottom-[-550px]"}
        />
        <Circles.Gradient
          radius={"md"}
          gradientDirection="left"
          position={"left-[-150px] top-[-180px]"}
        />
        <Circles.Gradient
          radius={"sm"}
          gradientDirection="left"
          opacity="opacity-[0.5]"
          position={"right-[150px] top-1/4"}
        />
      </Circles>
    </main>
  );
}
