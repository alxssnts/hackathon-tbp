import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const WorksList = () => {
    const [ works, setWorks ] = useState( [] )
    const [ loading, setLoading ] = useState( false )

    const loadShips = async () => {
        try {
            setLoading( true )

            const { data } = await axios.get('/api/works');
            
            setWorks( data.data )
        } catch ( error ) {
            console.log( error )
        } finally {
            setLoading( false );
        }
    }

    useEffect(() => {
        loadShips()
    }, [])

    return (
       <div className="container">
           <h1>Works</h1>

           <table className="table table-striped mt-5">
               <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
               </thead>
               <tbody>
                   { works.length ? 
                        works.map((work, index) => (
                            <tr key={index}>
                                <td>{ work.id }</td>
                                <td>{ work.title }</td>
                                <td>{ work.description }</td>
                                <td>View | Delete</td>
                            </tr>
                        ))
                    : 
                        <tr>
                            <td colSpan="4">No records found</td>
                        </tr>   
                   }
               </tbody>
           </table>
       </div>
    )
}

export default WorksList