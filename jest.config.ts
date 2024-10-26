export default {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  //testEnvironment: '@happy-dom/jest-environment', // TODO: Solución momentánea para el problema con jsdom
  // Ver más detalles en: https://github.com/jsdom/jsdom/issues/2177#issuecomment-1724971596
  moduleNameMapper: {
    '^@environments/(.*)$': '<rootDir>/src/environments/$1',
    '^@shared/(.*)$': '<rootDir>/src/app/shared/$1',
    '^@example/(.*)$': '<rootDir>/src/app/features/name-feature/$1',
  },
  globalSetup: 'jest-preset-angular/global-setup',
};
