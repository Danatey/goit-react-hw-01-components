import Profile from './components/Profile';
import Statistics from './components/Statistics';

import user from './social-profile/user.json';
import statisticalData from './statistics/statistical-data.json';

function App() {
    return <div>
        <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />;
        <Statistics stats={statisticalData} />;
    </div>
}

export default App