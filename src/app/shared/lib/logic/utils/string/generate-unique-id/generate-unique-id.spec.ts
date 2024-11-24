import { generateUniqueId } from './generate-unique-id';

describe('generateUniqueId', () => {
  const validateUniqueId = (id: string) => {
    expect(typeof id).toBe('string');
  };

  it(`Given a call to generateUniqueId
        When the function is executed
        Then it should return a unique string ID`, () => {
    // Act
    const id1 = generateUniqueId();
    const id2 = generateUniqueId();

    // Assert
    validateUniqueId(id1);
    validateUniqueId(id2);
    expect(id1).not.toBe(id2);
  });

  it(`Given a call to generateUniqueId
        When the function is executed
        Then it should return a string of numeric characters`, () => {
    // Act
    const id = generateUniqueId();

    // Assert
    validateUniqueId(id);
    expect(/^\d+$/.test(id)).toBe(true);
  });
});
