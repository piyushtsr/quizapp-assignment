import React from 'react';

const ReportCard = ({ score }) => {
  return (
    <div>
      <h1>Quiz Result</h1>
      <p>You scored {score} out of 10</p>
    </div>
  );
};

export default ReportCard;