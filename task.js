
var task = object.create(object.prototype);

task.title = 'My Task';
task.description = 'My Task Description';

task.toString = function(){
    return this.title + ' ' + this.description;
}


console.log(task.toString());