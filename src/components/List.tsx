import * as React from 'react'
import { SimplePlace } from '../interfaces/place'

type Props = {
  items: SimplePlace[]
}

const List = ({ items }: Props) => (
  <div>
    {
      items.map((item) => (
        <div>
          <h2>{item.description ?? 'Erro'}</h2>
          <ul>
            <li>
            { item.note}
            </li>  
          </ul> 
        </div>
      ))
    }
  </div>
)
  

export default List
