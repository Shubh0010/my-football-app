const Shimmer = () => {
  return (
    <div className="bg-green-100">
      <div className="flex justify-between p-2">
        <div className='filter'>
          <button className='bg-green-400 p-2 rounded-2xl text-gray-600 mt-5'>  Top 10 Premier League Clubs  </button>
        </div>
        <div className='flex p-1'>
          <input
            type='text'
            className='m-4 h-6 bg-gray-50 outline-green-600'
          />
          <button className='text-gray-600 px-2 py-1 rounded-xl bg-green-400 mt-3 h-8'><h6>Search</h6></button>
        </div>
      </div>
      <div className="flex flex-wrap p-4">
        <div className="m-6 p-6 pb-0 bg-green-200 rounded-lg w-56 h-96 hover:bg-green-300"></div>
        <div className="m-6 p-6 pb-0 bg-green-200 rounded-lg w-56 h-96 hover:bg-green-300"></div>
        <div className="m-6 p-6 pb-0 bg-green-200 rounded-lg w-56 h-96 hover:bg-green-300"></div>
        <div className="m-6 p-6 pb-0 bg-green-200 rounded-lg w-56 h-96 hover:bg-green-300"></div>
        <div className="m-6 p-6 pb-0 bg-green-200 rounded-lg w-56 h-96 hover:bg-green-300"></div>
        <div className="m-6 p-6 pb-0 bg-green-200 rounded-lg w-56 h-96 hover:bg-green-300"></div>
        <div className="m-6 p-6 pb-0 bg-green-200 rounded-lg w-56 h-96 hover:bg-green-300"></div>
        <div className="m-6 p-6 pb-0 bg-green-200 rounded-lg w-56 h-96 hover:bg-green-300"></div>
        <div className="m-6 p-6 pb-0 bg-green-200 rounded-lg w-56 h-96 hover:bg-green-300"></div>
        <div className="m-6 p-6 pb-0 bg-green-200 rounded-lg w-56 h-96 hover:bg-green-300"></div>
      </div>
    </div>
  );
}

export default Shimmer;