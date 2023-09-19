
import { useRouter } from 'next/router'

export default function Room() {

    const router = useRouter()
    console.log(router.query.room);

  return (
    <h1>sdfghj</h1>
  );
}


