const Skeleton = ({ className = '', variant = 'rectangular' }) => {
  const baseClasses = 'animate-pulse bg-gray-300';
  
  const variantClasses = {
    rectangular: 'rounded',
    circular: 'rounded-full',
    text: 'rounded h-4',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}></div>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <Skeleton className="w-full h-72" />
      <div className="p-5 space-y-3">
        <Skeleton className="w-24 h-4" />
        <Skeleton className="w-full h-6" />
        <Skeleton className="w-3/4 h-6" />
        <div className="flex justify-between items-center mt-4">
          <Skeleton className="w-20 h-8" />
          <Skeleton className="w-12 h-12" variant="circular" />
        </div>
      </div>
    </div>
  );
};

export const ImageSkeleton = ({ className = '' }) => {
  return <Skeleton className={className} />;
};

export default Skeleton;
