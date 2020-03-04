import {NgModule} from '@angular/core';
import {FooterModule} from '../../../aui-layout/src/lib/footer';
import {LogoModule} from '../../../aui-logo/src/lib';
import {HeaderModule} from '../../../aui-layout/src/lib/header';
import {NavigationMenuModule} from '../../../aui-navigation-menu/src/lib/navigation-menu';
import {CodeSnippetModule} from '../../../aui-code-snippet/src/lib/code-snippet';
import {AnalyticsModule} from '../../../aui-analytics/src/lib/analytics';
import {AgendaModule} from '../../../aui-agenda/src/lib/agenda';
import {AvatarModule} from '../../../aui-avatar/src/lib/avatar';
import {CalendarModule} from '../../../aui-calendar/src/lib/calendar';
import {ContextModule} from '../../../aui-context/src/lib/context';
import {FlyoutModule} from '../../../aui-flyout/src/lib/flyout';
import {FlyoutButtonModule} from '../../../aui-flyout/src/lib/flyout-button';
import {LocalstorageModule} from '../../../aui-localstorage/src/lib/localstorage';
import {LeafletModule} from '../../../aui-map/src/lib/leaflet';
import {PaginationModule} from '../../../aui-pagination/src/lib/pagination';
import {ItemCounterModule} from '../../../aui-pagination/src/lib/item-counter';
import {ProgressBarModule} from '../../../aui-progress-bar/src/lib/progress-bar';
import {TableModule} from '../../../aui-table/src/lib/table';
import {UserMenuModule} from '../../../aui-user-menu/src/lib/user-menu';
import {SelectableListModule} from '../../../aui-selectable-list/src/lib/selectable-list';

@NgModule({
  imports: [
    FooterModule,
    LogoModule,
    HeaderModule,
    CodeSnippetModule,
    NavigationMenuModule.configure(),
    AnalyticsModule,
    AgendaModule,
    AvatarModule,
    CalendarModule,
    ContextModule,
    FlyoutModule,
    FlyoutButtonModule,
    LocalstorageModule.forRoot({
      storageType: 'sessionStorage',
      identifier: 'my-app-v1',
    }),
    LeafletModule,
    PaginationModule,
    ItemCounterModule,
    ProgressBarModule,
    TableModule,
    UserMenuModule,
    SelectableListModule
  ],
  exports: [
    FooterModule,
    CodeSnippetModule,
    LogoModule,
    NavigationMenuModule,
    HeaderModule,
    AnalyticsModule,
    AgendaModule,
    AvatarModule,
    CalendarModule,
    ContextModule,
    FlyoutModule,
    FlyoutButtonModule,
    LocalstorageModule,
    LeafletModule,
    PaginationModule,
    ItemCounterModule,
    ProgressBarModule,
    TableModule,
    UserMenuModule,
    SelectableListModule
  ]
})
export class AuiModule {

}
