import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenu, MatMenuItem, MatMenuModule, MatToolbar, MatToolbarModule, MatToolbarRow, MatIcon } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticatedGuard } from './guards';


@NgModule({
    declarations: [],
    providers: [AuthenticatedGuard],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule
    ],
    exports: [
        MatToolbar,
        MatToolbarRow,
        MatMenu,
        MatMenuItem,
        MatIcon
    ]
})
export class PriorxSharedModule { }
