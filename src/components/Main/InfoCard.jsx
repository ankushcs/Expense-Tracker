import React from 'react'

const InfoCard = () => {

    const isIncome = Math.round(Math.random())

  return (
    <div style={{
        textAlign : 'center',
        padding : "0 10%"
    }}>
        Try saying<br/>
        Add {isIncome ? "Income " : "Expense "} 
        of {isIncome ? "$110 " : "$50 "} 
        in category {isIncome ? "Business " : "House "} 
        for {isIncome ? "Monday " : "Wednesday "}..
    </div>
  )
}

export default InfoCard