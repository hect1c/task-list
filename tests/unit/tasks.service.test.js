describe('[Unit Tests] Tasks Service', function () {
  var $httpBackend,
      Tasks;

  var tasks = [
    {
      "id": 1,
      "name": "Task 1 Dummy",
      "description": "Here is an example of task 1 description dummy.",
      "created_by": 1,
      "updated_by": 1,
      "status": false,
      "created_at": "2016-07-07T18:25:43.511Z",
      "updated_at": "2016-07-07T18:25:43.511Z"
    },
    {
      "id": 2,
      "name": "Task 1 Dummy",
      "description": "Here is an example of task 1 description dummy.",
      "created_by": 1,
      "updated_by": 1,
      "status": false,
      "created_at": "2016-07-07T18:25:43.511Z",
      "updated_at": "2016-07-07T18:25:43.511Z"
    },
    {
      "id": 3,
      "name": "Task 1 Dummy",
      "description": "Here is an example of task 1 description dummy.",
      "created_by": 1,
      "updated_by": 1,
      "status": false,
      "created_at": "2016-07-07T18:25:43.511Z",
      "updated_at": "2016-07-07T18:25:43.511Z"
    }
  ];


  beforeEach(function(){
    angular.mock.module('task_list.utils.services');
    angular.mock.module('task_list.tasks.services');
  });

  beforeEach(inject(function($injector){
    Tasks = $injector.get('Tasks');
    $httpBackend = $injector.get('$httpBackend');

    $httpBackend.when('GET', '/api/v1/tasks/')
      .respond(200, tasks);
    $httpBackend.when('POST', '/api/v1/tasks/')
      .respond(200, tasks);
    $httpBackend.when('PUT', '/api/v1/tasks/' + tasks[0].id + '/', tasks[0] )
      .respond(200, {success: true});
    $httpBackend.when('DELETE', '/api/v1/tasks/' + tasks[0].id + '/')
      .respond(200, {success: true} );
  }));

  afterEach(function(){
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  // test to verify the services exists
  it('should have services be defined', function(){
    expect(Tasks).toBeDefined();
    expect($httpBackend).toBeDefined();
  });

  // get all tasks
  it('should get all tasks', function(){
    var response;

    Tasks.all().then((value) => { response = value; });

    $httpBackend.expectGET('/api/v1/tasks/');
    $httpBackend.flush();

    expect(response.data).toEqual(tasks);
  });

  it('should create a new task', function(){
    var response;

    Tasks.create("New Task", "Description", false, "user@user.com", "user@user.com").then((value) => { response = value; })

    $httpBackend.expectPOST('/api/v1/tasks/');
    $httpBackend.flush();

    expect(response.data).toEqual(tasks);
  });

  it('should edit a task', function(){
    var response;

    Tasks.update(tasks[0]).then((value) => { response = value; })

    $httpBackend.expectPUT('/api/v1/tasks/' + tasks[0].id + '/', tasks[0]);
    $httpBackend.flush();

    expect(response.data.success).toEqual(true);
  })

  it('should delete a task', function(){
    var response;

    Tasks.destroy(tasks[0]).then((value) => { response = value; })

    $httpBackend.expectDELETE('/api/v1/tasks/' + tasks[0].id + '/');
    $httpBackend.flush();

    expect(response.data.success).toEqual(true);
  });
});
