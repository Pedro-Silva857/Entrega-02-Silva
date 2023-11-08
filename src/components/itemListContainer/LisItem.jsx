import React from 'react'
import Item from '../../../../../Tienda-Funkos/src/components/Item/Item'

const LisItem = ({products}) => { 

    return (
    <div className='ListGroup'>
      {products.map(prod => <Item key={prod.id}{...prod}/>)}
    </div>
  )
}

export default LisItem
