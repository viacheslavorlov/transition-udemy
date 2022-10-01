import {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import {Transition} from "react-transition-group";
import {useRef} from 'react';
import './App.css';

const Modal = (props) => {
	const nodeRef = useRef(null)
	const duration = 400;

	const defaultStyle = {
		transition: `all ${duration}ms ease-in-out`,
		opacity: 0,
		visibility: 'hidden'
	}

	const transitionStyles = {
		entering: {opacity: 1, visibility: 'visible'},
		entered: {opacity: 1, visibility: 'visible'},
		exiting: {opacity: 0, visibility: 'hidden'},
		exited: {opacity: 0, visibility: 'hidden'},
	};

	return (
		<Transition
			onEnter={props.showBtnToggle}
			onExited={props.showBtnToggle}
			unmountOnExit
			nodeRef={nodeRef}
			timeout={duration}
			in={props.show}>
			{state => (
				<div ref={nodeRef} style={{
					...defaultStyle,
					...transitionStyles[state]
				}}>
					<div className="modal mt-5 d-block">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title">Typical modal window</h5>
									<button onClick={() => props.onClose(false)} type="button" className="btn-close"
									        aria-label="Close"></button>
								</div>
								<div className="modal-body">
									<p>Modal body content</p>
								</div>
								<div className="modal-footer">
									<button onClick={() => props.onClose(false)} type="button"
									        className="btn btn-secondary">Close
									</button>
									<button onClick={() => props.onClose(false)} type="button"
									        className="btn btn-primary">Save changes
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</Transition>
	)
}

function App() {
	const [showModal, setShowModal] = useState(false);
	const [showButton, setShowButton] = useState(true);
	const showBtnToggle = () => {
		setShowButton(prevState => !prevState)
	}

	return (
		<Container>
			<Modal show={showModal} showBtnToggle={showBtnToggle} set onClose={setShowModal}/>
			{showButton ? <button
				type="button"
				className="btn btn-warning mt-5"
				onClick={() => setShowModal(true)}>Open Modal
			</button> : null}
		</Container>
	);
}

export default App;
