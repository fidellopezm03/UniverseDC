import { TestBed } from '@angular/core/testing';

import { ServicioHeroService } from './servicio-hero.service';

describe('ServicioHeroService', () => {
  let service: ServicioHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
