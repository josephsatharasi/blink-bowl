import { useState } from 'react';
import { ImageSkeleton } from './Skeleton';
import { FaImage } from 'react-icons/fa';

const ImageWithSkeleton = ({ src, alt, className = '', skeletonClassName = '' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Better fallback with gradient
  const FallbackImage = () => (
    <div className={`${className} bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center`}>
      <div className="text-center">
        <FaImage className="text-6xl text-blue-300 mx-auto mb-2" />
        <p className="text-sm text-gray-500 font-medium">SchoolMart</p>
      </div>
    </div>
  );

  if (hasError) {
    return <FallbackImage />;
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0">
          <ImageSkeleton className={skeletonClassName || className} />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </div>
  );
};

export default ImageWithSkeleton;
