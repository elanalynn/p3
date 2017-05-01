exports.up = function(knex) {
    return knex.schema.createTable('illustrations', table => {
        table.increments();
        table.string('title');
        table.string('src');
        table.string('medium');
        table.string('thumb');
        table.string('year');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('illustrations');
};
