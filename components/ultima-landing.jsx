import Hipnoza from "./hipnoza"
import { VindecareSpiritualaTehniciStravechi } from "./vindecare-spirituala-tehnici-stravchi"

export const CeEsteVindecareaLanding = () => {
    return (
        <div className="max-w-6xl mx-auto bg-zinc-500/10 rounded shadow-md flex justify-center items-center min-h-[50vh] border flex-col p-10">
            {/* <div className="flex gap-y-3 flex-col justify-center items-center">
                <h1 className="text-2xl font-bold text-center">Ce este vindecarea spirituala?</h1>
                <p className="max-w-4xl text-center px-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga at a facere maxime dolor nobis eaque quasi repudiandae sequi voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi nobis hic voluptates nam sequi aliquid laboriosam earum, ab, atque facilis distinctio iure est itaque? Ullam cupiditate fugiat sequi. Accusantium, porro necessitatibus explicabo ut consequuntur libero nam dignissimos eius. Quas!</p>
            </div> */}
            <div className="bg-[url('/hipnoza-home.jpeg')] bg-cover bg-center bg-no-repeat w-full flex items-center justify-center p-20">
                <h1 className="text-4xl font-bold text-white">Ce este vindecarea spirituala?</h1>
            </div>
            <VindecareSpiritualaTehniciStravechi />
            <Hipnoza />
        </div>
    )
}