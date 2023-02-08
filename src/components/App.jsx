import userData from '../user.json';
import statisticsData from '../data.json';
import friendListData from '../friends.json';
import transactionsData from '../transactions.json';
import ProfileDetails from './Profile/ProfileDetails';
import StatDetails from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <div>
      <ProfileDetails
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      
      <StatDetails title="Upload stats" stats={statisticsData} />
      <StatDetails stats={statisticsData} />

      <FriendList friends={friendListData} />;

      <TransactionHistory items={transactionsData} />;
      
    </div>
  );
};
