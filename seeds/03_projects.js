exports.seed = function(knex) {
  return knex('projects').insert([
    {
      category: 'test',
      collaborators: 'test',
      cover_src: 'test',
      description: 'test',
      technology: 'test',
      materials: 'test',
      title: 'test',
      year: 'test'
    }
  ]);
}
