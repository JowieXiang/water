import React, { Component } from 'react'

class ChatPanel extends Component {
    state = {
        friendList: []
    }

    render() {
        return (
            <div>
                <div className='h2_place_holder'>
                </div>
                <form>
                    <div className='form-group align-items-center'>
                        <label for="message">Message:</label>
                        <textarea class="form-control" rows="5" id="message"></textarea>
                    </div>
                </form>
            </div>
        );
    }
}

export default ChatPanel