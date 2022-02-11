import "./home.css";
import { Link } from "react-router-dom";
import Pedido from "../../components/pedido/Pedido";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-body">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <Navbar />
                <Pedido />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer footer-transparent d-print-none">
        <div className="container">
          <div className="row text-center align-items-center flex-row-reverse">
            <div className="col-12 col-lg-auto mt-3 mt-lg-0">
              Copyright &copy; 2021
              <Link to="/" className="link-secondary">
                SIAC
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
