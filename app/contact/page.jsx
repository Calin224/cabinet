import { Separator } from "@/components/ui/separator";
import { Home, HomeIcon, Mail, Phone } from "lucide-react";
import Map from "@/components/map";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="bg-[url('/contact-1.jpg')] bg-cover bg-center ">
      <section class="text-white">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-12 text-4xl tracking-tight font-extrabold text-center">
            Formular de contact
          </h2>
          <form action="#" class="space-y-8">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium ">
                Nume
              </label>
              <input
                name="nume"
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="numele tau..."
                required
              />
            </div>
            <div>
              <label for="subject" class="block mb-2 text-sm font-medium ">
                Prenume
              </label>
              <input
                name="prenume"
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="prenumele tau..."
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium">
                Adresa ta de email
              </label>
              <input
                name="email"
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="adresa ta de email..."
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium ">
                Mesaj
              </label>
              <textarea
                name="mesaj"
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="mesajul tau..."
              ></textarea>
            </div>
            <Button variant="outline" type="submit" className="text-black">
              Send message
            </Button>
          </form>

          <div className="my-10">
            <Separator />
          </div>

          <div className="flex gap-x-2 justify-between">
            <div className="flex gap-x-2">
              <HomeIcon />
              Bloc 12, Strada Popa Șapcă 12, Craiova 200417
            </div>
            <div className="flex gap-x-2">
                +40 749 087 208
                <Phone />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
