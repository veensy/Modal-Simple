import React from "react";
import Modal from "./Modal/Modal";

class First extends React.Component {
  render() {
    return (
      <div>
        <Modal
          open={{ text: "Open me", className: "open", variant: "secondary" }}
          title={{ text: "title" }}
          closeBtn={{ show: false }}
        >
          <strong>test 2</strong>

          <Modal.Footer
            validate={{
              text: "Validate",
              variant: "primary"
            }}
          />
        </Modal>
      </div>
    );
  }
}

export default First;
