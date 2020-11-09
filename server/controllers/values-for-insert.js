
//  @param  {[String]} values Array of values for those column names

const valueForQuery = (_values) => {
    console.log(`_values: ${_values}`)
    const values = _values.map(item => {
        let val;
        switch (typeof item) {
            case 'number':
                return item;
            case 'string':
                val = item;
                break;
            case'boolean':
                return item;
            default:
                return `'${item}'`;
        }
        return `'${val}'`
    });
    return `(${values.join(', ')})`
};

// @param  {[String]} values Array of values for those column names, can be multidientional

const valuesForQuery = (values) => {
    const value = values[0];
    let VALUES = '';
    if (value instanceof Array) {
        VALUES = values.map(valueForQuery).join(', ')
    }else{
        VALUES = valueForQuery(values);
    }
    return VALUES;
};

const keyForQuery = (_value) =>{
    console.log(`_values: ${_values}`)
    const values = _values.map(item => {
        let val;
        switch (typeof item) {
            case 'number':
                return item;
            case 'string':
                val = item;
                break;
            case'boolean':
                return item;
            default:
                return `'${item}'`;
        }
        return `'${val}'`
    });
    return `(${values.join('=? ')})`
}

const keysForQuery = (values) =>{
    const value = values[0];
    let VALUES = '';
    if (value instanceof Array) {
        VALUES = values.map(keyForQuery).join('=? ')
    }
    else{
        VALUES = valueForQuery(values);
    }

}

module.exports = {
    valueForQuery,
    valuesForQuery
};