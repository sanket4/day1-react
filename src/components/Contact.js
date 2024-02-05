const Contact = () => {
  return (
    <div className="res-card">
      <div className="title m-4 p-4">
        <h1 className="font-bold py-2 text-lg">Name of Resturant</h1>
        <h2 className="font-semibold text-base py-2">category</h2>
        <h2 className="font-bold py-2">Menu</h2>
      </div>
      <div className="card m-4 p-4 w-[650px] h-[200px] shadow-lg rounded-lg hover:border border-gray-300">
        <h4 className="font-bold py-2">Name of Menu</h4>
        <h4 className="font-bold py-2">Cost - </h4>
        <h4 className="font-bold py-2">Description</h4>
      </div>
    </div>
  );
};

export default Contact;
