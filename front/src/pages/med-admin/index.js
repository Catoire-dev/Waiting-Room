'use client'
import { GenerateCscFile } from "./GenerateCsvFile";

export default function MedAdmin() {
const data = [
    '11111;Nom;Premon;Cle;Code',
    '22222;Nom;Premon;Cle;Code',
    '33333;Nom;Premon;Cle;Code',
    '44444;Nom;Premon;Cle;Code',
    '55555;Nom;Premon;Cle;Code'
]

    return (
        <main>
            <h1>Rendez-vous de la journée :</h1>
            <GenerateCscFile data={data} />
        </main>
    );
  }