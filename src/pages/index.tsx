import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import List from "../components/List";
import { SimplePlace } from "../interfaces/place";
import { getPlace } from "../services/api";




const IndexPage = () => {
  const [places, setPlaces] = useState<any>([{}])

  async function get () {
    const axiosPlaces: any = await getPlace()

    const simplePlace: SimplePlace = axiosPlaces.map((place: any) => ({
      id: place.id,
      description: place.description,
      note: place.note
    }))
  
    setPlaces(simplePlace)
  }
useEffect( () => {
  get()
}, [])

  return (
    <Layout>
      <h1>Ambientes</h1>
      <hr/>
     

        <List items={places}></List>
        
        <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
}

export default IndexPage;
