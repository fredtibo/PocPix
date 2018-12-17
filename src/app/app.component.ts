import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>
			   <router-outlet name="popup"></router-outlet>`
})
export class AppComponent implements OnInit {

    constructor(private translate: TranslateService) {
    }

    public ngOnInit(): void {
        const language = 'fr-CA';
        this.translate.setDefaultLang(language);
        this.translate.use(language)
            .subscribe();
    }
}
