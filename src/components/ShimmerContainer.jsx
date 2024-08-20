

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
      <div className="p-4">
        <button className="border-1 border-slate-200 text-gray-100 bg-slate-100 rounded-md mt-2 p-1">
          {" "}
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
