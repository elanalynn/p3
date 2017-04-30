exports.up = function(knex) {
    return knex.schema.createTable('projects', table => {
        table.string('title');
        table.string('cover_src');
        table.string('description');
        table.string('technology');
        table.string('materials');
        table.string('collaborators');
        table.string('category');
        table.string('date');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects');
}
