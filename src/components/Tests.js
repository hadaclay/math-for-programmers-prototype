import React from 'react';
import PropTypes from 'prop-types';

const testStatus2Icon = status => {
  switch (status) {
    case 'failed':
      return 'times';
    case 'passed':
      return 'check';
    default:
      return 'cog';
  }
};

const testStatus2Color = status => {
  switch (status) {
    case 'failed':
      return 'red';
    case 'passed':
      return 'green';
    default:
      // Dark Grey
      return '#939393';
  }
};

const Tests = ({ tests }) => {
  const testsMsgs = tests.map((x, i) => {
    return (
      <div className='test' key={i}>
        <i
          aria-hidden='true'
          className={`fa fa-${testStatus2Icon(x.status)}`}
          style={{
            color: testStatus2Color(x.status)
          }}
        />
        <p dangerouslySetInnerHTML={{ __html: x.message }} key={i} />
      </div>
    );
  });

  return (
    <div className='Tests'>
      {tests.every(t => t.status === 'passed') ? (
        <h2>
          <i aria-hidden='true' className={'fa fa-check'} />
          All Tests Passed
        </h2>
      ) : null}
      {testsMsgs}
    </div>
  );
};

Tests.propTypes = {
  tests: PropTypes.array
};

export default Tests;
