import React, { Component } from 'react'

class WebsitePanel extends Component {
	state = {
		webList: [
			{
				id: 1,
				domain: 'youtube',
				company: 'Google',
				url: 'www.youtube.com'
			},
			{
				id: 2,
				domain: 'baidu',
				company: 'Baidu',
				url: 'www.baidu.com'
			},
			{
				id: 3,
				domain: 'facebook',
				company: 'Facebook',
				url: 'www.facebook.com'
			},
			{
				id: 4,
				domain: 'linkedin',
				company: 'LinkedIn',
				url: 'www.linkedin.com'
			},
			{
				id: 5,
				domain: '',
				company: '',
				url: ''
			},
			{
				id: 6,
				domain: '',
				company: '',
				url: ''
			},
			{
				id: 7,
				domain: '',
				company: '',
				url: ''
			}
		]
	}

	render() {
		return (
			<div>
				<div className='row'>
					<h2>websites.</h2>
				</div>
				<div className='row justify-contents-center'>
					<div className='col-3 justify-contents-center'>
						<div className='websiteInstance' />
					</div>
					<div className='col-3 justify-contents-center'>
						<div className='websiteInstance' />
					</div>
					<div className='col-3 justify-contents-center'>
						<div className='websiteInstance' />
					</div>
					<div className='col-3 justify-contents-center'>
						<div className='websiteInstance' />
					</div>
				</div>
			</div>
		);
	}
}

export default WebsitePanel