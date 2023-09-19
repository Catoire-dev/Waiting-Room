import useSWR from "swr";
import { API_BASE_URL, FETCHER } from "@/shared/api";

export default function MedAdmin() {
  const { data, error } = useSWR(`${API_BASE_URL}/waiting-rooms`, FETCHER);
  console.log(data);

  return (
    <main>
      <h1>Rendez-vous de la journée :</h1>
      <div class="container mt-5">
        <h1 class="text-center">Liste de Rendez-vous</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Prénom</th>
              <th scope="col">Numéro de Sécurité Sociale</th>
              <th scope="col">Clé de Sécurité Sociale</th>
              <th scope="col">Numéro de Consultation</th>
            </tr>
          </thead>
          <tbody id="rendezvous-list"></tbody>
        </table>
        <div class="text-center">
          <button class="btn btn-primary" id="send-button">
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
