import React from 'react';
import './Signin.css';

const Signin = () => {
    return (
        <article className=" article br3 mv4 center shadow-2 pa4">
            <form className="form w-100">
                <div classNameNmae='fieldset' id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                    <input className="email input pa2 input-reset bg-transparent w-100 f6" type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" for="password">Password</label>
                    <input className="password input pa2 input-reset bg-transparent w-100 f6" type="password" name="password"  id="password" />
                </div>
                </div>
                <div className="">
                <input className="btn b ph3 pv2 input-reset br2 dim pointer f6 dib" type="submit" value="Sign in" />
                </div>
                <div className="lh-copy mt3">
                <a href="#0" className="f6 link dim black db">Register</a>
                </div>
            </form>
        </article>
    )
}

export default Signin;