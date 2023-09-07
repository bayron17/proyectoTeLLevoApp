import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnvoCorreoPage } from './envo-correo.page';

describe('EnvoCorreoPage', () => {
  let component: EnvoCorreoPage;
  let fixture: ComponentFixture<EnvoCorreoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnvoCorreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
