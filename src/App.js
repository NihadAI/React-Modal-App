import { Component } from 'react';
import './App.scss';
import './components/modal/modal.scss';
import Modal from './components/modal/Modal';
import Button from './components/button/Button';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstModal: false,
            secondModal: false,
        };
    }

    handleFirstModalOpen = () => {
        this.setState({ firstModal: true });
    };

    handleSecondModalOpen = () => {
        this.setState({ secondModal: true });
    };

    handleFirstModalClose = () => {
        this.setState({ firstModal: false });
    };

    handleSecondModalClose = () => {
        this.setState({ secondModal: false });
    };

    render() {
        return (
            <div className="App">
                <Button backgroundColor="purple" text="Open first modal" onClick={this.handleFirstModalOpen} />
                <Button backgroundColor="orange" text="Open second modal" onClick={this.handleSecondModalOpen} />
                {this.state.firstModal && (
                    <Modal
                        header="Do you want to delete this file?"
                        closeButton={true}
                        onClose={this.handleFirstModalClose}
                        text="Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?"
                        actions={
                            <div className="modal__footer">
                                <Button backgroundColor="rgba(179, 56, 44, 1)" width="100px" text="Ok" />
                                <Button backgroundColor="rgba(179, 56, 44, 1)" width="100px" text="Cancel" onClick={this.handleFirstModalClose} />
                            </div>
                        }
                    />
                )}
                {this.state.secondModal && (
                    <Modal
                        header="Second Modal"
                        closeButton={true}
                        onClose={this.handleSecondModalClose}
                        text="This is the second modal"
                        actions={
                            <div className="modal__footer">
                                <Button backgroundColor="#641d1d" width="130px" text="Confirm" />
                                <Button backgroundColor="#641d1d" width="130px" text="Cancel" onClick={this.handleSecondModalClose} />
                            </div>
                        }
                    />
                )}
            </div>
        );
    }
}

export default App;
