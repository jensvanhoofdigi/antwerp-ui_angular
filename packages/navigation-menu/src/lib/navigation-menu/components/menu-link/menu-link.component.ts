import {Component, Input, ViewChild, ElementRef, OnInit, ChangeDetectionStrategy, HostBinding} from '@angular/core';
import {Menu} from '../../interfaces';
import {lookForIllegalNodes} from '../../services/helpers';

@Component({
	selector: 'aui-menu-link',
	templateUrl: './menu-link.component.html',
	styleUrls: ['./menu-link.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuLinkComponent implements OnInit, Menu.ChecksChildren {
	/**
	 * Content used to check if the user is inserting more than just text in here
	 */
	@ViewChild('inclusedContent')
	public ngContent: ElementRef<HTMLElement>;

	@HostBinding('attr.tabindex')
	tabIndex = -1;

	@Input()
	href: string;
	@Input()
	routerLink: string[];

	ngOnInit() {
		this.checkChildren();
	}

	checkChildren(): void {
		lookForIllegalNodes(this.ngContent, [] /* We only support text in this node*/);
	}


}