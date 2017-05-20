import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Keken2SharedModule } from '../../shared';
import {
    BiereService,
    BierePopupService,
    BiereComponent,
    BiereDetailComponent,
    BiereDialogComponent,
    BierePopupComponent,
    BiereDeletePopupComponent,
    BiereDeleteDialogComponent,
    biereRoute,
    bierePopupRoute,
} from './';

const ENTITY_STATES = [
    ...biereRoute,
    ...bierePopupRoute,
];

@NgModule({
    imports: [
        Keken2SharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        BiereComponent,
        BiereDetailComponent,
        BiereDialogComponent,
        BiereDeleteDialogComponent,
        BierePopupComponent,
        BiereDeletePopupComponent,
    ],
    entryComponents: [
        BiereComponent,
        BiereDialogComponent,
        BierePopupComponent,
        BiereDeleteDialogComponent,
        BiereDeletePopupComponent,
    ],
    providers: [
        BiereService,
        BierePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Keken2BiereModule {}
