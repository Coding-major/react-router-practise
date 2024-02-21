import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayer"
import HelpLayout from "./layouts/HelpLayout";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/faq";
import Discussion from "./pages/Discussion";
import NotFound from "./pages/NotFound";
import Career, { careerLoader } from "./pages/Career";
import CareersLayout from "./layouts/CareersLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="discussion" element={<Discussion />} />
      </Route>
      <Route path="careers" element={<CareersLayout />}>
        <Route 
          index 
          element={<Career />}
          loader={careerLoader} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
