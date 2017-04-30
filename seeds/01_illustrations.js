exports.seed = function(knex) {
  return knex('illustrations').insert([
    {
      title: 'test',
      src: 'test',
      description: 'test',
      medium: 'test',
      date: 'test'
    }
  ]);
};
