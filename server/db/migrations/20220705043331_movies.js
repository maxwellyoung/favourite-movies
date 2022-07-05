exports.up = function (knex) {
	return knex.schema.createTable('movies', (table) => {
		table.increments('id')
		table.string('movie')
		table.integer('year')
		table.string('director')
		table.string('genre')
	})
}

exports.down = function (knex) {
	return knex.schema.dropTable('movies')
}
