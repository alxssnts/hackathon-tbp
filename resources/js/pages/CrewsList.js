import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const CrewsList = () => {
    const [ crews, setCrews ] = useState( [] )
    const [ loading, setLoading ] = useState( false )

    const loadCrews = async () => {
        try {
            setLoading( true )

            const { data } = await axios.get('/api/crews');
            
            setCrews( data.data )
        } catch ( error ) {
            console.log( error )
        } finally {
            setLoading( false );
        }
    }

    useEffect(() => {
        loadCrews()
    }, [])

    return (
       <div className="container">
           <h1>Crews</h1>

           <table className="table table-striped mt-5">
               <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fullname</th>
                        <th>Action</th>
                    </tr>
               </thead>
               <tbody>
                   { crews.length ? 
                        crews.map((crew, index) => (
                            <tr key={index}>
                                <td>{ crew.id }</td>
                                <td>{ crew.full_name }</td>
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

export default CrewsList