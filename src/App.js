import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayer";

//pages
import Home from "./pages/Home";
import About from "./pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
