module.exports = {
  info: {
    name: 'Main',
    description: 'The main database',
  },
  def: (Sequelize) =>{
    return {
      // attributes
      user_id: {
        type: Sequelize.STRING,
      },
      key: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      value: {
        type: Sequelize.STRING,
        // allowNull defaults to true
      },
    };
  },
};
