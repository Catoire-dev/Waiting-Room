
import { useRouter } from 'next/router'

import useSWR from "swr";
import { API_BASE_URL, FETCHER } from "@/shared/api";
import { GenerateCscFile } from '@/pages/manage/[room]/GenerateCsvFile';
import { downloadOneFile } from '@/pages/manage/[room]/file';
import { FormatRdvList, FormatRdvOne } from './FormatRdvList';

export default function Room() {

    const {room} = useRouter().query;


    const { data, error } = useSWR(`${API_BASE_URL}/waiting-rooms/${room ? room.toUpperCase() : "xxx"}`, FETCHER);

    

    if (error) return <div>Erreur lors du chargement des patients</div>;
    if (!data) return <div>Chargement...</div>;


 
  return (
    <main>

      <h1>Rendez-vous de la journée :</h1>
      <div className="container mt-5">
        <h1 className="text-center">Liste de Rendez-vous</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nom Prénom</th>
              <th scope="col">Numéro de Sécurité Sociale</th>
              <th scope="col">Numéro de Consultation</th>
              <th scope="col">Téléchargement</th>
            </tr>
          </thead>
          <tbody id="rendezvous-list">
            {data && data.length > 0 ? (
              data.map((dataItem, index) => (
                <tr key={index}>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.noSS}</td>
                  <td>{dataItem.reference}</td>
                  <td>
                    <button onClick={(e) => downloadOneFile(FormatRdvOne(dataItem))}>Télécharger</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Aucun rendez-vous trouvé.</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="text-center">
          {<GenerateCscFile data={FormatRdvList(data)} />}

        </div>
      </div>
    </main>
  );
}
