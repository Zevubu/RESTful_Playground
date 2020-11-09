const query = require('../controllers/query');
const {valuesForQuery} = require('../controllers/values-for-insert');

/**
 * @param  {} conn MySQL Connection reference
 * @param  {String} table Table to insert the values
 * @param  {[String]} columns Array of column names
 * @param  {[String]} values Array of values for those column names, can be multidientional
 */
module.exports = async (conn, table,) => {
  try {
    const deleter = await query(conn, `DELETE FROM ${table} WHERE id=?;`);
    console.log(deleter)
    // if (user.insertId) {
    //   console.log(user);
    //   return await query(conn, `SELECT * FROM ${table} WHERE ID=?`, [user.insertId]);
    // }
    return deleter;
  } catch(e) { console.log(e)}
}