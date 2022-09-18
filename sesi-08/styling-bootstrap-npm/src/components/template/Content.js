import React from "react";

const Content = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3 border">
        <div className="container-fluid py-5">
          <h3 className="display-5 fw-bold">First Paragraph in Jumbotron</h3>
          <p className="col-md-8 fs-4">
            maiores rem sint ducimus labore at veniam nobis. Eos exercitationem
            quia aspernatur tempora labore necessitatibus! Quos quo
            necessitatibus, laborum tenetur similique.
          </p>
          <button
            className="btn btn-primary btn-lg"
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Example Button
          </button>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Hello Modal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Ini Adalah Modal</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
