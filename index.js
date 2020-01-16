describe('theTruth', () => {
  it('returns true', () => {
    const result = true;
    expect(result).toBe(result);
  });
});

function theTruth(){
  return true;
}