import userData from '../data/user.json';
import PropTypes from 'prop-types';
import { Profile } from './Profile/Profile';
import { AppStyles } from './App.styled';

import data from '../data/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from '../data/friends.json';
import { FriendList } from './FriendList/FriendList';

import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <AppStyles>
      <Profile props={userData} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList dataList={friends} />
      <TransactionHistory items={transactions} />
    </AppStyles>
  );
};

App.protoTypes = {
  userData: PropTypes.array,
  data: PropTypes.array,
  friends: PropTypes.array,
  transactions: PropTypes.array,
};
