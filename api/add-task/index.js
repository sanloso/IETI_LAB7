module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    if(req.method=="GET"){
        context.res={
            status:200,
            body:taskList
        }

    } else if(req.method=="POST"){
        const task = req.body;
        taskList.push(task)
        context.res = {
            status:201
        }

    }
};

var taskList = [
    {
        id: 1,
        text: "prueba",
        status: "In Progess",
        dueDate: new Date().toLocaleDateString(),
        responsible: "Santiago",
    }
]