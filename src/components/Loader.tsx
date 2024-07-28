const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[400px] bg-gray-100">
      <div className="flex flex-col justify-center items-center">
        <div className="relative">
          <div className="absolute w-16 h-16 bg-yellow-300 rounded-full animate-bounce"></div>
          <div className="absolute w-24 h-24 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute w-32 h-32 bg-yellow-500 rounded-full animate-bounce"></div>
        </div>
        <div className="-mt-28 text-xl font-semibold text-gray-700">
          <p className="text-center">Fetching adorable pets...</p>
          <p className="text-center">
            Just a moment while we find your perfect match!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
