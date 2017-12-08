
// jasmin matchers example
describe("Jasmine Matchers", function() {
     it("allows for === and deep equality", function() {
       expect(1+1).toBe(2);
       expect([1,2,3]).toEqual([1,2,3]);
     });
     it("allows for easy precision checking", function() {
       expect(3.1415).toBeCloseTo(3.14,2);
     });
     it("allows for easy truthy / falsey checking", function() {
       expect(0).toBeFalsy();
       expect([]).toBeTruthy();
     });
     it("allows for easy type checking", function() {
       expect([]).toEqual(jasmine.any(Array));
       expect(function(){}).toEqual(jasmine.any(Function));
     });
     it("allows for checking contents of an object", function() {
       expect([1,2,3]).toContain(1);
       expect({name:'Elie', job:'Instructor'}).toEqual(jasmine.objectContaining({name:'Elie'}));
     });
});

// Jasmin pending specs
describe("Pending specs", function(){

  xit("can start with an xit", function(){
    expect(true).toBe(true);
  });

  it("is a pending test if there is no callback function");

  it("is pending if the pending function is invoked inside the callback", function(){
    expect(2).toBe(2);
    pending();
  });

});

//settimeout example
describe("A simple setTimeout", function(){
  var sample;
  beforeEach(function(){
    sample = jasmine.createSpy("sampleFunction");
    jasmine.clock().install();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });
  it("is only invoked after 1000 ms", function(){
    setTimeout(function() {
      sample();
    },1000);
    jasmine.clock().tick(999);
    expect(sample).not.toHaveBeenCalled();
    jasmine.clock().tick(1);
    expect(sample).toHaveBeenCalled();
  })

});


//setinterval example
describe("A simple setInterval", function(){
  var sample;
  beforeEach(function(){
    sample = jasmine.createSpy("DummyFunction");
    jasmine.clock().install();
  });
  afterEach(function(){
    jasmine.clock().uninstall();
  });
  it("invoke every 1000ms",function(){
    setInterval(function(){
      sample();
    },1000)
    jasmine.clock().tick(999);
    expect(sample.calls.count()).toBe(0);
    jasmine.clock().tick(1);
    expect(sample.calls.count()).toBe(1);
  })

})

// test async code
describe("Test Async Call", function(){
    it("Returns correct name for the user", function(done){
      getUserInfo("rnaccache").then(function(data){
        expect(data.name).toBe('Robert Naccache');
        done();
      })
    })
})
