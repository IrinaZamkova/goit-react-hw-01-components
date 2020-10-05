import React from "react";
import Profile from "./profile-component/profiles";
import user from "./profile-component/profile.json";
import Statistics from "./statistic-component/statistics";
import statisticalData from "./statistic-component/statistics.json";
import FriendList from "./friends-components/friendsList";
import friends from "./friends-components/friends.json";
import transactions from "./transaction-components/transactions.json";
import TransactionHistory from "./transaction-components/transactions";

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />,
    </>
  );
}

export default App;
