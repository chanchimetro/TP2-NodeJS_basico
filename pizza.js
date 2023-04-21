import sql from 'mssql'
import config from './dbconfig.js'

export const getById  = async (id) => {
    
    let returnEntity = null;
    console.log("GetById");
    try{
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('pId', sql.Int, id)
            .query('SELECT * FROM Pizzas WHERE id = @pId');

            returnEntity = result.recordsets[0][0];

    }catch (error){
        console.log(error);
    }
    return returnEntity;
}