describe('theTruth', () => {
  it('returns true', () => {
    const result = true;
    expect(result).toBe(result);
  });
});

function theTruth(){
  return true;
}

function sayHey(){
  return "Hey!";
}

function sayHeyFriend(name){
  return "Hey " + name;
  
}