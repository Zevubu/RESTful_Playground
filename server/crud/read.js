const query = require('../controllers/query');
const {valuesForQuery} = require('../controllers/values-for-insert');

/**
 * @param  {} conn MySQL Connection reference
 * @param  {String} table Table to insert the values
 * @param  {[String]} columns Array of column names
 * @param  {[String]} values Array of values for those column names, can be multidientional
 */
module.exports = async (conn, table) => {
    // columns, values
//   const VALUES = valuesForQuery(values)
  try {
    const reader = await query(conn, `SELECT * FROM ${table}`);
    return reader;
  } catch(e) { console.log(e)}
}