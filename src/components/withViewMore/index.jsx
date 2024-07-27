import { useState } from 'react';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import './index.scss';

const withViewMore = (WrappedComponent) => {
  return (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleView = () => setIsExpanded(!isExpanded);

    return (
      <div className="view-more-container">
        {isExpanded ? (
          <>
            <WrappedComponent {...props} />
            <div onClick={toggleView} className="view-more-button">
              <span>View less</span>
              <ArrowDropUpIcon />
            </div>
          </>
        ) : (
          <div onClick={toggleView} className="view-more-button">
            <span>View more</span>
            <ExpandCircleDownIcon />
          </div>
        )}
      </div>
    );
  };
};

export default withViewMore;
