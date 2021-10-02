import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const ShipsList = () => {
    const [ ships, setShips ] = useState( [] )
    const [ loading, setLoading ] = useState( false )

    const loadShips = async () => {
        try {
            setLoading( true )

            const { data } = await axios.get('/api/ships');
            
            setShips( data.data )
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
           <h1>Ships</h1>

           <table className="table table-striped mt-5">
               <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
               </thead>
               <tbody>
                   { ships.length ? 
                        ships.map((ship, index) => (
                            <tr key={index}>
                                <td>{ ship.id }</td>
                                <td>{ ship.name }</td>
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

export default ShipsList