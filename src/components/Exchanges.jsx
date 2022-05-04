import React from 'react'

import { useGetExchangesQuery } from '../services/cryptoApi';

const Exchanges = () => {
  const { data: cryptoExchanges, isFetching } = useGetExchangesQuery();
  
  return (
    <div>Exchanges</div>
  )
}

export default Exchanges