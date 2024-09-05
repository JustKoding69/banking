import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutBox'

const TotalBalanceBox = ({accounts=[], totalBanks, totalCurrentBalance}:TotlaBalanceBoxProps) => {
  return (
      <section className='total-balance'>
          <div className='total-balance-chart'>
              {/* DoughnutChart */}
              <DoughnutChart accounts={accounts}/>
          </div>
          <div className="flex flex-col gap-6">
              <div className="header-2">
                  Bank Accounts: {totalBanks}
              </div>
              <div className="flex flex-col gap-2">
                  <p className="total-balance-label">
                      Total Current Balance
                  </p>
                  <div className="total-balance-amount flex-center gap-2">
                      <AnimatedCounter amount={totalCurrentBalance} />
                  </div>
              </div>
          </div>
          
      </section>
  )
}

export default TotalBalanceBox