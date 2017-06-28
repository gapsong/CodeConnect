var bookshelf = require('../config/bookshelf');
var knex = bookshelf.knex;

exports.addProject = function(req, res) {
  knex('projects').insert({project_id: req.body.project_id, name: req.body.name}).then(() => {
    knex('isMentor').insert({user_id: req.user.github.id, project_id: req.body.project_id}).then(() => {
      res.json({success: true});
    });
  });
}

exports.getProjects = function() {
  return knex.select('projects.project_id', 'projects.name', 'projects.chatroom').from('projects').then(function(rows) {
    console.log(rows[0]);
      //ich versuche alle sachen zu triggern und am ende dann tasks innerhalb von den projekten wiederfinden kann
      return rows;
  });
}

exports.getProjectsAndTasks = function(){
  return knex.select('projects.project_id', 'projects.name', 'projects.chatroom').from('projects').then(function(rows) {
    return Promise.all(rows.map((item) => {
      console.log(item);
      return knex.select('projects.project_id', 'projects.name', 'projects.chatroom').from('projects').then(function(rows) {
          // console.log(rows[0]);
          //ich versuche alle sachen zu triggern und am ende dann tasks innerhalb von den projekten wiederfinden kann
          return rows;
      });
    }));
  });
}
