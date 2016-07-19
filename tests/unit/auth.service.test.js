describe('[Unit Tests] Auth Module', function () {
  var $httpBackend,
      Auth;

  var user = {
      email: "test@test.com",
      username: "test",
      first_name: "test",
      last_name: "test",
      password: "testtest",
      is_admin: true,
      created_at: "2016-07-07T18:25:43.511Z",
      updated_at: "2016-07-07T18:25:43.511Z"
  }

  beforeEach(function(){
    angular.mock.module('task_list.utils.services');
    angular.mock.module('task_list.auth.services');
  });

  beforeEach(inject(function($injector){
    Auth = $injector.get('Auth');
    $httpBackend = $injector.get('$httpBackend');

    $httpBackend.when('POST', '/api/v1/accounts/')
      .respond(200, user);
    $httpBackend.when('POST', '/api/v1/auth/login/')
      .respond(200, {email: user.email, password: user.password});
    $httpBackend.when('POST', '/api/v1/auth/logout/')
      .respond(200, {success: true})
  }));

  afterEach(function(){
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  // test to verify the services exists
  it('should have services be defined', function(){
    expect(Auth).toBeDefined();
    expect($httpBackend).toBeDefined();
  });

  // test to verify no user is authenticated
  it('should not have a user authenticated at start', function(){
    expect(Auth.getAuthenticatedAccount()).toEqual(undefined);
  })

  // test to verify user registration
  it('should register user', function(){
    Auth.register(user);
    $httpBackend.expectPOST('/api/v1/accounts/');
    $httpBackend.flush();

    // get authenticated user since
    // after registration user is logged in
    var authUser = Auth.getAuthenticatedAccount();
    expect(authUser.email).toEqual(user.email);
  });

  // test to verify login
  // will also test Auth.setAuthenticatedAccount()
  it('should log user in', function(){
    Auth.login(user);
    $httpBackend.expectPOST('/api/v1/auth/login/');
    $httpBackend.flush();

    // get authenticated user
    var authUser = Auth.getAuthenticatedAccount();
    expect(authUser.email).toEqual(user.email);
  });

  // test to verify user has been logged out
  // will also test Auth.unauthenticate()
  it('should log user out', function(){
    Auth.logout();
    $httpBackend.expectPOST('/api/v1/auth/logout/');
    $httpBackend.flush();

    // no auth user
    var authUser = Auth.getAuthenticatedAccount();
    expect(authUser).toEqual(undefined);
  })

});
