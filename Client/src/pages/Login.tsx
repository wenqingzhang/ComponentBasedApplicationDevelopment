import React from "react";
import LoginPageTitle from "../components/LoginPageTitle";
import LocalLoginContainer from "../components/LocalLoginContainer";

export interface LoginPageProps {
    title: string;
    onLogin?: (user: any) => void;
}

export interface LoginPageState {
}

class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
    render() {
        const {title} = this.props;
        return <div>
            <LoginPageTitle title={title}/>
            <LocalLoginContainer inputs={[
                {name: 'userName', type: 'text', error:"bla bla", onValidate: (t, v) => !v},
                {name: 'password', type: 'password', onValidate: (t, v) => !v}
            ]} commands={[
                {name: 'Login', type: 'submit', onExecute: (v) => alert('submit')},
                {name: 'Reset', type: 'reset', onExecute: (v) => alert('reset')}
            ]}/>
        </div>;
    }
}

export default LoginPage;
