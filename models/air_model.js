const db = require('./database');

module.exports = {
    FindAllAir: async function() {
        try {
            const result = await db.query('SELECT * from air');
            return {data: result[0], error: null};
        } catch (error) {
            return {data: null, error: error}
        }
    },
    AddAir: async function(data) {
            try {
                const result = await db.query('INSERT INTO air SET ?', [data]);
                return {data: result[0], error: null};
            } catch (error) {
                return {data: null, error: error}
            }
    },
    DeleteAir: async function(id) {
        try {
            const result = await db.query('DELETE FROM air where id=?', [id]);
            return {data: result[0], error: null};
        } catch (error) {
            return {data: null, error: error}
        }
    },
}