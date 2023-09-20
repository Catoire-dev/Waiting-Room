import { useRouter } from 'next/router'
import useSWR from "swr";
import { API_BASE_URL, FETCHER } from "@/shared/api";
import { GenerateCscFile } from '@/pages/manage/[room]/GenerateCsvFile';
import { downloadOneFile } from '@/pages/manage/[room]/file';
import { rdvFormatList, rdvFormatOne } from './rdvList';
import { getWaitingRoomColor } from '@/shared/colors';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Room() {
  const { room } = useRouter().query;
  const { data, error } = useSWR(`${API_BASE_URL}/waiting-rooms/${room ? room.toUpperCase() : 'xxx'}`, FETCHER);
  const [roomColor, setRoomColor] = useState(getWaitingRoomColor(room ? room.toUpperCase() : ''));

  useEffect(() => {
    setRoomColor(getWaitingRoomColor(room ? room.toUpperCase() : ''))
  }, [room])

  if (error) return <div>Erreur lors du chargement des patients</div>;
  if (!data) return <div>Chargement...</div>;

  return (
    <main id='box'>
      <section className={'box ' + roomColor}>
        <Link href={'/manage'}>Retour</Link>
        <p id='room-box' >Salle {room ? room.toUpperCase() : ''}</p>
      </section>
      <div className="container mt-5">
        <h1 className="text-center mb-5">Liste de Rendez-vous De la Journée</h1>
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
                    <button className="btn btn-outline-success"  onClick={(e) => downloadOneFile(rdvFormatOne(dataItem))}>Télécharger</button>
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
          <GenerateCscFile data={rdvFormatList(data)} />
        </div>
      </div>
    </main>
  );
}
