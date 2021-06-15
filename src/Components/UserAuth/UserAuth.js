import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getUserName } from "../../redux/actions";
import './UserAuth.css';


function UserAuth(props) {

    const [name, setName] = useState('');
    const [isFault, setFault] = useState(false);
    const [redirect, setRedirect] = useState('/');

    function submitName() {
        if (name.length > 0) {
            props.getUserName(name);
            setFault(false);

            setTimeout(() => {
                setRedirect('/message-window');
            }, 400);
        }
        else setFault(true);
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-5 Auth-screen">
                        <h4>Waiting Lobby...</h4>
                        <br />
                        <br />
                        <div className='Username-box'>
                            <label>Username :</label>
                            <input type='text' value={name} onChange={(e) => { setName(e.target.value); setFault(false) }} /><br />
                        </div>
                        {isFault ? <p style={{ color: 'red' }}>*Enter valid name</p> : <br />}
                        <button onClick={() => submitName()}>Enter Room &nbsp;<i className="fas fa-sign-out-alt"></i></button>
                        <Redirect to={redirect}></Redirect>
                    </div>
                </div>
            </div>
        </Fragment>)
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserName: (name) => dispatch(getUserName(name))
    }
}

export default connect(null, mapDispatchToProps)(UserAuth);