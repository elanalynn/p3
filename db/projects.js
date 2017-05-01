const knex = require('./knex');

module.exports = {
    getProjects: () => knex('projects'),
    getProject: id => knex('projects').where(id, 'id')
}
