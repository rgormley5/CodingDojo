import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { BrowseComponent } from './browse/browse.component';
import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'mine', component: MineComponent },
    { path: 'buy', component: BuyComponent },
    { path: 'sell', component: SellComponent },
    { path: 'browse', component: BrowseComponent },
    { path: 'detail', component: DetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}