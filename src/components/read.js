import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteData, updateData } from '../UserReducer';
import BasicExample from './navebar';
import checkAuth from './mainAuth/checkAuth';
import { Link } from 'react-router-dom';

const Read = () => {
    const dispatch = useDispatch();
    const [b, setB] = useState(false);
    const [ids, setId] = useState();
    const [searchQuery, setSearchQuery] = useState('');

    const datas = useSelector((state) => state.data);
    const sdata = useSelector((state) => state.data.find(user => user.id === ids));

    const [title, setTitle] = useState(sdata ? sdata.title : '');
    const [url, setUrl] = useState(sdata ? sdata.url : '');

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    // Filter data based on search query
    const filteredData = datas.filter(data =>
        (data.title && data.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (data.url && data.url.toLowerCase().includes(searchQuery.toLowerCase()))
    ); 

    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem); // Use filteredData here

    const totalPages = Math.ceil(filteredData.length / itemsPerPage); // Total number of pages

    const update = (event) => {
        event.preventDefault();
        const now = new Date();
        const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

        dispatch(updateData({
            id: ids,
            newData: { title, url, timeStamp: currentTime }
        }));
        setB(false);
        window.alert('Successfully updated');
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(prevPage => prevPage - 1);
    };

    useEffect(() => {
        if (sdata) {
            setTitle(sdata.title);
            setUrl(sdata.url);
        }
    }, [sdata]);

    return (
        <div className='text-center'>
            <BasicExample />
            {b ? <>
                <h3 className='mt-5'>Edit</h3>
                <form onSubmit={update}>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>URL:</label>
                    <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <button type="submit">Update Data</button>
                </form>
            </> : ''}

            <div className='p-5 m-5'>
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search by title or URL"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="form-control mb-3"
                />

                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Time</th>
                            <th>Title</th>
                            <th>URL</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((data, index) => (
                            <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.timeStamp}</td>
                                <td>{data.title}</td>
                                <td><Link to={data.url}>{data.url}</Link></td>
                                <td>
                                    <button className='btn btn-sm btn-warning ms-2' onClick={() => {
                                        setB(true);
                                        setId(data.id);
                                        setTitle(data.title);
                                        setUrl(data.url);
                                    }}>Edit</button>
                                    <button className='btn btn-sm btn-danger ms-2' onClick={() => {
                                        dispatch(deleteData(data.id));
                                    }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination Controls */}
                <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary" onClick={handlePreviousPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button className="btn btn-secondary" onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default checkAuth(Read);
