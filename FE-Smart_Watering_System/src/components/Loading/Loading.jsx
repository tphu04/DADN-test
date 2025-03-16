const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex space-x-2">
        <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce delay-200"></div>
        <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce delay-400"></div>
      </div>

      <div className="text-xl font-secondary mt-8">
        Loading content, please wait...
      </div>
    </div>
  );
};

export default Loading;
