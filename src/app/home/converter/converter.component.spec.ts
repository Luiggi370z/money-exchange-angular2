import { NO_ERRORS_SCHEMA, Component } from '@angular/core';

import {
  inject,
  async,
  TestBed,
  ComponentFixture,
  getTestBed
} from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

/**
 * Load the implementations that should be tested.
 */
import { ApiService } from '../../core';
import { ConverterComponent } from './converter.component';

describe(`Converter Component`, () => {
    let comp: ConverterComponent;
    let fixture: ComponentFixture<ConverterComponent>;
    let injector: TestBed;
    let service: ApiService;
    let httpMock: HttpTestingController;

    beforeEach(async(() => {

      TestBed.configureTestingModule({
        declarations: [ ConverterComponent ],
        schemas: [ NO_ERRORS_SCHEMA ],
        imports: [ HttpClientTestingModule ],
        providers: [ ApiService ]
      })

        /**
         * Compile template and css.
         */
        .compileComponents();

      injector = getTestBed();
      service = injector.get(ApiService);
      httpMock = injector.get(HttpTestingController);
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ConverterComponent);
      comp = fixture.componentInstance;

      /**
       * Trigger initial data binding.
       */
      fixture.detectChanges();
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should calculate the correct converted currency value', async(() => {
        comp.currencyFrom = 'USD';
        comp.currencyTo = 'EUR';
        comp.inputValue = 200;

        let response = {
            base: 'USD',
            date: '2018-01-30',
            rates: {
                EUR: 0.80509
            }
        };

        comp.calculate();

        let req = httpMock
            // tslint:disable-next-line:no-shadowed-variable
            .expectOne((req) => req.method === 'GET'
                && req.url.indexOf('http://api.fixer.io/latest') !== -1);

        expect(req.request.method).toEqual('GET');
        req.flush(response);

        expect(comp.calculatedValue).toEqual(161.018);
    }));
});
