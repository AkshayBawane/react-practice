// import React from "react";

// function Footer() {
//     return(
//         <div>
//             <footer>
//                 <h2>from Footer.js inerited from MyApp.js</h2>
//                 <ul>
//                     <li>link 1</li>
//                     <li>link 2</li>
//                     <li>link 3</li>
//                 </ul>
//             </footer>
//         </div>
//     )
// }
// export default Footer
import React from "react";
import {
    Modal,
    Button
} from 'react-bootstrap'

class Footer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div className="modal-container" style={{ marginBottom: '15px', marginTop: '15px' }}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true })}
        >
          Launch modal
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Contained Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
            ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default Footer