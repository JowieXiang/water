//this component shows websites collection of the logged-in user
import React, { Component } from 'react'
import icons from 'glyphicons'

class FactsCard extends Component {
    state = {
        showDetail: false
    }
    render() {
        const { countryList } = this.props;
        // console.log(siteInfo.savedTime);
        const toggleDetail = () => {
            console.log('showing detail');
            this.setState({
                showDetail: !this.state.showDetail
            })
        }

        return (
            
        )
    }
}

export default FactsCard