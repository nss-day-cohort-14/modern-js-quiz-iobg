describe("The robots file should have",function(){
  it("A robot function defined",function(){
    expect(Robot).toBeDefined();
  });
  it("Three types of the robot function",function(){
    expect(Biped).toBeDefined();
    expect(Quadruped).toBeDefined();
    expect(Drone).toBeDefined();
  });
  it("2 Specific models for each type",function(){
    expect(Humanoid).toBeDefined();
    expect(Giant).toBeDefined();
    expect(Wolf).toBeDefined();
    expect(Bear).toBeDefined();
    expect(Helicopter).toBeDefined();
    expect(Plane).toBeDefined();
  })
})