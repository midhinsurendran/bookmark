import React, { useState } from 'react';
import { addData } from '../UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import BasicExample from './navebar';
import checkAuth from './mainAuth/checkAuth';

const Create = () => {
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();
    
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        
        if (data.length >= 5) {
            return window.alert("Maximum of 5 entries allowed.");
        }

        const dataExists = data.some((entry) => entry.url === url);
        if (dataExists) {
            return window.alert("Url already exists");
        }

        const currentTime = new Date().toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false 
        });

        dispatch(addData({
            id: data[data.length - 1] ? data[data.length - 1].id + 1 : 1,
            title,
            url,
            timeStamp: currentTime,
        }));

        
        setTitle('');
        setUrl('');
    };

    return (
        <div>
            <BasicExample />
            <div className='text-center m-5 p-5'>
                <h4>Create data</h4>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='title'>Enter title:</label>
                        <input 
                            type='text' 
                            name='title' 
                            className='form-control' 
                            placeholder='Enter title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label htmlFor='url'>Enter URL:</label>
                        <input 
                            required 
                            type='url' 
                            name='url' 
                            className='form-control' 
                            placeholder='Enter the URL'
                            value={url}
                            onChange={(e) => setUrl(e.target.value)} 
                        />
                    </div>
                    <br />
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default checkAuth(Create);

