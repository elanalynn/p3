const knex = require('./knex');

module.exports = {
    getIllustrations: () => knex('illustrations'),
    getIllustration: id => knex('illustrations').where(id, 'id')
}
