import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

const Image = ({ placeholderImg, src, errorImg, ...props}) => {
  const [imgSrc, setSrc] = React.useState(placeholderImg || src);

  const onLoad = useCallback(() => {
    setSrc(src);
  }, [src]);

  const onError = useCallback(() => {
    setSrc(errorImg || placeholderImg);
  }, [placeholderImg, errorImg]);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.addEventListener('load', onLoad);

    img.addEventListener('error', onError);

    return () => {
      img.removeEventListener('load', onLoad);
      img.removeEventListener('error', onError);
    }
  }, [src, onLoad]);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img src={imgSrc} {...props} />
  );
};

Image.propTypes = {
  placeholderImg: PropTypes.string,
  src: PropTypes.string.isRequired,
  errorImg: PropTypes.string
}

Image.defaultProps = {
  placeholderImg: 'https://placehold.it/350x150',
  errorImg: 'https://placehold.it/350x150'
};