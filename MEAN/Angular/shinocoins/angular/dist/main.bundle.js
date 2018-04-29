webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var mine_component_1 = __webpack_require__("./src/app/mine/mine.component.ts");
var buy_component_1 = __webpack_require__("./src/app/buy/buy.component.ts");
var sell_component_1 = __webpack_require__("./src/app/sell/sell.component.ts");
var browse_component_1 = __webpack_require__("./src/app/browse/browse.component.ts");
var details_component_1 = __webpack_require__("./src/app/details/details.component.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'mine', component: mine_component_1.MineComponent },
    { path: 'buy', component: buy_component_1.BuyComponent },
    { path: 'sell', component: sell_component_1.SellComponent },
    { path: 'browse', component: browse_component_1.BrowseComponent },
    { path: 'detail', component: details_component_1.DetailsComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\n    vertical-align: center;\n    font-size: 12px;\n    font-weight: bold;\n    text-align: center;\n    display: inline-block;\n    height: 30px;\n    width: 120px;\n    border-style: solid 2px;\n    border-radius: 5px;\n    background-color: #D3D3D3;\n    padding: 5px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\" class=\"container\">\n  <button [routerLink]=\"['home']\" class=\"navbar\">Home</button>\n  <button [routerLink]=\"['mine']\" class=\"navbar\">Mine Coins</button>\n  <button [routerLink]=\"['buy']\" class=\"navbar\">Buy Coins</button>\n  <button [routerLink]=\"['sell']\" class=\"navbar\">Sell Coins</button>\n  <button [routerLink]=\"['browse']\" class=\"navbar\">Browse Ledger</button>\n</div>\n\n<div style=\"text-align: center\">\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var service_service_1 = __webpack_require__("./src/app/service.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._router.navigate(['/home']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [service_service_1.ServiceService,
            router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var service_service_1 = __webpack_require__("./src/app/service.service.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var mine_component_1 = __webpack_require__("./src/app/mine/mine.component.ts");
var buy_component_1 = __webpack_require__("./src/app/buy/buy.component.ts");
var sell_component_1 = __webpack_require__("./src/app/sell/sell.component.ts");
var browse_component_1 = __webpack_require__("./src/app/browse/browse.component.ts");
var details_component_1 = __webpack_require__("./src/app/details/details.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                mine_component_1.MineComponent,
                buy_component_1.BuyComponent,
                sell_component_1.SellComponent,
                browse_component_1.BrowseComponent,
                details_component_1.DetailsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [service_service_1.ServiceService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/browse/browse.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Browse the Ledger</h2>\n\n<p>Here you can etc.</p>\n\n<h3>ShintoCoin Ledger</h3>\n<table>\n  <tr>\n    <td>Action</td>\n    <td>Amount</td>\n    <td>Value</td>\n  </tr>\n  <tr *ngFor=\"let tran of trans\">\n    <td> {{ tran.action }} </td>\n    <td> {{ tran.amount }} </td>\n    <td> {{ tran.value }} </td>\n    <form (submit)=\"submitID(tranid.value)\">\n      <input type=\"submit\" value=\"Details\">\n      <input #tranid type=\"hidden\" value=\"{{ tran.id }}\">\n    </form>\n    <td> {{ tran.id }} </td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/browse/browse.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var service_service_1 = __webpack_require__("./src/app/service.service.ts");
var BrowseComponent = /** @class */ (function () {
    function BrowseComponent(_service) {
        this._service = _service;
        this.trans = this._service.allTrans;
    }
    BrowseComponent.prototype.ngOnInit = function () {
    };
    BrowseComponent.prototype.submitID = function (id) {
        console.log("id is: ", id);
    };
    BrowseComponent = __decorate([
        core_1.Component({
            selector: 'app-browse',
            template: __webpack_require__("./src/app/browse/browse.component.html"),
            styles: [__webpack_require__("./src/app/browse/browse.component.css")]
        }),
        __metadata("design:paramtypes", [service_service_1.ServiceService])
    ], BrowseComponent);
    return BrowseComponent;
}());
exports.BrowseComponent = BrowseComponent;


/***/ }),

/***/ "./src/app/buy/buy.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/buy/buy.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Buy ShintoCoins</h2>\n\n<p>Current ShintoCoin Value: {{ value }} </p>\n<p>Number of ShintoCoins Owned: {{ coins }} </p>\n\n<form (submit)=\"submitBuy(numfield.value)\" >\n  <input #numfield type=\"number\" placeholder=\"Number\" name=\"number\">\n  <input type=\"submit\" value=\"Buy\">\n</form>"

/***/ }),

/***/ "./src/app/buy/buy.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var service_service_1 = __webpack_require__("./src/app/service.service.ts");
var BuyComponent = /** @class */ (function () {
    function BuyComponent(_service) {
        this._service = _service;
        this.value = this._service.shintoCoinValue;
        this.coins = this._service.shintoCoinsOwned;
    }
    BuyComponent.prototype.ngOnInit = function () {
    };
    BuyComponent.prototype.submitBuy = function (num) {
        console.log("bought a coin!");
        console.log("this.coin is: ", this.coins);
        console.log("num is: ", num);
        console.log("num type is: ", num.type);
        this.value += num;
        this.coins += num;
        console.log("value is: ", this.value);
        console.log("coins are: ", this.coins);
    };
    BuyComponent = __decorate([
        core_1.Component({
            selector: 'app-buy',
            template: __webpack_require__("./src/app/buy/buy.component.html"),
            styles: [__webpack_require__("./src/app/buy/buy.component.css")]
        }),
        __metadata("design:paramtypes", [service_service_1.ServiceService])
    ], BuyComponent);
    return BuyComponent;
}());
exports.BuyComponent = BuyComponent;


/***/ }),

/***/ "./src/app/details/details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  details works!\n</p>\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-details',
            template: __webpack_require__("./src/app/details/details.component.html"),
            styles: [__webpack_require__("./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>ShintoCoin</h2>\n\n<p>textontext</p>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/mine/mine.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mine/mine.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Mine ShintoCoins</h2>\n\n<p>Question: {{ question }} </p>\n\n<form (submit)=\"submitInput()\" >\n  <p> {{ answer | json }} </p>\n  <input type=\"text\" name=\"input\" placeholder=\"Number\" [(ngModel)] = answer >\n  <input type=\"submit\" value=\"Mine\">\n</form>"

/***/ }),

/***/ "./src/app/mine/mine.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var service_service_1 = __webpack_require__("./src/app/service.service.ts");
var MineComponent = /** @class */ (function () {
    function MineComponent(_service) {
        this._service = _service;
        this.atrans = {
            action: "",
            amount: 0,
            value: this._service.shintoCoinValue,
            id: this._service.id
        };
    }
    MineComponent.prototype.ngOnInit = function () {
        this.question = this._service.question;
    };
    MineComponent.prototype.submitInput = function () {
        if (this.answer == this._service.answersArray[this._service.randInt]) {
            console.log("answered correctly!");
            this._service.shintoCoinValue++;
            this.question = this._service.question;
            console.log("shintoCoinValue is: ", this._service.shintoCoinValue);
            this.atrans["action"] = "Mined";
            this.atrans["amount"] += 1;
            this.atrans["id"]++;
            this._service.allTrans.push(this.atrans);
            console.log("this._service.allTrans is: ", this._service.allTrans);
        }
        else {
            console.log("incorrect answer");
            this.question = this._service.question;
        }
    };
    MineComponent = __decorate([
        core_1.Component({
            selector: 'app-mine',
            template: __webpack_require__("./src/app/mine/mine.component.html"),
            styles: [__webpack_require__("./src/app/mine/mine.component.css")]
        }),
        __metadata("design:paramtypes", [service_service_1.ServiceService])
    ], MineComponent);
    return MineComponent;
}());
exports.MineComponent = MineComponent;


/***/ }),

/***/ "./src/app/sell/sell.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sell/sell.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Sell ShintoCoins</h2>\n\n<p>Current ShintoCoin Value: {{ value }} </p>\n<p>Number of ShintoCoins Owned: {{ coins }} </p>\n\n<form (submit)=\"submitSell()\" >\n  <input type=\"number\" placeholder=\"Number\" name=\"number\">\n  <input type=\"submit\" value=\"Sell\">\n</form>"

/***/ }),

/***/ "./src/app/sell/sell.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var service_service_1 = __webpack_require__("./src/app/service.service.ts");
var SellComponent = /** @class */ (function () {
    function SellComponent(_service) {
        this._service = _service;
        this.coins = this._service.shintoCoinsOwned;
        this.value = this._service.shintoCoinValue;
    }
    SellComponent.prototype.ngOnInit = function () {
    };
    SellComponent.prototype.submitSell = function () {
        console.log("sold a coin!");
        this.coins--;
        this.value--;
        console.log("coins is: ", this.coins);
        console.log("value is: ", this.value);
    };
    SellComponent = __decorate([
        core_1.Component({
            selector: 'app-sell',
            template: __webpack_require__("./src/app/sell/sell.component.html"),
            styles: [__webpack_require__("./src/app/sell/sell.component.css")]
        }),
        __metadata("design:paramtypes", [service_service_1.ServiceService])
    ], SellComponent);
    return SellComponent;
}());
exports.SellComponent = SellComponent;


/***/ }),

/***/ "./src/app/service.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var ServiceService = /** @class */ (function () {
    function ServiceService(_httpClient) {
        this._httpClient = _httpClient;
        this.shintoCoinsOwned = 0;
        this.shintoCoinValue = 1;
        this.questionsArray = ["Question 1", "Question 2", "Question 3"];
        this.answersArray = ["1", "2", "3"];
        this.randInt = this.randomNumber();
        this.question = this.questionsArray[this.randInt];
        this.id = 0;
        this.allTrans = [];
    }
    ServiceService.prototype.randomNumber = function () {
        return Math.floor(Math.random() * Math.floor(this.questionsArray.length - 1));
    };
    ServiceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ServiceService);
    return ServiceService;
}());
exports.ServiceService = ServiceService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map