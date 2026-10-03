import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />

        <main>
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
