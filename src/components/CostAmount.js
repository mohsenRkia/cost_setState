import React from 'react'
import './CostAmount.css'

const CostAmount = (props) => {
  return (
    <div>
        <div className='cost-amount'>{props.amount}</div>
    </div>
  )
}

export default CostAmount