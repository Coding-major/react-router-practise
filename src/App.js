import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayer"
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/faq";
import Discussion from "./pages/Discussion";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/Careers";
import Career, {careerLoader} from "./pages/Career";
import CareerError from "./pages/CareerError";



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
            element={<Careers />}
            loader={careersLoader}
            errorElement={<CareerError />} />
        
        <Route 
          path=":id" 
          element={<Career />}
          loader={careerLoader}
          errorElement={<CareerError />} />
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
