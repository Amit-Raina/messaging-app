import { Fragment, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { MessageTile, SenderMessageTile } from "../../ReusableComponent/MessageTile/MessageTile";
import { getUserMessage, resetChatData, resetCurrentUser } from '../../redux/actions/index';
import './MessageWindow.css';
import { NavLink } from "react-router-dom";


function MessageWindow(props) {

    const [userMessage, getUserMessage] = useState('');
    const [isFault, setIsFault] = useState(false);
    const [messageObject, setMessageObject] = useState({})
    const scrollTo = useRef(null);

    useEffect(()=>{
        scrollTo.current.scrollIntoView({ behavior: 'smooth' });
    },[]);

    function sendMessage(event) {
        if (userMessage.length > 0) {
            setIsFault(false);
            messageObject[props.currentUser] = userMessage;
            props.getUserMessage(messageObject);
            getUserMessage('');
            setMessageObject({});
            scrollTo.current.scrollIntoView({ behavior: 'smooth' });
        }
        else setIsFault(true);
    }
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-6 Chat-window">
                        <h3>Chat Room</h3>
                        <br />
                        <div className="Message-window">
                            {props.messages.map((data, index) => {
                                let userName = Object.keys(data).join();
                                if (props.currentUser === userName) return <SenderMessageTile key={index} message={Object.values(data)} />
                                else return <MessageTile key={index} name={Object.keys(data)} message={Object.values(data)} />
                            })}

                            <div ref={scrollTo} className='Scroll-position'>.</div>
                        </div>
                        <br />
                        <div className="Type-message">
                            <textarea placeholder='Enter message here' rows='3' value={userMessage} onChange={(e) => { getUserMessage(e.target.value); setIsFault(false) }}></textarea>
                            <button onClick={() => sendMessage()}><i className="fas fa-paper-plane"> Send</i></button>
                        </div>
                        {isFault ? <p style={{ color: 'red' }}>*Enter message</p> : <></>}
                    </div>
                </div>

                <div className="row">
                    <div className="col-5 options">
                        <NavLink to="/"><button className="another-user" onClick={props.resetCurrentUser}>Another user</button></NavLink>
                        <NavLink to="/"><button className="logout" onClick={props.resetChatData}>Logout</button></NavLink>
                    </div>
                </div>
            </div>
        </Fragment>)
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserMessage: (message) => dispatch(getUserMessage(message)),
        resetChatData: () => dispatch(resetChatData()),
        resetCurrentUser: () => dispatch(resetCurrentUser())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageWindow);


