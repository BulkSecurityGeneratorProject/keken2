import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager, ParseLinks, PaginationUtil, JhiLanguageService, AlertService } from 'ng-jhipster';

import { UserExtra } from './user-extra.model';
import { UserExtraService } from './user-extra.service';
import { ITEMS_PER_PAGE, Principal } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-user-extra',
    templateUrl: './user-extra.component.html'
})
export class UserExtraComponent implements OnInit, OnDestroy {
userExtras: UserExtra[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private userExtraService: UserExtraService,
        private alertService: AlertService,
        private eventManager: EventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.userExtraService.query().subscribe(
            (res: Response) => {
                this.userExtras = res.json();
            },
            (res: Response) => this.onError(res.json())
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInUserExtras();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: UserExtra) {
        return item.id;
    }
    registerChangeInUserExtras() {
        this.eventSubscriber = this.eventManager.subscribe('userExtraListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
