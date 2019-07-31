import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const InfiniteScroll = ({
  dataSource,
  children,
}) => {
  const handleOnScroll = useCallback(() => {
    console.log('scroll');
  }, []);
  return (
    <div
      onScroll={handleOnScroll}
    >
      {
        typeof children === 'function'
          ? dataSource.map(children)
          : children
      }
    </div>
  );
};

InfiniteScroll.propTypes = {
  dataSource: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
  ]),
};

InfiniteScroll.defaultProps = {
  dataSource: [],
};

export default InfiniteScroll;
