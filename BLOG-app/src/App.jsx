import "./App.css";

function App() {
  return (
    <p className=" bg-black">
      {console.log(import.meta.env.VITE_APPWRITE_URL)}
      
    </p>
  );
}

export default App;
