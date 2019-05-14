
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
        //this.state在component内部，this.props包含从外部传入的数据
        // console.log(this.state);
        // console.log(this.props);
    }


    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' /> //route guard

        return (

            <div className='container default-text' >
                <div className='row  align-items-center' style={{ height: 500 }}>
                    <div className='col-12'>
                        <div className='row justify-content-center'>
                            <h2 >Sign In</h2>
                        </div>
                        <div className='row'>
                            <div className='h1_place_holder'></div>
                        </div>
                        <div className='row justify-content-center'>
                            <form onSubmit={this.handleSubmit} className='col-6'>
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
                                        <button type="submit" className="col-12 default-btn" style={{ margin: 30, height: 45 }}>Login</button>
                                        <div className='white-text center'>
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

//注意，这个object会被map到props里，而不是state里，两者并无干系！
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
