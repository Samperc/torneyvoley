import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/equipos/';

const CompEditEquipos = () => {

    const [nombre, setNombre] = useState('');
    const [genero, setGenero] = useState('');
    const [categoria, setCategoria] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const update = async (e) => {
        try {
            e.preventDefault()

            await axios.put(URI+id, {
                nombre: nombre,
                genero: genero,
                categoria: categoria
            })
            navigate('/equipos');
        } catch (error) {

            console.error("error al editar equipos: ", error);
        }
        navigate('/equipos')
    }

    useEffect(() => {
        getEquipoByID();
    }, [])

    const getEquipoByID = async () => {
        try {
            const res = await axios.get(URI + id);
            setNombre(res.data.nombre)
            setGenero(res.data.genero)
            setCategoria(res.data.categoria)
        } catch (error) {
            console.error('error al obtener equipoById',error);
        }
   
    }

    return (
    <div>
        <h3>EDITAR EQUIPOS</h3>

        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label" htmlFor="nombre">Nombre</label>
                <input className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="nombre">Genero</label>
                <input className="form-control" value={genero} onChange={(e) => setGenero(e.target.value)} type="text" />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="nombre">Categoria</label>
                <input className="form-control" value={categoria} onChange={(e) => setCategoria(e.target.value)} type="text" />
            </div>

            <button type='submit' className="btn btn-primary">Agregar</button>
        </form>
    </div>
    )

}

export default CompEditEquipos;
