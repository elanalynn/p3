exports.up = function(knex) {
    return knex.schema.createTable('projects', table => {
        table.increments();
        table.string('category');
        table.string('collaborators');
        table.string('cover_src');
        table.string('description');
        table.string('materials');
        table.string('technology');
        table.string('title');
        table.string('year');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects');
}
