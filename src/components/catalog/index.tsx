import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { IProducts } from '../../store/modules/cart/types';
import CatalogItem from '../catalogItem';

const Catalog: React.FC = () => {
 const [catalog, setCatalog] = useState<IProducts[]>([])

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data)
    })
  }, [])

  return (
    <main>
    <h1>Catalog</h1>

    {catalog.map(item => (
      <CatalogItem key={item.id} product={item}/>
    ))}

    </main>
  )
}

export default Catalog;