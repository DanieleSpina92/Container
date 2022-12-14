import React, { Suspense, useState } from "react";
const AccountsSummary = React.lazy(() =>
  import("accountsummaryappremote/SetupEC2")
);

const Setup = () => {
  let [selectedAccount, setSelectedAccount] = useState(null);
  const handleAccountSelected = (accountId) => {
    setSelectedAccount(accountId);
  };
  return (
    <>
      <Suspense fallback={<h1>Error while loading Set Up EC2</h1>}>
        <AccountsSummary onAccountSelected={handleAccountSelected} />
      </Suspense>
    </>
  );
};

export default Setup;
