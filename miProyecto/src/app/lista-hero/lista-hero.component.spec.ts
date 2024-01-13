import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHeroComponent } from './lista-hero.component';

describe('ListaHeroComponent', () => {
  let component: ListaHeroComponent;
  let fixture: ComponentFixture<ListaHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
