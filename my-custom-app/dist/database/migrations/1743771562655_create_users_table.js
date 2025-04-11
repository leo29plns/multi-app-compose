"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@adonisjs/lucid/schema");
class default_1 extends schema_1.BaseSchema {
    constructor() {
        super(...arguments);
        this.tableName = 'users';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').notNullable();
            table.string('full_name').nullable();
            table.string('email', 254).notNullable().unique();
            table.string('password').notNullable();
            table.timestamp('created_at').notNullable();
            table.timestamp('updated_at').nullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1743771562655_create_users_table.js.map