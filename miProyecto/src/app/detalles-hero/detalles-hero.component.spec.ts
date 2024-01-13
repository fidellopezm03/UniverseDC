import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesHeroComponent } from './detalles-hero.component';

describe('DetallesHeroComponent', () => {
  let component: DetallesHeroComponent;
  let fixture: ComponentFixture<DetallesHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
