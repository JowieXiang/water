import React from 'react'
import { Link } from 'react-router-dom'


const SearchBar = () => {
    return (
        <form className='fixed-bottom' style={{padding:30}}>
            <div className='form-row justify-content-center'>
                <div class="col-auto">
                    <input type='text' className="form-control d-inline" placeholder='search friends by name'></input>
                </div>
                <Link to='/friendPage'>
                    <div class="col-auto">
                        <button className='btn btn-outline-info '>GO</button>
                    </div>
                </Link>
                <Link to='/personalPage'>
                    <div class="col-auto">
                        <button className='btn btn-outline-info '>ME</button>
                    </div>
                </Link>
            </div>
        </form>
    );
}

export default SearchBar