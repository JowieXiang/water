import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import GeographicalBoard from './boards/where/GeographicalBoard'
import CategoricalBoard from './boards/what/CategoricalBoard'
import SocialBoard from './boards/friends/SocialBoard'
import TimeBoard from './boards/when/TimeBoard'
import WelcomeBoard from './boards//welcome/WelcomeBoard'
// import WebsiteList from './websites/WebsiteList'
import Sidebar from './Sidebar';
import { Redirect, Route, Switch } from 'react-router-dom'
import Footer from './footer'

class PersonalPage extends Component {


	render() {
		//将url中的uid导入函数
		const uid = this.props.match.params.uid;

		const { auth, profile, userWebsitesCollection } = this.props;

		//当userWebsitesCollection传入state后，react自动调用render,更新websitePanel
		let userDoc;
		if (userWebsitesCollection && auth) {
			userDoc = userWebsitesCollection.find(element => {
				return element.id === auth.uid;
			});
		}
		//route guard
		if (!auth.uid) return <Redirect to='/' />
		return (
			<div className="container">
				<div className='h1_place_holder'>
				</div>
				<div className="row justify-content-center">
					<div className="col-8">
						<GeographicalBoard auth={auth} userDoc={userDoc ? userDoc : null} />
					</div>
				</div>
				{/* <div className="row">
					<div className="col-2">
						<Sidebar uid={uid} />
					</div>
					<div className="col-8">
						<Switch>
							<Route exact path={'/personalPage/' + uid} component={WelcomeBoard} />
							<Route
								path={'/personalPage/' + uid + '/where'}
								render={(routeProps) => (
									<GeographicalBoard {...routeProps} auth={auth} userDoc={userDoc ? userDoc : null} />
								)} />
							<Route path={'/personalPage/' + uid + '/what'} component={CategoricalBoard} />
							<Route path={'/personalPage/' + uid + '/when'} component={TimeBoard} />
							<Route path={'/personalPage/' + uid + '/friends'} component={SocialBoard} />
						</Switch>
					</div>
				</div> */}
				<Footer />
			</div>
		);
	}
}

//将登陆状态传入this.props
const mapStateToProps = (reduxState) => {

	return {
		auth: reduxState.firebase.auth,
		profile: reduxState.firebase.profile,
		userWebsitesCollection: reduxState.firestore.ordered.userWebsites
	}
}
export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'userWebsites' }
	])
)(PersonalPage)



