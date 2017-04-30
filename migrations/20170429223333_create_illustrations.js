exports.up = function(knex) {
    return knex.schema.createTable('illustrations', table => {
        table.string('title');
        table.string('src');
        table.string('description');
        table.string('medium');
        table.string('date');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('illustrations');
};
