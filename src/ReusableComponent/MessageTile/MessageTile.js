import { Fragment } from 'react';
import './MessageTile.css';

export function MessageTile(props) {
    return (
        <Fragment>
            <div className='message-profile'>
                <p className="Messsage-tile-name">{props.name + ':'}</p>
                <p className="Messsage-tile-text">{props.message}</p>
            </div>
        </Fragment>
    );
}

export function SenderMessageTile(props) {
    return (
        <Fragment>
            <span className='user-message'>{props.message}</span>
        </Fragment>
    );
}

