import React, { Suspense, useState } from "react";
const AccountsSummary = React.lazy(() =>
  import("accountsummaryappremote/DashboardEC2")
);

const handleAccountSelected = (description) => {
  setSelectedAccount(description);
};

const Home = () => {
  let [selectedAccount, setSelectedAccount] = useState('vuoto');


  return (
    <>
      <Suspense fallback={<h1>Error while loading Dashboard EC2</h1>}>
        <AccountsSummary label='setup' onAccountSelected={handleAccountSelected} />
      </Suspense>
    </>
  );
};

export default Home;
