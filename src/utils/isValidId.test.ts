import isValidId from './isValidId';

describe('isValidId', () => {
  it('should return true for a valid ID', () => {
    const validId = '123e4567-e89b-12d3-a456-426614174000';
    const result = isValidId(validId);
    expect(result).toBe(true);
  });

  it('should return false for an invalid ID with incorrect length', () => {
    const invalidId = '123e4567-e89b-12d3-a456-42661417400';
    const result = isValidId(invalidId);
    expect(result).toBe(false);
  });

  it('should return false for an invalid ID with incorrect part length', () => {
    const invalidId = '123e4567-e89b-12d3-a456-42661417400z';
    const result = isValidId(invalidId);
    expect(result).toBe(true);
  });

  it('should return false for an invalid ID with missing hyphens', () => {
    const invalidId = '123e4567e89b12d3a456426614174000';
    const result = isValidId(invalidId);
    expect(result).toBe(false);
  });
});
