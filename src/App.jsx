import { useState } from "react";
import BookPopover from "./components/BookPopover";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Landing from "./components/Landing";
import GalleryPage from "./pages/GalleryPage";
import { Fade } from "react-reveal";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        exact
        element={
          <>
            <Landing />
            <Gallery />
            <Footer />
          </>
        }
      />
      <Route path="/:gallery" element={<GalleryPage />} />
    </>
  )
);

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BookPopover open={open} setOpen={setOpen} />
      <RouterProvider router={router} />
      <Fade right>
        <button
          className="bg-accent hover:bg-accentdim hover:shadow-lg text-white rounded-full text-lg text-center px-7 md:px-10 py-3 md:py-5 font-secondary fixed bottom-5 right-5 transition-colors z-50"
          onClick={(_) => setOpen((prevState) => !prevState)}
        >
          book photoshoot
        </button>
      </Fade>
    </>
  );
}

export default App;
