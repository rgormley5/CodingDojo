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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var new_component_1 = __webpack_require__("./src/app/new/new.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var details_component_1 = __webpack_require__("./src/app/details/details.component.ts");
var refresh_component_1 = __webpack_require__("./src/app/refresh/refresh.component.ts");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'new', component: new_component_1.NewComponent },
    { path: 'edit/:id', component: edit_component_1.EditComponent },
    { path: 'details/:id', component: details_component_1.DetailsComponent },
    { path: 'refresh', component: refresh_component_1.RefreshComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Pet Shelter</h2>\n\n<router-outlet></router-outlet>"

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
var service_service_1 = __webpack_require__("./src/app/service.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(_service, _route, _router) {
        this._service = _service;
        this._route = _route;
        this._router = _router;
        this.title = 'newnew';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [service_service_1.ServiceService,
            router_1.ActivatedRoute,
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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var service_service_1 = __webpack_require__("./src/app/service.service.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var new_component_1 = __webpack_require__("./src/app/new/new.component.ts");
var details_component_1 = __webpack_require__("./src/app/details/details.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var refresh_component_1 = __webpack_require__("./src/app/refresh/refresh.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                new_component_1.NewComponent,
                details_component_1.DetailsComponent,
                edit_component_1.EditComponent,
                refresh_component_1.RefreshComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [service_service_1.ServiceService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/details/details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/home']\" >Home</a>\n\n<h3>Details about {{ animal['pet_name'] }} </h3>\n\nPet type: {{ animal['pet_type'] }} <br>\nDescription: {{ animal['pet_description'] }} <br>\nSkills: {{ animal['pet_skill_1'] }} <br>\n{{ animal['pet_skill_2'] }} <br>\n{{ animal['pet_skill_3'] }} <br>\nLikes: {{ animal['likes'] }} <br>\n\n<button (click)=\"likeClicked()\" >Like this pet</button>\n<button (click)=\"adoptClicked()\" >Adopt this pet</button>"

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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var service_service_1 = __webpack_require__("./src/app/service.service.ts");
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_service, _route, _router) {
        this._service = _service;
        this._route = _route;
        this._router = _router;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.getAnimalByID();
    };
    DetailsComponent.prototype.getAnimalByID = function () {
        var _this = this;
        var obs = this._service.getThisAnimal();
        obs.subscribe(function (data) {
            console.log("yay getAnimalByID data: ", data);
            _this.animal = data['data'][0];
        });
    };
    DetailsComponent.prototype.adoptClicked = function () {
        var obs = this._service.deleteThisAnimal();
        obs.subscribe(function (data) {
            console.log("yay adoptClicked data: ", data);
        });
        this._router.navigate(['/home']);
    };
    DetailsComponent.prototype.likeClicked = function () {
        var _this = this;
        var obs = this._service.addLike(this.animal);
        obs.subscribe(function (data) {
            console.log("yay likeClicked data: ", data);
        });
        this._router.navigateByUrl('/refreshComponent', { skipLocationChange: true }).then(function () { return _this._router.navigate(['/details/' + _this._service.tempID]); });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-details',
            template: __webpack_require__("./src/app/details/details.component.html"),
            styles: [__webpack_require__("./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [service_service_1.ServiceService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;


/***/ }),

/***/ "./src/app/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Edit this pet</h3>\n\n<p *ngIf=\"errors\" style=\"color: red\" > {{ error_message }} </p>\n\n<form (submit)=\"onSubmit()\" >\n    <label>Pet name:</label>\n    <input type=\"text\" name=\"pet_name\" [(ngModel)]=\"editAnimal.pet_name\" ><br>\n    <label>Pet type:</label>\n    <input type=\"text\" name=\"pet_type\" [(ngModel)]=\"editAnimal.pet_type\" ><br>\n    <label>Description:</label>\n    <input type=\"text\" name=\"pet_description\" [(ngModel)]=\"editAnimal.pet_description\" ><br>\n    <label>Skills:</label><br>\n    <label>Skill 1:</label>\n    <input type=\"text\" name=\"pet_skill_1\" [(ngModel)]=\"editAnimal.pet_skill_1\" ><br>\n    <label>Skill 2:</label>\n    <input type=\"text\" name=\"pet_skill_2\" [(ngModel)]=\"editAnimal.pet_skill_2\" ><br>\n    <label>Skill 3:</label>\n    <input type=\"text\" name=\"pet_skill_3\" [(ngModel)]=\"editAnimal.pet_skill_3\" ><br>\n    <input type=\"submit\" value=\"Edit pet\">\n    <button (click)=\"cancelButtonClicked()\" >Cancel</button>\n  </form>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
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
var EditComponent = /** @class */ (function () {
    function EditComponent(_service, _route, _router) {
        this._service = _service;
        this._route = _route;
        this._router = _router;
    }
    EditComponent.prototype.ngOnInit = function () {
        console.log("loaded edit.component.ts");
        this.errors = false;
        this.editAnimal = {
            pet_name: ""
        };
        this.getAnimalByID();
    };
    EditComponent.prototype.onSubmit = function () {
        var _this = this;
        var obs = this._service.editThisAnimal(this.editAnimal);
        obs.subscribe(function (data) {
            if (data['error']) {
                console.log("data is: ", data);
                _this.errors = true;
                _this.error_message = data['error']['message'];
            }
            else {
                console.log("yay onSubmit data: ", data);
                _this._router.navigate(['/home']);
            }
        });
    };
    EditComponent.prototype.cancelButtonClicked = function () {
        this._router.navigate(['/home']);
    };
    EditComponent.prototype.getAnimalByID = function () {
        var _this = this;
        var obs = this._service.getThisAnimal();
        obs.subscribe(function (data) {
            console.log("yay getAnimalByID data: ", data);
            _this.editAnimal.pet_name = data['data'][0]['pet_name'];
            _this.editAnimal.pet_type = data['data'][0]['pet_type'];
            _this.editAnimal.pet_description = data['data'][0]['pet_description'];
            _this.editAnimal.pet_skill_1 = data['data'][0]['pet_skill_1'];
            _this.editAnimal.pet_skill_2 = data['data'][0]['pet_skill_2'];
            _this.editAnimal.pet_skill_3 = data['data'][0]['pet_skill_3'];
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [service_service_1.ServiceService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>These pets are looking for a home!</h3>\n\n<a [routerLink]=\"['/new']\" >Add a pet to the shelter</a>\n\n<table>\n  <tr>\n    <td>Name</td>\n    <td>Type</td>\n    <td>Actions</td>\n  </tr>\n  <tr *ngFor=\"let animal of animals\" >\n    <td> {{ animal['pet_name'] }} </td>\n    <td> {{ animal['pet_type'] }} </td>\n    <td>\n      <button (click)=\"detailsClicked(animal['_id'])\" >Details</button>\n      <button (click)=\"editClicked(animal['_id'])\" >Edit</button>\n    </td>\n  </tr>\n</table>\n\n"

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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var service_service_1 = __webpack_require__("./src/app/service.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_service, _route, _router) {
        this._service = _service;
        this._route = _route;
        this._router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.displayAnimals();
    };
    HomeComponent.prototype.displayAnimals = function () {
        var _this = this;
        var obs = this._service.getAllAnimals();
        obs.subscribe(function (data) {
            console.log("yay displayAnimals data: ", data);
            _this.animals = data['animals'];
        });
    };
    HomeComponent.prototype.detailsClicked = function (id) {
        this._service.tempID = id;
        this._router.navigate(['/details/' + id]);
    };
    HomeComponent.prototype.editClicked = function (id) {
        this._service.tempID = id;
        this._router.navigate(['/edit/' + id]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [service_service_1.ServiceService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/new/new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Know of a pet needing a home?</h3>\n\n<p *ngIf=\"errors\" style=\"color: red\" > {{ error_message }} </p>\n\n<form (submit)=\"onSubmit()\" >\n  <label>Pet name:</label>\n  <input type=\"text\" name=\"pet_name\" [(ngModel)]=\"newAnimal.pet_name\" ><br>\n  <label>Pet type:</label>\n  <input type=\"text\" name=\"pet_type\" [(ngModel)]=\"newAnimal.pet_type\" ><br>\n  <label>Description:</label>\n  <input type=\"text\" name=\"pet_description\" [(ngModel)]=\"newAnimal.pet_description\" ><br>\n  <label>Skills:</label><br>\n  <label>Skill 1:</label>\n  <input type=\"text\" name=\"pet_skill_1\" [(ngModel)]=\"newAnimal.pet_skill_1\" ><br>\n  <label>Skill 2:</label>\n  <input type=\"text\" name=\"pet_skill_2\" [(ngModel)]=\"newAnimal.pet_skill_2\" ><br>\n  <label>Skill 3:</label>\n  <input type=\"text\" name=\"pet_skill_3\" [(ngModel)]=\"newAnimal.pet_skill_3\" ><br>\n  <input type=\"submit\" value=\"Add pet\">\n  <button (click)=\"cancelButtonClicked()\" >Cancel</button>\n</form>"

/***/ }),

/***/ "./src/app/new/new.component.ts":
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
var NewComponent = /** @class */ (function () {
    function NewComponent(_service, _route, _router) {
        this._service = _service;
        this._route = _route;
        this._router = _router;
    }
    NewComponent.prototype.ngOnInit = function () {
        this.newAnimal = {
            pet_name: ""
        };
        this.errors = false;
    };
    NewComponent.prototype.cancelButtonClicked = function () {
        this._router.navigate(['/home']);
    };
    NewComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("this.newAnimal is: ", this.newAnimal);
        var obs = this._service.newAnimal(this.newAnimal);
        obs.subscribe(function (data) {
            if (data['error']) {
                console.log("data is: ", data);
                _this.errors = true;
                _this.error_message = data['error']['message'];
            }
            else {
                console.log("yay onSubmit data: ", data);
                _this._router.navigate(['/home']);
            }
        });
    };
    NewComponent = __decorate([
        core_1.Component({
            selector: 'app-new',
            template: __webpack_require__("./src/app/new/new.component.html"),
            styles: [__webpack_require__("./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [service_service_1.ServiceService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], NewComponent);
    return NewComponent;
}());
exports.NewComponent = NewComponent;


/***/ }),

/***/ "./src/app/refresh/refresh.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/refresh/refresh.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  refresh works!\n</p>\n"

/***/ }),

/***/ "./src/app/refresh/refresh.component.ts":
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
var RefreshComponent = /** @class */ (function () {
    function RefreshComponent() {
    }
    RefreshComponent.prototype.ngOnInit = function () {
    };
    RefreshComponent = __decorate([
        core_1.Component({
            selector: 'app-refresh',
            template: __webpack_require__("./src/app/refresh/refresh.component.html"),
            styles: [__webpack_require__("./src/app/refresh/refresh.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RefreshComponent);
    return RefreshComponent;
}());
exports.RefreshComponent = RefreshComponent;


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
    }
    ServiceService.prototype.newAnimal = function (newAnimal) {
        return this._httpClient.post('/animal', newAnimal);
    };
    ServiceService.prototype.getAllAnimals = function () {
        return this._httpClient.get('/animal');
    };
    ServiceService.prototype.getThisAnimal = function () {
        return this._httpClient.get('animal/' + this.tempID);
    };
    ServiceService.prototype.deleteThisAnimal = function () {
        return this._httpClient.delete('/animal/' + this.tempID);
    };
    ServiceService.prototype.editThisAnimal = function (editAnimal) {
        return this._httpClient.put('/animal/' + this.tempID, editAnimal);
    };
    ServiceService.prototype.addLike = function (editAnimal) {
        return this._httpClient.patch('/animal/' + this.tempID, editAnimal);
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