import { useState } from 'react';

const Voting = () => {
  const [votingData, setVotingData] = useState({
    linux: 0,
    macos: 0,
    windows: 0,
  });

  const handleVotingClick = option => {
    setVotingData({
      ...votingData,
      [option]: votingData[option] + 1,
    });
    // SOLID DRY KISS YAGNI
    // if (option === 'windows') {
    //   setVotingData({
    //     ...votingData,
    //     windows: votingData.windows + 1,
    //   });
    // }
    // if (option === 'macos') {
    //   setVotingData({
    //     ...votingData,
    //     macos: votingData.macos + 1,
    //   });
    // }
    // if (option === 'linux') {
    //   setVotingData({
    //     ...votingData,
    //     linux: votingData.linux + 1,
    //   });
    // }
    console.log(option);
  };

  return (
    <div>
      <ul>
        <li>linux: {votingData.linux}</li>
        <li>MacOS: {votingData.macos}</li>
        <li>Windows: {votingData.windows}</li>
      </ul>
      <button onClick={() => handleVotingClick('linux')}>linux</button>
      <button onClick={() => handleVotingClick('macos')}>macos</button>
      <button onClick={() => handleVotingClick('windows')}>Windows</button>
    </div>
  );
};
export default Voting;
