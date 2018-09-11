import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class SelectableListDemoPageComponent {
	public index = 0;

	public heroes = [
		{ name: 'Spiderman' },
		{ name: 'Wolverine' },
		{ name: 'Iron man' },
	];

	public activeHero = this.heroes[this.index];

	public javascript1 = `import { SelectableListModule } from '@acpaas-ui/ngx-components/selectable-list';

@NgModule({
	imports: [
		SelectableListModule
	]
});

export class AppModule {};`;

	public javascript2 = `public index = 0;

public heroes = [
	{ name: 'spiderman' },
	{ name: 'wolverine' },
	{ name: 'ironman' }
];

public activeHero = this.heroes[this.index];

public onSelect(item) {
	this.index = this.heroes.findIndex(hero => hero.name === item.name);
	this.activeHero = item;
}`;

	public html = `<h4>Select your hero</h4>
<aui-selectable-list [items]="heroes" [index]="index" (selected)="onSelect($event)">
   <template let-item="item">
	   Template for: <b>{{ item.name }}</b>
   </template>
</aui-selectable-list>
<p><strong>Active hero</strong>: {{ activeHero }}</p>`;

	public onSelect(item) {
		this.index = this.heroes.findIndex(hero => hero.name === item.name);
		this.activeHero = item;
	}

}
