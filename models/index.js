const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack')

const Page = db.define('pages', {
  title: {
    type: Sequalize.STRING
  },
  slug: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  status : {
    type: Sequalize.ENUM('open', 'closed')
  }
});

const User = db.define('users', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
})


module.exports = {Page, User}
