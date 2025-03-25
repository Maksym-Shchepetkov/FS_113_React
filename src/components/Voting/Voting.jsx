import { useState } from 'react';

const Voting = () => {
  const [votingData, setVotingData] = useState({
    android: 0,
    ios: 0,
    windows: 0,
  });
  const handleVotingClick = () => {};
  return (
    <div>
      <ul>
        <li>Android: {votingData.android}</li>
        <li>IOS: {votingData.ios}</li>
        <li>Windows: {votingData.windows}</li>
      </ul>
      <button>Android</button>
      <button>IOS</button>
      <button>Windows</button>
    </div>
  );
};
export default Voting;
