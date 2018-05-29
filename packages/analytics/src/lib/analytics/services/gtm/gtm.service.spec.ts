import { Component, NgModule } from '@angular/core';
import { async, TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { WINDOW } from '@acpaas-ui/ngx-components/utils';

import { GTMService } from './gtm.service';
import { GTM_CONFIG, defaultGTMConfig } from './config.conf';

const mockWindow = {
	dataLayer: [],
};

describe('The GTM Service', () => {
	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			providers: [
				{ provide: WINDOW, useValue: mockWindow },
				{ provide: GTM_CONFIG, useValue: defaultGTMConfig },
				GTMService,
			],
		}).compileComponents();
	}));

	it('should trigger a pageView', inject([GTMService], (gtmService: GTMService) => {
		spyOn(gtmService, 'trigger');
		gtmService.triggerPageView();
		expect(gtmService.trigger).toHaveBeenCalledWith('virtualPageView', {});
	}));

	it('should trigger a pageView with extra variables', inject([GTMService], (gtmService: GTMService) => {
		spyOn(gtmService, 'trigger');
		gtmService.triggerPageView({
			userRole: 'admin',
		});
		expect(gtmService.trigger).toHaveBeenCalledWith('virtualPageView', { userRole: 'admin' });
	}));

	it('should trigger an event', inject([GTMService], (gtmService: GTMService) => {
		spyOn(gtmService, 'trigger');
		gtmService.triggerEvent('button', 'click');
		expect(gtmService.trigger).toHaveBeenCalledWith('eventTrigger', {
			eventCategory: 'button',
			eventAction: 'click',
			eventLabel: undefined,
			eventValue: undefined,
		});
	}));

	it('should trigger an event with label and value', inject([GTMService], (gtmService: GTMService) => {
		spyOn(gtmService, 'trigger');
		gtmService.triggerEvent('button', 'click', 'CTA', 10);
		expect(gtmService.trigger).toHaveBeenCalledWith('eventTrigger', {
			eventCategory: 'button',
			eventAction: 'click',
			eventLabel: 'CTA',
			eventValue: 10,
		});
	}));

	it('should trigger any custom trigger', inject([GTMService], (gtmService: GTMService) => {
		spyOn(gtmService, 'addToDataLayer');
		gtmService.trigger('myCustomTrigger');
		expect(gtmService.addToDataLayer).toHaveBeenCalledWith({
			event: 'myCustomTrigger',
		});
	}));

	it('should trigger any custom trigger with data', inject([GTMService], (gtmService: GTMService) => {
		spyOn(gtmService, 'addToDataLayer');
		gtmService.trigger('myCustomTrigger', {
			myData: 'test',
		});
		expect(gtmService.addToDataLayer).toHaveBeenCalledWith({
			event: 'myCustomTrigger',
			myData: 'test',
		});
	}));
});
