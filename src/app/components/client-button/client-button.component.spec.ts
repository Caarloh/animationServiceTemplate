import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientButtonComponent } from './client-button.component';

describe('ClientButtonComponent', () => {
  let component: ClientButtonComponent;
  let fixture: ComponentFixture<ClientButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
