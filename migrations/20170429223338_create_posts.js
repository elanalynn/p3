exports.up = function(knex) {
    return knex.schema.createTable('posts', table => {
        table.string('title');
        table.string('cover_src');
        table.string('blurb');
        table.text('body');
        table.string('date');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('posts');
}
