import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const RoutesList = () => {
    const [ routes, setRoutes ] = useState( [] )
    const [ loading, setLoading ] = useState( false )

    const loadShips = async () => {
        try {
            setLoading( true )

            const { data } = await axios.get('/api/routes');
            
            setRoutes( data.data )
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
           <h1>Routes</h1>

           <table className="table table-striped mt-5">
               <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Action</th>
                    </tr>
               </thead>
               <tbody>
                   { routes.length ? 
                        routes.map((route, index) => (
                            <tr key={index}>
                                <td>{ route.id }</td>
                                <td>{ route.name }</td>
                                <td>{ route.origin }</td>
                                <td>{ route.destination }</td>
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

export default RoutesList