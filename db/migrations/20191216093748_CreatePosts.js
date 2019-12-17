
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts',table => {
        table.increments('id');
        table.string('username');
        table.text('content');
        table.text("imageUrl");
        table.timestamp('createAt').defaultTo(knex.fn.now());
        table.timestamp('updateAt');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("posts");
};
