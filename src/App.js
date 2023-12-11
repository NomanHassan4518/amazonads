import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Report from "./Components/Report/Report";
import { useQuery } from 'react-query';

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ["jsonplaceholder"],
    queryFn: () =>
      fetch(
        `https://jsonplaceholder.typicode.com/posts`
      ).then((res) => res.json()),
  });

  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home  FetchedData={data}/>}></Route>
          <Route path="/reports" element={<Report />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
