import { HeaderBox } from "@/components/headerBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import Image from "next/image";

export default function Home() {
  const loggedIn = {firstName:"Mrigendra", lastName:"Prasad", email: "prasad@gmail.com"};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            title="Welcome" 
            type="greeting"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your accounts and transactions efficiently."
          />
        </header>
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1234.56}
        />
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{}, {}]}
      />
    </section>
  );
}
