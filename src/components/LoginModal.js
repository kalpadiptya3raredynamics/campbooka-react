import { useState } from "react";
import { API_BASE_URL } from "../configuration/Constants";
import Cookies from "universal-cookie";

function LoginModal(props) {

    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const cookies = new Cookies();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPwd(event.target.value);
    }

    const requestOptions = {
        method: "POST", 
        headers: { "Content-Type": "application/json"},
        body: null
    };

    async function handleLoginClick(event) {

        requestOptions.body = JSON.stringify({ "email": username, "password": pwd });

        const response = await fetch(API_BASE_URL + "/auth/signin", requestOptions);
        const responseData = await response.json();
        const jwtToken = response.headers.get("Token");
        const hours = process.env.REACT_APP_COOKIES_EXPIRY_IN_HOURS;

        // this is not a httpOnly cookie - but a normal
        // in later stages of development we might shift to httponly cookie for enhanced security.

        cookies.set("JWT", jwtToken, {
            sameSite: "strict", 
            path: "/", 
            expires: new Date(new Date().getTime() + (hours * 60 * 60 * 1000))});
    }

    return (
        <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
            style={{display: "block"}} >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content login">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">
                            Login | Register
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.doCloseModal} >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <ul className="nav nav-tabs m-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active m-btn1" data-toggle="tab" href="#tabs-1" role="tab">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link m-btn1" data-toggle="tab" href="#tabs-2" role="tab">Register</a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                <div className="form-sec" id="my_form">
                                    <form className="rd-mailform1" name="loginform" id="loginform" action="" method="post">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="user_login" value={username} name="log" onChange={handleUsernameChange} placeholder="Email or Phone Number" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input className="form-control" id="user_pass" type="password" value={pwd} name="pwd" placeholder="Password" onChange={handlePasswordChange}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-left m-login">
                                            <a onClick={handleLoginClick} className="contact_submit_btn m-btn1 btn btn-primary">Login</a>
                                            <input type="hidden" name="redirect_to" />
                                            <input type="hidden" name="testcookie" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-pane" id="tabs-2" role="tabpanel">
                                <div className="form-sec" id="my_form">
                                    <form className="rd-mailform1 reg_frm" method="post">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control reg_name" id="rg_name" name="name" required
                                                        placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control reg_email" id="rg_email" name="email" required
                                                        placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control reg_ph" required placeholder="Contact Number" />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control reg_pass" required placeholder="*Password" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control reg_c_pass" required placeholder="*Confirm Password" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-left m-login">
                                            <button className="contact_submit_btn m-btn1 btn btn-primary" type="submit">
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                    <span className="my-reg" style={{ color: "green" }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;