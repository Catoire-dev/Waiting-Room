import useSWR from "swr";

import { API_BASE_URL, FETCHER } from "@/shared/api";
import { rdvFormatList } from "./rdvList";

export default function MedAdmin() {
  const { data, error } = useSWR(`${API_BASE_URL}/waiting-rooms`, FETCHER);

  const rdvFormatedList = data ? rdvFormatList(data) : [];
  
  return (
    <main>
      <h1>Rendez-vous de la journée :</h1>
      <button>click </button>
    </main>
  );
}
