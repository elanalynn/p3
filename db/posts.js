const knex = require('./knex');

module.exports = {
    getPosts: () => knex('posts'),
    getPostsByYear: year => knex('posts'),
    getPost: id => knex('posts').where(id, 'id')
}
