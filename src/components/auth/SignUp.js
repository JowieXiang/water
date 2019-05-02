
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }


    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' /> //route guard保证登陆后不会再进入signup页面

        return (
            <div className='container' >
                <div className='row  align-items-center' style={{ height: 500 }}>
                    <div className='col-12'>
                        <div className='row justify-content-center'>
                            <h2 >Sign Up</h2>
                        </div>
                        <div className='row'>
                            <div className='h1_place_holder'></div>
                        </div>
                        <div className='row justify-content-center'>
                            <form onSubmit={this.handleSubmit} className='col-6'>
                                <div className='form-group row justify-content-center' >
                                    <label htmlFor='firstName' class="col-lg-3 col-form-label">First Name</label>
                                    <div className="col-lg-9">
                                        <input type="firstName" className="form-control" id="firstName" placeholder="Enter first name" onChange={this.handleChange}></input>
                                    </div>
                                </div>
                                <div className='form-group row justify-content-center' >
                                    <label htmlFor='lastName' className="col-lg-3 col-form-label">Last Name</label>
                                    <div className="col-lg-9">
                                        <input type="lastName" className="form-control" id="lastName" placeholder="Enter last name" onChange={this.handleChange}></input>
                                    </div>
                                </div>
                                <div className='form-group row justify-content-center' >
                                    <label htmlFor='email' className="col-lg-3 col-form-label">Email</label>
                                    <div className="col-lg-9">
                                        <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={this.handleChange}></input>
                                    </div>
                                </div>
                                <div className='form-group row justify-content-center'>
                                    <label htmlFor='password' className="col-lg-3 col-form-label">Password</label>
                                    <div className="col-lg-9">
                                        <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={this.handleChange}></input>
                                    </div>
                                </div>
                                <div className='form-group row justify-content-center'>
                                    <label htmlFor='profile' className="col-12 col-form-label">Profile</label>
                                    <div className="col-12">
                                        <textarea type="profile" className="form-control rounded-0" id="profile" placeholder="Enter profile" onChange={this.handleChange}></textarea>
                                    </div>
                                </div>
                                <div className='form-group row justify-content-center'>
                                    <button type="submit" className="btn btn-outline-info col-sm-4">SIGN UP</button>
                                    <div className='red-text center'>
                                        {authError ? <p>{authError}</p> : null}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError //state.auth来自rootReducer中的authReducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

