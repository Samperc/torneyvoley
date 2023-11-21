import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI='http://localhost:8000/equipos';

const CompCreateEquipo = ()=>{
    const [nombre,setNombre]=useState('');
    const [genero,setGenero]=useState('');
    const [categoria,setCategoria]=useState('');
    const navigate=useNavigate();

    const store = async (e) =>{

        try {
            e.preventDefault()

            await axios.post(URI,{
                nombre:nombre,
                genero: genero,
                categoria: categoria
            })
            navigate('/equipos');
        } catch (error) {
            
            console.error("error al cargar equipos: ",error);
        }
    }

    return(
        <div>
            <h3>CREAR EQUIPOS</h3>

            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="nombre">Nombre</label>
                    <input className="form-control" value={nombre} onChange={(e)=>setNombre(e.target.value)} type="text"  />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="nombre">Genero</label>
                    <input className="form-control" value={genero} onChange={(e)=>setGenero(e.target.value)} type="text"  />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="nombre">Categoria</label>
                    <input className="form-control" value={categoria} onChange={(e)=>setCategoria(e.target.value)} type="text"  />
                </div>

                <button type='submit' className="btn btn-primary">Agregar</button>
            </form>
        </div>
    )
}

export default CompCreateEquipo;