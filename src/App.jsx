import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './social-profile/user.json';
import statisticalData from './statistics/statistical-data.json';
import friends from './friend-list/friends.json';
import transactions from './transaction-history/transactions.json';

import "./App.css"

function App() {
    return <div className="container">
        <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </div>
}

export default App