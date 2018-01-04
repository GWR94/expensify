import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const withAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <p>You are authenticated</p> : <p>You are not authenticated</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}

const AuthInfo = withAuthentication(Info);

ReactDOM.render(<AdminInfo isAdmin={true} info="these are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="these are the details"/>, document.getElementById('app'));
