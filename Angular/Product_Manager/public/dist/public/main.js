(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: "", pathMatch: "full", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "products", component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
    { path: "products/new", component: _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"] },
    { path: "products/edit/:id", component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    margin: 0 3rem;\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n}\r\nh1 {\r\n    font-size: 3rem;\r\n    font-weight: bold;\r\n}\r\nfieldset {\r\n    width: 65rem;\r\n    height: 35rem;\r\n}\r\n#container {\r\n    width: 75rem;\r\n    height: 45rem;\r\n    margin: 1.5rem auto;\r\n    padding: 2rem;\r\n}\r\n#box {\r\n    width: 55rem;\r\n    height: 35rem;\r\n    border: 1rem;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwyQkFBMkI7Q0FDOUI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7O0NBRWhCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICAgIG1hcmdpbjogMCAzcmVtO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5maWVsZHNldCB7XHJcbiAgICB3aWR0aDogNjVyZW07XHJcbiAgICBoZWlnaHQ6IDM1cmVtO1xyXG59XHJcbiNjb250YWluZXIge1xyXG4gICAgd2lkdGg6IDc1cmVtO1xyXG4gICAgaGVpZ2h0OiA0NXJlbTtcclxuICAgIG1hcmdpbjogMS41cmVtIGF1dG87XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59XHJcbiNib3gge1xyXG4gICAgd2lkdGg6IDU1cmVtO1xyXG4gICAgaGVpZ2h0OiAzNXJlbTtcclxuICAgIGJvcmRlcjogMXJlbTtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n  <title>PPM</title>\n</head>\n<body>\n  <div id=\"container\">\n    <h1>PPM - Project Product Management</h1>\n    <a [routerLink]=\"['/']\">Home</a>\n    <a [routerLink]=\"['/products']\">Product List</a>\n    <a [routerLink]=\"['/products', 'new']\">Product Creation</a>\n    <router-outlet></router-outlet>\n  </div>\n</body>\n</html>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_7__["CreateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-size: 3rem;\r\n    font-weight: bold;\r\n}\r\nh2 {\r\n    font-size: 3rem;\r\n    text-align: center;\r\n    margin-top: 2rem;\r\n}\r\n#box {\r\n    height: 30rem;\r\n    margin: 1rem;\r\n    padding: 2rem;\r\n    border: .25rem solid black;\r\n    border-radius: 3rem;\r\n}\r\n#lilbox {\r\n    width: 40rem;\r\n}\r\n.fronterror {\r\n    text-align: right;\r\n    color: orange;\r\n}\r\n.backerror {\r\n    color: red;\r\n}\r\n.button {\r\n    margin: 1rem 1rem;\r\n}\r\n.fields {\r\n    float: right;\r\n    text-align: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDcEI7QUFFRDtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxXQUFXO0NBQ2Q7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbiNib3gge1xyXG4gICAgaGVpZ2h0OiAzMHJlbTtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBib3JkZXI6IC4yNXJlbSBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XHJcbn1cclxuI2xpbGJveCB7XHJcbiAgICB3aWR0aDogNDByZW07XHJcbn1cclxuLmZyb250ZXJyb3Ige1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG59XHJcbi5iYWNrZXJyb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4uYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMXJlbSAxcmVtO1xyXG59XHJcbi5maWVsZHMge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/create/create.component.html":
/*!**********************************************!*\
  !*** ./src/app/create/create.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n  <title>PPM</title>\n</head>\n<body>\n  <div id=\"box\">\n    <h1>Create a New Product</h1>\n    <div id=\"lilbox\">\n      <form (submit)=\"addProduct()\">\n        <h3>Title: <input class=\"fields\" type=\"text\" name=\"title\" [(ngModel)]=\"newProduct.title\"></h3>\n        <p class=\"fronterror\" *ngIf=\"newProduct.title.length < 4\">~Title must be at least 4 characters long~</p>\n        <h3>Price: <input class=\"fields\" type=\"number\" name=\"price\" [(ngModel)]=\"newProduct.price\"></h3>\n        <p class=\"fronterror\" *ngIf=\"!newProduct.price\">~Price is required~</p>      \n        <h3>Image URL: <input class=\"fields\" type=\"text\" name=\"image\" [(ngModel)]=\"newProduct.image\"></h3>\n        <input class=\"button btn btn-success\" type=\"submit\" value=\"Create\">\n        <button class=\"button btn btn-danger\" [routerLink]=\"['/']\">Cancel</button>\n      </form>\n    </div>\n    <div *ngIf=\"error\">\n      <h2 class=\"backerror\">{{error}}</h2>\n    </div>\n  </div>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateComponent = /** @class */ (function () {
    function CreateComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.newProduct = { title: "", price: 0.00, image: "" };
        this.error = "";
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.addProduct = function () {
        var _this = this;
        console.log("~Component: addProduct() initialzed~");
        var tempObs = this._httpService.postProduct(this.newProduct);
        tempObs.subscribe(function (data) {
            console.log("~Component: addProduct() response~", data);
            // this.error = data.error.errors.title.message;     
            if (!data.error) {
                console.log("~Component: addProduct() successful~");
                _this._router.navigate(["/products"]);
            }
        });
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#box {\r\n    height: 30rem;\r\n    margin: 1rem;\r\n    padding: 2rem;\r\n    border: .25rem solid black;\r\n    border-radius: 3rem;\r\n}\r\n#lilbox {\r\n    width: 40rem;\r\n}\r\n.button {\r\n    margin: 1rem 1rem;\r\n}\r\n.fronterror {\r\n    text-align: right;\r\n    color: orange;\r\n}\r\n.fields {\r\n    float: right;\r\n    text-align: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0Isb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm94IHtcclxuICAgIGhlaWdodDogMzByZW07XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgYm9yZGVyOiAuMjVyZW0gc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xyXG59XHJcbiNsaWxib3gge1xyXG4gICAgd2lkdGg6IDQwcmVtO1xyXG59XHJcbi5idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxcmVtIDFyZW07XHJcbn1cclxuLmZyb250ZXJyb3Ige1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG59XHJcbi5maWVsZHMge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n<body>\n  <div id=\"box\">\n    <h1>Edit Product</h1>\n    <div id=\"lilbox\">\n      <form (submit)=\"editSubmit()\">\n        <h3>Title: <input class=\"fields\" type=\"text\" name=\"title\" [(ngModel)]=\"editProduct.title\"></h3>\n        <p class=\"fronterror\" *ngIf=\"editProduct.title.length < 4\">Title must be at least 4 characters long!</p>\n        <h3>Price: <input class=\"fields\" type=\"number\" name=\"price\" [(ngModel)]=\"editProduct.price\"></h3>\n        <p class=\"fronterror\" *ngIf=\"!editProduct.price\">Price is required!</p>      \n        <h3>Image URL: <input class=\"fields\" type=\"text\" name=\"image\" [(ngModel)]=\"editProduct.image\"></h3>\n        <input class=\"button btn btn-primary\" type=\"submit\" value=\"Update\">\n        <button class=\"button btn btn-danger\" (click)=\"deleteProduct(editProduct._id)\">Delete</button>\n      </form>\n    </div>\n  </div>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
    }
    EditComponent.prototype.ngOnInit = function () {
        this.findProduct();
        this.editProduct = { title: "", price: 0.00, image: "" };
    };
    EditComponent.prototype.findProduct = function () {
        var _this = this;
        console.log("~Component: findProduct() initialzed~");
        this._route.params.subscribe(function (params) {
            console.log("~ID:", params["id"]);
            var tempObs = _this._httpService.getOneProduct(params["id"]);
            tempObs.subscribe(function (data) {
                _this.editProduct = data;
                console.log("~Component: editProduct response~", _this.editProduct);
            });
        });
    };
    EditComponent.prototype.editSubmit = function () {
        var _this = this;
        console.log("~Component: editSubmit() initialzed~");
        this._route.params.subscribe(function (params) {
            var tempObs = _this._httpService.editProduct(params['id'], _this.editProduct);
            tempObs.subscribe(function (data) {
                console.log("~Component: editSubmit() response~:", data);
                if (!data.error) {
                    _this._router.navigate(["/products"]);
                }
                else {
                    console.log("~Component: editSubmit() Error~", data.error);
                }
            });
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-size: 3rem;\r\n    font-weight: bold;\r\n}\r\nh2 {\r\n    font-size: 3rem;\r\n    text-align: center;\r\n    margin-top: 2rem;\r\n}\r\n#box {\r\n    height: 30rem;\r\n    margin: 1rem;\r\n    padding: 2rem;\r\n    border: .25rem solid black;\r\n    border-radius: 3rem;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG4jYm94IHtcclxuICAgIGhlaWdodDogMzByZW07XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgYm9yZGVyOiAuMjVyZW0gc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>PPM</title>\n</head>\n<body>\n    <div id=\"box\">\n        <h1>Home Page</h1>\n        <h2>Welcome to Project Product Management! Here we can manage a set of products. You are able to create products, remove old products and edit products.</h2>\n    </div>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAllProducts = function () {
        console.log("~Service: getAllProducts() initialized~");
        return this._http.get("/api/products");
    };
    HttpService.prototype.getOneProduct = function (id) {
        console.log("~Service: getOneProduct() initialized~", id);
        return this._http.get("/api/products/" + id);
    };
    HttpService.prototype.postProduct = function (productObj) {
        console.log("~Service: postProduct() initialized~", productObj);
        return this._http.post("/api/add", productObj);
    };
    HttpService.prototype.editProduct = function (id, editProduct) {
        console.log("~Service: editProduct() initialized~", editProduct);
        return this._http.put("/api/edit/" + id, editProduct);
    };
    HttpService.prototype.deleteProduct = function (id) {
        console.log("~Service: deleteProduct() initialized~", id);
        return this._http.delete("/api/delete/" + id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fieldset {\r\n    color: black;\r\n}\r\nimg {\r\n    max-height: 12rem;\r\n    max-width: 18rem;\r\n}\r\n#box {\r\n    min-height: 30rem;\r\n    margin: 1rem;\r\n    padding: 2rem;\r\n    text-align: center;\r\n    border: .25rem solid black;\r\n    border-radius: 3rem;\r\n}\r\n.error {\r\n    color: red;\r\n}\r\n.button {\r\n    margin: 1rem 1rem;\r\n}\r\n.frame {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width: 20rem;\r\n    min-height: 22rem;\r\n    margin: .25rem;\r\n    padding: .25rem;\r\n    text-align: center;\r\n    border: 2px solid black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksV0FBVztDQUNkO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix3QkFBd0I7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZpZWxkc2V0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMTJyZW07XHJcbiAgICBtYXgtd2lkdGg6IDE4cmVtO1xyXG59XHJcbiNib3gge1xyXG4gICAgbWluLWhlaWdodDogMzByZW07XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAuMjVyZW0gc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xyXG59XHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxcmVtIDFyZW07XHJcbn1cclxuLmZyYW1lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB3aWR0aDogMjByZW07XHJcbiAgICBtaW4taGVpZ2h0OiAyMnJlbTtcclxuICAgIG1hcmdpbjogLjI1cmVtO1xyXG4gICAgcGFkZGluZzogLjI1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n<body>\n  <div id=\"box\">\n    <div class=\"frame\" *ngFor=\"let product of products\">\n      <img src={{product.image}} alt=\"Image of {{product.title}}\">\n      <h3>{{product.title}}</h3>\n      <h4>${{product.price}}</h4>\n      <button class=\"button btn btn-primary\" [routerLink]=\"['/products', 'edit', product._id]\">Edit</button>\n      <button class=\"button btn btn-danger\" (click)=\"deleteProduct(product._id)\">Delete</button>\n    </div>\n  </div>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(_httpService) {
        this._httpService = _httpService;
        this.products = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.loadPage();
    };
    ListComponent.prototype.loadPage = function () {
        var _this = this;
        console.log("~Component: loadPage() initialzed~");
        var tempObs = this._httpService.getAllProducts();
        tempObs.subscribe(function (data) {
            console.log("~Component: loadPage() response~", data);
            _this.products = data;
        });
    };
    ListComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        console.log("~Component: deleteProduct() initialzed~");
        var observable = this._httpService.deleteProduct(id);
        observable.subscribe(function (data) {
            console.log("~Component: deleteAuthor() response~,", data);
            _this.loadPage();
        });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\johnj\onedrive\desktop\coding dojo\mean\angular\product_manager\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map