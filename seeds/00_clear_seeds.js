exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('illustrations').del(),
    knex('posts').del(),
    knex('projects').del()
  ]);
};
