import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthorComponent } from './author/author.component';
import { AddquoteComponent } from './addquote/addquote.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'add', component: AddComponent },
    // { path: 'edit', component: EditComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'author/:id', component: AuthorComponent },
    { path: 'addquote/:id', component: AddquoteComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: '**', component: PagenotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }