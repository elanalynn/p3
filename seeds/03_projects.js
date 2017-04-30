exports.seed = function(knex) {
  return knex('projects').insert([
    {
      title: 'test',
      cover_src: 'test',
      description: 'test',
      technology: 'test',
      materials: 'test',
      collaborators: 'test',
      category: 'test',
      date: 'test'
    }
  ]);
}
