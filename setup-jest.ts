import { NgModule } from '@angular/core';
import 'jest-preset-angular/setup-jest';

@NgModule()
export class SlideMenuMockModule {}
jest.mock('primeng/slidemenu', () => ({
  SlideMenuModule: SlideMenuMockModule,
}));

@NgModule()
export class PanelMenuMockModule {}
jest.mock('primeng/primeng/panelmenu', () => ({
  PanelMenuModule: PanelMenuMockModule,
}));
