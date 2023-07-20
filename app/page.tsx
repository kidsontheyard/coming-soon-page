import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<div className="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center px-5 bg-my_bg_image">
    <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-60"></div>

    <div className="z-50 flex flex-col justify-center text-white w-full h-screen">
        <h1 className="text-5xl">We are <b>Almost</b> there!</h1>
        <p>Stay tuned for something amazing!!!</p>

        <div className="mt-10 mb-5">
            <div className="shadow w-full bg-white mt-2 max-w-2xl mx-auto rounded-full">
                <div className="rounded-full bg-indigo-600 text-xs leading-none text-center text-white py-1 w-3/4 " >75%</div>
            </div>
        </div>
    </div>

</div>
    </main>
  )
}
