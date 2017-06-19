const knex = require('./knex');

module.exports = {
    getPosts: () => knex('posts'),
    getPostsByYear: year => knex('posts'),
    getPost: id => knex('posts').where('id', id),
    createPost: post => knex('posts').insert(post), 
    editPost: (id, post) => knex('posts').where('id', id).update(),
    deletePost: id => knex('posts').where('id', id).del()
}
