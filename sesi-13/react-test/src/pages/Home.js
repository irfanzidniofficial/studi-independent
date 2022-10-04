import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3 border mt-4">
        <div className="container-fluid py-5">
          <h3 className="display-5 fw-bold">Why you do test?</h3>
          <p className="col-md-8 fs-4">
            maiores rem sint ducimus labore at veniam nobis. Eos exercitationem
            quia aspernatur tempora labore necessitatibus! Quos quo
            necessitatibus, laborum tenetur similique.
          </p>
          <Link
            className="btn btn-primary btn-lg"
            type="button"
            role="button"
            to="/users"
          >
            Users List
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
