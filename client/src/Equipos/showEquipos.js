import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/equipos/';

const CompShowEquipos = () => {
    const [equipos, setEquipos] = useState([]);

    useEffect(() => {
        getEquipos();
    }, []);

    const getEquipos = async () => {
        
            const res = await axios.get(URI);
            setEquipos(res.data);
        
    };

    const deleteEquipo = async (id) => {
        try {
            await axios.delete(`${URI}${id}`);
            getEquipos(); // Actualizar la lista después de borrar
        } catch (error) {
            console.error("Error al eliminar equipo:", error);
        }
    };

    return (

        <div className='container'>

            <h2>Equipos</h2>

            <Link className='btn btn-primary mt-2 mb-2' to='/equipos/create' ><i className="fa-solid fa-circle-plus">
                </i></Link>

            
            <table className="table table-light table-bordered table-striped text-center ">
                <thead>
                    <tr className="table-primary text-white">
                        <th>Id</th>
                        <th>nombre</th>
                        <th>genero</th>
                        <th>categoria</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {equipos.map((equipo) => (
                        <tr key={equipo.idequipos}>
                            <td>{equipo.id_equipos}</td>
                            <td>{equipo.nombre}</td>
                            <td>{equipo.genero}</td>
                            <td>{equipo.categoria}</td>
                            <td>
                                { <Link to={`/equipos/${equipo.id_equipos}`} className="btn btn-primary"><i className="fa-solid fa-pencil"></i></Link> }
                                <button onClick={ ()=> deleteEquipo(equipo.id_equipos)} className="btn btn-danger"><i className="fa-solid fa-trash-can"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompShowEquipos;




// import axios from 'axios';

// import { useState, useEffect } from 'react';

// import { Link } from 'react-router-dom';

// const URI = 'http://localhost:8000/';

// const CompShowEquipos = () => {
//     const [equipos, setEquipo] = useState([]);
//     useEffect(() => {
//         getEquipos()
//     }, [])

//     const getEquipos = async () => {

       
//         const res = await axios.get(URI);
//       setEquipo(res.data);
//     }
//     const deleteEquipo = async (id) => {
//          axios.delete('${URI}${id}')
//         getEquipos();
//     }

//     return (<div className='container'>
//         <table className="table table-ligth table-bordered table-stripted text-center mt-4">
//             <thead>
//                 <tr className="table-primary text-white">
//                     <th>Id</th>
//                     <th>nombre</th>
//                     <th>genero</th>
//                     <th>categoria</th>
//                 </tr>

//             </thead>
//             <tbody>
//                 {equipos.map((equipo) => (
//                     <tr key={equipo.idequipo}>
//                         <td scope="col">{equipo.nombre}</td>
//                         <td scope="col">{equipo.genero}</td>
//                         <td scope="col">{equipo.categoria}</td>
//                         <td>
//                             {/* <Link to={`/equipos/${equipo.id}`} className="btn btn-primary "><i className="fa-solid fa-pencil"></i></Link> */}
//                             <button onClick={ ()=>deleteEquipo(equipo.id_equipo)} className="btn btn-danger"><i className="fa-solid fa-trash-can"></i></button>
//                         </td>
//                     </tr>
//                 ))}




//             </tbody>
//         </table>

//     </div >);
// }


// export default CompShowEquipos;