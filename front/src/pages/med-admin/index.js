import { GenerateCscFile } from "./GenerateCsvFile";
import { createObjectCsvWriter } from 'csv-writer';

export default function MedAdmin() {

const data = [
    '12345;Nom;Premon;Cle;Code',
    '12345;Nom;Premon;Cle;Code',
    '12345;Nom;Premon;Cle;Code',
    '12345;Nom;Premon;Cle;Code',
    '12345;Nom;Premon;Cle;Code',
    '12345;Nom;Premon;Cle;Code'
]
  


    async function generateCSV(data) {
    // Spécifiez le nom du fichier CSV et les en-têtes de colonnes
    const csvWriter = createObjectCsvWriter({
        path: 'example.csv',
        header: [
        { id: 'id', title: 'ID' },
        { id: 'name', title: 'Nom' },
        { id: 'age', title: 'Âge' },
        // Ajoutez d'autres en-têtes de colonnes selon vos besoins
        ],
    });

    // Écrivez les données dans le fichier CSV
    await csvWriter.writeRecords(data);

    console.log('Fichier CSV généré avec succès');
    }

    // Exemple d'utilisation de la fonction
    const myData = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    // Ajoutez d'autres données à votre tableau
    ];

    generateCSV(myData);


    return (
        <main>
            <h1>Rendez-vous de la journée :</h1>
            <GenerateCscFile data={data} />
        </main>
    );
  }