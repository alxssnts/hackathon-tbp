import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const DutiesList = () => {
    const [ duties, setDuties ] = useState( [] )
    const [ loading, setLoading ] = useState( false )

    const loadShips = async () => {
        try {
            setLoading( true )

            const { data } = await axios.get('/api/duties');
            
            setDuties( data.data )
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
           <h1>Duties</h1>

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
                   { duties.length ? 
                        duties.map((duty, index) => (
                            <tr key={index}>
                                <td>{ duty.id }</td>
                                <td>{ duty.title }</td>
                                <td>{ duty.description }</td>
                                <td>View | Delete</td>
                            </tr>
                        ))
                    : 
                        <tr>
                            <td colSpan="3">No records found</td>
                        </tr>   
                   }
               </tbody>
           </table>
       </div>
    )
}

export default DutiesList