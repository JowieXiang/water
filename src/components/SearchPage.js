import React,{Component} from 'react'

class SearchPage extends Component {
    
    state={
        id:null
    }
    componentDidMount(){
        let id = this.props.match.params.search_content;
        this.setState({
            id:id
        })
    }
    render()
   { return (
        <div className='container'>
            <div className='h1_place_holder'>

            </div>
            <div class="card">
                <div class="card-header">
                    {this.state.id}
            </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
   }
}

export default SearchPage