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
/* harmony import */ var _mine_mine_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mine/mine.component */ "./src/app/mine/mine.component.ts");
/* harmony import */ var _buy_buy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buy/buy.component */ "./src/app/buy/buy.component.ts");
/* harmony import */ var _sell_sell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sell/sell.component */ "./src/app/sell/sell.component.ts");
/* harmony import */ var _ledger_ledger_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ledger/ledger.component */ "./src/app/ledger/ledger.component.ts");
/* harmony import */ var _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transaction/transaction.component */ "./src/app/transaction/transaction.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'mine',
        component: _mine_mine_component__WEBPACK_IMPORTED_MODULE_3__["MineComponent"]
    },
    {
        path: 'buy',
        component: _buy_buy_component__WEBPACK_IMPORTED_MODULE_4__["BuyComponent"]
    },
    {
        path: 'sell',
        component: _sell_sell_component__WEBPACK_IMPORTED_MODULE_5__["SellComponent"]
    },
    {
        path: 'ledger',
        component: _ledger_ledger_component__WEBPACK_IMPORTED_MODULE_6__["LedgerComponent"]
    },
    {
        path: 'transaction/:id',
        component: _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_7__["TransactionComponent"]
    }
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

module.exports = "* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nimg {\r\n    width: 11rem;\r\n    height: 11rem;\r\n    margin-bottom: -7rem;\r\n}\r\nli {\r\n    display: inline;\r\n    margin: 1rem;\r\n    list-style-type: none;\r\n}\r\nbutton {\r\n    padding: .75rem 3rem;\r\n    font-weight: bold;\r\n    border: none;\r\n    border-radius: .5rem;\r\n    background-color: #E6E6E6;\r\n}\r\n#container {\r\n    width: 78rem;\r\n    height: 48rem;\r\n    margin: 1rem auto;\r\n    padding: 1rem;\r\n    text-align: center;\r\n}\r\n#header {\r\n    height: 11rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztDQUNkO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHFCQUFxQjtDQUN4QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDExcmVtO1xyXG4gICAgaGVpZ2h0OiAxMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC03cmVtO1xyXG59XHJcbmxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5idXR0b24ge1xyXG4gICAgcGFkZGluZzogLjc1cmVtIDNyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjtcclxufVxyXG4jY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA3OHJlbTtcclxuICAgIGhlaWdodDogNDhyZW07XHJcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI2hlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDExcmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div id=\"header\">\n    <ul>\n      <li>\n          <img src=\"/assets/images/shinto.png\" alt=\"Shinto Coin\">\n      </li>\n      <li>\n        <button [routerLink]=\"['home']\">Home</button>\n      </li>\n      <li>\n        <button [routerLink]=\"['mine']\">Mine Coins</button>\n      </li>\n      <li>\n        <button [routerLink]=\"['buy']\">Buy Coins</button>\n      </li>\n      <li>\n        <button [routerLink]=\"['sell']\">Sell Coins</button>\n      </li>\n      <li>\n        <button [routerLink]=\"['ledger']\">Browse Ledger</button>\n      </li>\n    </ul>\n  </div>\n  <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _mine_mine_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mine/mine.component */ "./src/app/mine/mine.component.ts");
/* harmony import */ var _buy_buy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buy/buy.component */ "./src/app/buy/buy.component.ts");
/* harmony import */ var _sell_sell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sell/sell.component */ "./src/app/sell/sell.component.ts");
/* harmony import */ var _ledger_ledger_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ledger/ledger.component */ "./src/app/ledger/ledger.component.ts");
/* harmony import */ var _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transaction/transaction.component */ "./src/app/transaction/transaction.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _mine_mine_component__WEBPACK_IMPORTED_MODULE_8__["MineComponent"],
                _buy_buy_component__WEBPACK_IMPORTED_MODULE_9__["BuyComponent"],
                _sell_sell_component__WEBPACK_IMPORTED_MODULE_10__["SellComponent"],
                _ledger_ledger_component__WEBPACK_IMPORTED_MODULE_11__["LedgerComponent"],
                _transaction_transaction_component__WEBPACK_IMPORTED_MODULE_12__["TransactionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buy/buy.component.css":
/*!***************************************!*\
  !*** ./src/app/buy/buy.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    text-align: left;\r\n}\r\nh1 {\r\n    font-size: 4rem;\r\n}\r\nh2 {\r\n    font-size: 2rem;\r\n}\r\n#component {\r\n    padding: 1rem 3rem;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV5L2J1eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1COztDQUV0QiIsImZpbGUiOiJzcmMvYXBwL2J1eS9idXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbn1cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbiNjb21wb25lbnQge1xyXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/buy/buy.component.html":
/*!****************************************!*\
  !*** ./src/app/buy/buy.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"component\">\n    <h1>Buy ShintoCoins</h1>\n    <h2>Current ShintoCoin Value: ${{_httpService.coinValue}}.00</h2>\n    <h2>Number of ShintoCoins Owned: {{_httpService.yourCoins}}</h2>\n    <form (submit)=\"_httpService.buyCoin(qty)\">\n        <input type=\"number\" placeholder=\"Quantity\" name=\"purchase\" [(ngModel)]=\"qty\">\n        <button type=\"submit\">Buy</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/buy/buy.component.ts":
/*!**************************************!*\
  !*** ./src/app/buy/buy.component.ts ***!
  \**************************************/
/*! exports provided: BuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyComponent", function() { return BuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BuyComponent = /** @class */ (function () {
    function BuyComponent(_httpService) {
        this._httpService = _httpService;
    }
    BuyComponent.prototype.ngOnInit = function () {
    };
    BuyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buy',
            template: __webpack_require__(/*! ./buy.component.html */ "./src/app/buy/buy.component.html"),
            styles: [__webpack_require__(/*! ./buy.component.css */ "./src/app/buy/buy.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], BuyComponent);
    return BuyComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    text-align: left;\r\n}\r\nh1 {\r\n    font-size: 4rem;\r\n}\r\nh2 {\r\n    font-size: 2rem;\r\n}\r\n#component {\r\n    padding: 1rem 3rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbn1cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbiNjb21wb25lbnQge1xyXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"component\">\n  <h1>ShintoCoin</h1>\n  <h2>Welcome to ShintoCoins! ShintoCoins are coins made by solving algorithms! To get started, head over to Mine Coins and get to work!</h2>\n</div>"

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
        this.coinValue = 1;
        this.yourCoins = 0;
        this.journal = [];
    }
    HttpService.prototype.coinTrans = function (action, qty) {
        var transId = Math.floor(1 + Math.random() * (9999 - 1));
        var trans = {
            id: transId,
            action: action,
            qty: qty,
            value: this.coinValue
        };
        this.journal.push(trans);
    };
    HttpService.prototype.buyCoin = function (qty) {
        this.yourCoins += qty;
        this.coinValue += qty;
        this.coinTrans('Bought', qty);
    };
    HttpService.prototype.sellCoin = function (qty) {
        if (this.yourCoins >= qty) {
            this.yourCoins -= qty;
            this.coinValue -= qty;
            this.coinTrans('Sold', qty);
        }
        else {
            console.log('Not enough coins');
        }
    };
    HttpService.prototype.findTrans = function (id) {
        this.trans = this.journal.find(function (o) { return o.id == id; });
    };
    HttpService.prototype.getTrivia = function () {
        return this._http.get('https://opentdb.com/api.php?amount=50&difficulty=hard&type=multiple');
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

/***/ "./src/app/ledger/ledger.component.css":
/*!*********************************************!*\
  !*** ./src/app/ledger/ledger.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    text-align: left;\r\n}\r\nh1 {\r\n    font-size: 4rem;\r\n}\r\nh2 {\r\n    font-size: 2rem;\r\n}\r\nth {\r\n    text-align: center;\r\n}\r\n#ledger {\r\n    border: 1px solid #F7922A;\r\n}\r\n#component {\r\n    padding: 1rem 3rem;\r\n}\r\n#grey {\r\n    background-color: lightgrey;;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVkZ2VyL2xlZGdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksNEJBQTRCO0NBQy9CIiwiZmlsZSI6InNyYy9hcHAvbGVkZ2VyL2xlZGdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxufVxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxudGgge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNsZWRnZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Y3OTIyQTtcclxufVxyXG4jY29tcG9uZW50IHtcclxuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcclxufVxyXG4jZ3JleSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/ledger/ledger.component.html":
/*!**********************************************!*\
  !*** ./src/app/ledger/ledger.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"component\">\n    <h1>Browse the Ledger</h1>\n    <h2>Here you can browse all ShintoCoin transactions.</h2>\n    <table id=\"ledger\">\n        <thead>\n        <tr id=\"grey\">\n            <th>ShintoCoin Ledger</th>\n        </tr>\n        <tr>\n            <th>Action</th>\n            <th>Amount</th>\n            <th>Value</th>\n        </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let transaction of _httpService.journal\">\n                <td>{{transaction.action}}</td>\n                <td>{{transaction.qty}}</td>\n                <td>{{transaction.value}}</td>\n                <button (click)='_httpService.findTrans(transaction.id)' [routerLink]=\"['/transaction', transaction.id]\">Details</button>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/ledger/ledger.component.ts":
/*!********************************************!*\
  !*** ./src/app/ledger/ledger.component.ts ***!
  \********************************************/
/*! exports provided: LedgerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerComponent", function() { return LedgerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LedgerComponent = /** @class */ (function () {
    function LedgerComponent(_httpService) {
        this._httpService = _httpService;
    }
    LedgerComponent.prototype.ngOnInit = function () {
    };
    LedgerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ledger',
            template: __webpack_require__(/*! ./ledger.component.html */ "./src/app/ledger/ledger.component.html"),
            styles: [__webpack_require__(/*! ./ledger.component.css */ "./src/app/ledger/ledger.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], LedgerComponent);
    return LedgerComponent;
}());



/***/ }),

/***/ "./src/app/mine/mine.component.css":
/*!*****************************************!*\
  !*** ./src/app/mine/mine.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    text-align: left;\r\n}\r\nh1 {\r\n    font-size: 4rem;\r\n}\r\nh2 {\r\n    font-size: 2rem;\r\n}\r\n#component {\r\n    padding: 1rem 3rem;\r\n}\r\n#outcome {\r\n    color: #F7922A;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluZS9taW5lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9taW5lL21pbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbn1cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbiNjb21wb25lbnQge1xyXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xyXG59XHJcbiNvdXRjb21lIHtcclxuICAgIGNvbG9yOiAjRjc5MjJBO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/mine/mine.component.html":
/*!******************************************!*\
  !*** ./src/app/mine/mine.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"component\">\n  <h1>Mine ShintoCoins</h1>\n  <h2>Here you can mine ShintoCoins by being the first to solve the trivia question:</h2>\n  <h2 *ngIf=\"trivia\">{{trivia.results[0].question}}</h2>\n  <form (submit)=\"triviaAnswer(answer)\">\n    <select name=\"answers\" [(ngModel)]=\"answer\">\n      <option *ngFor=\"let answer of answers\" [ngValue]=\"answer\">{{answer}}</option>\n    </select>\n    <input class=\"btn\" type=\"submit\" value=\"Submit\">\n  </form>\n  <h3 id=\"outcome\">{{result}}</h3>\n</div>"

/***/ }),

/***/ "./src/app/mine/mine.component.ts":
/*!****************************************!*\
  !*** ./src/app/mine/mine.component.ts ***!
  \****************************************/
/*! exports provided: MineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MineComponent", function() { return MineComponent; });
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


var MineComponent = /** @class */ (function () {
    function MineComponent(_httpService) {
        this._httpService = _httpService;
        this.answers = [];
    }
    MineComponent.prototype.ngOnInit = function () {
        this.loadTrivia();
    };
    MineComponent.prototype.loadTrivia = function () {
        var _this = this;
        var observable = this._httpService.getTrivia();
        observable.subscribe(function (data) {
            _this.answers = [];
            _this.trivia = data;
            _this.answers.push(_this.trivia.results[0].correct_answer);
            for (var _i = 0, _a = _this.trivia.results[0].incorrect_answers; _i < _a.length; _i++) {
                var idx = _a[_i];
                _this.answers.push(idx);
            }
            _this.shuffle(_this.answers);
        });
    };
    MineComponent.prototype.shuffle = function (a) {
        var _a;
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1];
        }
        return a;
    };
    MineComponent.prototype.triviaAnswer = function (answer) {
        if (answer == this.trivia.results[0].correct_answer) {
            this._httpService.yourCoins += 1;
            this._httpService.coinValue += 1;
            this._httpService.coinTrans('Mined', 1);
            this.result = "Answer was correct! 1 ShintoCoin mined!";
            this.loadTrivia();
        }
        else {
            this.result = "Answer was incorrect!";
            this.loadTrivia();
        }
    };
    MineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mine',
            template: __webpack_require__(/*! ./mine.component.html */ "./src/app/mine/mine.component.html"),
            styles: [__webpack_require__(/*! ./mine.component.css */ "./src/app/mine/mine.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], MineComponent);
    return MineComponent;
}());



/***/ }),

/***/ "./src/app/sell/sell.component.css":
/*!*****************************************!*\
  !*** ./src/app/sell/sell.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    text-align: left;\r\n}\r\nh1 {\r\n    font-size: 4rem;\r\n}\r\nh2 {\r\n    font-size: 2rem;\r\n}\r\n#component {\r\n    padding: 1rem 3rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbC9zZWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9zZWxsL3NlbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbn1cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbiNjb21wb25lbnQge1xyXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/sell/sell.component.html":
/*!******************************************!*\
  !*** ./src/app/sell/sell.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"component\">\n    <h1>Sell ShintoCoins</h1>\n    <h2>Current ShintoCoin Value: ${{_httpService.coinValue}}.00</h2>\n    <h2>Number of ShintoCoins Owned: {{_httpService.yourCoins}}</h2>\n    <form (submit)=\"_httpService.sellCoin(qty)\">\n        <input type=\"number\" placeholder=\"Quantity\" name=\"sell\" [(ngModel)]=\"qty\">\n        <button type=\"submit\">Sell</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/sell/sell.component.ts":
/*!****************************************!*\
  !*** ./src/app/sell/sell.component.ts ***!
  \****************************************/
/*! exports provided: SellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellComponent", function() { return SellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SellComponent = /** @class */ (function () {
    function SellComponent(_httpService) {
        this._httpService = _httpService;
    }
    SellComponent.prototype.ngOnInit = function () {
    };
    SellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sell',
            template: __webpack_require__(/*! ./sell.component.html */ "./src/app/sell/sell.component.html"),
            styles: [__webpack_require__(/*! ./sell.component.css */ "./src/app/sell/sell.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], SellComponent);
    return SellComponent;
}());



/***/ }),

/***/ "./src/app/transaction/transaction.component.css":
/*!*******************************************************!*\
  !*** ./src/app/transaction/transaction.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    text-align: left;\r\n}\r\nh1 {\r\n    font-size: 4rem;\r\n}\r\nh2 {\r\n    font-size: 2rem;\r\n}\r\n#component {\r\n    padding: 1rem 3rem;\r\n}\r\n#outcome {\r\n    color: #F7922A;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNhY3Rpb24vdHJhbnNhY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG59XHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG4jY29tcG9uZW50IHtcclxuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcclxufVxyXG4jb3V0Y29tZSB7XHJcbiAgICBjb2xvcjogI0Y3OTIyQTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/transaction/transaction.component.html":
/*!********************************************************!*\
  !*** ./src/app/transaction/transaction.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Ledger Transaction Details</h1>\n<h2>Detailed view of a transaction from the ledger.</h2>\n<div *ngIf=\"_httpService.trans\">\n<h2>Transaction ID: {{_httpService.trans.id}}</h2>\n<h2>{{_httpService.trans.action}} {{_httpService.trans.qty}} ShintoCoin for ${{_httpService.trans.value}} each.</h2>"

/***/ }),

/***/ "./src/app/transaction/transaction.component.ts":
/*!******************************************************!*\
  !*** ./src/app/transaction/transaction.component.ts ***!
  \******************************************************/
/*! exports provided: TransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionComponent = /** @class */ (function () {
    function TransactionComponent(_httpService) {
        this._httpService = _httpService;
    }
    TransactionComponent.prototype.ngOnInit = function () {
    };
    TransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction',
            template: __webpack_require__(/*! ./transaction.component.html */ "./src/app/transaction/transaction.component.html"),
            styles: [__webpack_require__(/*! ./transaction.component.css */ "./src/app/transaction/transaction.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], TransactionComponent);
    return TransactionComponent;
}());

;


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

module.exports = __webpack_require__(/*! C:\Users\johnj\onedrive\desktop\coding dojo\mean\angular\shinto_coins\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map