import { Book } from "lucide-react";
import Link from "next/link";

export default function DespreMine() {
  return (
    <div className="bg-[url('/despre-mine-text.jpg')] bg-cover text-white py-12">
      {/* <section className="bg-[url('https://images.unsplash.com/photo-1530049478161-0780526964f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] h-[17vh] flex justify-center items-center text-white">
        <h1 className="text-5xl text-white font-bold">Despre mine</h1>
      </section> */}
      <section className="mt-14">
        <div className="max-w-6xl mx-auto">
          <p>Aurelia-Daniela Stănciulescu este:</p>
          <ul className="list-disc list-inside">
            <li>
              psihoterapeut în supervizare în specializarea Hipnoterapie
              integrativă, acreditat de Asociația de Cercetare, Consiliere și
              Pihoterapie Integrativă ACCPI și Colegiul Psihologilor din România
            </li>
            <li>
              practician șamanic, certificat prin International and Online
              College of the Shamanic Arts <br />
              <Link
                className="text-blue-400"
                href="https://www.shamancollege.com/finding-a-practitioner"
              >
                https://www.shamancollege.com/finding-a-practitioner
              </Link>
            </li>
            <li>
              consilier filosofic – certificat prin Asociația Americană APPA{" "}
              <br />
              <Link
                href="https://appa.edu/practitioners/#romania-counselors"
                className="text-blue-400"
              >
                https://appa.edu/practitioners/#romania-counselors
              </Link>{" "}
              <br />
              <Link
                href="https://appa.edu/practitioners/#romania-consultant"
                className="text-blue-400"
              >
                https://appa.edu/practitioners/#romania-consultant
              </Link>
            </li>
            <li>hipnoterapist– certificat Hypnovision USA</li>
            <li>consilier vocațional autorizat de Ministerul Educației</li>
            <li>
              consilier de dezvoltare personală autorizat de Ministerul
              Educației
            </li>
            <li>
              scriitor publicat <br />
              <Link
                className="text-blue-400"
                href="https://www.editions-harmattan.fr/livre-reste_ici_gabriel_roman_daniela_stanciulescu-9782343117294-53188.html"
              >
                https://www.editions-harmattan.fr/livre-reste_ici_gabriel_roman_daniela_stanciulescu-9782343117294-53188.html
              </Link>
            </li>
          </ul>
          <p className="text-justify mb-5 mt-12">
            Aurelia-Daniela Stănciulescu își propune să vină în ajutorul
            oricărei persoane interesate să-și găsească sensul existențial și să
            trăiască în armonie cu lumea și, mai ales, cu propriul sine.
          </p>
          <p className="text-justify mb-5">
            Aurelia-Daniela Stănciulescu combină în ședințele sale de vindecare
            diferite tehnici, însușite de-al lungul anilor de studiu și de lucru
            cu persoane aflate în dificultate.
          </p>
          <p className="text-justify mb-12">
            Dacă dorești o programare, te rog să completezi formularuldin sectiunea <Link href='/contact' className="font-bold">Contact</Link> . Spune-mi pe scurt ce se întâmplă cu tine și ce te-a inspirat să
            mă contactezi. Dacă este o solicitare urgentă, te rog să indici asta
            lângă numele tău (de exemplu: Alexandru Ionescu URGENT). Îndată ce o
            să observ mesajul tău, voi putea determina ce tip de serviciu e
            potrivit pentru tine.
          </p>

          <div className="flex flex-row items-center justify-center space-x-4">
            <p className="text-white/[0.5]">Curriculum Vitae: </p>
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-500/10 flex flex-row items-center justify-center space-x-2 px-8 py-2 rounded-lg shadow-xl"
            >
              <Book />
              <p className="text-white">CV</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
