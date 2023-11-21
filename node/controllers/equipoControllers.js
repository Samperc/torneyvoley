import  pool from "../database/db.js";


export const getEquipos = async (req,res ) =>{
    try {
        const response=await pool.query('Select * from equipos ORDER BY id_equipos');
        const equipos=response.rows
        res.json(equipos);
        
    } catch (err) {
        res.json({message: err.message})
    }
}


export const getEquipoByID = async (req,res) =>{
    try {
        const id=req.params.id

        const response=await pool.query('Select * from equipos where id_equipos=$1',[id]);
        const equipo=response.rows
        res.json(equipo[0]);
    } catch (error) {
        res.json({message: error.message})

    }
}


export const createEquipo = async (req,res) => {
    const {nombre,genero,categoria}=req.body;
    try {
        const response=await pool.query('Insert into equipos(nombre,genero,categoria) values($1,$2,$3)'
        ,[nombre,genero,categoria]);
        res.json(response);
       
    } catch (error) {
        res.json({message: error.message})

    }

}

export const updateEquipo =async (req,res) => {
    const id=req.params.id;
    const {nombre,genero,categoria}=req.body;
    try {
        const response=await pool.query('Update equipos set nombre=$1,genero=$2,categoria=$3 where id_equipos=$4'
        ,[nombre,genero,categoria,id]);
        
        res.json({
            message: "registro actualizado correctamente"
        });
    } catch (error) {
        res.json({message: err.message})

    }
}


export const deleteEquipo = async(req,res)=>{
    const id=req.params.id;
    try {
        const response= await pool.query('Delete from equipos where id_equipos=$1',[id]);
        res.json({
            message: "registro eliminado correctamente"
        });
    } catch (error) {
        res.json({message: error.message})
        
    }
}

