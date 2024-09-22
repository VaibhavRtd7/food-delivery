

const DummyCard = () => {
    return (
    <>
    <div className=" border border-gray-300 rounded p-4 w-full h-96 transform transition duration-500 hover:scale-105 hover:shadow-lg">
            
        <div className="mt-72"> 
        </div> 

    </div>
    </>)
}

const Shimmer = () => {
  return (
    <>
      <div className="p-4 flex flex-col">
      <div>
          <input
            className="border-2 border-slate-300  rounded-md mx-0.5  p-1"
            type="text"
            placeholder="Search any food"
          />
          <button
            className="border-2 border-slate-300 rounded-md p-1"
          >
            Search
          </button>
        </div>
        <button
          className="border-2 border-slate-300 rounded-md mt-3 p-1 w-48 "
        >
          Top rated restaurants
        </button>
      </div>
       
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
           <DummyCard />
           <DummyCard />
           <DummyCard />
           <DummyCard />
           <DummyCard />
           <DummyCard />
           <DummyCard />
      </div>

    </>
  );
};

export default Shimmer;
