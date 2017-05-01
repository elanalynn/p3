exports.up = function(knex) {
    return knex.schema.createTable('posts', table => {
        table.increments();
        table.string('blurb');
        table.text('body');
        table.string('cover_src');
        table.string('date');
        table.string('title');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('posts');
}
