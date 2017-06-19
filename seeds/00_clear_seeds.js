exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('posts').del()
 ]);
};
