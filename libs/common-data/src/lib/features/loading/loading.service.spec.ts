import { UniLoadingService } from './loading.service';

describe('UniLoadingService', () => {
  let service: UniLoadingService;

  beforeEach(() => {
    service = new UniLoadingService();
  });

  it('#totalRequests should be "0"', () => {
    expect(service.totalRequests).toBe(0);
  });

  it('#totalRequests should be increased to "1"', () => {
    service.totalRequests++;
    expect(service.totalRequests).toBe(1);
  });

  it('#isLoading should be "false"', () => {
    expect(service.isLoading()).toBe(false);
  });

  it('#isLoading should be "true" after #setLoading(true)', () => {
    service.setLoading(true);
    expect(service.isLoading()).toBe(true);
  });

  it('#isLoading should be "false" after #setLoading(false)', () => {
    service.setLoading(false);
    expect(service.isLoading()).toBe(false);
  });
});
