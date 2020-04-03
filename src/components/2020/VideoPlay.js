import React, { useCallback, useState, cloneElement, Fragment } from 'react';
import PropTypes from 'prop-types';
import ModalVideo from 'react-modal-video';


const VideoPlay = ({ videoId, children, ...rest }) => {
  const [visible, setVisible] = useState(false);
  const handleClick = useCallback(() => {
    setVisible((state) => !state);
  }, []);

  const clone = cloneElement(
    children,
    {
      onClick: handleClick,
      ...rest
    }
  );

  return (
    <Fragment>
      {clone}
      <ModalVideo
        channel="youtube"
        autoplay={visible}
        isOpen={visible}
        videoId={videoId}
        onClose={handleClick}
      />
    </Fragment>
  );
};

VideoPlay.defaultProps = {
  videoId: 'AlU5h2xrQ5M',
};

VideoPlay.propTypes = {
  videoId: PropTypes.string,
  children: PropTypes.node.isRequired
};


export default VideoPlay;