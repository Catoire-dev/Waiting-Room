import useSWR from "swr";
import { API_BASE_URL, FETCHER } from "@/shared/api";
import { useSearchParams } from "next/navigation";

export default function MedAdmin() {
  const { data, error } = useSWR(`${API_BASE_URL}/waiting-rooms/A`, FETCHER);
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
          <button className="btn btn-primary" id="send-button">
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
