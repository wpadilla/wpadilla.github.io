(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Desktop/ns804/ns804-app/src/main.ts */"zUnb");


/***/ }),

/***/ "0l6T":
/*!***********************************************!*\
  !*** ./src/app/services/todo-list.service.ts ***!
  \***********************************************/
/*! exports provided: TodoListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListService", function() { return TodoListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class TodoListService {
    constructor(http) {
        this.http = http;
    }
    loadTodos() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["default"].api}todos`, {
            headers: {
                Authorization: localStorage.getItem('token'),
            }
        });
    }
}
TodoListService.ɵfac = function TodoListService_Factory(t) { return new (t || TodoListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TodoListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodoListService, factory: TodoListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/auth.actions */ "D7ij");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/animations */ "a1DM");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../loading/loading.component */ "f/hT");












function RegisterComponent_app_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
class RegisterComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.auth = this.store.select((state) => state.auth || {});
        this.startLoading = undefined;
    }
    ngOnInit() {
    }
    register() {
        this.startLoading = true;
        const payload = { email: String(this.email.value).toLowerCase().replace(/[' ']/gi, ''), password: this.password.value };
        this.store.dispatch(new _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["RegisterAction"](payload));
        this.email.disable();
        this.password.disable();
        const subscription = this.auth.subscribe(auth => {
            if (!auth.loading) {
                this.email.enable();
                this.password.enable();
                this.startLoading = false;
            }
            if (auth.err === undefined) {
                this.router.navigate(['login']);
                subscription.unsubscribe();
            }
        });
    }
    goToLogin() {
        this.router.navigate(['login']);
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 26, vars: 22, consts: [[4, "ngIf"], [1, "container"], [1, "left-side-container"], [1, "form-container"], [1, "display-flex", "justify-content-c", "align-items-c", "flex-direction-c"], ["src", "/assets/images/logo.png", "alt", "App Logo", 1, "w-5"], [1, "mb-1"], [1, "form-control", "mb-2"], ["type", "text", "placeholder", "Email", 3, "formControl"], [1, "form-control"], ["type", "password", "placeholder", "Password", 3, "formControl"], [1, "display-flex", "align-items-c", "mt-1", "flex-direction-c"], [1, "error-msg", "mb-1"], [1, "btn", 3, "disabled", "click"], [1, "user-plus-icon"], ["tooltip", "Go to Login", 1, "btn", 3, "disabled", "click"], ["src", "/assets/icons/user.svg"], [1, "right-side-container"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RegisterComponent_app_loading_0_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_18_listener() { return ctx.email.value && ctx.password.value && ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_22_listener() { return ctx.goToLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 12, ctx.auth).loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@startLoading", ctx.startLoading ? "loading" : "loaded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 14, ctx.auth).err ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 16, ctx.auth).err.message : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-primary", ctx.email.value && ctx.password.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 18, ctx.auth).loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@popIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 20, ctx.auth).loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@horizonTalSlide", undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".error-msg[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.right-side-container[_ngcontent-%COMP%] {\n  background-image: url('background-login.jpeg');\n  background-size: cover;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 550px;\n  top: 0;\n}\n\n.left-side-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 550px;\n  max-width: 100%;\n  position: relative;\n}\n\n.user-plus-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 40px;\n  right: 40px;\n}\n\n.user-plus-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  display: flex;\n  padding: 25px;\n  justify-content: center;\n  min-width: unset;\n}\n\n.user-plus-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n@media screen and (max-width: 675px) {\n  .user-plus-icon[_ngcontent-%COMP%] {\n    bottom: 20px;\n    right: 20px;\n  }\n  .user-plus-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n  .user-plus-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n  }\n}\n\n.error-msg[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.user-plus-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  display: flex;\n  padding: 25px;\n  justify-content: center;\n  min-width: unset;\n  width: 100px;\n}\n\n.user-plus-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n@media screen and (max-width: 675px) {\n  .user-plus-icon[_ngcontent-%COMP%] {\n    bottom: 20px;\n    right: 20px;\n  }\n  .user-plus-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n  .user-plus-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxVQUFBO0FDQUY7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsOENBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRUY7O0FEREU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0dKOztBREZJO0VBQ0UsV0FBQTtBQ0lOOztBRENBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsV0FBQTtFQ0VGO0VEREU7SUFDRSxXQUFBO0VDR0o7RURGSTtJQUNFLFdBQUE7RUNJTjtBQUNGOztBQXZEQTtFQUNFLFVBQUE7QUF5REY7O0FBckRFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBd0RKOztBQXZESTtFQUNFLFdBQUE7QUF5RE47O0FBcERBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsV0FBQTtFQXVERjtFQXRERTtJQUNFLFdBQUE7RUF3REo7RUF2REk7SUFDRSxXQUFBO0VBeUROO0FBQ0YiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5lcnJvci1tc2cge1xuICBjb2xvcjogcmVkO1xufVxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yaWdodC1zaWRlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn5zcmMvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLWxvZ2luLmpwZWdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogNTUwcHg7XG4gIHRvcDogMDtcbn1cblxuLmxlZnQtc2lkZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDU1MHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVzZXItcGx1cy1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDQwcHg7XG4gIHJpZ2h0OiA0MHB4O1xuICBidXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3NXB4KSB7XG4gIC51c2VyLXBsdXMtaWNvbiB7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogNzBweDtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIn5zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuLmVycm9yLW1zZyB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi51c2VyLXBsdXMtaWNvbiB7XG4gIGJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3NXB4KSB7XG4gIC51c2VyLXBsdXMtaWNvbiB7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogNzBweDtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('startLoading', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('loaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    left: 0,
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('loading', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    left: '-550px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('loaded => loading', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('.3s .1s ease-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('loading => loaded', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('.3s .1s ease-in')
                ]),
            ]),
            _utils_animations__WEBPACK_IMPORTED_MODULE_4__["fadeInAnimation"],
            _utils_animations__WEBPACK_IMPORTED_MODULE_4__["popInAnimation"],
            _utils_animations__WEBPACK_IMPORTED_MODULE_4__["horizontalSlideAnimation"],
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('startLoading', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('loaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            left: 0,
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('loading', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            left: '-550px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('loaded => loading', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('.3s .1s ease-out')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('loading => loaded', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('.3s .1s ease-in')
                        ]),
                    ]),
                    _utils_animations__WEBPACK_IMPORTED_MODULE_4__["fadeInAnimation"],
                    _utils_animations__WEBPACK_IMPORTED_MODULE_4__["popInAnimation"],
                    _utils_animations__WEBPACK_IMPORTED_MODULE_4__["horizontalSlideAnimation"],
                ],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "22BU":
/*!**********************************************!*\
  !*** ./src/app/store/effects/auth.effect.ts ***!
  \**********************************************/
/*! exports provided: AuthEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffect", function() { return AuthEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/auth.actions */ "D7ij");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");









class AuthEffect {
    constructor(actions$, authService, router) {
        this.actions$ = actions$;
        this.authService = authService;
        this.router = router;
        this.authenticate = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthActionsType"].LOGIN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])((data) => this.authService.authenticate(data.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            localStorage.setItem('token', res.token);
            this.router.navigate(['/']);
            return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["LoginSuccessAction"](res);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["LoginFailureAction"](err.error));
        })))));
        this.register = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthActionsType"].REGISTER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])((data) => this.authService.register(data.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["RegisterSuccessAction"](res);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["RegisterFailureAction"](err.error)))))));
    }
}
AuthEffect.ɵfac = function AuthEffect_Factory(t) { return new (t || AuthEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AuthEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthEffect, factory: AuthEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "22I9":
/*!************************************************!*\
  !*** ./src/app/store/reducers/todo.reducer.ts ***!
  \************************************************/
/*! exports provided: todoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoReducer", function() { return todoReducer; });
/* harmony import */ var _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/todo.actions */ "IbW+");

const initialState = { data: undefined };
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionsTypes"].LOAD_TODO:
            return Object.assign(Object.assign({}, state), { loading: true });
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionsTypes"].LOAD_TODO_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: false, data: action.payload });
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionsTypes"].LOAD_TODO_FAILURE:
            return Object.assign(Object.assign({}, state), { loading: false, payload: undefined, err: action.payload });
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionsTypes"].DELETE_TODO:
            return Object.assign(Object.assign({}, state), { loading: true });
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionsTypes"].DELETE_TODO_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: false, data: action.payload });
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionsTypes"].DELETE_TODO_FAILURE:
            return Object.assign(Object.assign({}, state), { loading: false, payload: undefined, err: action.payload });
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionsTypes"].ADD_TODO:
            return Object.assign(Object.assign({}, state), { loading: true });
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionsTypes"].ADD_TODO_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: false, data: action.payload });
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionsTypes"].ADD_TODO_FAILURE:
            return Object.assign(Object.assign({}, state), { loading: false, payload: undefined, err: action.payload });
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionsTypes"].UPDATE_TODO:
            return Object.assign(Object.assign({}, state), { loading: true });
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionsTypes"].UPDATE_TODO_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: false, data: action.payload });
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionsTypes"].UPDATE_TODO_FAILURE:
            return Object.assign(Object.assign({}, state), { loading: false, payload: undefined, err: action.payload });
    }
};


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo-list/todo-list.component */ "MUi6");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-todo-list");
    } }, directives: [_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_1__["TodoListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api: 'https://serverless-gamma-topaz.vercel.app/api/',
};
/* harmony default export */ __webpack_exports__["default"] = (environment);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BA4k":
/*!********************************************************!*\
  !*** ./src/app/store/effects/load-todo-list.effect.ts ***!
  \********************************************************/
/*! exports provided: LoadTodoListEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTodoListEffect", function() { return LoadTodoListEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_todoList_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/todoList.actions */ "DJMz");
/* harmony import */ var _services_todo_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/todo-list.service */ "0l6T");








class LoadTodoListEffect {
    constructor(actions$, todoListService) {
        this.actions$ = actions$;
        this.todoListService = todoListService;
        this.loadTodoList = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_todoList_actions__WEBPACK_IMPORTED_MODULE_4__["TodoListActionTypes"].LOAD_TODO_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((data) => {
            return this.todoListService.loadTodos()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                return new _actions_todoList_actions__WEBPACK_IMPORTED_MODULE_4__["LoadTodoListSuccessAction"](res.data);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_todoList_actions__WEBPACK_IMPORTED_MODULE_4__["LoadTodoListFailureAction"](err))));
        })));
    }
}
LoadTodoListEffect.ɵfac = function LoadTodoListEffect_Factory(t) { return new (t || LoadTodoListEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_todo_list_service__WEBPACK_IMPORTED_MODULE_5__["TodoListService"])); };
LoadTodoListEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadTodoListEffect, factory: LoadTodoListEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadTodoListEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_todo_list_service__WEBPACK_IMPORTED_MODULE_5__["TodoListService"] }]; }, null); })();


/***/ }),

/***/ "CKs+":
/*!**********************************************!*\
  !*** ./src/app/store/effects/todo.effect.ts ***!
  \**********************************************/
/*! exports provided: TodoEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoEffect", function() { return TodoEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/todo.actions */ "IbW+");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/todo.service */ "tadm");








class TodoEffect {
    constructor(actions$, todoService) {
        this.actions$ = actions$;
        this.todoService = todoService;
        this.loadTodo = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["TodoActionsTypes"].LOAD_TODO), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((data) => {
            return this.todoService.loadTodo(data.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                return new _actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["LoadTodoSuccessAction"](res.data);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["LoadTodoFailureAction"](err))));
        })));
        this.deleteTodo = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["TodoActionsTypes"].DELETE_TODO), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((data) => {
            return this.todoService.deleteTodo(data.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                return new _actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteTodoSuccessAction"](res.data);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteTodoFailureAction"](err))));
        })));
        this.updateTodo = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["TodoActionsTypes"].UPDATE_TODO), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((data) => {
            return this.todoService.updateTodo(data.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                return new _actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateTodoSuccessAction"](res.data);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateTodoFailureAction"](err))));
        })));
        this.addTodo = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["TodoActionsTypes"].ADD_TODO), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((data) => {
            return this.todoService.addTodo(data.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                return new _actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["AddTodoSuccessAction"](res.data);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_todo_actions__WEBPACK_IMPORTED_MODULE_4__["AddTodoFailureAction"](err))));
        })));
    }
}
TodoEffect.ɵfac = function TodoEffect_Factory(t) { return new (t || TodoEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_todo_service__WEBPACK_IMPORTED_MODULE_5__["TodoService"])); };
TodoEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodoEffect, factory: TodoEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_todo_service__WEBPACK_IMPORTED_MODULE_5__["TodoService"] }]; }, null); })();


/***/ }),

/***/ "D7ij":
/*!***********************************************!*\
  !*** ./src/app/store/actions/auth.actions.ts ***!
  \***********************************************/
/*! exports provided: AuthActionsType, LoginAction, LoginSuccessAction, LoginFailureAction, RegisterAction, RegisterSuccessAction, RegisterFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionsType", function() { return AuthActionsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAction", function() { return LoginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccessAction", function() { return LoginSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFailureAction", function() { return LoginFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterAction", function() { return RegisterAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterSuccessAction", function() { return RegisterSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFailureAction", function() { return RegisterFailureAction; });
var AuthActionsType;
(function (AuthActionsType) {
    AuthActionsType["LOGIN"] = "[LOGIN] Login Action";
    AuthActionsType["LOGIN_SUCCESS"] = "[LOGIN] Login Action Success";
    AuthActionsType["LOGIN_FAILURE"] = "[LOGIN] Login Action Failure";
    AuthActionsType["REGISTER"] = "[REGISTER] Register Action";
    AuthActionsType["REGISTER_SUCCESS"] = "[REGISTER] Register Action Success";
    AuthActionsType["REGISTER_FAILURE"] = "[REGISTER] Register Action Failure";
})(AuthActionsType || (AuthActionsType = {}));
class LoginAction {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionsType.LOGIN;
    }
}
class LoginSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionsType.LOGIN_SUCCESS;
    }
}
class LoginFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionsType.LOGIN_FAILURE;
    }
}
class RegisterAction {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionsType.REGISTER;
    }
}
class RegisterSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionsType.REGISTER_SUCCESS;
    }
}
class RegisterFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionsType.REGISTER_FAILURE;
    }
}


/***/ }),

/***/ "DJMz":
/*!***************************************************!*\
  !*** ./src/app/store/actions/todoList.actions.ts ***!
  \***************************************************/
/*! exports provided: TodoListActionTypes, LoadTodoListAction, LoadTodoListSuccessAction, LoadTodoListFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListActionTypes", function() { return TodoListActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTodoListAction", function() { return LoadTodoListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTodoListSuccessAction", function() { return LoadTodoListSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTodoListFailureAction", function() { return LoadTodoListFailureAction; });
var TodoListActionTypes;
(function (TodoListActionTypes) {
    TodoListActionTypes["LOAD_TODO_LIST"] = "[TODO LIST] Load Todo List Action";
    TodoListActionTypes["LOAD_TODO_LIST_SUCCESS"] = "[TODO LIST] Load Todo List Action Success";
    TodoListActionTypes["LOAD_TODO_LIST_FAILURE"] = "[TODO LIST] Load Todo List Action Failure";
})(TodoListActionTypes || (TodoListActionTypes = {}));
class LoadTodoListAction {
    constructor() {
        this.type = TodoListActionTypes.LOAD_TODO_LIST;
    }
}
class LoadTodoListSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = TodoListActionTypes.LOAD_TODO_LIST_SUCCESS;
    }
}
class LoadTodoListFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = TodoListActionTypes.LOAD_TODO_LIST_FAILURE;
    }
}


/***/ }),

/***/ "IbW+":
/*!***********************************************!*\
  !*** ./src/app/store/actions/todo.actions.ts ***!
  \***********************************************/
/*! exports provided: TodoActionsTypes, LoadTodoAction, LoadTodoSuccessAction, LoadTodoFailureAction, DeleteTodoAction, DeleteTodoSuccessAction, DeleteTodoFailureAction, AddTodoAction, AddTodoSuccessAction, AddTodoFailureAction, UpdateTodoAction, UpdateTodoSuccessAction, UpdateTodoFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoActionsTypes", function() { return TodoActionsTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTodoAction", function() { return LoadTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTodoSuccessAction", function() { return LoadTodoSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTodoFailureAction", function() { return LoadTodoFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTodoAction", function() { return DeleteTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTodoSuccessAction", function() { return DeleteTodoSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTodoFailureAction", function() { return DeleteTodoFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoAction", function() { return AddTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoSuccessAction", function() { return AddTodoSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoFailureAction", function() { return AddTodoFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTodoAction", function() { return UpdateTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTodoSuccessAction", function() { return UpdateTodoSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTodoFailureAction", function() { return UpdateTodoFailureAction; });
var TodoActionsTypes;
(function (TodoActionsTypes) {
    TodoActionsTypes["LOAD_TODO"] = "[TODO] Load Action";
    TodoActionsTypes["LOAD_TODO_SUCCESS"] = "[TODO] Load Action Success";
    TodoActionsTypes["LOAD_TODO_FAILURE"] = "[TODO] Load Action Failure";
    TodoActionsTypes["ADD_TODO"] = "[TODO] Add Todo";
    TodoActionsTypes["ADD_TODO_SUCCESS"] = "[TODO] Add Todo Success";
    TodoActionsTypes["ADD_TODO_FAILURE"] = "[TODO] Add Todo Failure";
    TodoActionsTypes["UPDATE_TODO"] = "[TODO] Update Todo";
    TodoActionsTypes["UPDATE_TODO_SUCCESS"] = "[TODO] Update Todo Success";
    TodoActionsTypes["UPDATE_TODO_FAILURE"] = "[TODO] Update Todo Failure";
    TodoActionsTypes["DELETE_TODO"] = "[TODO] Delete Todo";
    TodoActionsTypes["DELETE_TODO_SUCCESS"] = "[TODO] Delete Todo Success";
    TodoActionsTypes["DELETE_TODO_FAILURE"] = "[TODO] Delete Todo Failure";
})(TodoActionsTypes || (TodoActionsTypes = {}));
class LoadTodoAction {
    constructor(payload) {
        this.payload = payload;
        this.type = TodoActionsTypes.LOAD_TODO;
    }
}
class LoadTodoSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = TodoActionsTypes.LOAD_TODO_SUCCESS;
    }
}
class LoadTodoFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = TodoActionsTypes.LOAD_TODO_FAILURE;
    }
}
/// DELETE TODO
class DeleteTodoAction {
    constructor(payload) {
        this.payload = payload;
        this.type = TodoActionsTypes.DELETE_TODO;
    }
}
class DeleteTodoSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = TodoActionsTypes.DELETE_TODO_SUCCESS;
    }
}
class DeleteTodoFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = TodoActionsTypes.DELETE_TODO_FAILURE;
    }
}
/// ADD TODO
class AddTodoAction {
    constructor(payload) {
        this.payload = payload;
        this.type = TodoActionsTypes.ADD_TODO;
    }
}
class AddTodoSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = TodoActionsTypes.ADD_TODO_SUCCESS;
    }
}
class AddTodoFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = TodoActionsTypes.ADD_TODO_FAILURE;
    }
}
/// UPDATE TODO
class UpdateTodoAction {
    constructor(payload) {
        this.payload = payload;
        this.type = TodoActionsTypes.UPDATE_TODO;
    }
}
class UpdateTodoSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = TodoActionsTypes.UPDATE_TODO_SUCCESS;
    }
}
class UpdateTodoFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = TodoActionsTypes.UPDATE_TODO_FAILURE;
    }
}


/***/ }),

/***/ "MKys":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "MUi6":
/*!**************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.ts ***!
  \**************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_actions_todoList_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/actions/todoList.actions */ "DJMz");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/animations */ "a1DM");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loading/loading.component */ "f/hT");









function TodoListComponent_app_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function TodoListComponent_div_4_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} }
function TodoListComponent_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_div_4_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const todo_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onTodoClick(todo_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TodoListComponent_div_4_div_5_div_3_Template, 1, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](todo_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r5 != _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx_r3.todos).length - 1);
} }
function TodoListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TodoListComponent_div_4_div_5_Template, 5, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filteredTodos);
} }
function TodoListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Empty list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TodoListComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.empty = false;
        this.filteredTodos = [];
        this.todos = this.store
            .select((state) => state.todoList ? state.todoList.data : [])
            .pipe((data) => {
            data.subscribe(res => {
                this.empty = !res.length;
            });
            return data;
        });
        this.loading = this.store.select((state) => state.todoList && state.todoList.loading);
    }
    ngOnInit() {
        this.store.dispatch(new _store_actions_todoList_actions__WEBPACK_IMPORTED_MODULE_1__["LoadTodoListAction"]());
        this.todos.subscribe(res => this.filteredTodos = res);
    }
    onTodoClick(todo) {
        this.router.navigate([`/todo/${todo._id}`]);
    }
    goToCreate() {
        this.router.navigate(['create-todo']);
    }
    searchTodos(event) {
        const { value } = event.target;
        this.todos.subscribe(res => {
            this.filteredTodos = res.filter(item => {
                const regExp = /[ ]gi/;
                const trimmedValue = value && value.toLowerCase().replace(regExp, '');
                const stringifiedItem = JSON.stringify(item).toLowerCase().replace(regExp, '');
                const exists = trimmedValue && !!stringifiedItem.includes(trimmedValue);
                return value ? exists : item;
            });
            this.empty = !this.filteredTodos.length;
        });
    }
}
TodoListComponent.ɵfac = function TodoListComponent_Factory(t) { return new (t || TodoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoListComponent, selectors: [["app-todo-list"]], decls: 10, vars: 8, consts: [[4, "ngIf"], [1, "container", "display-flex", "flex-direction-c", "align-items-c"], ["type", "text", "placeholder", "Search", 1, "search-input", 3, "keyup"], [1, "go-to-create"], ["tooltip", "Create Todo", 1, "btn", 3, "click"], ["src", "/assets/icons/todo-plus.svg"], [1, "top-shadow"], [1, "todo-list-container"], [1, "underline-left"], [1, "todo-list"], ["class", "todo-item pt-1 pb-1 pl-3 pr-3 fs-5 display-flex justify-content-c", 3, "click", 4, "ngFor", "ngForOf"], [1, "underline-right"], [1, "bottom-shadow"], [1, "todo-item", "pt-1", "pb-1", "pl-3", "pr-3", "fs-5", "display-flex", "justify-content-c", 3, "click"], [1, "todo-title"], ["class", "underline", 4, "ngIf"], [1, "underline"], [1, "fs-4"]], template: function TodoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TodoListComponent_app_loading_0_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TodoListComponent_Template_input_keyup_3_listener($event) { return ctx.searchTodos($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TodoListComponent_div_4_Template, 8, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TodoListComponent_div_5_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_Template_button_click_8_listener() { return ctx.goToCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.empty && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@popIn", undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__["TooltipDirective"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  padding-top: 90px;\n}\n\n.todo-list-container[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 600px;\n  width: 100%;\n}\n\n.todo-list[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: scroll;\n  max-height: 400px;\n}\n\n.todo-list[_ngcontent-%COMP%]   .todo-item[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n\n.todo-list[_ngcontent-%COMP%]   .todo-item[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n\n.underline[_ngcontent-%COMP%], .underline-left[_ngcontent-%COMP%], .underline-right[_ngcontent-%COMP%] {\n  width: 80%;\n  border-bottom: 1px solid #ccc;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  margin-left: -40%;\n}\n\n.underline-right[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  bottom: unset;\n  top: 50%;\n  left: unset;\n  width: 50%;\n  right: -25%;\n}\n\n.underline-left[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  left: 15%;\n  bottom: unset;\n  top: 50%;\n  width: 50%;\n}\n\n.top-shadow[_ngcontent-%COMP%], .bottom-shadow[_ngcontent-%COMP%] {\n  max-width: 630px;\n  width: 100%;\n  position: relative;\n  top: 25px;\n  height: 0;\n  border-bottom: 60px solid #fff;\n  filter: blur(10px);\n  background: #fff;\n  opacity: 1.5;\n  z-index: 99;\n}\n\n.bottom-shadow[_ngcontent-%COMP%] {\n  bottom: 25px;\n  top: unset;\n}\n\n.go-to-create[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 40px;\n  right: 40px;\n  z-index: 1000;\n}\n\n.go-to-create[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  display: flex;\n  padding: 25px;\n  justify-content: center;\n  min-width: unset;\n  width: 100px;\n}\n\n.go-to-create[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.todo-title[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 90vw;\n  max-width: 700px;\n  border-radius: 10px;\n  font-size: 2rem;\n  margin-top: 20px;\n}\n\n@media screen and (max-width: 675px) {\n  .go-to-create[_ngcontent-%COMP%] {\n    bottom: 20px;\n    right: 20px;\n  }\n  .go-to-create[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n  .go-to-create[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RvZG8tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQUY7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUk7RUFDRSxZQUFBO0FBRU47O0FBR0E7RUFDRSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUVFLHdCQUFBO0VBR0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUVFLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSkY7O0FBT0E7RUFFRSxZQUFBO0VBQ0EsVUFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFMRjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUpKOztBQUtJO0VBQ0UsV0FBQTtBQUhOOztBQVFBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUFMRjtFQU1FO0lBQ0UsV0FBQTtFQUpKO0VBS0k7SUFDRSxXQUFBO0VBSE47QUFDRiIsImZpbGUiOiJ0b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL2NvbG9yc1wiO1xuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctdG9wOiA5MHB4O1xufVxuLnRvZG8tbGlzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvZG8tbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAudG9kby1pdGVtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAuNTtcbiAgICB9XG4gIH1cbn1cblxuLnVuZGVybGluZSB7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZGVmYXVsdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IC00MCU7XG59XG5cbi51bmRlcmxpbmUtcmlnaHR7XG4gIEBleHRlbmQgLnVuZGVybGluZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoXG4gICAgICA5MGRlZ1xuICApO1xuICBib3R0b206IHVuc2V0O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogdW5zZXQ7XG4gIHdpZHRoOiA1MCU7XG4gIHJpZ2h0OiAtMjUlO1xufVxuXG4udW5kZXJsaW5lLWxlZnQge1xuICBAZXh0ZW5kIC51bmRlcmxpbmU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgbGVmdDogMTUlO1xuICBib3R0b206IHVuc2V0O1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnRvcC1zaGFkb3cge1xuICBtYXgtd2lkdGg6IDYzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1cHg7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogNjBweCBzb2xpZCAjZmZmO1xuICBmaWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG9wYWNpdHk6IDEuNTtcbiAgei1pbmRleDogOTk7XG59XG5cbi5ib3R0b20tc2hhZG93IHtcbiAgQGV4dGVuZCAudG9wLXNoYWRvdztcbiAgYm90dG9tOiAyNXB4O1xuICB0b3A6IHVuc2V0O1xufVxuXG4uZ28tdG8tY3JlYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDQwcHg7XG4gIHJpZ2h0OiA0MHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBidXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgIH1cbiAgfVxufVxuXG4udG9kby10aXRsZSB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDkwdnc7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjc1cHgpIHtcbiAgLmdvLXRvLWNyZWF0ZSB7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogNzBweDtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"], data: { animation: [
            _utils_animations__WEBPACK_IMPORTED_MODULE_2__["popInAnimation"],
            _utils_animations__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"],
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-list',
                templateUrl: './todo-list.component.html',
                styleUrls: ['./todo-list.component.scss'],
                animations: [
                    _utils_animations__WEBPACK_IMPORTED_MODULE_2__["popInAnimation"],
                    _utils_animations__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"],
                ]
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/animations */ "a1DM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");






function AppComponent_app_header_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tokenAvailable", ctx_r0.tokenAvailable);
} }
class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.events.subscribe(e => {
            this.tokenAvailable = !!localStorage.getItem('token');
        });
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 2, consts: [[1, "main-container"], [3, "tokenAvailable", 4, "ngIf"], ["outlet", "outlet"], [3, "tokenAvailable"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_header_1_Template, 1, 1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tokenAvailable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]], styles: [".form-control {\n  padding: 0 10px;\n}\n  .form-control input,   .form-control textarea {\n  border: 3px solid #138be0;\n  box-shadow: 0 0 2px #33629f;\n  border-radius: 5px;\n  font-size: 18px;\n  padding: 10px;\n  max-width: 90vw;\n}\n  .form-control input:active,   .form-control textarea:active {\n  border: 3px solid #33629f;\n  box-shadow: 0 0 2px #33629f;\n  outline: unset;\n}\n  .btn {\n  padding: 12px;\n  border-radius: 5px;\n  border: unset;\n  border-bottom: 5px solid #7a7a7a;\n  background-color: #ccc;\n  min-width: 100px;\n  font-size: 16px;\n  cursor: pointer;\n}\n  .btn:active {\n  border-bottom: unset;\n  outline: unset;\n}\n  .btn-primary {\n  border-color: #33629f;\n  background-color: #138be0;\n  color: #fff;\n}\n  .btn-danger {\n  border-color: #871612;\n  background-color: #dc2d28;\n  color: #fff;\n}\n@media screen and (max-width: 500px) {\n    .form-control input {\n    max-width: 90vw;\n    font-size: 14px;\n  }\n}\n  .justify-content-sa {\n  justify-content: space-around;\n}\n  .justify-content-sb {\n  justify-content: space-between;\n}\n  .justify-content-se {\n  justify-content: space-evenly;\n}\n  .justify-content-c {\n  justify-content: center;\n}\n  .justify-content-fs {\n  justify-content: flex-start;\n}\n  .justify-content-fe {\n  justify-content: flex-end;\n}\n  .align-items-sa {\n  align-items: space-around;\n}\n  .align-items-sb {\n  align-items: space-between;\n}\n  .align-items-se {\n  align-items: space-evenly;\n}\n  .align-items-c {\n  align-items: center;\n}\n  .align-items-fs {\n  align-items: flex-start;\n}\n  .align-items-fe {\n  align-items: flex-end;\n}\n  .flex-direction-c {\n  flex-direction: column;\n}\n  .flex-direction-cr {\n  flex-direction: column-reverse;\n}\n  .flex-direction-r {\n  flex-direction: row;\n}\n  .flex-direction-rr {\n  flex-direction: row-reverse;\n}\n  .display-flex {\n  display: flex;\n}\n  .display-block {\n  display: block;\n}\n  .display-inline-block {\n  display: inline-block;\n}\n  .display-none {\n  display: none;\n}\n  .p-0 {\n  padding: 0rem;\n}\n  .p-1 {\n  padding: 1rem;\n}\n  .p-2 {\n  padding: 2rem;\n}\n  .p-3 {\n  padding: 3rem;\n}\n  .p-4 {\n  padding: 4rem;\n}\n  .p-5 {\n  padding: 5rem;\n}\n  .p-6 {\n  padding: 6rem;\n}\n  .p-7 {\n  padding: 7rem;\n}\n  .p-8 {\n  padding: 8rem;\n}\n  .p-9 {\n  padding: 9rem;\n}\n  .p-10 {\n  padding: 10rem;\n}\n  .pl-0 {\n  padding-left: 0rem;\n}\n  .pl-1 {\n  padding-left: 1rem;\n}\n  .pl-2 {\n  padding-left: 2rem;\n}\n  .pl-3 {\n  padding-left: 3rem;\n}\n  .pl-4 {\n  padding-left: 4rem;\n}\n  .pl-5 {\n  padding-left: 5rem;\n}\n  .pl-6 {\n  padding-left: 6rem;\n}\n  .pl-7 {\n  padding-left: 7rem;\n}\n  .pl-8 {\n  padding-left: 8rem;\n}\n  .pl-9 {\n  padding-left: 9rem;\n}\n  .pl-10 {\n  padding-left: 10rem;\n}\n  .pr-0 {\n  padding-right: 0rem;\n}\n  .pr-1 {\n  padding-right: 1rem;\n}\n  .pr-2 {\n  padding-right: 2rem;\n}\n  .pr-3 {\n  padding-right: 3rem;\n}\n  .pr-4 {\n  padding-right: 4rem;\n}\n  .pr-5 {\n  padding-right: 5rem;\n}\n  .pr-6 {\n  padding-right: 6rem;\n}\n  .pr-7 {\n  padding-right: 7rem;\n}\n  .pr-8 {\n  padding-right: 8rem;\n}\n  .pr-9 {\n  padding-right: 9rem;\n}\n  .pr-10 {\n  padding-right: 10rem;\n}\n  .pb-0 {\n  padding-bottom: 0rem;\n}\n  .pb-1 {\n  padding-bottom: 1rem;\n}\n  .pb-2 {\n  padding-bottom: 2rem;\n}\n  .pb-3 {\n  padding-bottom: 3rem;\n}\n  .pb-4 {\n  padding-bottom: 4rem;\n}\n  .pb-5 {\n  padding-bottom: 5rem;\n}\n  .pb-6 {\n  padding-bottom: 6rem;\n}\n  .pb-7 {\n  padding-bottom: 7rem;\n}\n  .pb-8 {\n  padding-bottom: 8rem;\n}\n  .pb-9 {\n  padding-bottom: 9rem;\n}\n  .pb-10 {\n  padding-bottom: 10rem;\n}\n  .pt-0 {\n  padding-top: 0rem;\n}\n  .pt-1 {\n  padding-top: 1rem;\n}\n  .pt-2 {\n  padding-top: 2rem;\n}\n  .pt-3 {\n  padding-top: 3rem;\n}\n  .pt-4 {\n  padding-top: 4rem;\n}\n  .pt-5 {\n  padding-top: 5rem;\n}\n  .pt-6 {\n  padding-top: 6rem;\n}\n  .pt-7 {\n  padding-top: 7rem;\n}\n  .pt-8 {\n  padding-top: 8rem;\n}\n  .pt-9 {\n  padding-top: 9rem;\n}\n  .pt-10 {\n  padding-top: 10rem;\n}\n  .ml-0 {\n  margin-left: 0rem;\n}\n  .ml-1 {\n  margin-left: 1rem;\n}\n  .ml-2 {\n  margin-left: 2rem;\n}\n  .ml-3 {\n  margin-left: 3rem;\n}\n  .ml-4 {\n  margin-left: 4rem;\n}\n  .ml-5 {\n  margin-left: 5rem;\n}\n  .ml-6 {\n  margin-left: 6rem;\n}\n  .ml-7 {\n  margin-left: 7rem;\n}\n  .ml-8 {\n  margin-left: 8rem;\n}\n  .ml-9 {\n  margin-left: 9rem;\n}\n  .ml-10 {\n  margin-left: 10rem;\n}\n  .mr-0 {\n  margin-right: 0rem;\n}\n  .mr-1 {\n  margin-right: 1rem;\n}\n  .mr-2 {\n  margin-right: 2rem;\n}\n  .mr-3 {\n  margin-right: 3rem;\n}\n  .mr-4 {\n  margin-right: 4rem;\n}\n  .mr-5 {\n  margin-right: 5rem;\n}\n  .mr-6 {\n  margin-right: 6rem;\n}\n  .mr-7 {\n  margin-right: 7rem;\n}\n  .mr-8 {\n  margin-right: 8rem;\n}\n  .mr-9 {\n  margin-right: 9rem;\n}\n  .mr-10 {\n  margin-right: 10rem;\n}\n  .mb-0 {\n  margin-bottom: 0rem;\n}\n  .mb-1 {\n  margin-bottom: 1rem;\n}\n  .mb-2 {\n  margin-bottom: 2rem;\n}\n  .mb-3 {\n  margin-bottom: 3rem;\n}\n  .mb-4 {\n  margin-bottom: 4rem;\n}\n  .mb-5 {\n  margin-bottom: 5rem;\n}\n  .mb-6 {\n  margin-bottom: 6rem;\n}\n  .mb-7 {\n  margin-bottom: 7rem;\n}\n  .mb-8 {\n  margin-bottom: 8rem;\n}\n  .mb-9 {\n  margin-bottom: 9rem;\n}\n  .mb-10 {\n  margin-bottom: 10rem;\n}\n  .mt-0 {\n  margin-top: 0rem;\n}\n  .mt-1 {\n  margin-top: 1rem;\n}\n  .mt-2 {\n  margin-top: 2rem;\n}\n  .mt-3 {\n  margin-top: 3rem;\n}\n  .mt-4 {\n  margin-top: 4rem;\n}\n  .mt-5 {\n  margin-top: 5rem;\n}\n  .mt-6 {\n  margin-top: 6rem;\n}\n  .mt-7 {\n  margin-top: 7rem;\n}\n  .mt-8 {\n  margin-top: 8rem;\n}\n  .mt-9 {\n  margin-top: 9rem;\n}\n  .mt-10 {\n  margin-top: 10rem;\n}\n  .w-0 {\n  width: 0rem;\n}\n  .w-1 {\n  width: 1rem;\n}\n  .w-2 {\n  width: 2rem;\n}\n  .w-3 {\n  width: 3rem;\n}\n  .w-4 {\n  width: 4rem;\n}\n  .w-5 {\n  width: 5rem;\n}\n  .w-6 {\n  width: 6rem;\n}\n  .w-7 {\n  width: 7rem;\n}\n  .w-8 {\n  width: 8rem;\n}\n  .w-9 {\n  width: 9rem;\n}\n  .w-10 {\n  width: 10rem;\n}\n  .fs-0 {\n  font-size: 0rem;\n}\n  .fs-1 {\n  font-size: 1rem;\n}\n  .fs-2 {\n  font-size: 2rem;\n}\n  .fs-3 {\n  font-size: 3rem;\n}\n  .fs-4 {\n  font-size: 4rem;\n}\n  .fs-5 {\n  font-size: 5rem;\n}\n  .fs-6 {\n  font-size: 6rem;\n}\n  .fs-7 {\n  font-size: 7rem;\n}\n  .fs-8 {\n  font-size: 8rem;\n}\n  .fs-9 {\n  font-size: 9rem;\n}\n  .fs-10 {\n  font-size: 10rem;\n}\n@media screen and (max-width: 500px) {\n    .fs-0 {\n    font-size: 0px;\n  }\n    .fs-1 {\n    font-size: 7px;\n  }\n    .fs-2 {\n    font-size: 14px;\n  }\n    .fs-3 {\n    font-size: 21px;\n  }\n    .fs-4 {\n    font-size: 28px;\n  }\n    .fs-5 {\n    font-size: 35px;\n  }\n    .fs-6 {\n    font-size: 42px;\n  }\n    .fs-7 {\n    font-size: 49px;\n  }\n    .fs-8 {\n    font-size: 56px;\n  }\n    .fs-9 {\n    font-size: 63px;\n  }\n    .fs-10 {\n    font-size: 70px;\n  }\n}\n  * {\n  font-family: \"Yusei Magic\", sans-serif;\n  margin: 0;\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n}\n.log-out[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n.main-container[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvZm9ybXMuc2NzcyIsIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29sb3JzLnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2ZsZXhib3guc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc3BhY2luZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZUFBQTtBQ0ZGO0FER0U7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNESjtBRElJO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUNGTjtBRE9BO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JFekJRO0VGMEJSLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNMRjtBRE9FO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0FDTEo7QURTQTtFQUNFLHFCRXRDYTtFRnVDYix5QkV4Q1E7RUZ5Q1IsV0FBQTtBQ1BGO0FEVUE7RUFDRSxxQkV2Q1k7RUZ3Q1oseUJFekNPO0VGMENQLFdBQUE7QUNSRjtBRFdBO0VBRUk7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQ1ZKO0FBQ0Y7QUVaTTtFQUNFLDZCQUFBO0FGY1I7QUVmTTtFQUNFLDhCQUFBO0FGaUJSO0FFbEJNO0VBQ0UsNkJBQUE7QUZvQlI7QUVyQk07RUFDRSx1QkFBQTtBRnVCUjtBRXhCTTtFQUNFLDJCQUFBO0FGMEJSO0FFM0JNO0VBQ0UseUJBQUE7QUY2QlI7QUU5Qk07RUFDRSx5QkFBQTtBRmdDUjtBRWpDTTtFQUNFLDBCQUFBO0FGbUNSO0FFcENNO0VBQ0UseUJBQUE7QUZzQ1I7QUV2Q007RUFDRSxtQkFBQTtBRnlDUjtBRTFDTTtFQUNFLHVCQUFBO0FGNENSO0FFN0NNO0VBQ0UscUJBQUE7QUYrQ1I7QUVoRE07RUFDRSxzQkFBQTtBRmtEUjtBRW5ETTtFQUNFLDhCQUFBO0FGcURSO0FFdERNO0VBQ0UsbUJBQUE7QUZ3RFI7QUV6RE07RUFDRSwyQkFBQTtBRjJEUjtBRTVETTtFQUNFLGFBQUE7QUY4RFI7QUUvRE07RUFDRSxjQUFBO0FGaUVSO0FFbEVNO0VBQ0UscUJBQUE7QUZvRVI7QUVyRU07RUFDRSxhQUFBO0FGdUVSO0FHbEdJO0VBQ0UsYUFBQTtBSG9HTjtBR3JHSTtFQUNFLGFBQUE7QUh1R047QUd4R0k7RUFDRSxhQUFBO0FIMEdOO0FHM0dJO0VBQ0UsYUFBQTtBSDZHTjtBRzlHSTtFQUNFLGFBQUE7QUhnSE47QUdqSEk7RUFDRSxhQUFBO0FIbUhOO0FHcEhJO0VBQ0UsYUFBQTtBSHNITjtBR3ZISTtFQUNFLGFBQUE7QUh5SE47QUcxSEk7RUFDRSxhQUFBO0FINEhOO0FHN0hJO0VBQ0UsYUFBQTtBSCtITjtBR2hJSTtFQUNFLGNBQUE7QUhrSU47QUduSUk7RUFDRSxrQkFBQTtBSHFJTjtBR3RJSTtFQUNFLGtCQUFBO0FId0lOO0FHeklJO0VBQ0Usa0JBQUE7QUgySU47QUc1SUk7RUFDRSxrQkFBQTtBSDhJTjtBRy9JSTtFQUNFLGtCQUFBO0FIaUpOO0FHbEpJO0VBQ0Usa0JBQUE7QUhvSk47QUdySkk7RUFDRSxrQkFBQTtBSHVKTjtBR3hKSTtFQUNFLGtCQUFBO0FIMEpOO0FHM0pJO0VBQ0Usa0JBQUE7QUg2Sk47QUc5Skk7RUFDRSxrQkFBQTtBSGdLTjtBR2pLSTtFQUNFLG1CQUFBO0FIbUtOO0FHcEtJO0VBQ0UsbUJBQUE7QUhzS047QUd2S0k7RUFDRSxtQkFBQTtBSHlLTjtBRzFLSTtFQUNFLG1CQUFBO0FINEtOO0FHN0tJO0VBQ0UsbUJBQUE7QUgrS047QUdoTEk7RUFDRSxtQkFBQTtBSGtMTjtBR25MSTtFQUNFLG1CQUFBO0FIcUxOO0FHdExJO0VBQ0UsbUJBQUE7QUh3TE47QUd6TEk7RUFDRSxtQkFBQTtBSDJMTjtBRzVMSTtFQUNFLG1CQUFBO0FIOExOO0FHL0xJO0VBQ0UsbUJBQUE7QUhpTU47QUdsTUk7RUFDRSxvQkFBQTtBSG9NTjtBR3JNSTtFQUNFLG9CQUFBO0FIdU1OO0FHeE1JO0VBQ0Usb0JBQUE7QUgwTU47QUczTUk7RUFDRSxvQkFBQTtBSDZNTjtBRzlNSTtFQUNFLG9CQUFBO0FIZ05OO0FHak5JO0VBQ0Usb0JBQUE7QUhtTk47QUdwTkk7RUFDRSxvQkFBQTtBSHNOTjtBR3ZOSTtFQUNFLG9CQUFBO0FIeU5OO0FHMU5JO0VBQ0Usb0JBQUE7QUg0Tk47QUc3Tkk7RUFDRSxvQkFBQTtBSCtOTjtBR2hPSTtFQUNFLG9CQUFBO0FIa09OO0FHbk9JO0VBQ0UscUJBQUE7QUhxT047QUd0T0k7RUFDRSxpQkFBQTtBSHdPTjtBR3pPSTtFQUNFLGlCQUFBO0FIMk9OO0FHNU9JO0VBQ0UsaUJBQUE7QUg4T047QUcvT0k7RUFDRSxpQkFBQTtBSGlQTjtBR2xQSTtFQUNFLGlCQUFBO0FIb1BOO0FHclBJO0VBQ0UsaUJBQUE7QUh1UE47QUd4UEk7RUFDRSxpQkFBQTtBSDBQTjtBRzNQSTtFQUNFLGlCQUFBO0FINlBOO0FHOVBJO0VBQ0UsaUJBQUE7QUhnUU47QUdqUUk7RUFDRSxpQkFBQTtBSG1RTjtBR3BRSTtFQUNFLGtCQUFBO0FIc1FOO0FHdlFJO0VBQ0UsaUJBQUE7QUh5UU47QUcxUUk7RUFDRSxpQkFBQTtBSDRRTjtBRzdRSTtFQUNFLGlCQUFBO0FIK1FOO0FHaFJJO0VBQ0UsaUJBQUE7QUhrUk47QUduUkk7RUFDRSxpQkFBQTtBSHFSTjtBR3RSSTtFQUNFLGlCQUFBO0FId1JOO0FHelJJO0VBQ0UsaUJBQUE7QUgyUk47QUc1Ukk7RUFDRSxpQkFBQTtBSDhSTjtBRy9SSTtFQUNFLGlCQUFBO0FIaVNOO0FHbFNJO0VBQ0UsaUJBQUE7QUhvU047QUdyU0k7RUFDRSxrQkFBQTtBSHVTTjtBR3hTSTtFQUNFLGtCQUFBO0FIMFNOO0FHM1NJO0VBQ0Usa0JBQUE7QUg2U047QUc5U0k7RUFDRSxrQkFBQTtBSGdUTjtBR2pUSTtFQUNFLGtCQUFBO0FIbVROO0FHcFRJO0VBQ0Usa0JBQUE7QUhzVE47QUd2VEk7RUFDRSxrQkFBQTtBSHlUTjtBRzFUSTtFQUNFLGtCQUFBO0FINFROO0FHN1RJO0VBQ0Usa0JBQUE7QUgrVE47QUdoVUk7RUFDRSxrQkFBQTtBSGtVTjtBR25VSTtFQUNFLGtCQUFBO0FIcVVOO0FHdFVJO0VBQ0UsbUJBQUE7QUh3VU47QUd6VUk7RUFDRSxtQkFBQTtBSDJVTjtBRzVVSTtFQUNFLG1CQUFBO0FIOFVOO0FHL1VJO0VBQ0UsbUJBQUE7QUhpVk47QUdsVkk7RUFDRSxtQkFBQTtBSG9WTjtBR3JWSTtFQUNFLG1CQUFBO0FIdVZOO0FHeFZJO0VBQ0UsbUJBQUE7QUgwVk47QUczVkk7RUFDRSxtQkFBQTtBSDZWTjtBRzlWSTtFQUNFLG1CQUFBO0FIZ1dOO0FHaldJO0VBQ0UsbUJBQUE7QUhtV047QUdwV0k7RUFDRSxtQkFBQTtBSHNXTjtBR3ZXSTtFQUNFLG9CQUFBO0FIeVdOO0FHMVdJO0VBQ0UsZ0JBQUE7QUg0V047QUc3V0k7RUFDRSxnQkFBQTtBSCtXTjtBR2hYSTtFQUNFLGdCQUFBO0FIa1hOO0FHblhJO0VBQ0UsZ0JBQUE7QUhxWE47QUd0WEk7RUFDRSxnQkFBQTtBSHdYTjtBR3pYSTtFQUNFLGdCQUFBO0FIMlhOO0FHNVhJO0VBQ0UsZ0JBQUE7QUg4WE47QUcvWEk7RUFDRSxnQkFBQTtBSGlZTjtBR2xZSTtFQUNFLGdCQUFBO0FIb1lOO0FHcllJO0VBQ0UsZ0JBQUE7QUh1WU47QUd4WUk7RUFDRSxpQkFBQTtBSDBZTjtBRzNZSTtFQUNFLFdBQUE7QUg2WU47QUc5WUk7RUFDRSxXQUFBO0FIZ1pOO0FHalpJO0VBQ0UsV0FBQTtBSG1aTjtBR3BaSTtFQUNFLFdBQUE7QUhzWk47QUd2Wkk7RUFDRSxXQUFBO0FIeVpOO0FHMVpJO0VBQ0UsV0FBQTtBSDRaTjtBRzdaSTtFQUNFLFdBQUE7QUgrWk47QUdoYUk7RUFDRSxXQUFBO0FIa2FOO0FHbmFJO0VBQ0UsV0FBQTtBSHFhTjtBR3RhSTtFQUNFLFdBQUE7QUh3YU47QUd6YUk7RUFDRSxZQUFBO0FIMmFOO0FHNWFJO0VBQ0UsZUFBQTtBSDhhTjtBRy9hSTtFQUNFLGVBQUE7QUhpYk47QUdsYkk7RUFDRSxlQUFBO0FIb2JOO0FHcmJJO0VBQ0UsZUFBQTtBSHViTjtBR3hiSTtFQUNFLGVBQUE7QUgwYk47QUczYkk7RUFDRSxlQUFBO0FINmJOO0FHOWJJO0VBQ0UsZUFBQTtBSGdjTjtBR2pjSTtFQUNFLGVBQUE7QUhtY047QUdwY0k7RUFDRSxlQUFBO0FIc2NOO0FHdmNJO0VBQ0UsZUFBQTtBSHljTjtBRzFjSTtFQUNFLGdCQUFBO0FINGNOO0FHbGJBO0VBUU07SUFDRSxjQUFBO0VINmFOO0VHOWFJO0lBQ0UsY0FBQTtFSGdiTjtFR2piSTtJQUNFLGVBQUE7RUhtYk47RUdwYkk7SUFDRSxlQUFBO0VIc2JOO0VHdmJJO0lBQ0UsZUFBQTtFSHliTjtFRzFiSTtJQUNFLGVBQUE7RUg0Yk47RUc3Ykk7SUFDRSxlQUFBO0VIK2JOO0VHaGNJO0lBQ0UsZUFBQTtFSGtjTjtFR25jSTtJQUNFLGVBQUE7RUhxY047RUd0Y0k7SUFDRSxlQUFBO0VId2NOO0VHemNJO0lBQ0UsZUFBQTtFSDJjTjtBQUNGO0FBbGZFO0VBQ0Usc0NBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQW9mSjtBQWhmQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQW1mRjtBQWhmQTtFQUNFLGtCQUFBO0FBbWZGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvY29sb3JzLnNjc3NcIjtcblxuLy8gZm9ybSBjb250cm9sIHN0eWxlc1xuLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaW5wdXQsIHRleHRhcmVhIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkcHJpbWFyeTtcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4ICRwcmltYXJ5LWRhcms7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1heC13aWR0aDogOTB2dztcblxuXG4gICAgJjphY3RpdmUge1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgJHByaW1hcnktZGFyaztcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggJHByaW1hcnktZGFyaztcbiAgICAgIG91dGxpbmU6IHVuc2V0O1xuICAgIH1cbiAgfVxufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IHVuc2V0O1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgJGRlZmF1bHQtZGFyaztcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRlZmF1bHQ7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6YWN0aXZlIHtcbiAgICBib3JkZXItYm90dG9tOiB1bnNldDtcbiAgICBvdXRsaW5lOiB1bnNldDtcbiAgfVxufVxuXG4uYnRuLXByaW1hcnkge1xuICBib3JkZXItY29sb3I6ICRwcmltYXJ5LWRhcms7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi1kYW5nZXIge1xuICBib3JkZXItY29sb3I6ICRkYW5nZXItZGFyaztcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhbmdlcjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGlucHV0IHtcbiAgICAgIG1heC13aWR0aDogOTB2dztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cbiIsIjo6bmctZGVlcCB7XG4gIEBpbXBvcnQgXCJ+c3JjL2Fzc2V0cy9zdHlsZXMvZm9ybXMuc2Nzc1wiO1xuICBAaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL2ZsZXhib3guc2Nzc1wiO1xuICBAaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL3NwYWNpbmcuc2Nzc1wiO1xuXG4gICoge1xuICAgIGZvbnQtZmFtaWx5OiAnWXVzZWkgTWFnaWMnLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG59XG4ubG9nLW91dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuXG5cbiIsIiRwcmltYXJ5OiAjMTM4YmUwO1xuJHByaW1hcnktZGFyazogIzMzNjI5ZjtcbiRkZWZhdWx0OiAjY2NjO1xuJGRlZmF1bHQtZGFyazogIzdhN2E3YTtcblxuJGRhbmdlcjogI2RjMmQyODtcbiRkYW5nZXItZGFyazogIzg3MTYxMjtcbiIsIiRhbGlnbmluZzogKFxuICAnLXNhJzogc3BhY2UtYXJvdW5kLFxuICAnLXNiJzogc3BhY2UtYmV0d2VlbixcbiAgJy1zZSc6IHNwYWNlLWV2ZW5seSxcbiAgJy1jJzogY2VudGVyLFxuICAnLWZzJzogZmxleC1zdGFydCxcbiAgJy1mZSc6IGZsZXgtZW5kXG4pO1xuXG4kZGlzcGxheTogKFxuICAnLWZsZXgnOiBmbGV4LFxuICAnLWJsb2NrJzogYmxvY2ssXG4gICctaW5saW5lLWJsb2NrJzogaW5saW5lLWJsb2NrLFxuICAnLW5vbmUnOiBub25lXG4pO1xuXG4kZGlyZWN0aW9uOiAoXG4gICctYyc6IGNvbHVtbixcbiAgJy1jcic6IGNvbHVtbi1yZXZlcnNlLFxuICAnLXInOiByb3csXG4gICctcnInOiByb3ctcmV2ZXJzZSxcbik7XG5cbkBtaXhpbiBnZXRGbGV4Ym94KCkge1xuICAkYWxsOiAoXG4gICAgJ2p1c3RpZnktY29udGVudCc6ICRhbGlnbmluZyxcbiAgICAnYWxpZ24taXRlbXMnOiAkYWxpZ25pbmcsXG4gICAgJ2ZsZXgtZGlyZWN0aW9uJzogJGRpcmVjdGlvbixcbiAgICAnZGlzcGxheSc6ICRkaXNwbGF5LFxuICApO1xuXG4gIEBlYWNoICRrZXksICR2YWx1ZSBpbiAkYWxsIHtcbiAgICBAZWFjaCAkaywgJHYgaW4gJHZhbHVlIHtcbiAgICAgIC4jeyRrZXkgKyAkayB9IHtcbiAgICAgICAgI3ska2V5fTogI3skdn07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBpbmNsdWRlIGdldEZsZXhib3goKTtcbiIsIiRtYXg6IDEwO1xuJG9mZnNldDogMTtcbiR1bml0OiAncmVtJztcblxuQG1peGluIGxpc3QtbG9vcCgkY2xhc3NOYW1lLCAkc3R5bGVOYW1lKSB7XG4gICRpOiAwO1xuICBAd2hpbGUgJGkgPD0gJG1heCB7XG4gICAgI3skY2xhc3NOYW1lICsgJGl9IHtcbiAgICAgICN7JHN0eWxlTmFtZX06ICN7JGkgKyAkdW5pdH07XG4gICAgfVxuICAgICRpOiAkaSArICRvZmZzZXQ7XG4gIH1cbn1cblxuXG4vLyBwYWRkaW5nIGNsYXNzZXNcbkBpbmNsdWRlIGxpc3QtbG9vcCgnLnAtJywgJ3BhZGRpbmcnKTtcbkBpbmNsdWRlIGxpc3QtbG9vcCgnLnBsLScsICdwYWRkaW5nLWxlZnQnKTtcbkBpbmNsdWRlIGxpc3QtbG9vcCgnLnByLScsICdwYWRkaW5nLXJpZ2h0Jyk7XG5AaW5jbHVkZSBsaXN0LWxvb3AoJy5wYi0nLCAncGFkZGluZy1ib3R0b20nKTtcbkBpbmNsdWRlIGxpc3QtbG9vcCgnLnB0LScsICdwYWRkaW5nLXRvcCcpO1xuXG4vLyBtYXJnaW4gY2xhc3Nlc1xuQGluY2x1ZGUgbGlzdC1sb29wKCcubWwtJywgJ21hcmdpbi1sZWZ0Jyk7XG5AaW5jbHVkZSBsaXN0LWxvb3AoJy5tci0nLCAnbWFyZ2luLXJpZ2h0Jyk7XG5AaW5jbHVkZSBsaXN0LWxvb3AoJy5tYi0nLCAnbWFyZ2luLWJvdHRvbScpO1xuQGluY2x1ZGUgbGlzdC1sb29wKCcubXQtJywgJ21hcmdpbi10b3AnKTtcblxuLy8gd2lkdGhcbkBpbmNsdWRlIGxpc3QtbG9vcCgnLnctJywgJ3dpZHRoJyk7XG5cbi8vIGZvbnQgc2l6ZSBjbGFzc2VzXG5AaW5jbHVkZSBsaXN0LWxvb3AoJy5mcy0nLCAnZm9udC1zaXplJyk7XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICRtYXg6IDEwO1xuICAkb2Zmc2V0OiAxO1xuICAkdW5pdDogJ3B4JztcblxuICBAbWl4aW4gbGlzdC1sb29wKCRjbGFzc05hbWUsICRzdHlsZU5hbWUpIHtcbiAgICAkaTogMDtcbiAgICBAd2hpbGUgJGkgPD0gJG1heCB7XG4gICAgICAjeyRjbGFzc05hbWUgKyAkaX0ge1xuICAgICAgICAjeyRzdHlsZU5hbWV9OiAjeyRpICogNyArICR1bml0fTtcbiAgICAgIH1cbiAgICAgICRpOiAkaSArICRvZmZzZXQ7XG4gICAgfVxuICB9XG4gIEBpbmNsdWRlIGxpc3QtbG9vcCgnLmZzLScsICdmb250LXNpemUnKTtcblxuXG59XG4iXX0= */"], data: { animation: [
            _utils_animations__WEBPACK_IMPORTED_MODULE_1__["routerSlideInAnimation"],
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [
                    _utils_animations__WEBPACK_IMPORTED_MODULE_1__["routerSlideInAnimation"],
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "VZyo":
/*!******************************************************!*\
  !*** ./src/app/create-todo/create-todo.component.ts ***!
  \******************************************************/
/*! exports provided: CreateTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTodoComponent", function() { return CreateTodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _store_actions_todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/todo.actions */ "IbW+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loading/loading.component */ "f/hT");









function CreateTodoComponent_app_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
class CreateTodoComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.desc = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.loading = this.store.select((state) => state.todo && state.todo.loading);
    }
    ngOnInit() {
    }
    create() {
        const payload = {
            title: this.title.value,
            desc: this.desc.value,
        };
        this.store.dispatch(new _store_actions_todo_actions__WEBPACK_IMPORTED_MODULE_2__["AddTodoAction"](payload));
        this.title.disable();
        this.desc.disable();
        const subscription = this.loading.subscribe(loadStatus => {
            if (!loadStatus) {
                this.title.enable();
                this.desc.enable();
                this.router.navigate(['']);
                subscription.unsubscribe();
            }
        });
    }
}
CreateTodoComponent.ɵfac = function CreateTodoComponent_Factory(t) { return new (t || CreateTodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CreateTodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateTodoComponent, selectors: [["app-create-todo"]], decls: 16, vars: 12, consts: [[4, "ngIf"], [1, "container", "display-flex", "justify-content-c", "align-items-c", "flex-direction-c"], ["align", "center", 1, "fs-3", "mb-2"], [1, "form-control", "mb-2"], ["type", "text", "placeholder", "title", 1, "input", 3, "formControl"], ["type", "text", "placeholder", "desc", 1, "input", 3, "formControl"], [1, "btn", "fs-2", 3, "disabled", "click"]], template: function CreateTodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CreateTodoComponent_app_loading_0_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTodoComponent_Template_button_click_11_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Create Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-primary", ctx.title.value && ctx.desc.value && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.title.value || !ctx.desc.value || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, ctx.loading));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".go-to-home[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.input[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NyZWF0ZS10b2RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6ImNyZWF0ZS10b2RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdvLXRvLWhvbWUge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uaW5wdXQge1xuICBmb250LXNpemU6IDJyZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateTodoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-todo',
                templateUrl: './create-todo.component.html',
                styleUrls: ['./create-todo.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZA+5":
/*!**************************************************!*\
  !*** ./src/app/services/public-guard.service.ts ***!
  \**************************************************/
/*! exports provided: PublicGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicGuardService", function() { return PublicGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class PublicGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (this.auth.isAuthenticated()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}
PublicGuardService.ɵfac = function PublicGuardService_Factory(t) { return new (t || PublicGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PublicGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PublicGuardService, factory: PublicGuardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/reducers/auth.reducer */ "bWQP");
/* harmony import */ var _store_effects_auth_effect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/effects/auth.effect */ "22BU");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth-guard.service */ "MKys");
/* harmony import */ var _services_public_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/public-guard.service */ "ZA+5");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "MUi6");
/* harmony import */ var _services_todo_list_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/todo-list.service */ "0l6T");
/* harmony import */ var _store_reducers_todo_list_reducer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./store/reducers/todo-list.reducer */ "mhy1");
/* harmony import */ var _store_effects_load_todo_list_effect__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./store/effects/load-todo-list.effect */ "BA4k");
/* harmony import */ var _todo_view_todo_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./todo-view/todo-view.component */ "Zp/U");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/todo.service */ "tadm");
/* harmony import */ var _store_effects_todo_effect__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./store/effects/todo.effect */ "CKs+");
/* harmony import */ var _store_reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./store/reducers/todo.reducer */ "22I9");
/* harmony import */ var _create_todo_create_todo_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./create-todo/create-todo.component */ "VZyo");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./loading/loading.component */ "f/hT");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./header/header.component */ "fECr");


































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JWT_OPTIONS"], useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JWT_OPTIONS"] },
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JwtHelperService"],
        _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"],
        _services_public_guard_service__WEBPACK_IMPORTED_MODULE_15__["PublicGuardService"],
        _services_todo_list_service__WEBPACK_IMPORTED_MODULE_18__["TodoListService"],
        _services_todo_service__WEBPACK_IMPORTED_MODULE_22__["TodoService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JwtModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_store_effects_auth_effect__WEBPACK_IMPORTED_MODULE_10__["AuthEffect"], _store_effects_load_todo_list_effect__WEBPACK_IMPORTED_MODULE_20__["LoadTodoListEffect"], _store_effects_todo_effect__WEBPACK_IMPORTED_MODULE_23__["TodoEffect"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({
                auth: _store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_9__["authReducer"],
                todoList: _store_reducers_todo_list_reducer__WEBPACK_IMPORTED_MODULE_19__["todoListReducer"],
                todo: _store_reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_24__["todoReducer"],
            }),
            ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_26__["TooltipModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_17__["TodoListComponent"],
        _todo_view_todo_view_component__WEBPACK_IMPORTED_MODULE_21__["TodoViewComponent"],
        _create_todo_create_todo_component__WEBPACK_IMPORTED_MODULE_25__["CreateTodoComponent"],
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_27__["LoadingComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_29__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JwtModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreRootModule"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_26__["TooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                    _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_17__["TodoListComponent"],
                    _todo_view_todo_view_component__WEBPACK_IMPORTED_MODULE_21__["TodoViewComponent"],
                    _create_todo_create_todo_component__WEBPACK_IMPORTED_MODULE_25__["CreateTodoComponent"],
                    _loading_loading_component__WEBPACK_IMPORTED_MODULE_27__["LoadingComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_29__["HeaderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JwtModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__["StoreDevtoolsModule"].instrument({
                        maxAge: 25,
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_store_effects_auth_effect__WEBPACK_IMPORTED_MODULE_10__["AuthEffect"], _store_effects_load_todo_list_effect__WEBPACK_IMPORTED_MODULE_20__["LoadTodoListEffect"], _store_effects_todo_effect__WEBPACK_IMPORTED_MODULE_23__["TodoEffect"]]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({
                        auth: _store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_9__["authReducer"],
                        todoList: _store_reducers_todo_list_reducer__WEBPACK_IMPORTED_MODULE_19__["todoListReducer"],
                        todo: _store_reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_24__["todoReducer"],
                    }),
                    ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_26__["TooltipModule"],
                ],
                providers: [
                    { provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JWT_OPTIONS"], useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JWT_OPTIONS"] },
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JwtHelperService"],
                    _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"],
                    _services_public_guard_service__WEBPACK_IMPORTED_MODULE_15__["PublicGuardService"],
                    _services_todo_list_service__WEBPACK_IMPORTED_MODULE_18__["TodoListService"],
                    _services_todo_service__WEBPACK_IMPORTED_MODULE_22__["TodoService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Zp/U":
/*!**************************************************!*\
  !*** ./src/app/todo-view/todo-view.component.ts ***!
  \**************************************************/
/*! exports provided: TodoViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoViewComponent", function() { return TodoViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/actions/todo.actions */ "IbW+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/animations */ "a1DM");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loading/loading.component */ "f/hT");










function TodoViewComponent_app_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function TodoViewComponent_b_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Titulo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
} }
function TodoViewComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.todo && ctx_r2.todo.title);
} }
function TodoViewComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r4.title);
} }
function TodoViewComponent_b_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
} }
function TodoViewComponent_pre_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.todo && ctx_r6.todo.desc);
} }
function TodoViewComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "textarea", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r8.desc);
} }
function TodoViewComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoViewComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.edit = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined)("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r9.loading));
} }
function TodoViewComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoViewComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined)("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r10.loading));
} }
function TodoViewComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoViewComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@popIn", undefined)("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r11.loading));
} }
class TodoViewComponent {
    constructor(store, route, router) {
        this.store = store;
        this.route = route;
        this.router = router;
        this.todo = {};
        this.loading = this.store.select((state) => state.todo && state.todo.loading);
        this.id = this.route.snapshot.paramMap.get('id');
        this.edit = false;
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.todo.title);
        this.desc = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.todo.desc);
    }
    ngOnInit() {
        this.store.select((state) => state.todoList ? state.todoList.data.find(item => item._id === this.id) : undefined).subscribe(item => {
            this.todo = item || {};
            if (!item) {
                this.store.dispatch(new _store_actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__["LoadTodoAction"](this.id));
                this.store.select((state) => state.todo && state.todo.data)
                    .subscribe(todoItem => {
                    this.todo = todoItem;
                    this.title.setValue(todoItem && todoItem.title);
                    this.desc.setValue(todoItem && todoItem.desc);
                    this.loading.subscribe(loadStatus => {
                        if (!this.todo && !loadStatus) {
                            this.router.navigate(['/']);
                        }
                    });
                });
            }
        }).unsubscribe();
    }
    onEdit() {
        this.edit = true;
        this.title.setValue(this.todo && this.todo.title);
        this.desc.setValue(this.todo && this.todo.desc);
    }
    deleteTodo() {
        this.store.dispatch(new _store_actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__["DeleteTodoAction"](this.id));
        const subscription = this.loading.subscribe(loadStatus => {
            if (!loadStatus) {
                this.router.navigate(['/']);
                subscription.unsubscribe();
            }
        });
    }
    update() {
        const data = { title: this.title.value, desc: this.desc.value };
        this.store.dispatch(new _store_actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateTodoAction"]({ id: this.id, data }));
        this.desc.disable();
        this.title.disable();
        const subscription = this.loading.subscribe(loadStatus => {
            if (!loadStatus) {
                this.desc.enable();
                this.title.enable();
                this.edit = false;
                this.todo = { title: this.title.value, desc: this.desc.value };
                subscription.unsubscribe();
            }
        });
    }
}
TodoViewComponent.ɵfac = function TodoViewComponent_Factory(t) { return new (t || TodoViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
TodoViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoViewComponent, selectors: [["app-todo-view"]], decls: 22, vars: 18, consts: [[4, "ngIf"], [1, "container", "display-flex", "justify-content-c", "align-items-c"], [1, "display-flex", "flex-direction-c", "mb-2"], ["class", "fs-2 ml-1", 4, "ngIf"], ["class", "fs-3", 4, "ngIf", "ngIfElse"], ["inputTitle", ""], [1, "display-flex", "flex-direction-c"], ["class", "fs-3 todo-desc", 4, "ngIf", "ngIfElse"], ["inputDesc", ""], [1, "mt-2", "display-flex", "justify-content-c", "btn-options"], ["class", "btn mr-2", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "horizontal-options", "display-flex", "justify-content-c", "flex-direction-c", "ml-2", "mr-2"], ["class", "btn btn-primary mb-1", 3, "disabled", "click", 4, "ngIf"], [1, "btn", "btn-danger", 3, "disabled", "click"], ["src", "/assets/icons/trash.svg"], [1, "fs-2", "ml-1"], [1, "fs-3"], [1, "form-control"], ["type", "text", 1, "input", 3, "formControl"], [1, "fs-3", "todo-desc"], [1, "btn", "mr-2", 3, "disabled", "click"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "btn", "btn-primary", "mb-1", 3, "disabled", "click"], ["src", "/assets/icons/edit.svg"]], template: function TodoViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TodoViewComponent_app_loading_0_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TodoViewComponent_b_5_Template, 2, 1, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TodoViewComponent_span_6_Template, 2, 2, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TodoViewComponent_ng_template_7_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TodoViewComponent_b_10_Template, 2, 1, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TodoViewComponent_pre_11_Template, 2, 2, "pre", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TodoViewComponent_ng_template_12_Template, 2, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TodoViewComponent_button_15_Template, 3, 4, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TodoViewComponent_button_16_Template, 3, 4, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TodoViewComponent_button_18_Template, 3, 4, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoViewComponent_Template_button_click_19_listener() { return ctx.deleteTodo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 14, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pt-5", ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edit)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edit)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@popIn", undefined)("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 16, ctx.loading));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  height: 100vh;\n  position: relative;\n  flex-wrap: wrap;\n  padding-top: 100px;\n}\n\n.horizontal-options[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.horizontal-options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 19px;\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n  min-width: unset;\n}\n\n.horizontal-options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.todo-desc[_ngcontent-%COMP%] {\n  max-width: 90vw;\n  overflow: hidden;\n  white-space: pre-wrap;\n}\n\n.input[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.btn-options[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RvZG8tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQURJO0VBQ0UsV0FBQTtBQUdOOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJ0b2RvLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cblxuLmhvcml6b250YWwtb3B0aW9ucyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZzogMTlweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICB9XG4gIH1cbn1cblxuLnRvZG8tZGVzYyB7XG4gIG1heC13aWR0aDogOTB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4uaW5wdXQge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5idG4tb3B0aW9ucyB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */"], data: { animation: [
            _utils_animations__WEBPACK_IMPORTED_MODULE_3__["fadeInAnimation"],
            _utils_animations__WEBPACK_IMPORTED_MODULE_3__["popInAnimation"],
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-view',
                templateUrl: './todo-view.component.html',
                styleUrls: ['./todo-view.component.scss'],
                animations: [
                    _utils_animations__WEBPACK_IMPORTED_MODULE_3__["fadeInAnimation"],
                    _utils_animations__WEBPACK_IMPORTED_MODULE_3__["popInAnimation"],
                ]
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "a1DM":
/*!*********************************!*\
  !*** ./src/utils/animations.ts ***!
  \*********************************/
/*! exports provided: fade, fadeInAnimation, popInAnimation, horizontalSlideAnimation, topSlideAnimation, routerSlideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInAnimation", function() { return fadeInAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popInAnimation", function() { return popInAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "horizontalSlideAnimation", function() { return horizontalSlideAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topSlideAnimation", function() { return topSlideAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerSlideInAnimation", function() { return routerSlideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: '{{ opacity }}',
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}')
]);
const fadeInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeIn', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    ]),
]);
const popInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('popIn', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)' })),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0)' })),
    ]),
]);
const horizontalSlideAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('horizonTalSlide', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(1000px)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.7s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' })),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.7s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' })),
    ]),
]);
const topSlideAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('topSlide', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-1000px)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.7s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' })),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.7s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' })),
    ]),
]);
const routerSlideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> HomePage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                background: '#fff',
                zIndex: 999
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%', background: '#fff' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%', background: '#fff' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%', background: '#fff' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ])
]);


/***/ }),

/***/ "bWQP":
/*!************************************************!*\
  !*** ./src/app/store/reducers/auth.reducer.ts ***!
  \************************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/auth.actions */ "D7ij");

const initialState = {
    token: undefined,
    err: false,
    user: undefined,
    loading: false,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionsType"].LOGIN:
            return Object.assign(Object.assign({}, state), { loading: true });
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionsType"].LOGIN_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: false, token: action.payload.token, err: undefined });
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionsType"].LOGIN_FAILURE:
            return Object.assign(Object.assign({}, state), { loading: false, payload: undefined, err: action.payload });
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionsType"].REGISTER:
            return Object.assign(Object.assign({}, state), { loading: true });
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionsType"].REGISTER_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: false, user: action.payload, err: undefined });
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionsType"].REGISTER_FAILURE:
            return Object.assign(Object.assign({}, state), { loading: false, payload: undefined, err: action.payload });
    }
};


/***/ }),

/***/ "f/hT":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 3, vars: 0, consts: [[1, "display-flex", "justify-content-c", "align-items-c", "loading-container"], [1, "loading-bg"], ["src", "/assets/icons/loading.svg"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loading-container[_ngcontent-%COMP%], .loading-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n}\n\n.loading-bg[_ngcontent-%COMP%] {\n  z-index: 8;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBQ0E7RUFFRSxVQUFBO0VBQ0Esb0NBQUE7QUFDRiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTk7XG59XG4ubG9hZGluZy1iZyB7XG4gIEBleHRlbmQgLmxvYWRpbmctY29udGFpbmVyO1xuICB6LWluZGV4OiA4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/animations */ "a1DM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HeaderComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    logOut() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { tokenAvailable: "tokenAvailable" }, decls: 6, vars: 2, consts: [[1, "header-container", "display-flex", "justify-content-sb", "align-items-c", "p-1"], [1, "logo"], ["routerLink", "/"], ["src", "/assets/images/logo.png", "alt", "App Logo", 1, "w-3"], [1, "log-out-container"], ["class", "log-out", 3, "click", 4, "ngIf"], [1, "log-out", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_span_5_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@topSlide", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tokenAvailable);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".header-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  background-color: #138be0;\n  width: 100%;\n  box-shadow: 0 0 10px #7a7a7a;\n  z-index: 1000;\n}\n\n.log-out[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSx5QkNMUTtFRE1SLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFERiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9hc3NldHMvc3R5bGVzL2NvbG9ycy5zY3NzXCI7XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzdhN2E3YTtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmxvZy1vdXQge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iLCIkcHJpbWFyeTogIzEzOGJlMDtcbiRwcmltYXJ5LWRhcms6ICMzMzYyOWY7XG4kZGVmYXVsdDogI2NjYztcbiRkZWZhdWx0LWRhcms6ICM3YTdhN2E7XG5cbiRkYW5nZXI6ICNkYzJkMjg7XG4kZGFuZ2VyLWRhcms6ICM4NzE2MTI7XG4iXX0= */"], data: { animation: [
            _utils_animations__WEBPACK_IMPORTED_MODULE_1__["topSlideAnimation"],
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                animations: [
                    _utils_animations__WEBPACK_IMPORTED_MODULE_1__["topSlideAnimation"],
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { tokenAvailable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");





class AuthService {
    constructor(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    authenticate(credentials) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["default"].api}auth/login`, credentials);
    }
    register(credentials) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["default"].api}auth/register`, credentials);
    }
    isAuthenticated() {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] }]; }, null); })();


/***/ }),

/***/ "mhy1":
/*!*****************************************************!*\
  !*** ./src/app/store/reducers/todo-list.reducer.ts ***!
  \*****************************************************/
/*! exports provided: todoListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoListReducer", function() { return todoListReducer; });
/* harmony import */ var _actions_todoList_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/todoList.actions */ "DJMz");

const initialState = { data: [] };
const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case _actions_todoList_actions__WEBPACK_IMPORTED_MODULE_0__["TodoListActionTypes"].LOAD_TODO_LIST:
            return Object.assign(Object.assign({}, state), { loading: true });
        case _actions_todoList_actions__WEBPACK_IMPORTED_MODULE_0__["TodoListActionTypes"].LOAD_TODO_LIST_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: false, data: action.payload });
        case _actions_todoList_actions__WEBPACK_IMPORTED_MODULE_0__["TodoListActionTypes"].LOAD_TODO_LIST_FAILURE:
            return Object.assign(Object.assign({}, state), { loading: false, payload: undefined, err: action.payload });
    }
};


/***/ }),

/***/ "tadm":
/*!******************************************!*\
  !*** ./src/app/services/todo.service.ts ***!
  \******************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class TodoService {
    constructor(http) {
        this.http = http;
    }
    loadTodo(_id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["default"].api}todos/${_id}`, {
            headers: {
                Authorization: localStorage.getItem('token'),
            }
        });
    }
    deleteTodo(_id) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["default"].api}todos/${_id}`, {
            headers: {
                Authorization: localStorage.getItem('token'),
            }
        });
    }
    updateTodo(todo) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["default"].api}todos/${todo.id}`, todo.data, {
            headers: {
                Authorization: localStorage.getItem('token'),
            }
        });
    }
    addTodo(todo) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["default"].api}todos/`, todo, {
            headers: {
                Authorization: localStorage.getItem('token'),
            }
        });
    }
}
TodoService.ɵfac = function TodoService_Factory(t) { return new (t || TodoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TodoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodoService, factory: TodoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-guard.service */ "MKys");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _services_public_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/public-guard.service */ "ZA+5");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _todo_view_todo_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo-view/todo-view.component */ "Zp/U");
/* harmony import */ var _create_todo_create_todo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-todo/create-todo.component */ "VZyo");











const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
        data: { animation: 'HomePage' }
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        canActivate: [_services_public_guard_service__WEBPACK_IMPORTED_MODULE_5__["PublicGuardService"]],
        data: { animation: 'LoginPage' }
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        canActivate: [_services_public_guard_service__WEBPACK_IMPORTED_MODULE_5__["PublicGuardService"]],
        data: { animation: 'RegisterPage' }
    },
    {
        path: 'todo/:id',
        component: _todo_view_todo_view_component__WEBPACK_IMPORTED_MODULE_7__["TodoViewComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
        data: { animation: 'TodoViewPage' }
    },
    {
        path: 'create-todo',
        component: _create_todo_create_todo_component__WEBPACK_IMPORTED_MODULE_8__["CreateTodoComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
        data: { animation: 'CreateTodoPage' },
    },
    {
        path: '**',
        redirectTo: '',
        data: { animation: 'HomePage' }
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/auth.actions */ "D7ij");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/animations */ "a1DM");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-tooltip-directive */ "lVl8");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../loading/loading.component */ "f/hT");












function LoginComponent_app_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
class LoginComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.auth = this.store.select((state) => state.auth || {});
    }
    login() {
        this.startLoading = true;
        const payload = { email: String(this.email.value).toLowerCase().replace(/[' ']/gi, ''), password: this.password.value };
        this.store.dispatch(new _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["LoginAction"](payload));
        this.email.disable();
        this.password.disable();
        this.auth.subscribe(auth => {
            if (!auth.loading) {
                this.email.enable();
                this.password.enable();
                this.startLoading = false;
            }
        });
    }
    goToRegister() {
        this.router.navigate(['register']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 26, vars: 22, consts: [[4, "ngIf"], [1, "container"], [1, "left-side-container"], [1, "form-container"], [1, "display-flex", "justify-content-c", "align-items-c", "flex-direction-c"], ["src", "/assets/images/logo.png", "alt", "App Logo", 1, "w-5"], [1, "mb-1"], [1, "form-control", "mb-2"], ["type", "text", "placeholder", "Email", 3, "formControl"], [1, "form-control"], ["type", "password", "placeholder", "Password", 3, "formControl"], [1, "display-flex", "align-items-c", "mt-1", "flex-direction-c"], [1, "error-msg", "mb-1"], [1, "btn", 3, "disabled", "click"], [1, "user-plus-icon"], ["tooltip", "Go to Register", 1, "btn", 3, "disabled", "click"], ["src", "/assets/icons/user-plus-solid.svg"], [1, "right-side-container"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_app_loading_0_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Todo App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() { return ctx.email.value && ctx.password.value && ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener() { return ctx.goToRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 12, ctx.auth).loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@startLoading", ctx.startLoading ? "loading" : "loaded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 14, ctx.auth).err ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 16, ctx.auth).err.message : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-primary", ctx.email.value && ctx.password.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 18, ctx.auth).loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@popIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 20, ctx.auth).loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@horizonTalSlide", undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".error-msg[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.right-side-container[_ngcontent-%COMP%] {\n  background-image: url('background-login.jpeg');\n  background-size: cover;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 550px;\n  top: 0;\n}\n\n.left-side-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 550px;\n  max-width: 100%;\n  position: relative;\n}\n\n.user-plus-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 40px;\n  right: 40px;\n}\n\n.user-plus-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  display: flex;\n  padding: 25px;\n  justify-content: center;\n  min-width: unset;\n}\n\n.user-plus-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n@media screen and (max-width: 675px) {\n  .user-plus-icon[_ngcontent-%COMP%] {\n    bottom: 20px;\n    right: 20px;\n  }\n  .user-plus-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n  .user-plus-icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsVUFBQTtBQUFGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLDhDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVGOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFGSTtFQUNFLFdBQUE7QUFJTjs7QUFDQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUFFRjtFQURFO0lBQ0UsV0FBQTtFQUdKO0VBRkk7SUFDRSxXQUFBO0VBSU47QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmVycm9yLW1zZyB7XG4gIGNvbG9yOiByZWQ7XG59XG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJpZ2h0LXNpZGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifnNyYy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtbG9naW4uanBlZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiA1NTBweDtcbiAgdG9wOiAwO1xufVxuXG4ubGVmdC1zaWRlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTUwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udXNlci1wbHVzLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDBweDtcbiAgcmlnaHQ6IDQwcHg7XG4gIGJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjc1cHgpIHtcbiAgLnVzZXItcGx1cy1pY29uIHtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('startLoading', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('loaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    left: 0,
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('loading', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    left: '-550px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('loaded => loading', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('.3s .1s ease-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('loading => loaded', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('.3s .1s ease-in')
                ]),
            ]),
            _utils_animations__WEBPACK_IMPORTED_MODULE_4__["fadeInAnimation"],
            _utils_animations__WEBPACK_IMPORTED_MODULE_4__["popInAnimation"],
            _utils_animations__WEBPACK_IMPORTED_MODULE_4__["horizontalSlideAnimation"],
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('startLoading', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('loaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            left: 0,
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('loading', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            left: '-550px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('loaded => loading', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('.3s .1s ease-out')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('loading => loaded', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('.3s .1s ease-in')
                        ]),
                    ]),
                    _utils_animations__WEBPACK_IMPORTED_MODULE_4__["fadeInAnimation"],
                    _utils_animations__WEBPACK_IMPORTED_MODULE_4__["popInAnimation"],
                    _utils_animations__WEBPACK_IMPORTED_MODULE_4__["horizontalSlideAnimation"],
                ],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["default"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map