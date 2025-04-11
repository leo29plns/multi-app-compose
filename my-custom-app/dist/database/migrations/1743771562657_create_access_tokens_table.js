"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@adonisjs/lucid/schema");
class default_1 extends schema_1.BaseSchema {
    constructor() {
        super(...arguments);
        this.tableName = 'auth_access_tokens';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table
                .integer('tokenable_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE');
            table.string('type').notNullable();
            table.string('name').nullable();
            table.string('hash').notNullable();
            table.text('abilities').notNullable();
            table.timestamp('created_at');
            table.timestamp('updated_at');
            table.timestamp('last_used_at').nullable();
            table.timestamp('expires_at').nullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1743771562657_create_access_tokens_table.js.map