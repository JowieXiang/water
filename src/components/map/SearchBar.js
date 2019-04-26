import React from 'react'
import { Link } from 'react-router-dom'


const SearchBar = () => {
    return (
        <form className='fixed-bottom' style={{padding:30}}>
            <div className='form-row justify-content-center'>
                <div className="col-auto">
                    <input type='text' className="form-control d-inline" placeholder='search websites'></input>
                </div>
                <Link to="/SearchPage/">
                    <div className="col-auto">
                        <button className='btn btn-outline-light '>GO</button>
                    </div>
                </Link>
            </div>
        </form>
    );
}

export default SearchBar