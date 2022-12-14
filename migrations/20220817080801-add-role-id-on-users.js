'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return queryInterface.addColumn('Users', 'RoleId', {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'Roles'
        },
        key: 'id'
      }
    });
  },

  down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeColumn('Users', 'RoleId', {});
  }
};
