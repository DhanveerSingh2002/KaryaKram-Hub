import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-[#0a1421] py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8"> 
            <h1 className="h1-bold text-violet-600 font-bold">
              Welcome to KaryaKram-Hub: <b className="text-4xl sm:h1-bold">Events for you, by you.</b>
            </h1>
            <p className="md:p-regular-24 p-regular-20 text-violet-400">
              Effortlessly orchestrate unforgettable experiences. Trusted by 8000+ event organizers.
            </p>
            <Button size="lg" asChild className="button w-fit">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>
          <Image className="max-h-[70vh] md:ml-8 mt-4 md:mt-0 border-transparent rounded-3xl object-contain object-center " src = "/main.jpg" width={1000} height={1000} alt="logo" />
        </div>
      </section> 
      <section id="events" className="wrapper my-8 text-violet-400 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Attend Events Worldwide. Invite people to your own.</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search
          CategoryFilter
        </div>
      </section>
    </>
  );
}
