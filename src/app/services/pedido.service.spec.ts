import { PedidoService } from './pedido.service';
import { TestBed } from '@angular/core/testing';

describe('PedidoService', () => {
  let service: PedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
