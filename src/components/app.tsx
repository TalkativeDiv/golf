import Canvas from './canvas/Canvas';
const App = () => {
  return (
    <div className="flex justify-center items-center flex-col min-w-[100vw] min-h-[100vh]">
      <h1 className="text-4xl font-bold">Golf Game with Preact and Fabric</h1>
      <br />
      <div>
        <Canvas />
      </div>
      <br />
      <a
        className="text-gray-200 bg-gray-800 hover:bg-gray-900  hover:shadow-none shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
      >
        Github
      </a>
    </div>
  );
};
export default App;
