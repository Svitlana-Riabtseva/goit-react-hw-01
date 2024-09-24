import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import '/src/App.css';
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import Transactionhistory from "./components/Transactionhistory/Transactionhistory";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json"


function App() {
  return (
    <>
      <div>
      <h2>Work 1</h2>
          <Profile
            key={userData.tag}
            username={userData.username}
            tag={userData.tag}
            location={userData.location}
            avatar={userData.avatar}
            stats={userData.stats} />
      </div>

      <div>
        <h2>Work 2</h2>
        <FriendList friends={friends} />
      </div>

      <div>
        <h2>Work 3</h2>
          <>
            <Transactionhistory transactions={transactions} />
          </>
      </div>
    </>
    )
}


  export default App;