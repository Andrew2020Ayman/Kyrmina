(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/Lhg":
    /*!***************************************************!*\
      !*** ./src/app/layout/header/header.component.ts ***!
      \***************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function Lhg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/sharedServices */
      "nyYE");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(translate, router, titleService, changelngServ) {
          _classCallCheck(this, HeaderComponent);

          this.translate = translate;
          this.router = router;
          this.titleService = titleService;
          this.changelngServ = changelngServ;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            /* this.router.events.subscribe((val) => {
              this.checkLang();
            }); */
            var menu = document.querySelector('.menu');
            var btn = menu.querySelector('.nav-tgl');
            btn.addEventListener('click', function (evt) {
              menu.classList.toggle('active');
              var ActiveBool = menu.classList.contains('active');

              if (ActiveBool) {
                _this.openNav();
              } else {
                _this.closeNav();
              }
            }, {
              passive: false
            });
            var listBtns = menu.querySelectorAll('.listItem');
            listBtns.forEach(function (element) {
              element.addEventListener('click', function (evt) {
                menu.classList.toggle('active');

                _this.closeNav();
              });
            });
            $(window).scroll(function () {
              if ($(this).scrollTop() > 170) {
                document.getElementById("LogoDiv").style.display = "none";
                document.getElementById("LogoName").style.display = "none";
                document.getElementById("minmarginTop").style.display = "none";
                document.getElementById("nav-tgl").style.top = "0";
              } else {
                document.getElementById("LogoDiv").style.display = "initial";
                document.getElementById("LogoName").style.display = "block";
                document.getElementById("minmarginTop").style.display = "block";
                document.getElementById("nav-tgl").style.top = "-29px";
              }
            });
            this.changelngServ.change_lang.subscribe(function (res) {
              if (res == 'ar') {
                var dom = document.querySelector('body');
                dom.classList.add('rtl');
                _this.currentLang = 'ar';
                _this.currentVal = '2';
              } else {
                var _dom = document.querySelector('body');

                _dom.classList.remove('rtl');

                _this.currentLang = 'en';
                _this.currentVal = '1';
              }
            });
          }
          /* checkLang(){
            let CurrentUrl = window.location.href;
            let ArFound = CurrentUrl.search("ar");
            let EnFound = CurrentUrl.search("en");
                if(ArFound >= 0){
              const dom: any = document.querySelector('body');
              dom.classList.add('rtl');
              this.currentLang = 'ar';
              this.currentVal = '2';
            }else if(EnFound >= 0){
              const dom: any = document.querySelector('body');
              dom.classList.remove('rtl');
              this.currentLang = 'en';
              this.currentVal = '1';
            }
          } */

          /* ----------Menu Functions ---------- */

        }, {
          key: "openNav",
          value: function openNav() {
            document.getElementById("myNav").style.width = "100%";
            setTimeout(function () {
              $('.overlay-content').css("opacity", "1");
            }, 500);
          }
        }, {
          key: "closeNav",
          value: function closeNav() {
            $('.overlay-content').css("opacity", "0");
            setTimeout(function () {
              document.getElementById("myNav").style.width = "0%";
            }, 500);
          }
          /* -------------------------------------- */

        }, {
          key: "getselectvalue",
          value: function getselectvalue(value) {
            var dom = document.querySelector('body');
            dom.classList.toggle('rtl');

            if (value == 1) {
              this.translate.use('en');
              localStorage.setItem("lang", "en");
              /*   this.titleService.setTitle("Kyrmina For Rubber Products"); */

              this.changelngServ.change_lang.next('en');
              this.changelngServ.local_lenguage = 'en';
            } else if (value == 2) {
              this.translate.use('ar');
              localStorage.setItem("lang", "ar");
              /* this.titleService.setTitle("كيرمينا لمنتجات الكاوتشوك"); */

              this.changelngServ.change_lang.next('ar');
              this.changelngServ.local_lenguage = 'ar';
            }
          }
        }, {
          key: "GotoPage",
          value: function GotoPage(pageNum) {
            if (pageNum == 1) {
              this.router.navigateByUrl('Home');
            } else if (pageNum == 2) {
              this.router.navigateByUrl('About');
            } else if (pageNum == 3) {
              this.router.navigateByUrl('Product');
            } else if (pageNum == 4) {
              this.router.navigateByUrl('Contact');
            }
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_4__["ChangeLangService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 45,
        vars: 25,
        consts: [[1, "row"], [1, "col-md-12", "col-nav"], [1, "navbar", "navbar-light", "bg-lignt", "BurgerMenu"], [1, "col-lg-8", "compCont"], [1, "imgCont"], ["src", "../../../assets/finalSquare.png", "id", "LogoDiv", 1, "LogoDiv", 3, "click"], ["id", "LogoName", 1, "LogoName"], [1, "CompanyName"], [1, "FieldName"], [1, "col-lg-2", "minmarginTop", 2, "padding-right", "0"], ["id", "minmarginTop", 1, "col-lg-1", "px-1", "minmarginTop"], [1, "select"], ["name", "Langselect", "id", "Langselect", 3, "value", "change"], ["selectedCategory", ""], ["value", "1"], ["value", "2"], [1, "col-lg-1"], [1, "menu"], ["id", "nav-tgl", "type", "button", "aria-label", "toggle menu", 1, "nav-tgl"], ["aria-hidden", "true"], ["id", "myNav", 1, "overlay"], [1, "overlay-content"], [1, "row", "MenuRow"], [1, "RouterLinks"], [1, "listItem", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_6_listener() {
              return ctx.GotoPage(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HeaderComponent_Template_select_change_17_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

              return ctx.getselectvalue(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_33_listener() {
              return ctx.GotoPage(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_36_listener() {
              return ctx.GotoPage(2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_39_listener() {
              return ctx.GotoPage(3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_42_listener() {
              return ctx.GotoPage(4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, "NAVBAR.COMPANY"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, "NAVBAR.COMPDES"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.currentVal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 13, "NAVBAR.EN"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 15, "NAVBAR.AR"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 17, "NAVBAR.HOME"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 19, "NAVBAR.ABOUT"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 21, "NAVBAR.PRODUCT"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 23, "NAVBAR.CONTACT"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
        styles: ["@charset \"UTF-8\";\n.row[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n}\n.col-nav[_ngcontent-%COMP%] {\n  padding: 0;\n  position: fixed;\n  z-index: 5;\n}\n.compCont[_ngcontent-%COMP%] {\n  display: flex;\n}\n.LogoName[_ngcontent-%COMP%] {\n  margin-left: -2%;\n  margin-top: 0.5%;\n}\n.CompanyName[_ngcontent-%COMP%] {\n  font-family: \"Reem Kufi\", sans-serif;\n  color: white;\n  font-size: 50px;\n  font-weight: 600;\n  letter-spacing: 14px;\n  color: white;\n  font-size: 23px;\n  font-weight: 600;\n  letter-spacing: 0px;\n  margin-left: -3%;\n  font-family: \"El Messiri\", sans-serif;\n  font-weight: 700;\n}\n.FieldName[_ngcontent-%COMP%] {\n  font-family: \"Reem Kufi\", sans-serif;\n  color: white;\n  font-size: 18px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  margin-left: -3%;\n  font-family: \"El Messiri\", sans-serif;\n  font-weight: 700;\n}\n.LogoDiv[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-left: 16%;\n  margin-top: -6%;\n  background: white;\n  border: 2px solid black;\n  cursor: pointer;\n  box-shadow: 0px 0px 14px 0px rgba(255, 255, 255, 0.5);\n  -webkit-box-shadow: 0px 0px 14px 0px rgba(255, 255, 255, 0.5);\n  -moz-box-box-shadow: 0px 0px 14px 0px rgba(255, 255, 255, 0.5);\n}\n.quotebtn[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 2px solid white !important;\n  color: black;\n  padding: 3% 14%;\n  margin-left: 26%;\n  font-size: 16px;\n}\n.BurgerMenu[_ngcontent-%COMP%] {\n  padding: 0;\n  padding-top: 2%;\n  width: 100%;\n  background-color: #19181A;\n  \n  background-color: #101010;\n  background-color: transparent;\n}\n.BurgerCollapse[_ngcontent-%COMP%] {\n  text-align: center;\n}\nli[_ngcontent-%COMP%] {\n  font-family: \"Reem Kufi\", sans-serif;\n  font-size: 45px;\n  color: white;\n  cursor: pointer;\n  outline: none;\n}\nli[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 10px;\n  height: 2px;\n  color: brown;\n}\n\n.MenuRow[_ngcontent-%COMP%] {\n  height: 100%;\n  top: 0;\n}\n.overlay[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n  overflow-x: hidden;\n  transition: 0.5s;\n}\n.overlay-content[_ngcontent-%COMP%] {\n  position: relative;\n  \n  width: 100%;\n  height: 100%;\n  \n  \n}\n.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0px 11% 0% 6%;\n  text-decoration: none;\n  font-size: 71px;\n  line-height: 1;\n  color: white;\n  display: block;\n  transition: 0.3s;\n  margin-top: 2%;\n  font-weight: bold;\n  cursor: pointer;\n}\n.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: #037FD5;\n}\n.overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  left: 45px;\n  font-size: 60px;\n  z-index: 5;\n}\n.RouterLinks[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding-top: 6%;\n}\n.MenuImg[_ngcontent-%COMP%] {\n  padding-top: 9%;\n}\n.overlay-content[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: 0.6s all;\n}\n.nav-linkHeader[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n  color: #f5deb3;\n}\n\n\nselect[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  appearance: none;\n  outline: 0;\n  box-shadow: none;\n  border: 0 !important;\n  background: #2c3e50;\n  background-image: none;\n}\n\nselect[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n\n.select[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 87%;\n  height: 40px;\n  line-height: 2;\n  background-color: transparent;\n  overflow: hidden;\n  margin-left: -7%;\n  border: 2px solid white;\n  border-radius: 24px;\n}\nselect[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0 10.5%;\n  color: white;\n  cursor: pointer;\n  background-color: transparent;\n  text-align: start;\n}\n\n.select[_ngcontent-%COMP%]::after {\n  content: \"\u25BC\";\n  position: absolute;\n  top: 10%;\n  right: 4px;\n  padding: 0 8px;\n  color: white;\n  background: transparent;\n  cursor: pointer;\n  pointer-events: none;\n  transition: 0.25s all ease;\n}\n\n.select[_ngcontent-%COMP%]:hover::after {\n  color: #037FD5;\n}\noption[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n.minmarginTop[_ngcontent-%COMP%] {\n  margin-top: -2%;\n}\n\n.menu[_ngcontent-%COMP%] {\n  position: relative;\n  top: -14px;\n  right: 14px;\n}\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: none;\n  list-style: none;\n  position: fixed;\n  left: 0px;\n  top: 0;\n  width: 100%;\n  margin: 9% 0%;\n  z-index: 11;\n  text-align: center;\n}\n.nav-tgl[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n  position: absolute;\n  z-index: 100;\n  right: 0;\n  top: -29px;\n  width: 61px;\n  height: 60px;\n  border: none;\n  border-radius: 50%;\n  padding: 0;\n  background: transparent;\n  \n  line-height: 0.6;\n  text-align: center;\n}\n.nav-tgl[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  height: 2px;\n  width: 34px;\n  border-radius: 1px;\n  background: white;\n  vertical-align: middle;\n}\n.nav-tgl[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before, .nav-tgl[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  display: inline-block;\n  position: absolute;\n  content: \"\";\n  height: 2px;\n  border-radius: 1px;\n  background: white;\n  transition: all 200ms;\n}\n.nav-tgl[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before {\n  top: -11px;\n  left: 3px;\n  width: 28px;\n}\n.nav-tgl[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  top: 11px;\n  left: 6px;\n  width: 22px;\n}\n.nav-tgl[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.nav-tgl[_ngcontent-%COMP%]:hover    > span[_ngcontent-%COMP%]:after, .nav-tgl[_ngcontent-%COMP%]:hover    > span[_ngcontent-%COMP%]:before {\n  width: 34px;\n  left: 0;\n}\n.menu.active[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: block;\n}\n.menu.active[_ngcontent-%COMP%]   .nav-tgl[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  height: 0;\n}\n.menu.active[_ngcontent-%COMP%]   .nav-tgl[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after, .menu.active[_ngcontent-%COMP%]   .nav-tgl[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before {\n  top: 0px;\n  left: 0;\n  width: 34px;\n  background: white;\n}\n.menu.active[_ngcontent-%COMP%]   .nav-tgl[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n  transform: rotate(-45deg);\n}\n.menu.active[_ngcontent-%COMP%]   .nav-tgl[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before {\n  transform: rotate(45deg);\n}\n  .rtl .LogoDiv {\n  margin-top: -6%;\n  background: white;\n}\n  .rtl .RouterLinks {\n  text-align: start;\n}\n  .rtl select {\n  text-align: end;\n}\n@media only screen and (min-width: 1600px) {\n  .LogoDiv[_ngcontent-%COMP%] {\n    margin-left: 16%;\n    margin-top: -4%;\n    width: 69%;\n  }\n\n  .LogoName[_ngcontent-%COMP%] {\n    margin-left: 0%;\n  }\n\n  .CompanyName[_ngcontent-%COMP%] {\n    font-size: 31px;\n  }\n\n  .FieldName[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .select[_ngcontent-%COMP%] {\n    width: 78%;\n    height: 52px;\n    border: 3px solid white;\n  }\n\n  select[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .nav-tgl[_ngcontent-%COMP%] {\n    right: 26%;\n  }\n\n  .nav-tgl[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    height: 2.7px;\n    width: 50px;\n  }\n\n  .nav-tgl[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:before {\n    top: -11px;\n    left: 10px;\n    width: 30px;\n    height: 2.7px;\n  }\n\n  .nav-tgl[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:after {\n    top: 12px;\n    left: 10px;\n    width: 30px;\n    height: 2.7px;\n  }\n\n  .nav-tgl[_ngcontent-%COMP%]:hover    > span[_ngcontent-%COMP%]:after, .nav-tgl[_ngcontent-%COMP%]:hover    > span[_ngcontent-%COMP%]:before {\n    width: 50px;\n    left: 0;\n  }\n\n  .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 0px 11% 0% 6%;\n    text-decoration: none;\n    font-size: 100px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .minmarginTop[_ngcontent-%COMP%] {\n    margin-top: 1%;\n  }\n\n  .select[_ngcontent-%COMP%] {\n    width: 69%;\n    height: 40px;\n    margin-left: 2%;\n  }\n\n  .nav-tgl[_ngcontent-%COMP%] {\n    top: -38px;\n  }\n\n    .rtl .nav-tgl {\n    left: 0;\n    right: unset;\n  }\n    .rtl .select {\n    margin-right: 4%;\n  }\n}\n@media screen and (max-width: 770px) {\n    .rtl .nav-tgl {\n    left: 0;\n    right: unset;\n  }\n    .rtl .select {\n    margin-right: 4%;\n  }\n\n  .compCont[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n\n  .minmarginTop[_ngcontent-%COMP%] {\n    margin-top: 3%;\n  }\n\n  .select[_ngcontent-%COMP%] {\n    width: 70%;\n    height: 40px;\n    margin-left: 4%;\n  }\n\n  .wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 43px;\n  }\n\n  .BurgerMenu[_ngcontent-%COMP%] {\n    padding-top: 6%;\n  }\n\n  .nav-tgl[_ngcontent-%COMP%] {\n    top: -37px;\n  }\n\n  .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 53px;\n    line-height: 1.5;\n  }\n\n  .RouterLinks[_ngcontent-%COMP%] {\n    padding-top: 44%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0VBQ0ksV0FBQTtFQUNBLFNBQUE7QUFDSjtBQUNBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBRUo7QUFBQTtFQUNFLGFBQUE7QUFHRjtBQURBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUlGO0FBREE7RUFDSSxvQ0FBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQUE7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQUdKO0FBREE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxxREFBQTtFQUNFLDZEQUFBO0VBQ0EsOERBQUE7QUFJSjtBQURBO0VBQ0ksdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSUo7QUFGQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsS0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUFLSjtBQUhBO0VBQ0ksa0JBQUE7QUFNSjtBQUpBO0VBQ0ksb0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBT0o7QUFMQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFRRjtBQUxBLGlCQUFBO0FBQ0E7RUFDSSxZQUFBO0VBQ0EsTUFBQTtBQVFKO0FB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O0VBN0JDO0lBQ0MsVUFBQTtFQWdDRjs7RUE5QkM7SUFDQyxlQUFBO0lBQ0EsZ0JBQUE7RUFpQ0Y7O0VBL0JDO0lBQ0MsZ0JBQUE7RUFrQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnJvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG5cbi5jb2wtbmF2IHtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA1O1xufVxuXG4uY29tcENvbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uTG9nb05hbWUge1xuICBtYXJnaW4tbGVmdDogLTIlO1xuICBtYXJnaW4tdG9wOiAwLjUlO1xufVxuXG4uQ29tcGFueU5hbWUge1xuICBmb250LWZhbWlseTogXCJSZWVtIEt1ZmlcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0zJTtcbiAgZm9udC1mYW1pbHk6IFwiRWwgTWVzc2lyaVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uRmllbGROYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiUmVlbSBLdWZpXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBtYXJnaW4tbGVmdDogLTMlO1xuICBmb250LWZhbWlseTogXCJFbCBNZXNzaXJpXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5Mb2dvRGl2IHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLWxlZnQ6IDE2JTtcbiAgbWFyZ2luLXRvcDogLTYlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIC1tb3otYm94LWJveC1zaGFkb3c6IDBweCAwcHggMTRweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4ucXVvdGVidG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAzJSAxNCU7XG4gIG1hcmdpbi1sZWZ0OiAyNiU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLkJ1cmdlck1lbnUge1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxODFBO1xuICAvKiAgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5CdXJnZXJDb2xsYXBzZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubGkge1xuICBmb250LWZhbWlseTogXCJSZWVtIEt1ZmlcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxubGk6aG92ZXIgbGk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMnB4O1xuICBjb2xvcjogYnJvd247XG59XG5cbi8qIC0tLS0tLS0tLS0tLSAqL1xuLk1lbnVSb3cge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbn1cblxuLm92ZXJsYXkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ub3ZlcmxheS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiB0b3A6IDI1JTsgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgLyogbWFyZ2luLXRvcDogMzBweDsgKi9cbn1cblxuLm92ZXJsYXkgYSB7XG4gIHBhZGRpbmc6IDBweCAxMSUgMCUgNiU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiA3MXB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vdmVybGF5IGE6aG92ZXIsIC5vdmVybGF5IGE6Zm9jdXMge1xuICBjb2xvcjogIzAzN0ZENTtcbn1cblxuLm92ZXJsYXkgLmNsb3NlYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDQ1cHg7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgei1pbmRleDogNTtcbn1cblxuLlJvdXRlckxpbmtzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDYlO1xufVxuXG4uTWVudUltZyB7XG4gIHBhZGRpbmctdG9wOiA5JTtcbn1cblxuLm92ZXJsYXktY29udGVudCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuNnMgYWxsO1xufVxuXG4ubmF2LWxpbmtIZWFkZXIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmNWRlYjM7XG59XG5cbi8qIC0tLS0tLSAqL1xuLyogUmVzZXQgU2VsZWN0ICovXG5zZWxlY3Qge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1zLWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjMmMzZTUwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4vKiBSZW1vdmUgSUUgYXJyb3cgKi9cbnNlbGVjdDo6LW1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIEN1c3RvbSBTZWxlY3QgKi9cbi5zZWxlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA4NyU7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tbGVmdDogLTclO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuc2VsZWN0IHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMCAxMC41JTtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLyogQXJyb3cgKi9cbi5zZWxlY3Q6OmFmdGVyIHtcbiAgY29udGVudDogXCLilrxcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwJTtcbiAgcmlnaHQ6IDRweDtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuMjVzIGFsbCBlYXNlO1xufVxuXG4vKiBUcmFuc2l0aW9uICovXG4uc2VsZWN0OmhvdmVyOjphZnRlciB7XG4gIGNvbG9yOiAjMDM3RkQ1O1xufVxuXG5vcHRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWlubWFyZ2luVG9wIHtcbiAgbWFyZ2luLXRvcDogLTIlO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gKi9cbi5tZW51IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNHB4O1xuICByaWdodDogMTRweDtcbn1cblxuLm5hdiB1bCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDklIDAlO1xuICB6LWluZGV4OiAxMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmF2LXRnbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogLTI5cHg7XG4gIHdpZHRoOiA2MXB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLyogIGJveC1zaGFkb3c6IDBweCA0cHggMjRweCByZ2IoMCAwIDAgLyAyNCUpOyAqL1xuICBsaW5lLWhlaWdodDogMC42O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXYtdGdsID4gc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDM0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5uYXYtdGdsID4gc3BhbjpiZWZvcmUsIC5uYXYtdGdsID4gc3BhbjphZnRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xufVxuXG4ubmF2LXRnbCA+IHNwYW46YmVmb3JlIHtcbiAgdG9wOiAtMTFweDtcbiAgbGVmdDogM3B4O1xuICB3aWR0aDogMjhweDtcbn1cblxuLm5hdi10Z2wgPiBzcGFuOmFmdGVyIHtcbiAgdG9wOiAxMXB4O1xuICBsZWZ0OiA2cHg7XG4gIHdpZHRoOiAyMnB4O1xufVxuXG4ubmF2LXRnbDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5uYXYtdGdsOmhvdmVyID4gc3BhbjphZnRlciwgLm5hdi10Z2w6aG92ZXIgPiBzcGFuOmJlZm9yZSB7XG4gIHdpZHRoOiAzNHB4O1xuICBsZWZ0OiAwO1xufVxuXG4ubWVudS5hY3RpdmUgLm5hdiB1bCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubWVudS5hY3RpdmUgLm5hdi10Z2wgPiBzcGFuIHtcbiAgaGVpZ2h0OiAwO1xufVxuXG4ubWVudS5hY3RpdmUgLm5hdi10Z2wgPiBzcGFuOmFmdGVyLCAubWVudS5hY3RpdmUgLm5hdi10Z2wgPiBzcGFuOmJlZm9yZSB7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMzRweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5tZW51LmFjdGl2ZSAubmF2LXRnbCA+IHNwYW46YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4ubWVudS5hY3RpdmUgLm5hdi10Z2wgPiBzcGFuOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuOjpuZy1kZWVwIC5ydGwgLkxvZ29EaXYge1xuICBtYXJnaW4tdG9wOiAtNiU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuOjpuZy1kZWVwIC5ydGwgLlJvdXRlckxpbmtzIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbjo6bmctZGVlcCAucnRsIHNlbGVjdCB7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgLkxvZ29EaXYge1xuICAgIG1hcmdpbi1sZWZ0OiAxNiU7XG4gICAgbWFyZ2luLXRvcDogLTQlO1xuICAgIHdpZHRoOiA2OSU7XG4gIH1cblxuICAuTG9nb05hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxuXG4gIC5Db21wYW55TmFtZSB7XG4gICAgZm9udC1zaXplOiAzMXB4O1xuICB9XG5cbiAgLkZpZWxkTmFtZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLnNlbGVjdCB7XG4gICAgd2lkdGg6IDc4JTtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIH1cblxuICBzZWxlY3Qge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuXG4gIC5uYXYtdGdsIHtcbiAgICByaWdodDogMjYlO1xuICB9XG5cbiAgLm5hdi10Z2wgPiBzcGFuIHtcbiAgICBoZWlnaHQ6IDIuN3B4O1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG5cbiAgLm5hdi10Z2wgPiBzcGFuOmJlZm9yZSB7XG4gICAgdG9wOiAtMTFweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMi43cHg7XG4gIH1cblxuICAubmF2LXRnbCA+IHNwYW46YWZ0ZXIge1xuICAgIHRvcDogMTJweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMi43cHg7XG4gIH1cblxuICAubmF2LXRnbDpob3ZlciA+IHNwYW46YWZ0ZXIsIC5uYXYtdGdsOmhvdmVyID4gc3BhbjpiZWZvcmUge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICAub3ZlcmxheSBhIHtcbiAgICBwYWRkaW5nOiAwcHggMTElIDAlIDYlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubWlubWFyZ2luVG9wIHtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgfVxuXG4gIC5zZWxlY3Qge1xuICAgIHdpZHRoOiA2OSU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgfVxuXG4gIC5uYXYtdGdsIHtcbiAgICB0b3A6IC0zOHB4O1xuICB9XG5cbiAgOjpuZy1kZWVwIC5ydGwgLm5hdi10Z2wge1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IHVuc2V0O1xuICB9XG4gIDo6bmctZGVlcCAucnRsIC5zZWxlY3Qge1xuICAgIG1hcmdpbi1yaWdodDogNCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KSB7XG4gIDo6bmctZGVlcCAucnRsIC5uYXYtdGdsIHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiB1bnNldDtcbiAgfVxuICA6Om5nLWRlZXAgLnJ0bCAuc2VsZWN0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xuICB9XG5cbiAgLmNvbXBDb250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLm1pbm1hcmdpblRvcCB7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gIH1cblxuICAuc2VsZWN0IHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogNCU7XG4gIH1cblxuICAud3JhcHBlciBoMSB7XG4gICAgZm9udC1zaXplOiA0M3B4O1xuICB9XG5cbiAgLkJ1cmdlck1lbnUge1xuICAgIHBhZGRpbmctdG9wOiA2JTtcbiAgfVxuXG4gIC5uYXYtdGdsIHtcbiAgICB0b3A6IC0zN3B4O1xuICB9XG5cbiAgLm92ZXJsYXkgYSB7XG4gICAgZm9udC1zaXplOiA1M3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cblxuICAuUm91dGVyTGlua3Mge1xuICAgIHBhZGRpbmctdG9wOiA0NCU7XG4gIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
          }, {
            type: src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_4__["ChangeLangService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\kyrmina files\HostKyrmina\Kyrmina\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2hwp":
    /*!***************************************************!*\
      !*** ./src/app/view/contact/contact.component.ts ***!
      \***************************************************/

    /*! exports provided: ContactComponent */

    /***/
    function hwp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @emailjs/browser */
      "nW6l");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/sharedServices */
      "nyYE");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../layout/footer/footer.component */
      "kVkw");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function ContactComponent_div_0_p_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.ContactData.Araddress);
        }
      }

      function ContactComponent_div_0_p_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.ContactData.address);
        }
      }

      function ContactComponent_div_0_p_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.ContactData.Arcity, " ");
        }
      }

      function ContactComponent_div_0_p_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.ContactData.Encity, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      function ContactComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_div_0_Template_a_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.scrollFunc();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "form", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_div_0_Template_form_ngSubmit_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.sendEmail($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Please Enter your name.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Please Enter your email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "textarea", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "section", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h1", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Cairo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ContactComponent_div_0_p_69_Template, 2, 1, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, ContactComponent_div_0_p_70_Template, 2, 1, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, ContactComponent_div_0_p_72_Template, 2, 1, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ContactComponent_div_0_p_73_Template, 2, 1, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 24, "CONTACT.CONTACT"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 26, "CONTACT.WELCOME"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 28, "CONTACT.TOKYRMINA"), " .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 30, "CONTACT.SCROLL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 32, "CONTACT.GETINTOUCH"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 34, "HOME.CONTACTMSG"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 36, "CONTACT.OREMAIL"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.ContactData.Email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.ContactData.MobileNum, " - ", ctx_r0.ContactData.MobileNumI, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.EmailForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 38, "HOME.NAME"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c0, ctx_r0.EmailForm.get("from_name").errors && ctx_r0.EmailForm.get("from_name").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 40, "HOME.EMAIL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 42, "HOME.EMAIL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c0, ctx_r0.EmailForm.get("form_email").errors && ctx_r0.EmailForm.get("form_email").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 44, "HOME.MSG"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.EmailForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 46, "HOME.SEND"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 48, "CONTACT.LOCATIONS"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changelngServ.local_lenguage == "ar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changelngServ.local_lenguage == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changelngServ.local_lenguage == "ar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changelngServ.local_lenguage == "en");
        }
      }

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent(fb, toastr, homeServ, changelngServ) {
          _classCallCheck(this, ContactComponent);

          this.fb = fb;
          this.toastr = toastr;
          this.homeServ = homeServ;
          this.changelngServ = changelngServ;
          this.title = 'My first AGM project';
          this.lat = 31.390396;
          this.lng = 30.156920;
          this.serviceID = 'default_service';
          this.templateID = 'template_wxfzprf';
          this.publicKey = 'pIZ0I9ba-VpinU8qV';
          this.ContactData = {};
          this.fetchData = true;
          var CurrentUrl = window.location.href;
          var ArFound = CurrentUrl.search("ar");
          var EnFound = CurrentUrl.search("en");

          if (ArFound >= 0) {
            this.currentLang = 'ar';
          } else if (EnFound >= 0) {
            this.currentLang = 'en';
          }
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.getData(function () {
              _this2.fetchData = true;
            });
            this.createEmailForm();
          }
        }, {
          key: "getData",
          value: function getData(callback) {
            this.ContactData = this.homeServ.getContactData();
            callback();
          }
        }, {
          key: "createEmailForm",
          value: function createEmailForm() {
            this.EmailForm = this.fb.group({
              from_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              form_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "scrollFunc",
          value: function scrollFunc() {
            var elem = document.getElementById("formSection");
            elem.scrollIntoView();
          }
        }, {
          key: "sendEmail",
          value: function sendEmail(e) {
            var _this3 = this;

            if (this.EmailForm.valid) {
              e.preventDefault();

              _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__["default"].sendForm(this.serviceID, this.templateID, e.target, this.publicKey).then(function (result) {
                _this3.toastr.success('message sent successfully');
              }, function (error) {
                _this3.toastr.error('message failed to send');
              });
            }
          }
        }]);

        return ContactComponent;
      }();

      ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_4__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_4__["ChangeLangService"]));
      };

      ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 9,
        vars: 2,
        consts: [["class", "contact", 4, "ngIf"], [1, "mapSec"], [1, "mapouter"], [1, "gmap_canvas"], ["width", "100%", "height", "500", "id", "gmap_canvas", "src", "https://maps.google.com/maps?q=30.156920,%2031.390396&t=&z=13&ie=UTF8&iwloc=&output=embed", "frameborder", "0", "scrolling", "no", "marginheight", "0", "marginwidth", "0"], [3, "footerPostion"], [1, "contact"], ["id", "video", 1, "imgPart"], [1, "overlay"], ["src", "../../../assets/wallpaperflare.com_wallpaper (1).jpg", "alt", ""], [1, "wrapper"], [1, "eyebrow", "caps", "medium-text"], [1, "oHidden"], [1, "scrollComp", 3, "click"], ["id", "formSection", 1, "formSec"], [1, "row"], [1, "col-md-6", "textPart"], [1, "msgTxt"], [1, "parTxt"], [1, "fad", "fa-envelope"], [1, "fad", "fa-mobile-alt", "mobileIcon"], [1, "col-md-6"], ["id", "message_form", "novalidate", "novalidate", 1, "form", 3, "formGroup", "ngSubmit"], [1, "form-group", "name"], ["id", "from_name", "name", "from_name", "type", "text", "formControlName", "from_name", "aria-required", "true", 1, "form-control", "form-control-outline", "thick", "form-success-clean", 3, "ngClass", "placeholder"], [1, "invalid-feedback"], [1, "form-group", "email"], ["id", "form_email", "type", "email", "name", "form_email", "formControlName", "form_email", "aria-required", "true", 1, "form-control", "form-control-outline", "thick", "form-success-clean", 3, "placeholder", "ngClass"], [1, "form-group", "no-border"], ["id", "message", "name", "message", "formControlName", "message", "aria-required", "true", 1, "form-control", "form-control-outline", "thick", "form-success-clean", 3, "placeholder"], [1, "btns", "text-right"], ["id", "submit-message", "type", "submit", "name", "submit_message", 1, "btn", "btn-outline-white", "btn-round", "btn-fullNot", "email_b", 3, "disabled"], [1, "txt"], [1, "arrow-icon"], [1, "LocationSec"], [1, "row", "titlePart"], [1, "col-md-3"], [1, "locationtxt"], [1, "col-md-1"], [1, "col-md-4", "addressDiv"], [4, "ngIf"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContactComponent_div_0_Template, 74, 54, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "iframe", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xA9 Kyrmina 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer", 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fetchData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footerPostion", 2);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: [".contact[_ngcontent-%COMP%] {\n  width: 100%;\n  scroll-behavior: smooth;\n  overflow-x: hidden;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n\nimg[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  transform: rotateY(179deg);\n}\n\n.imgPart[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  background: #090979;\n  background: linear-gradient(90deg, rgba(9, 9, 121, 0.3841911765) 0%, rgba(0, 0, 0, 0.7651435574) 48%, rgba(0, 0, 0, 0.8407738095) 85%);\n  background: black;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.8967962185) 0%, rgba(0, 0, 0, 0.6643032213) 44%, rgba(9, 9, 121, 0.2665441176) 71%);\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  z-index: 3;\n  display: table-cell;\n  vertical-align: middle;\n  padding-left: 8vw;\n  padding-right: 8vw;\n  position: absolute;\n  top: 30%;\n}\n\n.wrapper[_ngcontent-%COMP%]   p.eyebrow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 400;\n  padding-left: 60px;\n  margin-bottom: 20px;\n  letter-spacing: 0.2em;\n  position: relative;\n}\n\n.wrapper[_ngcontent-%COMP%]   p.eyebrow[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background: white;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n  height: 2px;\n  width: 40px;\n}\n\n.wrapper[_ngcontent-%COMP%]   a.arrow-down-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 33px;\n  margin-top: 20px;\n  color: white;\n}\n\n.wrapper[_ngcontent-%COMP%]   a.arrow-down-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  fill: white;\n}\n\n.wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 70px;\n  margin-bottom: 30px;\n  letter-spacing: -2px;\n  text-transform: uppercase;\n  font-family: \"Gotham-Bold\", \"Helvetica Neue\", sans-serif;\n  font-family: \"Krona One\", sans-serif;\n  font-weight: 800;\n  color: white;\n}\n\n.wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.scrollComp[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-top: 70px;\n  position: absolute;\n  margin-top: 4%;\n  z-index: 2;\n  display: inline-block;\n  transform: translate(0, -50%);\n  color: #fff;\n  font: normal 400 20px/1 \"Josefin Sans\", sans-serif;\n  letter-spacing: 0.1em;\n  text-decoration: none;\n  transition: opacity 0.3s;\n}\n\n.scrollComp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 24px;\n  height: 24px;\n  margin-left: -12px;\n  border-left: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n  transform: rotateZ(-45deg);\n  animation: sdb06 1.5s infinite;\n  box-sizing: border-box;\n}\n\n@keyframes sdb06 {\n  0% {\n    transform: rotateY(0) rotateZ(-45deg) translate(0, 0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);\n    opacity: 0;\n  }\n}\n\n.row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.formSec[_ngcontent-%COMP%] {\n  padding-top: 12%;\n  padding-bottom: 14%;\n}\n\n.formSec[_ngcontent-%COMP%]   .textPart[_ngcontent-%COMP%] {\n  padding: 0% 7%;\n}\n\n.formSec[_ngcontent-%COMP%]   .textPart[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Krona One\", sans-serif;\n}\n\n.formSec[_ngcontent-%COMP%]   .textPart[_ngcontent-%COMP%]   .msgTxt[_ngcontent-%COMP%] {\n  padding: 0% 30% 10% 2%;\n  font-size: 17px;\n  margin-top: 6%;\n}\n\n.formSec[_ngcontent-%COMP%]   .textPart[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding-bottom: 12%;\n}\n\n.formSec[_ngcontent-%COMP%]   .textPart[_ngcontent-%COMP%]   .parTxt[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\n.formSec[_ngcontent-%COMP%]   .textPart[_ngcontent-%COMP%]   .parTxt[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n\n.formSec[_ngcontent-%COMP%]   .textPart[_ngcontent-%COMP%]   .parTxt[_ngcontent-%COMP%]   .mobileIcon[_ngcontent-%COMP%] {\n  padding: 0% 2% 0% 1.4%;\n}\n\n.formSec[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(.submit-btn), .formSec[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .formSec[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px 15px;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin-bottom: 25px;\n  font-size: 18px;\n  height: 50px;\n}\n\n.formSec[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  min-width: 100%;\n  height: 200px;\n  max-height: 200px;\n  min-height: 200px;\n}\n\n.formSec[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  position: relative;\n  font-family: \"Gotham-Medium\", \"Helvetica Neue\", sans-serif;\n  display: inline-block;\n  letter-spacing: 0.3em;\n  text-transform: uppercase;\n  cursor: pointer;\n  color: white;\n  padding: 14px 30px;\n  background: #373737;\n  text-align: center;\n  font-size: 13px;\n}\n\n.titlePart[_ngcontent-%COMP%] {\n  padding: 0% 7%;\n}\n\n.locationtxt[_ngcontent-%COMP%] {\n  font-family: \"Krona One\", sans-serif;\n}\n\n.addressDiv[_ngcontent-%COMP%] {\n  font-family: \"Kufam\", cursive;\n}\n\n.mapSec[_ngcontent-%COMP%] {\n  padding-top: 12%;\n  padding-bottom: 10%;\n  position: relative;\n}\n\n.mapSec[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -8%;\n  left: 3%;\n  font-size: 19px;\n  font-family: \"Krona One\", sans-serif;\n}\n\n  .rtl img {\n  transform: none;\n}\n\n  .rtl .wrapper p.eyebrow {\n  font-size: 20px !important;\n  padding-left: unset !important;\n  padding-right: 60px !important;\n  margin-bottom: 20px !important;\n  letter-spacing: 3px !important;\n  font-family: \"El Messiri\", sans-serif !important;\n}\n\n  .rtl .wrapper p.eyebrow:before {\n  left: unset !important;\n  right: 0 !important;\n  top: 53% !important;\n}\n\n  .rtl .wrapper a.arrow-down-btn {\n  display: inline-block;\n  width: 33px;\n  margin-top: 20px;\n  color: white;\n}\n\n  .rtl .wrapper a.arrow-down-btn svg > * {\n  fill: white;\n}\n\n  .rtl .wrapper h1 {\n  text-align: start !important;\n  font-size: 74px !important;\n  margin-bottom: 30px !important;\n  letter-spacing: 0px !important;\n  text-transform: uppercase !important;\n  font-family: \"El Messiri\", sans-serif !important;\n  font-weight: 700 !important;\n  color: white !important;\n}\n\n  .rtl .wrapper p {\n  text-align: start !important;\n  color: white !important;\n  font-family: \"El Messiri\", sans-serif !important;\n}\n\n  .rtl .wrapper .scrollComp {\n  right: 17%;\n  font-family: \"El Messiri\";\n}\n\n  .rtl .scrollComp {\n  font-family: \"El Messiri\";\n}\n\n  .rtl .formSec .textPart {\n  padding: 0% 7%;\n}\n\n  .rtl .formSec .textPart h1 {\n  font-family: \"El Messiri\", sans-serif !important;\n  text-align: start !important;\n}\n\n  .rtl .formSec .textPart .msgTxt {\n  padding: 0% 2% 10% 3% !important;\n  font-family: \"El Messiri\", sans-serif !important;\n  text-align: start !important;\n}\n\n  .rtl .formSec .textPart h4 {\n  text-align: start !important;\n}\n\n  .rtl .formSec .textPart .parTxt {\n  text-align: start;\n}\n\n  .rtl .formSec .textPart .parTxt .mobileIcon {\n  padding: 0% 1.4% 0% 2% !important;\n}\n\n  .rtl .formSec .btn {\n  position: relative;\n  font-family: \"Gotham-Medium\", \"Helvetica Neue\", sans-serif;\n  display: inline-block;\n  letter-spacing: 0.3em;\n  text-transform: uppercase;\n  cursor: pointer;\n  color: white;\n  padding: 14px 30px;\n  background: #373737;\n  text-align: center;\n  font-size: 13px;\n}\n\n  .rtl .locationtxt {\n  font-family: \"El Messiri\", sans-serif !important;\n  text-align: start !important;\n  font-size: 50px !important;\n  font-weight: 700 !important;\n}\n\n  .rtl .addressDiv {\n  font-family: \"El Messiri\", sans-serif !important;\n  text-align: start !important;\n}\n\n  .rtl .mapSec h4 {\n  right: 3% !important;\n  left: unset !important;\n  font-size: 19px !important;\n  font-family: \"El Messiri\", sans-serif !important;\n}\n\n@media only screen and (min-width: 1600px) {\n  .wrapper[_ngcontent-%COMP%]   p.eyebrow[_ngcontent-%COMP%] {\n    font-size: 28px !important;\n  }\n  .wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 90px !important;\n  }\n\n  .formSec[_ngcontent-%COMP%]   .textPart[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 52px;\n  }\n  .formSec[_ngcontent-%COMP%]   .textPart[_ngcontent-%COMP%]   .msgTxt[_ngcontent-%COMP%] {\n    padding: 0% 30% 10% 2%;\n    font-size: 21px;\n  }\n  .formSec[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(.submit-btn), .formSec[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .formSec[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .formSec[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .locationtxt[_ngcontent-%COMP%] {\n    font-size: 45px;\n  }\n\n  .addressDiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 45px;\n  }\n  .addressDiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .mapSec[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 21px;\n    bottom: -6%;\n  }\n}\n\n@media only screen and (max-width: 770px) {\n  .wrapper[_ngcontent-%COMP%] {\n    top: 32%;\n  }\n\n  .wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 43px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    object-fit: cover;\n    object-position: 27% 0px;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    transform: rotateY(179deg);\n  }\n\n  .row[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0 auto;\n  }\n\n  .formSec[_ngcontent-%COMP%]   .textPart[_ngcontent-%COMP%] {\n    padding: 0% 7%;\n    text-align: center;\n  }\n\n  .formSec[_ngcontent-%COMP%]   .textPart[_ngcontent-%COMP%]   .msgTxt[_ngcontent-%COMP%] {\n    padding: 5%;\n    font-size: 17px;\n    margin-top: 6%;\n  }\n\n  .form[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .formSec[_ngcontent-%COMP%]   .textPart[_ngcontent-%COMP%]   .parTxt[_ngcontent-%COMP%] {\n    font-size: 18px;\n    text-align: justify;\n    padding: 0% 6%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UseUNBQUE7QUFFRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FBRUY7O0FBQUE7RUFDSSxhQUFBO0FBR0o7O0FBREE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBRUEsbUJBQUE7RUFDRixzSUFBQTtFQUVBLGlCQUFBO0VBQ0Esc0lBQUE7QUFFQTs7QUFBQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUdGOztBQUZHO0VBQ0csZUFBQTtFQUNKLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFGRztFQUNHLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFHQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBSU47O0FBRkU7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFJTjs7QUFITTtFQUNJLFdBQUE7QUFLVjs7QUFGQztFQUNDLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSx3REFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSUY7O0FBRkM7RUFDSSxZQUFBO0FBSUw7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFFQSxVQUFBO0VBQ0EscUJBQUE7RUFF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QSxnREFBQTtBQWhCUjs7QUFzQkE7RUFFSTtJQUNBLDBCQUFBO0VBcEJGO0VBc0JBO0lBQ0UsMEJBQUE7RUFwQkY7O0VBMEJHO0lBQ0MsZUFBQTtFQXZCSjtFQXlCRztJQUNDLHNCQUFBO0lBQ0EsZUFBQTtFQXZCSjtFQTJCRTtJQUNFLGVBQUE7RUF6Qko7RUEyQkU7SUFDRSxlQUFBO0VBekJKOztFQTRCRDtJQUNDLGVBQUE7RUF6QkE7O0VBNEJDO0lBQ0MsZUFBQTtFQXpCRjtFQTJCQztJQUNDLGVBQUE7RUF6QkY7O0VBNEJBO0lBQ0UsZUFBQTtJQUNBLFdBQUE7RUF6QkY7QUFDRjs7QUE0QkE7RUFDRTtJQUNFLFFBQUE7RUExQkY7O0VBNEJBO0lBQ0UsZUFBQTtFQXpCRjs7RUEyQkE7SUFDRSxpQkFBQTtJQUNBLHdCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsVUFBQTtJQUNBLDBCQUFBO0VBeEJGOztFQTBCQTtJQUNFLFdBQUE7SUFDQSxjQUFBO0VBdkJGOztFQXlCRjtJQUNFLGNBQUE7SUFDQSxrQkFBQTtFQXRCQTs7RUF3QkY7SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7RUFyQkE7O0VBdUJGO0lBQ0Usa0JBQUE7RUFwQkE7O0VBc0JGO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtFQW5CQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlldy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdHtcclxuICB3aWR0aDogMTAwJTtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuaDEsIGgyLCBoMywgaDQscCB7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2IoMCAwIDAgLyAyMCUpO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTc5ZGVnKTtcclxufVxyXG4uaW1nUGFydHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLm92ZXJsYXl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMjtcclxuXHJcbiAgYmFja2dyb3VuZDogcmdiKDksOSwxMjEpO1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoOSw5LDEyMSwwLjM4NDE5MTE3NjQ3MDU4ODIpIDAlLCByZ2JhKDAsMCwwLDAuNzY1MTQzNTU3NDIyOTY5MikgNDglLCByZ2JhKDAsMCwwLDAuODQwNzczODA5NTIzODA5NSkgODUlKTtcclxuXHJcbmJhY2tncm91bmQ6IHJnYigwLDAsMCk7XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgwLDAsMCwwLjg5Njc5NjIxODQ4NzM5NSkgMCUsIHJnYmEoMCwwLDAsMC42NjQzMDMyMjEyODg1MTU0KSA0NCUsIHJnYmEoOSw5LDEyMSwwLjI2NjU0NDExNzY0NzA1ODkpIDcxJSk7XHJcbn1cclxuLndyYXBwZXIge1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHBhZGRpbmctbGVmdDogOHZ3O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDh2dztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMCU7XHJcbiAgIHAuZXllYnJvdyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHBhZGRpbmctbGVmdDogNjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gICBwLmV5ZWJyb3c6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTUwJSk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC01MCUpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC01MCUpO1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgfVxyXG4gIGEuYXJyb3ctZG93bi1idG4ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAzM3B4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHN2Zz4qIHtcclxuICAgICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gaDF7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogXCJHb3RoYW0tQm9sZFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1mYW1pbHk6IFwiS3JvbmEgT25lXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiB9XHJcbiBwe1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuIH1cclxufVxyXG5cclxuLnNjcm9sbENvbXAge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNzBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogNCU7XHJcblxyXG4gIHotaW5kZXg6IDI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udDogbm9ybWFsIDQwMCAyMHB4LzEgJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xyXG5cclxufVxyXG4uc2Nyb2xsQ29tcCBzcGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigtNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWigtNDVkZWcpO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzZGIwNiAxLjVzIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogc2RiMDYgMS41cyBpbmZpbml0ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzZGIwNiB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMCkgcm90YXRlWigtNDVkZWcpIHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDcyMGRlZykgcm90YXRlWigtNDVkZWcpIHRyYW5zbGF0ZSgtMjBweCwgMjBweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNkYjA2IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCkgcm90YXRlWigtNDVkZWcpIHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSg3MjBkZWcpIHJvdGF0ZVooLTQ1ZGVnKSB0cmFuc2xhdGUoLTIwcHgsIDIwcHgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtU2Vje1xyXG4gIHBhZGRpbmctdG9wOiAxMiU7XHJcbiAgcGFkZGluZy1ib3R0b206IDE0JTtcclxuXHJcbiAgLnRleHRQYXJ0e1xyXG4gICAgcGFkZGluZzogMCUgNyU7XHJcblxyXG4gICAgaDF7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnS3JvbmEgT25lJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIC5tc2dUeHR7XHJcbiAgICAgIHBhZGRpbmc6IDAlIDMwJSAxMCUgMiU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEyJTtcclxuICAgIH1cclxuXHJcbiAgICAucGFyVHh0e1xyXG4gICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgIGl7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5tb2JpbGVJY29ue1xyXG4gICAgICAgIHBhZGRpbmc6IDAlIDIlIDAlIDEuNCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQ6bm90KC5zdWJtaXQtYnRuKSwgZm9ybSB0ZXh0YXJlYSwgZm9ybSBzZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4zKTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuZm9ybSB0ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi5idG4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogXCJHb3RoYW0tTWVkaXVtXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuM2VtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzczNzM3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbn1cclxuXHJcbiAgLnRpdGxlUGFydHtcclxuICAgIHBhZGRpbmc6IDAlIDclO1xyXG4gIH1cclxuXHJcbiAgLmxvY2F0aW9udHh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdLcm9uYSBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAuYWRkcmVzc0RpdntcclxuICAgIGZvbnQtZmFtaWx5OiAnS3VmYW0nLCBjdXJzaXZlO1xyXG4gIH1cclxuLm1hcFNlY3tcclxuICBwYWRkaW5nLXRvcDogMTIlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBoNHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTglO1xyXG4gICAgbGVmdDogMyU7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJLcm9uYSBPbmVcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcHtcclxuICAucnRse1xyXG4gICAgaW1nIHtcclxuICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgcC5leWVicm93IHtcclxuICAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICBsZXR0ZXItc3BhY2luZzozcHggIWltcG9ydGFudDtcclxuICAgICAgIGZvbnQtZmFtaWx5OiAnRWwgTWVzc2lyaScsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgICB9XHJcbiAgICAgIHAuZXllYnJvdzpiZWZvcmUge1xyXG4gICAgICAgICBsZWZ0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICB0b3A6IDUzJSAhaW1wb3J0YW50O1xyXG4gICAgIH1cclxuICAgICBhLmFycm93LWRvd24tYnRuIHtcclxuICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICB3aWR0aDogMzNweDtcclxuICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICBzdmc+KiB7XHJcbiAgICAgICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuICAgIGgxe1xyXG4gICAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xyXG4gICAgIGZvbnQtc2l6ZTogNzRweCAhaW1wb3J0YW50O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxuICAgICBsZXR0ZXItc3BhY2luZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnRWwgTWVzc2lyaScsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdFbCBNZXNzaXJpJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgLndyYXBwZXIgLnNjcm9sbENvbXAge1xyXG4gICAgICByaWdodDogMTclIDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdFbCBNZXNzaXJpJztcclxuICAgIH1cclxuICAgIC5zY3JvbGxDb21wIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdFbCBNZXNzaXJpJztcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybVNlY3tcclxuICAgICAgLnRleHRQYXJ0e1xyXG4gICAgICAgIHBhZGRpbmc6ICAwJSA3JTtcclxuXHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0VsIE1lc3NpcmknLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubXNnVHh0e1xyXG4gICAgICAgICAgcGFkZGluZzogMCUgMiUgMTAlIDMlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0VsIE1lc3NpcmknLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGFyVHh0e1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICAgIC5tb2JpbGVJY29ue1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwJSAxLjQlIDAlIDIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkdvdGhhbS1NZWRpdW1cIixcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLjNlbTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDE0cHggMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzczNzM3O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxvY2F0aW9udHh0IHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdFbCBNZXNzaXJpJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYWRkcmVzc0RpdiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnRWwgTWVzc2lyaScsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICAgLm1hcFNlY3tcclxuICAgICAgaDR7XHJcbiAgICAgICAgcmlnaHQ6IDMlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0VsIE1lc3NpcmknLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgcC5leWVicm93IHtcclxuICAgIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDkwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gfVxyXG4gLmZvcm1TZWMge1xyXG4gICAudGV4dFBhcnQgIHtcclxuICAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTJweDtcclxuICAgICB9XHJcbiAgICAgLm1zZ1R4dCB7XHJcbiAgICAgIHBhZGRpbmc6IDAlIDMwJSAxMCUgMiU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgZm9ybSBpbnB1dDpub3QoLnN1Ym1pdC1idG4pLCBmb3JtIHRleHRhcmVhLCBmb3JtIHNlbGVjdCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiB9XHJcbiAubG9jYXRpb250eHQge1xyXG4gIGZvbnQtc2l6ZTogNDVweDtcclxuIH1cclxuIC5hZGRyZXNzRGl2e1xyXG4gICBoMXtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgfVxyXG4gICBwe1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICB9XHJcbiAgfVxyXG4gIC5tYXBTZWMgaDQge1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgYm90dG9tOiAtNiU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KXtcclxuICAud3JhcHBlciB7XHJcbiAgICB0b3A6IDMyJTtcclxuICB9XHJcbiAgLndyYXBwZXIgaDEge1xyXG4gICAgZm9udC1zaXplOiA0M3B4O1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IDI3JSAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE3OWRlZyk7XHJcbiAgfVxyXG4gIC5yb3cge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uZm9ybVNlYyAudGV4dFBhcnQge1xyXG4gIHBhZGRpbmc6IDAlIDclO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9ybVNlYyAudGV4dFBhcnQgLm1zZ1R4dCB7XHJcbiAgcGFkZGluZzogNSU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIG1hcmdpbi10b3A6IDYlO1xyXG59XHJcbi5mb3JtIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvcm1TZWMgLnRleHRQYXJ0IC5wYXJUeHQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHBhZGRpbmc6IDAlIDYlO1xyXG59XHJcblxyXG46Om5nLWRlZXB7XHJcbiAgLnJ0bHtcclxuXHJcbiAgfVxyXG59XHJcblxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
          }, {
            type: src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
          }, {
            type: src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_4__["ChangeLangService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "Bpez":
    /*!*****************************************************************!*\
      !*** ./src/app/layout/loadingscreen/loadingscreen.component.ts ***!
      \*****************************************************************/

    /*! exports provided: LoadingscreenComponent */

    /***/
    function Bpez(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingscreenComponent", function () {
        return LoadingscreenComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-svg-round-progressbar */
      "eANF");

      var LoadingscreenComponent = /*#__PURE__*/function () {
        function LoadingscreenComponent() {
          _classCallCheck(this, LoadingscreenComponent);

          this.currentNum = 0;
          this.radnum = 200;
          this.strokenum = 5;
        }

        _createClass(LoadingscreenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.plusnum(this.currentNum);
          }
        }, {
          key: "plusnum",
          value: function plusnum(num) {
            var _this4 = this;

            if (num < 100) {
              num += 1;
              this.currentNum = num;
              setTimeout(function () {
                _this4.plusnum(num);
              }, 30);
            } else if (this.radnum > 0) {
              setTimeout(function () {
                _this4.radnum -= 1;
                _this4.strokenum -= 0.2;

                _this4.plusnum(num);
              }, 5);
            } else {
              setTimeout(function () {
                $('.overlay').css("opacity", "1");
              }, 100);
              setTimeout(function () {
                $('.overlay').css("height", "100%");
                $('.overlay').css("bottom", "0");
              }, 500);
              setTimeout(function () {
                $('.overlay').css("border-top-left-radius", "0");
                $('.overlay').css("border-top-right-radius", "0");
              }, 800);
              setTimeout(function () {
                $('.loadingScreen').css("display", "none");
              }, 1500);
            }
          }
        }]);

        return LoadingscreenComponent;
      }();

      LoadingscreenComponent.ɵfac = function LoadingscreenComponent_Factory(t) {
        return new (t || LoadingscreenComponent)();
      };

      LoadingscreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoadingscreenComponent,
        selectors: [["app-loadingscreen"]],
        decls: 11,
        vars: 14,
        consts: [[1, "loadingScreen"], [1, "loadingDiv"], [1, "TextPart"], [1, "circleClass", 3, "current", "max", "color", "background", "radius", "stroke", "semicircle", "rounded", "clockwise", "responsive", "duration", "animation", "animationDelay"], [1, "overlay"]],
        template: function LoadingscreenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Kyrmina ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " For Rubber Products ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "round-progress", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentNum, " %");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("current", ctx.currentNum)("max", 100)("color", "#e0dede")("background", "#777777")("radius", ctx.radnum)("stroke", ctx.strokenum)("semicircle", false)("rounded", true)("clockwise", true)("responsive", false)("duration", 1000)("animation", "easeOutQuad")("animationDelay", 0);
          }
        },
        directives: [angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_1__["RoundProgressComponent"]],
        styles: [".loadingScreen[_ngcontent-%COMP%] {\n  background-color: #262626;\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  z-index: 10;\n  overflow-y: hidden;\n}\n\n.loadingDiv[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.circleClass[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-top: 10%;\n  transition: 0.8s all;\n}\n\n.TextPart[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  width: 100%;\n  margin-top: 9%;\n}\n\n.TextPart[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Lexend Zetta\", sans-serif;\n  font-family: \"Cinzel\", serif;\n  font-size: 57px;\n  font-weight: 300;\n}\n\n.TextPart[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", serif;\n  font-size: 21px;\n}\n\n.TextPart[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Elsie\", cursive;\n  font-size: 28px;\n  margin-top: 5%;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  background: black;\n  bottom: -41%;\n  height: 329px;\n  border-top-left-radius: 50%;\n  border-top-right-radius: 50%;\n  transition: 0.5s all;\n}\n\n@media only screen and (min-width: 1600px) {\n  .circleClass[_ngcontent-%COMP%] {\n    width: 500px !important;\n    height: 500px !important;\n  }\n\n  .TextPart[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n\n@media only screen and (max-width: 770px) {\n  .loadingDiv[_ngcontent-%COMP%] {\n    margin-top: 60%;\n  }\n\n  .circleClass[_ngcontent-%COMP%] {\n    width: 300px !important;\n    height: 300px !important;\n  }\n\n  .TextPart[_ngcontent-%COMP%] {\n    margin-top: 17%;\n  }\n\n  .TextPart[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n\n  .TextPart[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .TextPart[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 25px;\n    margin-top: 12%;\n  }\n\n  .overlay[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xvYWRpbmdzY3JlZW4vbG9hZGluZ3NjcmVlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFHSjs7QUFGSTtFQUNFLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJTjs7QUFGSTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtBQUlOOztBQUZJO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUlOOztBQURBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUFJSjs7QUFEQTtFQUNFO0lBQ0UsdUJBQUE7SUFDQSx3QkFBQTtFQUlGOztFQUZBO0lBQ0UsZUFBQTtFQUtGO0FBQ0Y7O0FBSEE7RUFFRTtJQUNFLGVBQUE7RUFJRjs7RUFEQTtJQUNFLHVCQUFBO0lBQ0Esd0JBQUE7RUFJRjs7RUFGQTtJQUNFLGVBQUE7RUFLRjs7RUFIQTtJQUNFLGVBQUE7RUFNRjs7RUFKQTtJQUNFLGVBQUE7RUFPRjs7RUFMQTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VBUUY7O0VBTkE7SUFDQSxhQUFBO0VBU0E7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sb2FkaW5nc2NyZWVuL2xvYWRpbmdzY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZ1NjcmVlbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLmxvYWRpbmdEaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2lyY2xlQ2xhc3N7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIHRyYW5zaXRpb246ICAuOHMgYWxsO1xyXG59XHJcbi5UZXh0UGFydHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDklO1xyXG4gICAgaDF7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnTGV4ZW5kIFpldHRhJywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdDaW56ZWwnLCBzZXJpZjtcclxuICAgICAgZm9udC1zaXplOiA1N3B4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG4gICAgaDN7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ2luemVsJywgc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICBmb250LWZhbWlseTogXCJFbHNpZVwiLCBjdXJzaXZlO1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgfVxyXG59XHJcbi5vdmVybGF5e1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGJvdHRvbTogLTQxJTtcclxuICAgIGhlaWdodDogMzI5cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgLmNpcmNsZUNsYXNze1xyXG4gICAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5UZXh0UGFydCBoNCB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpe1xyXG5cclxuICAubG9hZGluZ0RpdntcclxuICAgIG1hcmdpbi10b3A6IDYwJTtcclxuICAgfVxyXG5cclxuICAuY2lyY2xlQ2xhc3N7XHJcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLlRleHRQYXJ0e1xyXG4gICAgbWFyZ2luLXRvcDogMTclO1xyXG4gICAgfVxyXG4gIC5UZXh0UGFydCBoMSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG4gIC5UZXh0UGFydCBoMyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgIH1cclxuICAuVGV4dFBhcnQgaDQge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTIlO1xyXG4gIH1cclxuICAub3ZlcmxheXtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingscreenComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-loadingscreen',
            templateUrl: './loadingscreen.component.html',
            styleUrls: ['./loadingscreen.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "CZPe":
    /*!*****************************************************!*\
      !*** ./src/app/core/sharedServices/home.service.ts ***!
      \*****************************************************/

    /*! exports provided: HomeService */

    /***/
    function CZPe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeService", function () {
        return HomeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeService = /*#__PURE__*/function () {
        function HomeService() {
          _classCallCheck(this, HomeService);

          this.Home = {
            title: "Kyrmina For Rubber",
            DESI: "We specialize in cylinder and roll cladding",
            Artitle: "كيرمينا للكاوتشوك",
            ArDESI: "نحن متخصصون فى كسوة الدرافيل و السلندرات"
          };
          this.About = {
            ArTitle: "من نحن",
            ArAbout: " تعتبر كيرمينا ، التي تتمتع بخبرة تزيد عن الثلاثون عامًا ، رائدة في مجال صناعة الكاوتشوك. نحن متخصصون فى كسوة السلندرات و الدرافيل ، جميع منتجاتنا تتميز بخامات عالية الجودة و تشطيب ذا تقنية عالية .",
            Title: "About",
            About: " Kyrmina, with over thirty years of experience, is a pioneer in the rubber industry. We specialize in cylinder cladding and rollers, all of our products are characterized by high quality materials and high-tech finishing.",
            images: [{
              id: 1,
              image: "../../../assets/about/home2.png"
            }, {
              id: 2,
              image: "../../../assets/about/SiliconasSolidasPERFILES.png"
            }, {
              id: 3,
              image: "../../../assets/about/Westlandwerodampweb-1.png"
            }, {
              id: 4,
              image: "../../../assets/products/kyrminaRoller.jpeg"
            }, {
              id: 5,
              image: "../../../assets/products/polyKyrmina.jpeg"
            }, {
              id: 6,
              image: "../../../assets/products/copyimg3.jpg"
            }]
          };
          this.ArProducts = [{
            id: 1,
            image: "../../../../assets/products/Roller-Products.jpg",
            title: " السلندرات و الدرافيل",
            titleEn: "Cylinders and rollers",
            EnDes: "We do the process of covering cylinders and rubber rollers with all kinds of raw materials, whether natural or industrial rubber or ebonite (EPDM) with the highest accuracy and the highest level of finishing.",
            ArDes: "نقوم بعملية كسوة السلندرات و الدرافيل الكاوتشوك بجميع انواع الخامات سواء الطبيعي او الكاوتش الصناعي او خامة الابونيت (EPDM) باعلي دقة و اعلي مستوي من التشطيب ."
          }, {
            id: 2,
            image: "https://i.pinimg.com/originals/88/a7/74/88a77416a928229a2d7a32c401fd3028.jpg",
            title: "المكبوسات والمسحوبات",
            titleEn: "Compressions & towing",
            EnDes: "We have all shapes and sizes required by the needs of factories",
            ArDes: "يتوفر لدينا جميع الاشكال و المقاسات التي يتطلبها احتياجات المصانع "
          }, {
            id: 3,
            image: "http://www.lanphan.com/data/upload/201707/f_6a78fec765ebdad02b30159d642b8ec4.jpg",
            title: "التبطين بالكاوتشوك",
            titleEn: "Rubber lining",
            EnDes: "We do lining for all tanks and basins",
            ArDes: "نقوم بعملية التبطين لجميع التنكات و الاحواض"
          }, {
            id: 4,
            image: "https://www.rollerco.com/wp-content/uploads/2020/09/plasma-coated-rollers.jpg",
            title: " الدرافيل المعدنية",
            titleEn: "Metal rollers",
            EnDes: "We manufacture rollers and iron cylinders used in all factories",
            ArDes: "نفوم بتصنيع الدرافيل او السلندرات الحديد المستخدمة في جميع المصانع "
          }, {
            id: 5,
            image: "https://www.kraiburg-walzen.de/content/images/produkte/Silikonwalze.jpg",
            title: "سلندرات السيليكون",
            titleEn: "Silicon rollers",
            EnDes: "This material is characterized by withstanding high temperatures up to 350 degrees and withstands acid concentrations of up to 90% and is exposed to ultraviolet rays.",
            ArDes: "تتميز هذة الخامة بتحمل درجات الحرارة العالية تصل الي 350 درجة و تتحمل تركيز احماص تصل الي 90% و تتعرض للاشعة فوق البنفسجية."
          }, {
            id: 6,
            image: "../../../assets/products/polyKyrmina.jpeg",
            title: "البولي يوريثان",
            titleEn: "polyurethane rollers",
            EnDes: "This material is characterized by superior strength to withstand pressures and friction",
            ArDes: "تتميز هذه الخامة بقوة فائقة لتحمل الضغوط و الاحتكاك "
          }];
          this.ArContact = {
            MobileNum: "01223768216",
            MobileNumI: "01280624176",
            Email: "KyrminaRubber@gmail.com",
            Araddress: "16 ش ابو بكر الصديق - متفرع من شارع الشركات",
            address: "16 st Abo bakr el sedek - el sharekat",
            Arcity: " السلام - القاهرة, مصر",
            Encity: "El salam - Cairo , Egypt"
          };
        }

        _createClass(HomeService, [{
          key: "getHomeData",
          value: function getHomeData() {
            return this.Home;
          }
        }, {
          key: "getAboutData",
          value: function getAboutData() {
            return this.About;
          }
        }, {
          key: "getProductData",
          value: function getProductData() {
            return this.ArProducts;
          }
        }, {
          key: "getContactData",
          value: function getContactData() {
            return this.ArContact;
          }
        }]);

        return HomeService;
      }();

      HomeService.ɵfac = function HomeService_Factory(t) {
        return new (t || HomeService)();
      };

      HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HomeService,
        factory: HomeService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "CchL":
    /*!****************************************************************!*\
      !*** ./src/app/view/productMod/products/products.component.ts ***!
      \****************************************************************/

    /*! exports provided: ProductsComponent */

    /***/
    function CchL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
        return ProductsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/sharedServices */
      "nyYE");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProductsComponent_div_0_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slide_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slide_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ProductsComponent_div_0_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slide_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r6.titleEn, " ");
        }
      }

      function ProductsComponent_div_0_div_6_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slide_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r6.title, " ");
        }
      }

      function ProductsComponent_div_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_div_0_div_6_div_1_Template, 3, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsComponent_div_0_div_6_div_2_Template, 3, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_div_0_div_6_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var i_r7 = ctx.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.GoToProduct(i_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.changelngServ.local_lenguage == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.changelngServ.local_lenguage == "ar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "PRODUCT.EXPLORE"), " ");
        }
      }

      function ProductsComponent_div_0_div_9_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slide_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r14.ArId, " ");
        }
      }

      function ProductsComponent_div_0_div_9_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slide_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r14.id, " ");
        }
      }

      function ProductsComponent_div_0_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_div_0_div_9_div_1_Template, 2, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsComponent_div_0_div_9_div_2_Template, 2, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.changelngServ.local_lenguage == "ar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.changelngServ.local_lenguage == "en");
        }
      }

      function ProductsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductsComponent_div_0_div_4_Template, 4, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductsComponent_div_0_div_6_Template, 7, 5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProductsComponent_div_0_div_9_Template, 3, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.productImages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.productImages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.productImages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.slidesLen, " ");
        }
      }

      var ProductsComponent = /*#__PURE__*/function () {
        function ProductsComponent(router, translate, prodServ, changelngServ) {
          var _this5 = this;

          _classCallCheck(this, ProductsComponent);

          this.router = router;
          this.translate = translate;
          this.prodServ = prodServ;
          this.changelngServ = changelngServ;
          this.fetchData = false;
          this.slidenum = 0;
          this.slidesLen = '0';
          this.customOptions = {
            rtl: false,
            loop: false,
            dots: false,
            autoplay: false,
            autoplaySpeed: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            items: 1,
            margin: 8,
            autoWidth: true,
            autoHeight: true,
            responsiveRefreshRate: 500,
            nav: false,
            animateOut: "animate__fadeOutUp",
            animateIn: "animate__bounceInLeft",
            responsive: {
              0: {
                items: 1
              },
              400: {
                items: 1
              },
              740: {
                items: 1
              },
              940: {
                items: 1
              }
            }
          };
          this.customOptions1 = {
            rtl: false,
            loop: false,
            dots: false,
            autoplay: false,
            autoplaySpeed: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            items: 1,
            margin: 8,
            autoWidth: true,
            autoHeight: true,
            responsiveRefreshRate: 500,
            nav: false,
            animateOut: "animate__fadeOutUp",
            animateIn: "animate__bounceInLeft",
            responsive: {
              0: {
                items: 1
              },
              400: {
                items: 1
              },
              740: {
                items: 1
              },
              940: {
                items: 1
              }
            }
          };
          this.productImages = [];
          this.EngproductImages = [{
            id: 1,
            image: "https://images8.alphacoders.com/484/thumb-1920-484717.jpg",
            title: "Rubber Rollers",
            Des: "Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
          }, {
            id: 2,
            image: "https://www.danskgummi.com/wp-content/uploads/2020/08/Polyurethane-PU-rollers-and-conveyors-640x640.jpg",
            title: "Polyurethan Rollers",
            Des: "Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
          }, {
            id: 3,
            image: "https://www.chemline.net/wp-content/uploads/2020/09/Custom-Formulated-Urethane-Rollers-small.jpg",
            title: "Silicon Rollers",
            Des: "Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
          }, {
            id: 4,
            image: "https://www.colorcopiesusa.com/blog/wp-content/uploads/2018/07/PrintRollers.jpeg",
            title: "Polyurethan Rollers",
            Des: "Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
          }];
          this.ArabicNumbers = ['۰', '۱', '۲', '۳', '٤', '۵', '٦', '۷', '۸', '۹'];
          this.ArabicproductImages = [];
          /* ArabicproductImages=[
            {
              id:'۱',
              image:"https://www.precisionurethane.com/assets/images/content/urethane_rollers_gallery.jpg",
              title:"كسوة سلندرات",
              Des:"Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
            },
            {
              id:'۲',
              image:"https://www.danskgummi.com/wp-content/uploads/2020/08/Polyurethane-PU-rollers-and-conveyors-640x640.jpg",
              title:"بولى يوريثان",
              Des:"Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
            },
            {
              id:'۳',
              image:"https://www.chemline.net/wp-content/uploads/2020/09/Custom-Formulated-Urethane-Rollers-small.jpg",
              title:"سلندرات سيلكون",
              Des:"Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
            },
            {
              id:'٤',
              image:"https://www.colorcopiesusa.com/blog/wp-content/uploads/2018/07/PrintRollers.jpeg",
              title:"انالوكس",
              Des:"Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
            },
                  ]; */

          this.owl = true;
          this.getProductData(function () {
            _this5.fetchData = true;
            _this5.productImages = _this5.ArabicproductImages;
            /*  this.slickSetSlider();
             this.slickSetSliderI();
             this.slickSetSliderII(); */
          });
        }

        _createClass(ProductsComponent, [{
          key: "onResize",
          value: function onResize(event) {
            var _this6 = this;

            this.owl = false;
            setTimeout(function () {
              _this6.owl = true;
            }, 5);
          }
        }, {
          key: "rtl_slick",
          value: function rtl_slick() {
            var langVal = this.changelngServ.local_lenguage;

            if (langVal == 'ar') {
              return true;
            } else if (langVal == 'en') {
              return false;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            /* this.translate.onLangChange.subscribe(res=>{
              this.productImages = this.ArabicproductImages;
              let ProdLen = this.productImages.length;
                      let currLang = this.translate.currentLang;
              if(currLang == 'ar'){
                      this.slidesLen = this.ArabicNumbers[ProdLen];
                    }else{
                      this.slidesLen = ProdLen.toString();
              }
              $('.myslider1').slick('refresh');
              $('.myslider2').slick('refresh');
              $('.myslider3').slick('refresh');
            });  */
            this.changelngServ.change_lang.subscribe(function (res) {
              _this7.productImages = _this7.ArabicproductImages;
              var ProdLen = _this7.productImages.length;

              if (res == 'ar') {
                _this7.slidesLen = _this7.ArabicNumbers[ProdLen];
                setTimeout(function () {
                  $('.myslider1').slick('slickSetOption', "rtl", true, true);
                  $('.myslider2').slick('slickSetOption', "rtl", true, true);
                  $('.myslider3').slick('slickSetOption', "rtl", true, true);
                  /*  this.slickSetSlider();
                   this.slickSetSliderI();
                   this.slickSetSliderII(); */
                }, 5);
              } else {
                _this7.slidesLen = ProdLen.toString();
                setTimeout(function () {
                  $('.myslider1').slick('slickSetOption', "rtl", false, true);
                  $('.myslider2').slick('slickSetOption', "rtl", false, true);
                  $('.myslider3').slick('slickSetOption', "rtl", false, true);
                  /* this.slickSetSlider();
                  this.slickSetSliderI();
                  this.slickSetSliderII(); */
                }, 5);
              }
            });
            $(document).ready(function () {
              var $slider1 = $(".myslider1");
              $slider1.slick({
                rtl: _this7.rtl_slick(),
                slidesToScroll: 1,
                arrows: false,
                infinite: false,
                dots: false,
                draggable: true,
                cssEase: 'ease-in-out',
                speed: 500,
                asNavFor: '.asnavForClass'
              });
              $slider1.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                if (nextSlide === 0) {
                  $('.prevBtn').css("opacity", "0");
                } else if (nextSlide === slick.slideCount - 1) {
                  $('.nextBtn').css("opacity", "0");
                } else {
                  $('.prevBtn').css("opacity", "1");
                  $('.nextBtn').css("opacity", "1");
                }
              });
              var $slider2 = $(".myslider2");
              $slider2.slick({
                rtl: _this7.rtl_slick(),
                slidesToScroll: 1,
                arrows: true,
                infinite: false,
                dots: false,
                draggable: true,
                asNavFor: '.asnavForClass',
                prevArrow: "<a class='btn prevBtn' ><div class='arrowprevDiv noisy'><div class='left'></div><div class='leftTri'></div></div></a>",
                nextArrow: "<a class='btn nextBtn'><div class='arrownextDiv noisy'><div class='right'></div><div class='triangle'></div></div></a>"
              });
              var $slider3 = $(".myslider3");
              $slider3.slick({
                rtl: _this7.rtl_slick(),
                slidesToScroll: 1,
                arrows: false,
                infinite: false,
                dots: false,
                draggable: false,
                speed: 500,
                fade: true,
                asNavFor: '.asnavForClass'
              });
              $slider1.on('aftreChange', function (event, slick, currentSlide, nextSlide) {
                $slider1.slick({
                  rtl: _this7.rtl_slick
                });
              });
              $slider2.on('aftreChange', function (event, slick, currentSlide, nextSlide) {
                $slider2.slick({
                  rtl: _this7.rtl_slick
                });
              });
              $slider3.on('aftreChange', function (event, slick, currentSlide, nextSlide) {
                $slider3.slick({
                  rtl: _this7.rtl_slick
                });
              });
            });
          }
        }, {
          key: "GoToProduct",
          value: function GoToProduct(slideId) {
            this.router.navigateByUrl("Productitem/" + slideId);
          }
        }, {
          key: "getProductData",
          value: function getProductData(callback) {
            this.ArabicproductImages = this.prodServ.getproductData();
            callback();
          }
        }]);

        return ProductsComponent;
      }();

      ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
        return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_3__["ChangeLangService"]));
      };

      ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductsComponent,
        selectors: [["app-products"]],
        hostBindings: function ProductsComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ProductsComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 1,
        vars: 1,
        consts: [["class", "product noisy", 4, "ngIf"], [1, "product", "noisy"], [1, "circleClass"], [1, "itemClass"], ["id", "slider1", 1, "myslider1", "asnavForClass"], ["class", "item", 4, "ngFor", "ngForOf"], ["id", "slider2", 1, "myslider2", "asnavForClass"], [1, "slideNum"], ["id", "slider3", 1, "myslider3", "asnavForClass"], [1, "slideline"], [1, "AllSlide"], [1, "item"], [1, "imgDiv"], [1, "overlayImg"], ["alt", "slide", 1, "ProductImg", 3, "src"], ["class", "ProductDetails", 4, "ngIf"], [1, "btn", "btn-4", "exploreBtn", 3, "click"], [1, "ProductDetails"], ["class", "slideitem", 4, "ngIf"], [1, "slideitem"]],
        template: function ProductsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductsComponent_div_0_Template, 13, 4, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fetchData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
        styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  min-width: 980px;\n  padding: 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n}\n\np[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  font-family: \"Proxima Nova Light\", \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n  font-size-adjust: 0.488;\n  font-weight: 200;\n  font-style: normal;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0;\n}\n\nh1[_ngcontent-%COMP%], #pixels[_ngcontent-%COMP%] {\n  font-family: \"Museo 900\", Verdana, serif;\n  font-size-adjust: 0.4;\n  font-weight: 700;\n  font-style: normal;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: \"Beau Sans Pro Book\", Verdana, sans-serif;\n  font-size-adjust: 0.531;\n  font-weight: 500;\n  font-style: normal;\n}\n\n#header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #pixels[_ngcontent-%COMP%] {\n  color: #48941A;\n}\n\n.float-left[_ngcontent-%COMP%] {\n  float: left;\n  margin: 0 0 0 20px;\n}\n\n.float-right[_ngcontent-%COMP%] {\n  float: right;\n  margin: 0 20px 0 0;\n}\n\n.center[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  padding: 80px 0 0 0;\n  text-align: center;\n}\n\n#nav[_ngcontent-%COMP%] {\n  list-style: none;\n  position: fixed;\n  right: 20px;\n}\n\n#nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n}\n\n#header[_ngcontent-%COMP%], #intro[_ngcontent-%COMP%], #second[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#intro[_ngcontent-%COMP%] {\n  background: url(https://ianlunn.co.uk/plugins/jquery-parallax/images/firstBG.jpg) 50% 0 no-repeat fixed;\n  color: white;\n  height: 600px;\n  margin: 0 auto;\n  padding: 0;\n}\n\n#second[_ngcontent-%COMP%] {\n  background: url(https://ianlunn.co.uk/plugins/jquery-parallax/images/secondBG.jpg) 50% 0 no-repeat fixed;\n  color: white;\n  height: 1300px;\n  margin: 0 auto;\n  overflow: hidden;\n  padding: 0;\n}\n\n#second[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  background: url(https://ianlunn.co.uk/plugins/jquery-parallax/images/trainers.png) 50% 0 no-repeat fixed;\n  height: 1300px;\n  margin: 0 auto;\n  padding: 0;\n  position: absolute;\n  width: 900px;\n  z-index: 200;\n}\n\n#third[_ngcontent-%COMP%] {\n  background: url(https://ianlunn.co.uk/plugins/jquery-parallax/images/thirdBG.jpg) 50% 0 no-repeat fixed;\n  color: white;\n  height: 650px;\n  padding: 100px 0 0 0;\n}\n\n#fifth[_ngcontent-%COMP%] {\n  background: #ccc;\n  height: 400px;\n  margin: 0 auto;\n  padding: 40px 0 0 0;\n}\n\n.story[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  min-width: 980px;\n  overflow: auto;\n  width: 980px;\n}\n\n.story[_ngcontent-%COMP%]   .float-left[_ngcontent-%COMP%], .story[_ngcontent-%COMP%]   .float-right[_ngcontent-%COMP%] {\n  padding: 100px 0 0 0;\n  position: relative;\n  width: 350px;\n}\n\n.product[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  \n  justify-content: center;\n  display: flex;\n  position: fixed;\n  overflow: hidden;\n}\n\n.noise[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 4;\n}\n\n.noise[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  right: 0;\n  \n}\n\n.noisy[_ngcontent-%COMP%] {\n  \n  background-image: url('noisy-texture-300x300-o3-d10-c-111111-t0.png');\n}\n\n.myslider1[_ngcontent-%COMP%], .myslider2[_ngcontent-%COMP%], .myslider3[_ngcontent-%COMP%], .item[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n}\n\n.myslider1[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n  overflow: hidden;\n}\n\n.circleClass[_ngcontent-%COMP%] {\n  border: 0.01em solid rgba(145, 144, 144, 0.63);\n  position: absolute;\n  width: 1000px;\n  height: 1000px;\n  border-radius: 50%;\n  top: -22%;\n  text-align: center;\n  z-index: 3;\n}\n\n.itemClass[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n}\n\n.imgDiv[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  position: relative;\n  \n  height: 100%;\n}\n\n.imgDiv[_ngcontent-%COMP%]   .ProductImg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100% !important;\n  \n  object-fit: cover;\n  position: relative;\n}\n\n.imgDiv[_ngcontent-%COMP%]   .overlayImg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.5);\n  \n  z-index: 5;\n}\n\n.myslider2[_ngcontent-%COMP%] {\n  margin-top: 21%;\n  position: absolute;\n  height: 55%;\n  width: 100%;\n  z-index: 3;\n  overflow: hidden;\n}\n\n.myslider2[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 0;\n  margin: 0 auto;\n}\n\n.myslider2[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Cinzel\", serif;\n  font-size: 59px;\n  letter-spacing: 0px;\n}\n\n.slick-active[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  animation: textanimation 0.8s 1 ease-in-out forwards;\n}\n\n@keyframes textanimation {\n  from {\n    opacity: 0;\n    transform: translatex(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translatex(0);\n  }\n}\n\n.exploreBtn[_ngcontent-%COMP%] {\n  margin-top: 15%;\n  padding: 1% 4%;\n  border: 2px solid white;\n  border-radius: 30px;\n  background: transparent;\n  color: white;\n  font-family: Raleway;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  line-height: 1.5;\n  font-weight: 700;\n  text-align: center;\n  font-size: 14px;\n}\n\n.slideNum[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0%;\n  bottom: 8%;\n  color: white;\n  width: 200px;\n  text-align: center;\n  font-family: \"Vollkorn\", serif;\n  z-index: 3;\n}\n\n.slideNum[_ngcontent-%COMP%]   .slideitem[_ngcontent-%COMP%] {\n  text-align: left;\n  color: white;\n  font-size: 75px;\n  margin-left: 20%;\n  \n}\n\n.slideNum[_ngcontent-%COMP%]   .slideline[_ngcontent-%COMP%] {\n  width: 142px;\n  height: 2px;\n  transform: rotateZ(134deg);\n  background: rgba(255, 255, 255, 0.8);\n  margin-right: 26%;\n}\n\n.slideNum[_ngcontent-%COMP%]   .AllSlide[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 35px;\n}\n\n.slick-active[_ngcontent-%COMP%]   .slideitem[_ngcontent-%COMP%] {\n  animation: mymove 1.5s 1;\n}\n\n@keyframes mymove {\n  from {\n    opacity: 0;\n    transform: translatey(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translatey(0);\n  }\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.btn-4[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n\n.btn-4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  z-index: 20;\n}\n\n.btn-4[_ngcontent-%COMP%]:after {\n  background: #fff;\n  content: \"\";\n  height: 155px;\n  left: -75px;\n  opacity: 0.2;\n  position: absolute;\n  top: -50px;\n  transform: rotate(35deg);\n  transition: all 550ms cubic-bezier(0.19, 1, 0.42, 1);\n  width: 50px;\n  z-index: -10;\n}\n\n.btn-4[_ngcontent-%COMP%]:hover:after {\n  left: 120%;\n  transition: all 550ms cubic-bezier(0.19, 1, 0.42, 1);\n}\n\n  .prevBtn {\n  z-index: 50;\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0%;\n  float: left;\n  margin-left: 6.7em;\n  width: 60px;\n  height: 60px;\n  border: 1px solid white;\n  border-radius: 50%;\n  background-color: transparent;\n  transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n}\n\n  .prevBtn .left {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  left: 19px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  background-color: rgba(128, 128, 128, 0.5);\n  transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transform-origin: right center;\n}\n\n  .prevBtn .leftTri {\n  display: inline-block;\n  border-style: solid;\n  border-width: 6px 0 6px 8px;\n  border-color: transparent transparent transparent rgba(128, 128, 128, 0.5);\n  position: absolute;\n  top: 50%;\n  left: 24%;\n  transform: translate(-50%, -50%) rotateY(180deg);\n  transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n}\n\n  .prevBtn .arrowprevDiv {\n  height: 32px;\n  width: 68px;\n  position: relative;\n  margin-left: 1%;\n  margin-top: 24%;\n  transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n}\n\n  .prevBtn:hover .arrowprevDiv {\n  height: 32px;\n  width: 46px;\n  position: relative;\n  margin-left: -21%;\n  margin-top: 24%;\n  height: 18px;\n  width: 46px;\n  position: relative;\n  margin-left: -24%;\n  margin-top: 43%;\n}\n\n  .prevBtn:hover .arrowprevDiv .left {\n  width: 40%;\n  height: 2px;\n  right: 16px;\n}\n\n  .prevBtn:hover .arrowprevDiv .leftTri {\n  transform: translate(0px, -50%) rotateY(180deg);\n}\n\n  .nextBtn {\n  z-index: 50;\n  position: absolute;\n  right: 0;\n  top: 0%;\n  float: right;\n  margin-right: 6.7em;\n  width: 60px;\n  height: 60px;\n  border: 1px solid white;\n  border-radius: 50%;\n  background-color: transparent;\n  transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n}\n\n  .nextBtn .arrownextDiv {\n  height: 32px;\n  width: 68px;\n  position: relative;\n  margin-left: -92%;\n  margin-top: 24%;\n  transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n}\n\n  .nextBtn .right {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  right: 21px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  background-color: rgba(128, 128, 128, 0.5);\n  transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transform-origin: right center;\n}\n\n  .nextBtn .triangle {\n  display: inline-block;\n  border-style: solid;\n  border-width: 6px 0 6px 8px;\n  border-color: transparent transparent transparent rgba(128, 128, 128, 0.5);\n  position: absolute;\n  top: 50%;\n  left: 75%;\n  transform: translate(-50%, -50%);\n  transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n}\n\n  .nextBtn:hover .arrownextDiv {\n  height: 18px;\n  width: 46px;\n  position: relative;\n  margin-left: -24%;\n  margin-top: 43%;\n}\n\n  .nextBtn:hover .arrownextDiv .right {\n  width: 40%;\n  height: 2px;\n  right: 16px;\n}\n\n  .nextBtn:hover .arrownextDiv .triangle {\n  transform: translate(-4px, -50%);\n}\n\n\n\n@keyframes cssAnimation {\n  from {\n    transform: scale(0.7) translate(0px);\n    -webkit-transform: scale(0.7) translate(0px);\n  }\n  to {\n    transform: scale(1) translate(0px);\n    -webkit-transform: scale(1) translate(0px);\n  }\n}\n\n  .rtl .myslider2 .ProductDetails h1 {\n  color: white;\n  font-family: \"El Messiri\", sans-serif !important;\n  letter-spacing: 0;\n  font-size: 72px;\n}\n\n  .rtl .exploreBtn {\n  padding: 1% 5%;\n  font-family: \"El Messiri\", sans-serif !important;\n  letter-spacing: 1;\n  line-height: 1.3;\n  font-size: 16px;\n}\n\n@media only screen and (min-width: 1600px) {\n  .circleClass[_ngcontent-%COMP%] {\n    width: 1300px;\n    height: 1300px;\n  }\n\n  .myslider2[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-family: \"Cinzel\", serif;\n    font-size: 80px;\n  }\n\n  .exploreBtn[_ngcontent-%COMP%] {\n    padding: 1% 4%;\n    font-size: 18px;\n  }\n\n    .prevBtn {\n    left: 0;\n    \n    margin-left: 10.7em;\n    width: 70px;\n    height: 70px;\n  }\n    .prevBtn .arrowprevDiv {\n    height: 32px;\n    width: 68px;\n    margin-left: 13%;\n    margin-top: 30%;\n  }\n    .prevBtn .arrowprevDiv .left {\n    width: 114%;\n    height: 3px;\n    left: 19px;\n  }\n    .prevBtn .arrowprevDiv .leftTri {\n    border-width: 9px 0 9px 10px;\n    top: 50%;\n    left: 20%;\n  }\n    .prevBtn:hover .arrowprevDiv {\n    margin-left: 0%;\n    margin-top: 44%;\n  }\n    .prevBtn:hover .arrowprevDiv .left {\n    height: 3px;\n  }\n\n    .nextBtn {\n    width: 70px;\n    height: 70px;\n    margin-right: 10.7em;\n  }\n    .nextBtn .arrownextDiv {\n    height: 32px;\n    width: 68px;\n    margin-left: -62%;\n    margin-top: 30%;\n  }\n    .nextBtn .right {\n    height: 3px;\n    right: 20px;\n    width: 114%;\n  }\n    .nextBtn .triangle {\n    border-width: 9px 0 9px 10px;\n    top: 50%;\n    left: 78%;\n  }\n    .nextBtn:hover .arrownextDiv {\n    margin-left: -6px;\n    margin-top: 46%;\n  }\n    .nextBtn:hover .arrownextDiv .right {\n    height: 3px;\n    right: 14px;\n  }\n\n  .slideNum[_ngcontent-%COMP%]   .slideitem[_ngcontent-%COMP%] {\n    font-size: 90px;\n    margin-left: 15%;\n  }\n\n  .slideNum[_ngcontent-%COMP%]   .AllSlide[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n\n@media screen and (max-width: 992px) {\n  .imgDiv[_ngcontent-%COMP%]   .ProductImg[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100vh !important;\n    object-fit: cover;\n    object-position: 43%;\n  }\n\n  .circleClass[_ngcontent-%COMP%] {\n    width: 800px;\n    height: 800px;\n  }\n\n  .myslider2[_ngcontent-%COMP%] {\n    margin-top: 41% !important;\n  }\n\n  .ProductDetails[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 39px !important;\n  }\n\n    .prevBtn {\n    left: 5%;\n    top: 16%;\n  }\n    .nextBtn {\n    right: 5%;\n    top: 16%;\n  }\n\n  .slideNum[_ngcontent-%COMP%] {\n    right: -4%;\n    bottom: 5%;\n  }\n}\n\n@media only screen and (max-width: 770px) {\n  .imgDiv[_ngcontent-%COMP%]   .ProductImg[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100vh !important;\n    object-fit: cover;\n    object-position: 43%;\n  }\n\n  .myslider2[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%] {\n    margin-top: 58% !important;\n  }\n\n  .myslider2[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 23px !important;\n  }\n\n  .exploreBtn[_ngcontent-%COMP%] {\n    margin-top: 25%;\n    padding: 4% 6%;\n    font-size: 13px;\n  }\n\n  .slideNum[_ngcontent-%COMP%] {\n    right: -12%;\n    bottom: 3%;\n  }\n\n  .slideNum[_ngcontent-%COMP%]   .slideitem[_ngcontent-%COMP%] {\n    text-align: unset;\n    color: white;\n    font-size: 65px;\n    margin-left: unset;\n  }\n\n  .slideNum[_ngcontent-%COMP%]   .slideline[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .slideNum[_ngcontent-%COMP%]   .AllSlide[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .circleClass[_ngcontent-%COMP%] {\n    border: 0.01em solid rgba(145, 144, 144, 0.63);\n    position: absolute;\n    width: 450px;\n    height: 450px;\n    border-radius: 50%;\n    top: 24%;\n    text-align: center;\n    z-index: 3;\n  }\n\n  .myslider2[_ngcontent-%COMP%] {\n    margin-top: 20%;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    z-index: 3;\n    overflow: hidden;\n  }\n\n    .prevBtn {\n    left: -14%;\n    top: 20%;\n    float: left;\n  }\n    .nextBtn {\n    z-index: 50;\n    position: absolute;\n    right: -37px;\n    top: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9wcm9kdWN0TW9kL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0MsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUZEOztBQUtBO0VBQ0Msa0JBQUE7QUFGRDs7QUFLQTtFQUNDLGlGQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRkQ7O0FBS0E7RUFDQyxTQUFBO0FBRkQ7O0FBS0E7RUFDQyx3Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZEOztBQUtBO0VBQ0Msc0RBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFGRDs7QUFLQTtFQUNDLGNBQUE7QUFGRDs7QUFLQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtBQUZEOztBQUtBO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0FBRkQ7O0FBS0E7RUFDQyxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFGRDs7QUFLQTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFGRDs7QUFLQTtFQUNDLGtCQUFBO0FBRkQ7O0FBS0E7RUFDQyxXQUFBO0FBRkQ7O0FBS0E7RUFDQyx1R0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFGRDs7QUFLQTtFQUNDLHdHQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBRkQ7O0FBS0E7RUFDQyx3R0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFGRDs7QUFLQTtFQUNDLHVHQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQUZEOztBQUtBO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBRkQ7O0FBS0E7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Q0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtFQXBEQTs7RUFzREY7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtFQW5EQTs7RUF1REE7SUFDQSxVQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7RUFwREE7RUFzREY7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsUUFBQTtFQXBEQTtBQUNGOztBQTZEQSxZQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlldy9wcm9kdWN0TW9kL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuYm9keXtcclxuXHRtYXJnaW46IDA7XHJcblx0bWluLXdpZHRoOiA5ODBweDtcclxuXHRwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5we1xyXG5cdG1hcmdpbjogMCAwIDIwcHggMDtcclxufVxyXG5cclxucCwgdWx7XHJcblx0Zm9udC1mYW1pbHk6XCJQcm94aW1hIE5vdmEgTGlnaHRcIiwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemUtYWRqdXN0OjAuNDg4O1xyXG5cdGZvbnQtd2VpZ2h0OjIwMDtcclxuXHRmb250LXN0eWxlOm5vcm1hbDtcclxufVxyXG5cclxuaW1ne1xyXG5cdGJvcmRlcjogMDtcclxufVxyXG5cclxuaDEsICNwaXhlbHN7XHJcblx0Zm9udC1mYW1pbHk6XCJNdXNlbyA5MDBcIiwgVmVyZGFuYSwgc2VyaWY7XHJcblx0Zm9udC1zaXplLWFkanVzdDowLjQwO1xyXG5cdGZvbnQtd2VpZ2h0OjcwMDtcclxuXHRmb250LXN0eWxlOm5vcm1hbDtcclxufVxyXG5cclxuaDJ7XHJcblx0Zm9udC1mYW1pbHk6XCJCZWF1IFNhbnMgUHJvIEJvb2tcIiwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemUtYWRqdXN0OjAuNTMxO1xyXG5cdGZvbnQtd2VpZ2h0OjUwMDtcclxuXHRmb250LXN0eWxlOm5vcm1hbDtcclxufVxyXG5cclxuI2hlYWRlciBoMSwgI3BpeGVsc3tcclxuXHRjb2xvcjogIzQ4OTQxQTtcclxufVxyXG5cclxuLmZsb2F0LWxlZnR7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0bWFyZ2luOiAwIDAgMCAyMHB4O1xyXG59XHJcblxyXG4uZmxvYXQtcmlnaHR7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdG1hcmdpbjogMCAyMHB4IDAgMDtcclxufVxyXG5cclxuLmNlbnRlcntcclxuXHRmb250LXNpemU6IDIuNWVtO1xyXG5cdHBhZGRpbmc6IDgwcHggMCAwIDA7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jbmF2e1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4jbmF2IGxpe1xyXG5cdG1hcmdpbjogMCAwIDIwcHggMDtcclxufVxyXG5cclxuI2hlYWRlciwgI2ludHJvLCAjc2Vjb25ke1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jaW50cm97XHJcblx0YmFja2dyb3VuZDp1cmwoaHR0cHM6Ly9pYW5sdW5uLmNvLnVrL3BsdWdpbnMvanF1ZXJ5LXBhcmFsbGF4L2ltYWdlcy9maXJzdEJHLmpwZykgNTAlIDAgbm8tcmVwZWF0IGZpeGVkO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRoZWlnaHQ6IDYwMHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbiNzZWNvbmR7XHJcblx0YmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaWFubHVubi5jby51ay9wbHVnaW5zL2pxdWVyeS1wYXJhbGxheC9pbWFnZXMvc2Vjb25kQkcuanBnKSA1MCUgMCBuby1yZXBlYXQgZml4ZWQ7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGhlaWdodDogMTMwMHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0cGFkZGluZzogMDtcclxufVxyXG5cclxuI3NlY29uZCAuYmd7XHJcblx0YmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaWFubHVubi5jby51ay9wbHVnaW5zL2pxdWVyeS1wYXJhbGxheC9pbWFnZXMvdHJhaW5lcnMucG5nKSA1MCUgMCBuby1yZXBlYXQgZml4ZWQ7XHJcblx0aGVpZ2h0OiAxMzAwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0cGFkZGluZzogMDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDkwMHB4O1xyXG5cdHotaW5kZXg6IDIwMDtcclxufVxyXG5cclxuI3RoaXJke1xyXG5cdGJhY2tncm91bmQ6IHVybChodHRwczovL2lhbmx1bm4uY28udWsvcGx1Z2lucy9qcXVlcnktcGFyYWxsYXgvaW1hZ2VzL3RoaXJkQkcuanBnKSA1MCUgMCBuby1yZXBlYXQgZml4ZWQ7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGhlaWdodDogNjUwcHg7XHJcblx0cGFkZGluZzogMTAwcHggMCAwIDA7XHJcbn1cclxuXHJcbiNmaWZ0aHtcclxuXHRiYWNrZ3JvdW5kOiAjY2NjO1xyXG5cdGhlaWdodDogNDAwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0cGFkZGluZzogNDBweCAwIDAgMDtcclxufVxyXG5cclxuLnN0b3J5e1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdG1pbi13aWR0aDogOTgwcHg7XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcblx0d2lkdGg6IDk4MHB4O1xyXG59XHJcblxyXG4uc3RvcnkgLmZsb2F0LWxlZnQsIC5zdG9yeSAuZmxvYXQtcmlnaHR7XHJcblx0cGFkZGluZzogMTAwcHggMCAwIDA7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHdpZHRoOiAzNTBweDtcclxufVxyXG5cclxuXHJcbi5wcm9kdWN0e1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbiAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7ICovXHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5ub2lzZSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDQ7XHJcbn1cclxuXHJcbi5ub2lzZTpiZWZvcmV7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogLTE7XHJcblx0dG9wOjA7XHJcblx0Ym90dG9tOjA7XHJcblx0bGVmdDo1MCU7XHJcblx0cmlnaHQ6MDtcclxuLyogXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FNQUFBQXA0WGlEQUFBQVVWQk1WRVdGaFlXRGc0TjNkM2R0YlcxN2UzdDFkWFdCZ1lHSGg0ZDVlWGx6YzNPTGk0dWJtNXVWbFpXUGo0K05qWTE5ZlgySmlZbC9mMzlyYTJ1UmtaR1ptWmxwYVdtWGw1ZHZiMjl4Y1hHVGs1Tm5aMmM4VFYxbUFBQUFHM1JTVGxOQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVBdkVPd3RBQUFGVmtsRVFWUjRYcFdXQjY3YzJCVUZiM2c1NTdUL2hSbzkvV1VNWkhsZ3I0Qmc4WjRxUWdRSmxISTRBOFN6RlZyYXB2bVRGOU83ZG1ZUkZaNjBZaUJoSlJDZ2gxRlloaUxBbWR2WDBDelRPcE5FNzdNRTBadHkvbldXemNoRHRpcXJtUURldXYzcG93UTV0YTJlTjBGWTBJbmtxREQ3M2xUOWM5bEV6d1VOcWdGSHM5VlFjZTNUVkNsRkNRclNUZk9pWWtWSlFCbXBicTJMNmlaYXZQbkFQY29VMGRTdzBTVVRxei9HdHJHdVhmYnl5Qm5pS3lrT1dRV0dxd3dNQTdRaVlBeGkrSWxQZHFvK2hZSG5VdDVaUGZuc0hKeU5pRHRucEp5YXlOQmtGNmNXb1lHQU1ZOTJVMmhYSEYvQzFNOHVQL1p0WWRpdWoyNlVkQWRRUVNYUUVyd1NPTXp0L1hXUldBejVHdVNCSWt3RzFIM0ZhYkoyT3NVT1VoR0M2dEs0RU10Sk8wdHRDNklCRDNrTTB2ZTB0SndNZFNmalpvK0VFSVNhZVRyOVAzd1lyR2pYcXlDMWtyY0tkaE1weEVudDVKZXRvdWxzY3B5emhYTjVGUnB1UEh2YmVRYUt4RkFFQjZFTitjWU42eEQ3UllHcFhwTm5kTW1aZ001RGNzM1lTTkZESFVvMkxHZlp1dWtTV3lVWWlySkFkWWJGM01mcUVLbWpNK0kyRWZoQTk0aUczTDd1S3JSK0dkV0Q3M3lkbElCKzZoZ3JlZjFRVGxtZ21iTTMvTGVYNUdJMVV4MVJXcGd4cEx1WjIrSStJanpaOHdxRTRuaWx2UWRrVWRmaHpJNVFEV3kra3c1V2dnMnBHcGVFVmVDQ0E3Yjg1Qk8zRjlEenhCM2NkcXZCeldjbXpieU1pcWh6dVlxdEhSVkcyeTR4K0tPbG55cWxhOEFvV1dwdUJvWVJ4elhyZkt1SUxsNlNmaVdDYmp4b1pKVWFDQmoxQ2pIN0dJYURiYzlrcUJZM1cvUmdqZGExaXFRY09KdTJXVys3NnBaQzlRRzdNMDBkZmZlOWhObnNldXBGTDUzcjhGN1lIU3dKV1VLUDJxK2s3UmRzeHlPQjExbjB4dE92blc0aXJNTUZOVjRIMHVxd1M1RXhzbVA5QXhiRFRjOUp3Z25lQVQ1dlRpVVNtMUU3QlNmbFN0M2JmYTF0djhEaTNSOG4zQWY3TU5XenM0OWhtYXVFMndQK3R0cnErQXNXcEZHMmF3dnN1T3FiaXBXSGd0dXZ1YUFFK0ExWi83Z0M5aGVzbnIrN3dxQ3dHOGM1eUFnM0FMMWZtOFQ5QVp0cC9iYkpHd2wxcE5yRTdSdU9YN1BlTVJVRVJWYVBwRXMreXFlb1NtdU9sb2txdzQ5cGdvbWpMZWg3aWNITmxHMTl5anM2WFhPTWVkWW01eEgyWXhwVjJ0YzBSbzJqSmZ4QzUwQXB1eEdvYjdsTXN4ZlRiZVV2MDdUeVl4cGVMdWNFSDFnTmQ0SUtIMkxBZzVUZFZobENhZlp2cHNrZm5jQ2Z4OHBPaEp6ZDc2YkpXZVlGbkZjaXdjWWZ1YlJjMTJJcC9wcEloQTEvbVNaL1J4akZEckpDNXhpZkZqSnBZMlhsNXpYZGd1RnFZeVRSMXpTcDFZOXArdGt0RFlZU05mbGN4STBpeU80VFBCZGxSY3BlcWpLL3BpRjVia2xxNzdWU0VhQSt6OHFtSlRGeklXaWl0Ym56Ujc5NFVTS0JVYVQwTlRFc1ZqWnFMYUZWcUpvUE45T0RHNzBJUGJmQkhLSysvcS9BV1IwdEp6WUhSVUxPYTRNUCtXL0hmR2FkWlViZncxNzdHN2ovT0diSXM4VGFoTHl5bmw0WDRSaW5GNzkzT3orQlUwc2FYdFVIclZCRlQvRG5BM2N0TlBvR2JzNGhSSWpUb2s4aSthbGdUMWxUSGk0U3hGdk9OS05yZ1FGQXEyL2dGbldNWGd3ZmZnWU1KcGlLWWttVzN0VGczWlE5SnErZjhYTitBNWVlVUtIV3ZKV0oyc2dKMVNvcCt3d2hxRlZpanFXYUpod3REOE1ObFNCZVdOTldUYTVaNWtQWnc1K0xiVlQ5OXdxVGR4MjlsTVVINE9JRy9EODZydUtFYXVCanZINXh5NnVtL1NmajdlaTZVVVZrNEFJbDNNeUQ0TVNTVE9GZ1N3c0gvUUpXYVE1YXM3WmNtZ0Jaa3pqalUxVXJRNzRjaTFnV0JDU0dIdHVWMUgybWhTbk8zV3AvM2ZFVjVhKzR3ei8vNnF5OEp4alpzbXh4eTUrNHc5Q0ROSlkwOVQwNzJpS0cwRW5PUzBhckVZZ1hxWW5YY1lId2pUdFVOQWNNZWxPZDR4cGtvcWlUWUlDV0ZxMEpTaVBmUERRZG50KzQvd3VxY1hZNDdRSUxiZ0FBQUFCSlJVNUVya0pnZ2c9PSk7XHJcbiAqL31cclxuXHJcblxyXG4ubm9pc3kge1xyXG4vKiBcdGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbVpnTTVEY3MzWVNORkRIVW8yTEdmWnV1a1NXeVVZaXJKQWRZYkYzTWZxRUttak0rSTJFZmhBOTRpRzNMN3VLclIrR2RXRDczeWRsSUIrNmhncmVmMVFUbG1nbWJNMy9MZVg1R0kxVXgxUldwZ3hwTHVaMitJK0lqelo4d3FFNG5pbHZRZGtVZGZoekk1UURXeStrdzVXZ2cycEdwZUVWZUNDQTdiODVCTzNGOUR6eEIzY2RxdkJ6V2NtemJ5TWlxaHp1WXF0SFJWRzJ5NHgrS09sbnlxbGE4QW9XV3B1Qm9ZUnh6WHJmS3VJTGw2U2ZpV0NianhvWkpVYUNCajFDakg3R0lhRGJjOWtxQlkzVy9SZ2pkYTFpcVFjT0p1MldXKzc2cFpDOVFHN00wMGRmZmU5aE5uc2V1cEZMNTNyOEY3WUhTd0pXVUtQMnErazdSZHN4eU9CMTFuMHh0T3ZuVzRpck1NRk5WNEgwdXF3UzVFeHNtUDlBeGJEVGM5SndnbmVBVDV2VGlVU20xRTdCU2ZsU3QzYmZhMXR2OERpM1I4bjNBZjdNTld6czQ5aG1hdUUyd1ArdHRycStBc1dwRkcyYXd2c3VPcWJpcFdIZ3R1dnVhQUUrQTFaLzdnQzloZXNucis3d3FDd0c4YzV5QWczQUwxZm04VDlBWnRwL2JiSkd3bDFwTnJFN1J1T1g3UGVNUlVFUlZhUHBFcyt5cWVvU211T2xva3F3NDlwZ29takxlaDdpY0hObEcxOXlqczZYWE9NZWRZbTV4SDJZeHBWMnRjMFJvMmpKZnhDNTBBcHV4R29iN2xNc3hmVGJlVXYwN1R5WXhwZUx1Y0VIMWdOZDRJS0gyTEFnNVRkVmhsQ2FmWnZwc2tmbmNDZng4cE9oSnpkNzZiSldlWUZuRmNpd2NZZnViUmMxMklwL3BwSWhBMS9tU1ovUnhqRkRySkM1eGlmRmpKcFkyWGw1elhkZ3VGcVl5VFIxelNwMVk5cCt0a3REWVlTTmZsY3hJMGl5TzRUUEJkbFJjcGVxaksvcGlGNWJrbHE3N1ZTRWFBK3o4cW1KVEZ6SVdpaXRibnpSNzk0VVNLQlVhVDBOVEVzVmpacUxhRlZxSm9QTjlPREc3MElQYmZCSEtLKy9xL0FXUjB0SnpZSFJVTE9hNE1QK1cvSGZHYWRaVWJmdzE3N0c3ai9PR2JJczhUYWhMeXlubDRYNFJpbkY3OTNPeitCVTBzYVh0VUhyVkJGVC9EbkEzY3ROUG9HYnM0aFJJalRvazhpK2FsZ1QxbFRIaTRTeEZ2T05LTnJnUUZBcTIvZ0ZuV01YZ3dmZmdZTUpwaUtZa21XM3RUZzNaUTlKcStmOFhOK0E1ZWVVS0hXdkpXSjJzZ0oxU29wK3d3aHFGVmlqcVdhSmh3dEQ4TU5sU0JlV05OV1RhNVo1a1BadzUrTGJWVDk5d3FUZHgyOWxNVUg0T0lHL0Q4NnJ1S0VhdUJqdkg1eHk2dW0vU2ZqN2VpNlVVVms0QUlsM015RDRNU1NUT0ZnU3dzSC9RSldhUTVhczdaY21nQlprempqVTFVclE3NGNpMWdXQkNTR0h0dVYxSDJtaFNuTzNXcC8zZkVWNWErNHd6Ly82cXk4SnhqWnNteHh5NSs0dzlDRE5KWTA5VDA3MmlLRzBFbk9TMGFyRVlnWHFZblhjWUh3alR0VU5BY01lbE9kNHhwa29xaVRZSUNXRnEwSlNpUGZQRFFkbnQrNC93dXFjWFk0N1FJTGJnQUFBQUJKUlU1RXJrSmdnZz09KTtcclxuICovYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvbm9pc3ktdGV4dHVyZS0zMDB4MzAwLW8zLWQxMC1jLTExMTExMS10MC5wbmcnKTtcclxufVxyXG5cclxuLm15c2xpZGVyMSAsIC5teXNsaWRlcjIgLCAubXlzbGlkZXIzICwgLml0ZW17XHJcbiAgIG91dGxpbmU6IG5vbmU7XHJcbiAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm15c2xpZGVyMXtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNpcmNsZUNsYXNze1xyXG5cdGJvcmRlcjogMC4wMWVtIHNvbGlkIHJnYmEoMTQ1LCAxNDQsIDE0NCwgMC42Myk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0b3A6IC0yMiU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5pdGVtQ2xhc3N7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuIC5pbWdEaXZ7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyogbWFyZ2luLXRvcDogMjIlOyAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuXHQuUHJvZHVjdEltZ3tcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcblx0XHQvKiBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDsgKi9cclxuXHRcdG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQub3ZlcmxheUltZ3tcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cdFx0LyogYm9yZGVyLXJhZGl1czogNTAlOyAqL1xyXG5cdFx0ei1pbmRleDogNTtcclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLm15c2xpZGVyMntcclxuXHJcblx0bWFyZ2luLXRvcDogMjElO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA1NSU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cdC5Qcm9kdWN0RGV0YWlsc3tcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdG1hcmdpbi10b3A6IDA7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdGgxe1xyXG5cdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdGZvbnQtZmFtaWx5OiAnQ2luemVsJywgc2VyaWY7XHJcblx0XHRcdGZvbnQtc2l6ZTogNTlweDtcclxuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDBweDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuLnNsaWNrLWFjdGl2ZSAuUHJvZHVjdERldGFpbHMgaDF7XHJcblxyXG5cdC13ZWJraXQtYW5pbWF0aW9uOiB0ZXh0YW5pbWF0aW9uIDAuOHMgMSBlYXNlLWluLW91dCBmb3J3YXJkcztcclxuXHRhbmltYXRpb246IHRleHRhbmltYXRpb24gMC44cyAxIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHRleHRhbmltYXRpb257XHJcblx0ZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTowO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV4KC0yMHB4KTtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRleCgtMjBweCk7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGV4KC0yMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoLTIwcHgpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRleCgwKTtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRleCgwKTtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDApO1xyXG4gICAgfVxyXG5cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgdGV4dGFuaW1hdGlvbntcclxuXHRmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OjA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXgoLTIwcHgpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGV4KC0yMHB4KTtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZXgoLTIwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgtMjBweCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDApO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDApO1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRleCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMCk7XHJcbiAgICB9XHJcbn1cclxuLmV4cGxvcmVCdG57XHJcblx0bWFyZ2luLXRvcDogMTUlO1xyXG4gICAgcGFkZGluZzogMSUgNCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuXHJcbi5zbGlkZU51bXtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICBib3R0b206IDglO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtZmFtaWx5OiAnVm9sbGtvcm4nLCBzZXJpZjtcclxuXHR6LWluZGV4OiAzO1xyXG5cdC5zbGlkZWl0ZW17XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA3NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuXHJcbi8qIFx0YW5pbWF0aW9uLW5hbWU6IG15bW92ZTtcclxuXHRhbmltYXRpb24tZHVyYXRpb246IDAuNHM7ICovXHJcblx0fVxyXG5cdC5zbGlkZWxpbmV7XHJcblx0XHR3aWR0aDogMTQycHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWigxMzRkZWcpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1LDAuOCk7XHJcblx0bWFyZ2luLXJpZ2h0OiAyNiU7XHJcblx0fVxyXG5cdC5BbGxTbGlkZXtcclxuICAgICBjb2xvcjogcmdiKDI1NSwyNTUsMjU1LDAuOCk7XHJcblx0IGZvbnQtc2l6ZTogMzVweDtcclxuXHR9XHJcblxyXG5cclxufVxyXG5cclxuLnNsaWNrLWFjdGl2ZSAuc2xpZGVpdGVte1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uOiBteW1vdmUgMS41cyAxIDtcclxuXHRhbmltYXRpb246IG15bW92ZSAxLjVzIDEgO1xyXG59XHJcbkBrZXlmcmFtZXMgbXltb3ZlIHtcclxuXHRcdGZyb20ge1xyXG5cdFx0XHRvcGFjaXR5OjA7XHJcblx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC0yMHB4KTtcclxuXHRcdFx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTIwcHgpO1xyXG5cdFx0XHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTIwcHgpO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTIwcHgpO1xyXG5cdFx0fVxyXG5cdFx0dG8ge1xyXG5cdFx0XHRvcGFjaXR5OjE7XHJcblx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cdFx0XHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRleSgwKTtcclxuXHRcdFx0LW8tdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblx0XHR9XHJcblx0ICB9XHJcbkAtd2Via2l0LWtleWZyYW1lcyBteW1vdmUge1xyXG5cdGZyb20ge1xyXG5cdFx0b3BhY2l0eTowO1xyXG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTIwcHgpO1xyXG5cdFx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTIwcHgpO1xyXG5cdFx0LW8tdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC0yMHB4KTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRleSgtMjBweCk7XHJcblx0fVxyXG5cdHRvIHtcclxuXHRcdG9wYWNpdHk6MTtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xyXG5cdFx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblx0XHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMCk7XHJcblx0fVxyXG59XHJcblxyXG4uYnRuIHtcclxuXHQgJjpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxyXG4gICB9XHJcblxyXG4uYnRuLTQge1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHRzcGFuIHtcclxuXHQgIHotaW5kZXg6IDIwO1xyXG5cdH1cclxuXHJcblx0JjphZnRlciB7XHJcblx0ICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdCAgY29udGVudDogXCJcIjtcclxuXHQgIGhlaWdodDogMTU1cHg7XHJcblx0ICBsZWZ0OiAtNzVweDtcclxuXHQgIG9wYWNpdHk6IC4yO1xyXG5cdCAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdCAgdG9wOiAtNTBweDtcclxuXHQgIHRyYW5zZm9ybTogcm90YXRlKDM1ZGVnKTtcclxuXHQgIHRyYW5zaXRpb246IGFsbCA1NTBtcyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgLjQyLCAxKTtcclxuXHQgIHdpZHRoOiA1MHB4O1xyXG5cdCAgei1pbmRleDogLTEwO1xyXG5cdH1cclxuICB9XHJcblxyXG4gIC5idG4tNDpob3ZlciB7XHJcblxyXG5cdCY6YWZ0ZXIge1xyXG5cdCAgbGVmdDogMTIwJTtcclxuXHQgIHRyYW5zaXRpb246IGFsbCA1NTBtcyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgLjQyLCAxKTtcclxuXHR9XHJcbiAgfVxyXG5cclxuXHJcbjo6bmctZGVlcCAucHJldkJ0bntcclxuXHR6LWluZGV4OiA1MDtcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwJTtcclxuXHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDYuN2VtO1xyXG5cdFx0d2lkdGg6IDYwcHg7XHJcblx0XHRoZWlnaHQ6IDYwcHg7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIC40cyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KTtcclxuXHRcdC5sZWZ0e1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0aGVpZ2h0OiAycHg7XHJcblx0XHRcdGxlZnQ6IDE5cHg7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41KTtcclxuXHRcdFx0dHJhbnNpdGlvbjogYWxsIC40cyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KTtcclxuXHRcdFx0dHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xyXG5cdFx0fVxyXG5cdFx0LmxlZnRUcml7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdFx0Ym9yZGVyLXdpZHRoOiA2cHggMCA2cHggOHB4O1xyXG5cdFx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41KTtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IDUwJTtcclxuXHRcdFx0bGVmdDogMjQlO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGVZKDE4MGRlZyk7XHJcblx0XHRcdHRyYW5zaXRpb246IGFsbCAuNHMgY3ViaWMtYmV6aWVyKDAuNzg1LCAwLjEzNSwgMC4xNSwgMC44Nik7XHJcblx0XHR9XHJcblx0XHQuYXJyb3dwcmV2RGl2e1xyXG5cdFx0XHRoZWlnaHQ6IDMycHg7XHJcblx0XHRcdHdpZHRoOiA2OHB4O1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxJTtcclxuXHRcdFx0bWFyZ2luLXRvcDogMjQlO1xyXG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgLjRzIGN1YmljLWJlemllcigwLjc4NSwgMC4xMzUsIDAuMTUsIDAuODYpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCY6aG92ZXJ7XHJcblx0XHRcdC5hcnJvd3ByZXZEaXYge1xyXG5cdFx0XHRcdGhlaWdodDogMzJweDtcclxuXHRcdFx0XHR3aWR0aDogNDZweDtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0yMSU7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogMjQlO1xyXG5cclxuXHRcdFx0XHRoZWlnaHQ6IDE4cHg7XHJcblx0XHRcdFx0d2lkdGg6IDQ2cHg7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMjQlO1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDQzJTtcclxuXHJcblx0XHRcdC5sZWZ0e1xyXG5cdFx0XHRcdHdpZHRoOiA0MCU7XHJcblx0XHRcdFx0aGVpZ2h0OiAycHg7XHJcblx0XHRcdFx0cmlnaHQ6IDE2cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0LmxlZnRUcmkge1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTUwJSkgcm90YXRlWSgxODBkZWcpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHQ6Om5nLWRlZXAgLm5leHRCdG57XHJcblx0XHR6LWluZGV4OiA1MDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0dG9wOiAwJTtcclxuXHRcdGZsb2F0OiByaWdodDtcclxuXHRcdG1hcmdpbi1yaWdodDogNi43ZW07XHJcblx0XHR3aWR0aDogNjBweDtcclxuXHRcdGhlaWdodDogNjBweDtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgLjRzIGN1YmljLWJlemllciguNzg1LC4xMzUsLjE1LC44Nik7XHJcblx0XHQuYXJyb3duZXh0RGl2e1xyXG5cdFx0XHRoZWlnaHQ6IDMycHg7XHJcblx0XHRcdHdpZHRoOiA2OHB4O1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAtOTIlO1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAyNCU7XHJcblx0XHRcdHRyYW5zaXRpb246IGFsbCAuNHMgY3ViaWMtYmV6aWVyKC43ODUsLjEzNSwuMTUsLjg2KTtcclxuXHRcdH1cclxuXHRcdC5yaWdodHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogMnB4O1xyXG5cdFx0XHRyaWdodDogMjFweDtcclxuXHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRib3R0b206IDA7XHJcblx0XHRcdG1hcmdpbjogYXV0bztcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsMTI4LDEyOCwuNSk7XHJcblx0XHRcdHRyYW5zaXRpb246IGFsbCAuNHMgY3ViaWMtYmV6aWVyKC43ODUsLjEzNSwuMTUsLjg2KTtcclxuXHRcdFx0dHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xyXG5cdFx0fVxyXG5cdFx0LnRyaWFuZ2xle1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRcdGJvcmRlci13aWR0aDogNnB4IDAgNnB4IDhweDtcclxuXHRcdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZ2JhKDEyOCwxMjgsMTI4LC41KTtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IDUwJTtcclxuXHRcdFx0bGVmdDogNzUlO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgLjRzIGN1YmljLWJlemllciguNzg1LC4xMzUsLjE1LC44Nik7XHJcblxyXG5cdFx0fVxyXG5cdFx0Jjpob3ZlcntcclxuXHRcdFx0LmFycm93bmV4dERpdiB7XHJcblx0XHRcdFx0aGVpZ2h0OiAxOHB4O1xyXG5cdFx0XHRcdHdpZHRoOiA0NnB4O1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogLTI0JTtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiA0MyU7XHJcblxyXG5cdFx0XHQucmlnaHR7XHJcblx0XHRcdFx0d2lkdGg6IDQwJTtcclxuXHRcdFx0XHRoZWlnaHQ6IDJweDtcclxuXHRcdFx0XHRyaWdodDogMTZweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQudHJpYW5nbGUge1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsIC01MCUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiAuaXRlbSBpbWcgIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgY3ViaWMtYmV6aWVyKDAuNywgMCwgMC4zLCAxKTtcclxuXHRcdHRyYW5zaXRpb246IGFsbCAxcyBjdWJpYy1iZXppZXIoMC43LCAwLCAwLjMsIDEpO1xyXG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcblx0ICB9XHJcbiAgICAuaXRlbS5zbGljay1hY3RpdmUgaW1nICAsIC5pdGVtLnNsaWNrLWFjdGl2ZSAub3ZlcmxheUltZ3tcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuXHRcdC13ZWJraXQtYW5pbWF0aW9uOiBjc3NBbmltYXRpb24gNHMgMSBlYXNlLWluLW91dCBmb3J3YXJkcztcclxuXHRcdGFuaW1hdGlvbjogY3NzQW5pbWF0aW9uIDRzIDEgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XHJcblx0ICB9ICovXHJcblxyXG5Aa2V5ZnJhbWVzIGNzc0FuaW1hdGlvbiB7XHJcblx0ZnJvbSB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDAuNykgdHJhbnNsYXRlKDBweCk7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43KSB0cmFuc2xhdGUoMHB4KTtcclxuXHR9XHJcblx0dG8ge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMHB4KTtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMHB4KTtcclxuXHR9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGNzc0FuaW1hdGlvbiB7XHJcblx0ZnJvbSB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDAuNykgdHJhbnNsYXRlKDBweCk7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43KSB0cmFuc2xhdGUoMHB4KTtcclxuXHR9XHJcblx0dG8ge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMHB4KTtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMHB4KTtcclxuXHR9XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcblx0LnJ0bHtcclxuXHRcdC5teXNsaWRlcjIgLlByb2R1Y3REZXRhaWxzIGgxIHtcclxuXHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHRmb250LWZhbWlseTogJ0VsIE1lc3NpcmknLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcblx0XHRcdGxldHRlci1zcGFjaW5nOiAwO1xyXG5cdFx0XHRmb250LXNpemU6IDcycHg7XHJcblx0XHR9XHJcblx0XHQuZXhwbG9yZUJ0biB7XHJcblx0XHRcdHBhZGRpbmc6IDElIDUlO1xyXG5cdFx0XHRmb250LWZhbWlseTogJ0VsIE1lc3NpcmknLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcblx0XHRcdGxldHRlci1zcGFjaW5nOiAxO1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMS4zO1xyXG5cdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG5cdC5jaXJjbGVDbGFzc3tcclxuXHRcdHdpZHRoOiAxMzAwcHg7XHJcblx0XHRoZWlnaHQ6IDEzMDBweDtcclxuXHR9XHJcblx0LmltZ0RpdntcclxuXHRcdC5Qcm9kdWN0SW1ne1xyXG5cclxuXHRcdH1cclxuXHRcdC5vdmVybGF5SW1ne1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cdC5teXNsaWRlcjJ7XHJcblxyXG5cdCAuUHJvZHVjdERldGFpbHN7XHJcblx0XHQgaDF7XHJcblx0XHRcdCBmb250LWZhbWlseTogJ0NpbnplbCcsIHNlcmlmO1xyXG5cdFx0XHQgZm9udC1zaXplOiA4MHB4O1xyXG5cdFx0IH1cclxuXHQgfVxyXG4gfVxyXG4gLmV4cGxvcmVCdG4ge1xyXG4gIHBhZGRpbmc6IDElIDQlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5wcmV2QnRuIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICAvKiB0b3A6IDYzJTsgKi9cclxuICAgIG1hcmdpbi1sZWZ0OiAxMC43ZW07XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuXHJcblx0LmFycm93cHJldkRpdiB7XHJcblx0XHRoZWlnaHQ6IDMycHg7XHJcblx0XHR3aWR0aDogNjhweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMyU7XHJcblx0XHRtYXJnaW4tdG9wOiAzMCU7XHJcblxyXG5cdFx0LmxlZnQge1xyXG4gICAgICB3aWR0aDogMTE0JTtcclxuXHRcdFx0aGVpZ2h0OiAzcHg7XHJcblx0XHRcdGxlZnQ6IDE5cHg7XHJcblx0XHR9XHJcblx0XHQubGVmdFRyaSB7XHJcblx0XHRcdGJvcmRlci13aWR0aDogOXB4IDAgOXB4IDEwcHg7XHJcblx0XHRcdHRvcDogNTAlO1xyXG5cdFx0XHRsZWZ0OiAyMCU7XHJcblx0XHRcdH1cclxuXHR9XHJcblx0Jjpob3ZlcntcclxuXHRcdC5hcnJvd3ByZXZEaXYge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMCU7XHJcblx0XHRcdG1hcmdpbi10b3A6IDQ0JTtcclxuXHRcdC5sZWZ0e1xyXG5cdFx0XHRoZWlnaHQ6IDNweDtcclxuXHRcdH1cclxuXHJcblx0XHR9XHJcblx0fVxyXG4gIH1cclxuIDo6bmctZGVlcCAubmV4dEJ0bntcclxuXHR3aWR0aDogNzBweDtcclxuXHRoZWlnaHQ6IDcwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMC43ZW07XHJcblx0LmFycm93bmV4dERpdntcclxuXHRcdGhlaWdodDogMzJweDtcclxuXHRcdHdpZHRoOiA2OHB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC02MiU7XHJcblx0XHRtYXJnaW4tdG9wOiAzMCU7XHJcblx0fVxyXG5cdC5yaWdodHtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMTE0JTtcclxuXHR9XHJcblx0LnRyaWFuZ2xle1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiA5cHggMCA5cHggMTBweDtcclxuXHRcdHRvcDogNTAlO1xyXG5cdFx0bGVmdDogNzglO1xyXG5cdH1cclxuXHQmOmhvdmVye1xyXG5cdFx0LmFycm93bmV4dERpdiB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG4gICAgICAgICAgICAgbWFyZ2luLXRvcDogNDYlO1xyXG5cdFx0LnJpZ2h0e1xyXG5cdFx0XHRoZWlnaHQ6IDNweDtcclxuXHRcdFx0cmlnaHQ6IDE0cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLnNsaWRlTnVtIC5zbGlkZWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiA5MHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAxNSU7XHJcbn1cclxuLnNsaWRlTnVtIC5BbGxTbGlkZSB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KXtcclxuICAuaW1nRGl2IC5Qcm9kdWN0SW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IDQzJTtcclxuICB9XHJcblxyXG4gIC5jaXJjbGVDbGFzcyB7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gIH1cclxuICAubXlzbGlkZXIyIHtcclxuICAgIG1hcmdpbi10b3A6IDQxJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuUHJvZHVjdERldGFpbHMgaDEge1xyXG4gICAgZm9udC1zaXplOiAzOXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAge1xyXG4gICAgLnByZXZCdG4ge1xyXG4gICAgICBsZWZ0OiA1JTtcclxuICAgICAgdG9wOiAxNiU7XHJcbiAgICB9XHJcbiAgICAubmV4dEJ0biB7XHJcbiAgICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAgIHRvcDogMTYlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2xpZGVOdW0ge1xyXG4gICAgcmlnaHQ6IC00JTtcclxuICAgIGJvdHRvbTogNSU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCl7XHJcbiAgLmltZ0RpdiAuUHJvZHVjdEltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiA0MyU7XHJcbiAgfVxyXG4gIC5teXNsaWRlcjIgLlByb2R1Y3REZXRhaWxzIHtcclxuICAgIG1hcmdpbi10b3A6IDU4JSAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIC5teXNsaWRlcjIgLlByb2R1Y3REZXRhaWxzIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweCAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIC5leHBsb3JlQnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDI1JTtcclxuICAgIHBhZGRpbmc6IDQlIDYlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gfVxyXG4gLnNsaWRlTnVtIHtcclxuICByaWdodDogLTEyJTtcclxuICBib3R0b206IDMlO1xyXG4gIH1cclxuXHJcbiAgLnNsaWRlTnVtIC5zbGlkZWl0ZW0ge1xyXG4gICAgdGV4dC1hbGlnbjogdW5zZXQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XHJcbn1cclxuLnNsaWRlTnVtIC5zbGlkZWxpbmUge1xyXG4gICBkaXNwbGF5OiBub25lO1xyXG4gfVxyXG4gLnNsaWRlTnVtIC5BbGxTbGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuIH1cclxuIC5jaXJjbGVDbGFzc3tcclxuICBib3JkZXI6IDAuMDFlbSBzb2xpZCByZ2JhKDE0NSwgMTQ0LCAxNDQsIDAuNjMpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdG9wOiAyNCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuLm15c2xpZGVyMntcclxuICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbjo6bmctZGVlcHtcclxuICAucHJldkJ0biB7XHJcbiAgbGVmdDogLTE0JTtcclxuICB0b3A6IDIwJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4ubmV4dEJ0biB7XHJcbiAgei1pbmRleDogNTA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMzdweDtcclxuICB0b3A6IDIwJTtcclxufVxyXG59XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogI2VlZWNlNiAqL1xyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
          }, {
            type: src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
          }, {
            type: src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_3__["ChangeLangService"]
          }];
        }, {
          onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "D71G":
    /*!******************************************************!*\
      !*** ./src/app/core/sharedServices/about.service.ts ***!
      \******************************************************/

    /*! exports provided: AboutService */

    /***/
    function D71G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutService", function () {
        return AboutService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutService = /*#__PURE__*/function () {
        function AboutService() {
          _classCallCheck(this, AboutService);

          this.About = {
            Who: "\u0643\u064A\u0631\u0645\u064A\u0646\u0627 \u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0627\u0644\u0643\u0627\u0648\u062A\u0634\u0648\u0643 \u0647\u064A \u0634\u0631\u0643\u0629 \u0631\u0627\u0626\u062F\u0629 \u0641\u064A \u0645\u062C\u0627\u0644 \u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0643\u0627\u0648\u062A\u0634\u0648\u0643 \u0644\u062F\u064A\u0646\u0627 \u062E\u0628\u0631\u0629 \u062A\u0632\u064A\u062F \u0639\u0646 \u0627\u0644\u062B\u0644\u0627\u062B\u0648\u0646 \u0639\u0627\u0645\u0627\u064B \u062F\u0627\u062E\u0644 \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0645\u0635\u0631\u064A \u0648\u0627\u0644\u0639\u0631\u0628\u064A.\n     \u0646\u0642\u0648\u0645 \u0628\u0625\u0646\u062A\u0627\u062C \u062C\u0645\u064A\u0639 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0645\u0637\u0627\u0637 \u0627\u0644\u0637\u0628\u064A\u0639\u064A \u0648\u0627\u0644\u0635\u0646\u0627\u0639\u064A \u0627\u0644\u0645\u0636\u0627\u062F  \u0644\u0644\u0623\u062D\u0645\u0627\u0636 \u0648\u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u0628\u062A\u0631\u0648\u0644\u064A\u0629 \u0648\u0627\u0644\u0642\u0644\u0648\u064A\u0627\u062A \u0648\u062E\u0627\u0645\u0629 \u0627\u0644\u0633\u0644\u064A\u0643\u0648\u0646 \u0627\u0644\u0645\u0636\u0627\u062F\u0629 \u0644\u062F\u0631\u062C\u0627\u062A \u0627\u0644\u062D\u0631\u0627\u0631\u0629 \u0627\u0644\u0639\u0627\u0644\u064A\u0629 \u0648 \u0627\u0644\u0623\u062D\u0645\u0627\u0636 \u0648\u062E\u0627\u0645\u0629 \u0627\u0644\u0628\u0648\u0644\u064A \u064A\u0648\u0631\u064A\u062B\u0627\u0646 \u0627\u0644\u0645\u0636\u0627\u062F\u0629  \u0644\u0644\u0636\u063A\u0648\u0637 \u0648 \u0627\u0644\u0627\u062D\u062A\u0643\u0627\u0643 \u0648 \u0645\u0646\u062A\u062C\u0627\u062A \u0627\u062E\u0631\u0649 \u0643\u062B\u064A\u0631\u0629. \u0646\u0639\u062F\u0643\u0645 \u0628\u0623\u0641\u0636\u0644 \u0645\u0633\u062A\u0648\u0649 \u0645\u0646 \u0627\u0644\u062C\u0648\u062F\u0629 \u0627\u0644\u0639\u0627\u0644\u064A\u0629 \u0648 \u0625\u0644\u062A\u0632\u0627\u0645\u0646\u0627 \u0628\u0623\u062D\u062F\u062B \u0648\u0623\u062F\u0642 \u0627\u0644\u0645\u0639\u0627\u064A\u064A\u0631\u0648 \u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629 \u0641\u0649 \u062C\u0645\u064A\u0639 \u062E\u062F\u0627\u0645\u062A\u0646\u0627. \u0648 \u062D\u0631\u0635\u0646\u0627 \u0639\u0644\u0649 \u062E\u062F\u0645\u0629 \u0645\u0627 \u0628\u0639\u062F \u0627\u0644\u0628\u064A\u0639 \u0623\u0648 \u0623\u0649 \u0625\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0641\u0646\u064A\u0629 .\n     ",
            what: "\u0646\u0642\u062F\u0645 \u0641\u0649 \u0643\u064A\u0631\u0645\u064A\u0646\u0627 \u0645\u0646\u062A\u062C\u0627\u062A \u0645\u062A\u0639\u062F\u062F\u0629 \u062A\u062A\u0645\u064A\u0632 \u0628\u0643\u0641\u0627\u0621\u0629 \u0639\u0627\u0644\u064A\u0629 \u0648 \u062C\u0648\u062F\u0629 \u0645\u062A\u0645\u064A\u0632\u0629 \u0648\u0641\u0642\u0627\u064B \u0644\u0644\u0645\u0639\u0627\u064A\u064A\u0631 \u0648 \u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u0645\u062B\u0644:",
            whatList: ["كسوة السلندرات و الدرافيل", "المكبوسات ", "المسحوبات", "التبطين بالكاوتشوك", "تصنيع الدرافيل المعدنية ", "السيلكون", "البولي يوريثان"],
            WhoEn: "Kyrmina for rubber products is a leading company in the rubber industry.\n     We have more than thirty years of experience in the Egyptian and Arab market.\n      We produce all kinds of natural and synthetic rubber against acids, petroleum and alkali materials,\n       silicone materials against high temperatures and acids, polyurethane materials against pressure and\n        friction and many other products. We promise you the best level of high quality and our commitment\n         to the latest and most accurate international standards and specifications in all our services.\n          And we are keen on after-sales service or any technical advice.",
            whatEn: "In Kyrmina, we offer multiple products that are characterized by high efficiency\n           and outstanding quality in accordance with international standards and specifications, such as:",
            whatListEn: ["Cylinders and rollers", "Compressions & towing", "Rubber lining", "Metal rollers", "Silicon rollers", "polyurethane rollers"]
          };
        }

        _createClass(AboutService, [{
          key: "getaboutData",
          value: function getaboutData() {
            return this.About;
          }
        }]);

        return AboutService;
      }();

      AboutService.ɵfac = function AboutService_Factory(t) {
        return new (t || AboutService)();
      };

      AboutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AboutService,
        factory: AboutService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "FdTb":
    /*!*********************************************!*\
      !*** ./src/app/view/home/home.component.ts ***!
      \*********************************************/

    /*! exports provided: HomeComponent */

    /***/
    function FdTb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @emailjs/browser */
      "nW6l");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/sharedServices */
      "nyYE");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../layout/footer/footer.component */
      "kVkw");
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      "bhfF");

      var _c0 = ["owlCar"];

      function HomeComponent_div_0_h1_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.HomeData.Artitle);
        }
      }

      function HomeComponent_div_0_h1_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.HomeData.title);
        }
      }

      function HomeComponent_div_0_h4_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.HomeData.ArDESI);
        }
      }

      function HomeComponent_div_0_h4_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.HomeData.DESI);
        }
      }

      function HomeComponent_div_0_p_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.AboutData.ArAbout, " ");
        }
      }

      function HomeComponent_div_0_p_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.AboutData.About, " ");
        }
      }

      function HomeComponent_div_0_ng_container_26_ng_container_2_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 45);
        }

        if (rf & 2) {
          var slide_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slide_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function HomeComponent_div_0_ng_container_26_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_0_ng_container_26_ng_container_2_ng_template_1_Template, 1, 1, "ng-template", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var slide_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", slide_r10.id);
        }
      }

      function HomeComponent_div_0_ng_container_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "owl-carousel-o", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_0_ng_container_26_ng_container_2_Template, 2, 1, "ng-container", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r7.customOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.AboutData.images);
        }
      }

      function HomeComponent_div_0_ng_container_29_ng_container_2_ng_template_1_h1_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slide_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r14.title, " ");
        }
      }

      function HomeComponent_div_0_ng_container_29_ng_container_2_ng_template_1_h1_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slide_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r14.titleEn, " ");
        }
      }

      function HomeComponent_div_0_ng_container_29_ng_container_2_ng_template_1_p_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slide_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r14.ArDes, " ");
        }
      }

      function HomeComponent_div_0_ng_container_29_ng_container_2_ng_template_1_p_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slide_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r14.EnDes, " ");
        }
      }

      function HomeComponent_div_0_ng_container_29_ng_container_2_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_0_ng_container_29_ng_container_2_ng_template_1_h1_3_Template, 2, 1, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_0_ng_container_29_ng_container_2_ng_template_1_h1_4_Template, 2, 1, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_0_ng_container_29_ng_container_2_ng_template_1_p_5_Template, 2, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_0_ng_container_29_ng_container_2_ng_template_1_p_6_Template, 2, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_ng_container_29_ng_container_2_ng_template_1_Template_p_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r25.GoToDetails(i_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slide_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.changelngServ.local_lenguage == "ar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.changelngServ.local_lenguage == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.changelngServ.local_lenguage == "ar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.changelngServ.local_lenguage == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, "HOME.MOREDETAILS"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slide_r14.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function HomeComponent_div_0_ng_container_29_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_0_ng_container_29_ng_container_2_ng_template_1_Template, 14, 8, "ng-template", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var slide_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", slide_r14.id);
        }
      }

      function HomeComponent_div_0_ng_container_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "owl-carousel-o", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_0_ng_container_29_ng_container_2_Template, 2, 1, "ng-container", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r8.customOptionsII);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.ProductsData);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "is-invalid": a0
        };
      };

      function HomeComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0643\u064A\u0631\u0645\u064A\u0646\u0627 \u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0627\u0644\u0643\u0627\u0648\u062A\u0634\u0648\u0643 \u0647\u064A \u0634\u0631\u0643\u0629 \u0631\u0627\u0626\u062F\u0629 \u0641\u064A \u0645\u062C\u0627\u0644 \u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0643\u0627\u0648\u062A\u0634 \u0644\u062F\u064A\u0646\u0627 \u062E\u0628\u0631\u0629 \u062A\u0632\u064A\u062F \u0639\u0646 \u0627\u0644\u062B\u0644\u0627\u062B\u0648\u0646 \u0639\u0627\u0645\u0627\u064B \u062F\u0627\u062E\u0644 \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0645\u0635\u0631\u064A \u0648\u0627\u0644\u0639\u0631\u0628\u064A.\u0646\u0642\u0648\u0645 \u0628\u0625\u0646\u062A\u0627\u062C \u062C\u0645\u064A\u0639 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0645\u0637\u0627\u0637 \u0627\u0644\u0637\u0628\u064A\u0639\u064A \u0648\u0627\u0644\u0635\u0646\u0627\u0639\u064A \u0627\u0644\u0645\u0636\u0627\u062F \u0644\u0644\u0623\u062D\u0645\u0627\u0636 \u0648\u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u0628\u062A\u0631\u0648\u0644\u064A\u0629 \u0648\u0627\u0644\u0642\u0644\u0648\u064A\u0627\u062A \u0648\u062E\u0627\u0645\u0629 \u0627\u0644\u0633\u0644\u064A\u0643\u0648\u0646 \u0627\u0644\u0645\u0636\u0627\u062F\u0629 \u0644\u062F\u0631\u062C\u0627\u062A \u0627\u0644\u062D\u0631\u0627\u0631\u0629 \u0627\u0644\u0639\u0627\u0644\u064A\u0629 \u0648 \u0627\u0644\u0623\u062D\u0645\u0627\u0636 \u0648\u062E\u0627\u0645\u0629 \u0627\u0644\u0628\u0648\u0644\u064A \u064A\u0648\u0631\u064A\u062B\u0627\u0646 \u0627\u0644\u0645\u0636\u0627\u062F\u0629 \u0644\u0644\u0636\u063A\u0648\u0637 \u0648 \u0627\u0644\u0627\u062D\u062A\u0643\u0627\u0643 \u0648 \u0645\u0646\u062A\u062C\u0627\u062A \u0627\u062E\u0631\u0649 \u0643\u062B\u064A\u0631\u0629. \u0646\u0639\u062F\u0643\u0645 \u0628\u0623\u0641\u0636\u0644 \u0645\u0633\u062A\u0648\u0649 \u0645\u0646 \u0627\u0644\u062C\u0648\u062F\u0629 \u0627\u0644\u0639\u0627\u0644\u064A\u0629 \u0648 \u0625\u0644\u062A\u0632\u0627\u0645\u0646\u0627 \u0628\u0623\u062D\u062F\u062B \u0648\u0623\u062F\u0642 \u0627\u0644\u0645\u0639\u0627\u064A\u064A\u0631\u0648 \u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629 \u0641\u0649 \u062C\u0645\u064A\u0639 \u062E\u062F\u0627\u0645\u062A\u0646\u0627. \u0648 \u062D\u0631\u0635\u0646\u0627 \u0639\u0644\u0649 \u062E\u062F\u0645\u0629 \u0645\u0627 \u0628\u0639\u062F \u0627\u0644\u0628\u064A\u0639 \u0623\u0648 \u0623\u0649 \u0625\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0641\u0646\u064A\u0629 .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_div_0_h1_8_Template, 2, 1, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_div_0_h1_9_Template, 2, 1, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_0_h4_10_Template, 2, 1, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_0_h4_11_Template, 2, 1, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_Template_a_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.scrollFunc();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_div_0_p_22_Template, 2, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_div_0_p_23_Template, 2, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HomeComponent_div_0_ng_container_26_Template, 3, 2, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HomeComponent_div_0_ng_container_29_Template, 3, 2, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "form", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_div_0_Template_form_ngSubmit_67_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.sendEmail($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Please Enter your name.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Please Enter your email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "textarea", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](86, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changelngServ.local_lenguage == "ar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changelngServ.local_lenguage == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changelngServ.local_lenguage == "ar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changelngServ.local_lenguage == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 30, "ABOUT.SCROLL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 32, "HOME.ABOUT"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changelngServ.local_lenguage == "ar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changelngServ.local_lenguage == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.owl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.owl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 34, "HOME.CONTACT"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 36, "HOME.CONTACTMSG"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 38, "HOME.CONTACT"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 40, "HOME.CALL"), ": ", ctx_r0.ContactData.MobileNum, " - ", ctx_r0.ContactData.MobileNumI, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 42, "HOME.EMAIL"), ": ", ctx_r0.ContactData.Email, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 44, "HOME.ADDRESSTITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.ContactData.address, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 46, "HOME.CONTACT"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.EmailForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 48, "HOME.NAME"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](58, _c1, ctx_r0.EmailForm.get("from_name").errors && ctx_r0.EmailForm.get("from_name").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 50, "HOME.EMAIL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 52, "HOME.EMAIL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](60, _c1, ctx_r0.EmailForm.get("form_email").errors && ctx_r0.EmailForm.get("form_email").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](81, 54, "HOME.MSG"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.EmailForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](86, 56, "HOME.SEND"));
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        /* ---------------------------------- */
        function HomeComponent(translate, homeServ, changelngServ, location, toastr, fb, router) {
          _classCallCheck(this, HomeComponent);

          this.translate = translate;
          this.homeServ = homeServ;
          this.changelngServ = changelngServ;
          this.location = location;
          this.toastr = toastr;
          this.fb = fb;
          this.router = router;
          /* ----------variables ------------- */

          this.transBool = true;
          this.fetchData = true;
          this.customOptions = {
            rtl: true,
            loop: false,
            dots: true,
            autoplay: false,
            autoplaySpeed: false,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            items: 2,
            margin: 8,
            autoWidth: true,
            autoHeight: true,
            responsiveRefreshRate: 500,
            responsive: {
              0: {
                items: 1
              },
              400: {
                items: 2
              },
              740: {
                items: 2
              },
              940: {
                items: 2
              }
            }
          };
          this.customOptionsII = {
            rtl: true,
            loop: true,
            dots: false,
            autoplay: false,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            items: 1,
            nav: true,
            margin: 8,
            autoWidth: true,
            autoHeight: true,
            responsiveRefreshRate: 500,
            navText: ['<div class="owlPrev"></div>', '<div class="owlNext"></div>'],
            responsive: {
              0: {
                items: 1
              },
              400: {
                items: 1
              },
              740: {
                items: 1
              },
              940: {
                items: 1
              }
            }
          };
          this.HomeData = {};
          this.AboutData = {};
          this.ProductsData = [];
          this.ContactData = {};
          this.AboutImages = [{
            id: 1,
            image: "../../../assets/about/home2.png"
          }, {
            id: 2,
            image: "../../../assets/about/SiliconasSolidasPERFILES.png"
          }, {
            id: 3,
            image: "../../../assets/about/Westlandwerodampweb-1.png"
          }, {
            id: 4,
            image: "../../../assets/about/Westlandwerodampweb-1.png"
          }];
          this.productImages = [{
            id: 1,
            image: "https://www.precisionurethane.com/assets/images/content/urethane_rollers_gallery.jpg",
            title: "Paper Design",
            Des: "Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
          }, {
            id: 2,
            image: "https://www.danskgummi.com/wp-content/uploads/2020/08/Polyurethane-PU-rollers-and-conveyors-640x640.jpg",
            title: "Paper Design",
            Des: "Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
          }, {
            id: 3,
            image: "https://www.chemline.net/wp-content/uploads/2020/09/Custom-Formulated-Urethane-Rollers-small.jpg",
            title: "Summer Scape",
            Des: "Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
          }, {
            id: 4,
            image: "https://www.colorcopiesusa.com/blog/wp-content/uploads/2018/07/PrintRollers.jpeg",
            title: "Fire Cloud",
            Des: "Lorem ipsum magicum dolor sit amet, consectetur adipiscing elit.Maecenas a sem ultrices neque vehicula fermentum a sit amet nulla."
          }];
          this.owl = true;
          this.mobileView = false;
          this.serviceID = 'default_service';
          this.templateID = 'template_wxfzprf';
          this.publicKey = 'pIZ0I9ba-VpinU8qV';
        }

        _createClass(HomeComponent, [{
          key: "onResize",
          value: function onResize(event) {
            var _this8 = this;

            //this.load();
            this.owl = false;
            setTimeout(function () {
              _this8.owl = true;
            }, 10);

            if (window.innerHeight > 770) {
              this.mobileView = false;
            } else {
              this.mobileView = true;
            }
            /* --------mouse move---------- */

            /* $(document).ready(function() {
              if(window.innerHeight > 770){
                var movementStrength = 25;
                var height = movementStrength / $(window).height();
                var width = movementStrength / $(window).width();
                $("#slider").mousemove(function(e){
                          var pageX = e.pageX - ($(window).width() / 2);
                          var pageY = e.pageY - ($(window).height() / 2);
                          var newvalueX = width * pageX * -1 - 25;
                          var newvalueY = height * pageY * -1 - 50;
                          $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
                });
               }
              }); */

            /* ----------------------------- */

          }
        }, {
          key: "load",
          value: function load() {
            location.reload();
          }
        }, {
          key: "createEmailForm",
          value: function createEmailForm() {
            this.EmailForm = this.fb.group({
              from_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              form_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            /* console.log(window.innerHeight); */
            this.createEmailForm();
            this.getData(function () {
              _this9.fetchData = true;
            });
            /* --------mouse move---------- */

            $(document).ready(function () {
              var movementStrength = 25;
              var height = movementStrength / $(window).height();
              var width = movementStrength / $(window).width();
              $("#slider").mousemove(function (e) {
                if (!_this9.mobileView) {
                  var pageX = e.pageX - $(window).width() / 2;
                  var pageY = e.pageY - $(window).height() / 2;
                  var newvalueX = width * pageX * -1 - 25;
                  var newvalueY = height * pageY * -1 - 50;
                  $('#top-image').css("background-position", newvalueX + "px     " + newvalueY + "px");
                } else {
                  _this9.mobileView = true;
                }
              });
            });
            /* ----------------------------- */

            /* -------- slider part ---------- */

            $(document).ready(function () {
              var $slider = $(".myslider");
              $slider.on('init', function () {
                mouseWheel($slider);
              }).slick({
                slidesToScroll: 1,
                arrows: false,
                infinite: false,
                dots: true,
                vertical: true,
                verticalSwiping: true,
                draggable: false,
                cssEase: 'ease-in-out',
                speed: 500
              });

              function mouseWheel($slider) {
                $(window).on('wheel', {
                  $slider: $slider
                }, mouseWheelHandler);
              }

              function mouseWheelHandler(event) {
                event.preventDefault();
                var $slider = event.data.$slider;
                var delta = event.originalEvent.deltaY;

                if (delta > 0) {
                  $slider.slick('slickNext');
                } else {
                  $slider.slick('slickPrev');
                }
              }
            });
            /* ---------------------------------------------- */
          }
        }, {
          key: "getData",
          value: function getData(callback) {
            this.HomeData = this.homeServ.getHomeData();
            this.AboutData = this.homeServ.getAboutData();
            this.ProductsData = this.homeServ.getProductData();
            this.ContactData = this.homeServ.getContactData();
            callback();
          }
        }, {
          key: "scrollFunc",
          value: function scrollFunc() {
            var $slider = $(".myslider");
            $slider.slick('slickNext');
          }
        }, {
          key: "sendEmail",
          value: function sendEmail(e) {
            var _this10 = this;

            if (this.EmailForm.valid) {
              e.preventDefault();

              _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__["default"].sendForm(this.serviceID, this.templateID, e.target, this.publicKey).then(function (result) {
                _this10.toastr.success('message sent successfully');
              }, function (error) {
                _this10.toastr.error('message failed to send');
              });
            }
          }
        }, {
          key: "GoToDetails",
          value: function GoToDetails(index) {
            this.router.navigateByUrl("Productitem/" + index);
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_4__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_4__["ChangeLangService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        viewQuery: function HomeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carouselEl = _t.first);
          }
        },
        hostBindings: function HomeComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HomeComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 2,
        vars: 2,
        consts: [["class", "home", 4, "ngIf"], [3, "footerPostion"], [1, "home"], ["id", "top-image"], [2, "display", "none"], ["id", "slider", 1, "myslider"], [1, "item", "a"], [1, "row", "itemContent"], [1, "col-md-12", "TxtCol"], [4, "ngIf"], [1, "scrollComp", 3, "click"], ["id", "About", 1, "item", "b"], [1, "row", "itemContentI"], [1, "col-md-9", "AboutSlide"], ["id", "product", 1, "item", "c"], [1, "ProductList"], [1, "item", "d"], [1, "contactImg"], [1, "fas", "fa-phone-alt"], [1, "row", "contactDiv"], [1, "col-md-8", "section_content"], [1, "anim-2"], [1, "display_title"], [1, "row", "Contactrow"], [1, "col-12", "col-md-6", "col-lg-6"], [1, "AddressParg"], [1, "col-md-4", "formSection"], [1, "section-aside", "aside-bottom", "anim", "small-relative"], [1, "message-form"], [1, "form-container", "form-container-card"], ["id", "message_form", "novalidate", "novalidate", 1, "send_message_form", "message", "form", 3, "formGroup", "ngSubmit"], [1, "form-group", "name"], ["id", "from_name", "name", "from_name", "type", "text", "formControlName", "from_name", "aria-required", "true", 1, "form-control", "form-control-outline", "thick", "form-success-clean", 3, "ngClass", "placeholder"], [1, "invalid-feedback"], [1, "form-group", "email"], ["id", "form_email", "type", "email", "name", "form_email", "formControlName", "form_email", "aria-required", "true", 1, "form-control", "form-control-outline", "thick", "form-success-clean", 3, "placeholder", "ngClass"], [1, "form-group", "no-border"], ["id", "message", "name", "message", "formControlName", "message", "aria-required", "true", 1, "form-control", "form-control-outline", "thick", "form-success-clean", 3, "placeholder"], [1, "btns", "text-right"], ["id", "submit-message", "type", "submit", "name", "submit_message", 1, "btn", "btn-outline-white", "btn-round", "btn-fullNot", "email_b", 3, "disabled"], [1, "txt"], [1, "arrow-icon"], [3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", 3, "id"], ["alt", "slide", 1, "AboutImg", 3, "src"], [1, "row", "productRow"], [1, "col-md-6", 2, "z-index", "3"], [1, "ProductDetails"], [1, "moreDetBtn", 3, "click"], [1, "ArrowSpan"], [1, "col-md-6"], [1, "imgDiv"], ["alt", "slide", 1, "ProductImg", 3, "src"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 88, 62, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fetchData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footerPostion", 1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__["CarouselSlideDirective"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
        styles: ["#top-image[_ngcontent-%COMP%] {\n  \n  background: url(\"/assets/ext-offset-printing.png\");\n  z-index: 0;\n  width: 100%;\n  height: 109vh;\n  transform: rotateY(0deg);\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-repeat: no-repeat;\n  background-size: 105% 110%;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n\n.myslider[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n\n.myslider[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  outline: none;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%] {\n  background-color: rgba(1, 1, 5, 0.89);\n}\n\n.myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .moreDetBtn[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .productRow[_ngcontent-%COMP%] {\n  margin-top: 11%;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .imgDiv[_ngcontent-%COMP%] {\n  height: 100vh;\n  \n  position: relative;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .imgDiv[_ngcontent-%COMP%]   .ProductImg[_ngcontent-%COMP%] {\n  width: 65vh !important;\n  height: 65vh !important;\n  display: block;\n  margin: auto;\n  object-fit: cover;\n  box-shadow: 0px 0px 14px 0px rgba(255, 255, 255, 0.5);\n  -webkit-box-shadow: 0px 0px 14px 0px rgba(255, 255, 255, 0.5);\n  -moz-box-box-shadow: 0px 0px 14px 0px rgba(255, 255, 255, 0.5);\n}\n\n.myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  width: 100%;\n  margin-right: 12%;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: white;\n  font-size: 53px;\n  margin: 4% 0%;\n  text-shadow: 0px 4px 5px rgba(255, 255, 255, 0.4);\n  font-family: \"El Messiri\", sans-serif;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0% 46% 0% 0%;\n  color: white;\n  font-size: 21px;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   .ArrowSpan[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 15px;\n  top: -12px;\n  left: 50%;\n  cursor: pointer;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   .ArrowSpan[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: 1em;\n  height: 1em;\n  border-top: 2px solid currentColor;\n  border-right: 2px solid currentColor;\n  transform: rotate(45deg);\n  transition: 0.2s;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   .ArrowSpan[_ngcontent-%COMP%]:after {\n  content: \"\";\n  top: 14px;\n  right: 22px;\n  position: absolute;\n  width: 1em;\n  height: 1em;\n  border-top: 2px solid currentColor;\n  border-right: 2px solid currentColor;\n  transform: rotate(45deg);\n  transition: 0.2s;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   .ArrowSpan[_ngcontent-%COMP%]:hover::after {\n  width: 18px;\n  height: 2px;\n  top: 21px;\n  right: 14px;\n  transform: none;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%] {\n  background-color: rgba(1, 1, 5, 0.89);\n}\n\n.myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .contactImg[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .contactImg[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20em;\n  color: rgba(0, 0, 0, 0.4);\n  width: 100%;\n  height: 100%;\n  padding: 12% 0%;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .section_content[_ngcontent-%COMP%] {\n  padding: 13% 6%;\n  color: white;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .section_content[_ngcontent-%COMP%]   .display_title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 53px;\n  line-height: 1.1;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .section_content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 300;\n  line-height: 1.9;\n  font-size: 28px;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .section_content[_ngcontent-%COMP%]   .AddressParg[_ngcontent-%COMP%] {\n  margin-top: -3%;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .formSection[_ngcontent-%COMP%]   .section-aside[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 80px;\n  padding-right: 64px;\n  right: 4px;\n  width: 50%;\n  width: 63vw;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  flex-direction: column;\n  z-index: 1;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .formSection[_ngcontent-%COMP%]   .section-aside[_ngcontent-%COMP%]   .message-form[_ngcontent-%COMP%] {\n  width: 39%;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .formSection[_ngcontent-%COMP%]   .section-aside[_ngcontent-%COMP%]   .message-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 150px;\n  max-height: 150px;\n  min-height: 150px;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .formSection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n  color: white;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .formSection[_ngcontent-%COMP%]   .btn-outline-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: 0.3s;\n  background: none;\n  line-height: 1.25;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 38px;\n  padding: 4% 9%;\n  font-size: 17px;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%] {\n  background-color: rgba(1, 1, 5, 0.89);\n}\n\n.myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContentI[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20em;\n  width: 100%;\n  justify-content: center;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3em;\n  left: 2%;\n  width: 100%;\n  text-align: center;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .AboutSlide[_ngcontent-%COMP%] {\n  margin: 9% 0px 0% -5%;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 4em 4em 0 4em;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 6vw;\n  position: relative;\n  font-family: \"El Messiri\", sans-serif;\n  font-weight: 800;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  padding: 0% 8%;\n  font-size: 21px;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   .btn-circicon[_ngcontent-%COMP%] {\n  min-width: auto;\n  color: #ffffff;\n  border: none;\n  background: none;\n  position: relative;\n  overflow: hidden;\n  display: inline-flex;\n  align-items: center;\n  padding: 0;\n  transition: 0.2s;\n  width: 100%;\n  outline: none;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   .btn-circicon.btn-primary[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #037FD5;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   .btn-circicon.btn-primary[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  background: #037FD5;\n  color: white;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   .btn-circicon[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #037FD5;\n  vertical-align: middle;\n  border-radius: 100px;\n  position: relative;\n  height: 46px;\n  width: 46px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.2s;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   .btn-circicon[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   .btn-circicon[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%]   .ion[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1;\n  position: relative;\n  z-index: 1;\n  transition: 0.2s;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-left: 2%;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%] {\n  background-color: rgba(2, 3, 10, 0.7);\n}\n\n.myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15em;\n  width: 100%;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0% 14%;\n  text-align: center;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n\n.myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 7vw;\n  position: relative;\n  padding-bottom: 0.2em;\n  font-family: \"El Messiri\", sans-serif;\n  font-weight: 800;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  bottom: 0;\n  width: 320px;\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  color: white;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   .btn-circicon[_ngcontent-%COMP%] {\n  min-width: auto;\n  color: #ffffff;\n  border: none;\n  background: none;\n  position: relative;\n  overflow: hidden;\n  display: inline-flex;\n  align-items: center;\n  padding: 0;\n  transition: 0.2s;\n  width: 100%;\n  outline: none;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   .btn-circicon.btn-primary[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #037FD5;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   .btn-circicon.btn-primary[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  background: #037FD5;\n  color: white;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   .btn-circicon[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #037FD5;\n  vertical-align: middle;\n  border-radius: 100px;\n  position: relative;\n  height: 46px;\n  width: 46px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.2s;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   .btn-circicon[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   .btn-circicon[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%]   .ion[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1;\n  position: relative;\n  z-index: 1;\n  transition: 0.2s;\n}\n\n.myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-left: 2%;\n}\n\n.scrollComp[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-top: 70px;\n  position: absolute;\n  margin-top: 4%;\n  z-index: 2;\n  display: inline-block;\n  transform: translate(0, -50%);\n  color: #fff;\n  font: normal 400 20px/1 \"Josefin Sans\", sans-serif;\n  letter-spacing: 0.1em;\n  text-decoration: none;\n  transition: opacity 0.3s;\n}\n\n.scrollComp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 24px;\n  height: 24px;\n  margin-left: -12px;\n  border-left: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n  transform: rotateZ(-45deg);\n  animation: sdb06 1.5s infinite;\n  box-sizing: border-box;\n}\n\n@keyframes sdb06 {\n  0% {\n    transform: rotateY(0) rotateZ(-45deg) translate(0, 0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);\n    opacity: 0;\n  }\n}\n\n.slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 2%;\n}\n\n.slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 15px 0;\n}\n\n.slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  border: none;\n  background-color: #fff;\n  text-indent: -9999px;\n  outline: none;\n}\n\n.slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #000;\n}\n\n.slick-slide[_ngcontent-%COMP%] {\n  height: 100vh !important;\n}\n\n.slick-slider[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  \n  opacity: 1;\n}\n\n  .slick-dots {\n  position: absolute;\n  bottom: 288px;\n  list-style: none;\n  display: block;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  right: 21px;\n  display: grid;\n  width: auto;\n}\n\n  .slick-dots li button:before {\n  color: white;\n  opacity: 0.4;\n}\n\n  .slick-dots li.slick-active button:before {\n  font-size: 9px;\n  width: 17px;\n  height: 17px;\n  color: white;\n  opacity: 1;\n  background-color: rgba(151, 148, 148, 0.87);\n  border-radius: 50%;\n  margin-left: 10%;\n}\n\n.AboutImg[_ngcontent-%COMP%] {\n  height: 245px;\n  object-fit: cover;\n  border-radius: 23px;\n}\n\n.owl-carousel[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 300px;\n  height: 214px;\n}\n\n  .owl-theme .owl-dots {\n  text-align: center;\n}\n\n  .owl-theme .owl-dots .owl-dot span {\n  width: 34px;\n  height: 4px;\n  margin: 14px 5px;\n  background: #cccbcb;\n}\n\n  .owl-theme .owl-dots .owl-dot.active span, .owl-theme[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  background: white;\n}\n\n  .owl-theme .owl-nav {\n  margin-top: 10px;\n  position: absolute;\n  left: 2%;\n  top: 34%;\n  display: inline-grid;\n}\n\n  .owl-prev,   .owl-next {\n  background-color: transparent !important;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n  .owlPrev {\n  position: relative;\n  height: 48px;\n  width: 48px;\n  border: none;\n  transition: 0.3s;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  background: transparent !important;\n}\n\n  .owlPrev:before {\n  content: \"\";\n  position: absolute;\n  top: 14px;\n  left: 14px;\n  width: 1em;\n  height: 1em;\n  border-bottom: 2px solid currentColor;\n  border-left: 2px solid currentColor;\n  transform: rotate(45deg);\n  transition: 0.2s;\n}\n\n  .owlPrev:after {\n  content: \"\";\n  top: 14px;\n  left: 22px;\n  position: absolute;\n  width: 1em;\n  height: 1em;\n  border-bottom: 2px solid currentColor;\n  border-left: 2px solid currentColor;\n  transform: rotate(45deg);\n  transition: 0.2s;\n}\n\n  .owlPrev:hover::after {\n  width: 18px;\n  height: 2px;\n  top: 21px;\n  left: 14px;\n  transform: none;\n}\n\n  .owlNext {\n  position: relative;\n  margin-top: 0;\n  right: auto;\n  height: 48px;\n  width: 48px;\n  border: none;\n  transition: 0.3s;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  background: transparent !important;\n}\n\n  .owlNext:before {\n  content: \"\";\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: 1em;\n  height: 1em;\n  border-top: 2px solid currentColor;\n  border-right: 2px solid currentColor;\n  transform: rotate(45deg);\n  transition: 0.2s;\n}\n\n  .owlNext:after {\n  content: \"\";\n  top: 14px;\n  right: 22px;\n  position: absolute;\n  width: 1em;\n  height: 1em;\n  border-top: 2px solid currentColor;\n  border-right: 2px solid currentColor;\n  transform: rotate(45deg);\n  transition: 0.2s;\n}\n\n  .owlNext:hover::after {\n  width: 18px;\n  height: 2px;\n  top: 21px;\n  right: 14px;\n  transform: none;\n}\n\n  .rtl .slick-dots {\n  right: 96% !important;\n}\n\n  .rtl .scrollComp {\n  \n  font-family: \"El Messiri\";\n}\n\n  .rtl .myslider .item.c .productRow {\n  direction: ltr;\n}\n\n  .rtl .myslider .item.c .ProductDetails {\n  position: absolute;\n  width: 100%;\n  margin-right: -15% !important;\n}\n\n  .rtl .myslider .item.c .ProductDetails h1 {\n  text-align: start;\n}\n\n  .rtl .myslider .item.c .ProductDetails p {\n  text-align: start;\n  padding: 0% 0% 0% 46% !important;\n}\n\n  .rtl .myslider .item.c .ProductDetails p .ArrowSpan {\n  right: 14%;\n  left: unset;\n}\n\n  .rtl .myslider .item.c .ProductDetails p .ArrowSpan:before {\n  transform: rotate(220deg) !important;\n}\n\n  .rtl .myslider .item.c .ProductDetails p .ArrowSpan:after {\n  transform: rotate(220deg) !important;\n}\n\n  .rtl .myslider .item.c .ProductDetails p .ArrowSpan:hover::after {\n  top: 14px !important;\n  right: 22px !important;\n  width: 1em !important;\n  height: 1em !important;\n}\n\n  .rtl .myslider .item.c .ProductDetails p .ArrowSpan:hover::before {\n  width: 18px !important;\n  height: 2px !important;\n  top: 21px !important;\n  right: 18px !important;\n  transform: none !important;\n}\n\n  .rtl .myslider .item.d .contactImg {\n  right: 0;\n  left: unset;\n}\n\n  .rtl .myslider .item.d .section_content .display_title {\n  text-align: start;\n}\n\n  .rtl .myslider .item.d .section_content h4 {\n  text-align: start;\n}\n\n  .rtl .myslider .item.d .section_content p {\n  text-align: start;\n}\n\n  .rtl .myslider .item.d .formSection .section-aside {\n  padding-left: 64px;\n  padding-right: unset;\n  left: 23px;\n  right: unset;\n}\n\n  .rtl .myslider .item.d .formSection h4 {\n  text-align: start;\n}\n\n  .rtl .myslider .item.b .itemContent {\n  left: unset;\n}\n\n  .rtl .myslider .item.b .itemContent .AboutSlide {\n  margin: 9% -5% 0% 0 !important;\n}\n\n  .rtl .myslider .item.a .itemContent {\n  \n}\n\n  .rtl .myslider .item.a .itemContent .TxtCol h1,   .rtl .myslider .item.a .itemContent .TxtCol h4,   .rtl .myslider .item.a .itemContent .TxtCol p {\n  \n}\n\n  .rtl .myslider .item.a .itemContent .TxtCol h1::after,   .rtl .myslider .item.a .itemContent .TxtCol h4::after,   .rtl .myslider .item.a .itemContent .TxtCol p::after {\n  left: unset;\n  right: 0;\n  bottom: 0;\n}\n\n  .rtl .myslider .item.a .itemContent .TxtCol .text {\n  margin-right: 2%;\n}\n\n  .rtl .owl-theme .owl-nav {\n  right: 2%;\n  left: unset;\n}\n\n@media only screen and (min-width: 1600px) {\n    .slick-dots {\n    bottom: 320px;\n  }\n\n    .slick-dots li {\n    height: 25px;\n    width: 25px;\n  }\n\n    .slick-dots li button {\n    height: 25px;\n    width: 25px;\n  }\n\n    .slick-dots li button:before {\n    width: 25px;\n    height: 25px;\n    font-size: 7px;\n  }\n\n    .slick-dots li.slick-active button:before {\n    font-size: 11px;\n    width: 22px;\n    height: 20px;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%] {\n    position: absolute !important;\n    top: 21em !important;\n    left: 2% !important;\n    width: 100% !important;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 8vw !important;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 2.1em !important;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.4em !important;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   .btn-circicon[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%] {\n    height: 55px !important;\n    width: 55px !important;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   .btn-circicon[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 23px !important;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContentI[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 26em;\n    width: 100%;\n    justify-content: center;\n  }\n  .myslider[_ngcontent-%COMP%]   .AboutImg[_ngcontent-aed-c25][_ngcontent-%COMP%] {\n    height: 330px;\n    object-fit: cover;\n    border-radius: 23px;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    padding: 0% 9%;\n    font-size: 27px !important;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .section_content[_ngcontent-%COMP%]   .display_title[_ngcontent-%COMP%] {\n    font-weight: bold !important;\n    font-size: 70px !important;\n    line-height: 1.1 !important;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .section_content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 22px !important;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .section_content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 34px !important;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .formSection[_ngcontent-%COMP%]   .section-aside[_ngcontent-%COMP%] {\n    position: absolute !important;\n    bottom: 81px !important;\n    padding-right: 64px !important;\n    right: 100px;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .formSection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.5rem !important;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .formSection[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    display: block !important;\n    width: 121% !important;\n    height: calc(1.5em + 0.75rem + 2px) !important;\n    padding: 0.375rem 0.75rem !important;\n    font-size: 1.5rem !important;\n    font-weight: 400 !important;\n    line-height: 2.5 !important;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .formSection[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    height: 150px !important;\n    width: 120% !important;\n    font-size: 1.5rem !important;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .formSection[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%] {\n    width: 122% !important;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .formSection[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 22px !important;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .imgDiv[_ngcontent-%COMP%] {\n    \n  }\n  .myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .imgDiv[_ngcontent-%COMP%]   .ProductImg[_ngcontent-%COMP%] {\n    width: 70vh !important;\n    height: 70vh !important;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 61px;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 2% 40% 0% 1%;\n    color: white;\n    font-size: 27px;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   .ArrowSpan[_ngcontent-%COMP%] {\n    font-size: 19px;\n    top: -12px;\n    left: 50%;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   .ArrowSpan[_ngcontent-%COMP%]:after {\n    top: 14px;\n    right: 24px;\n  }\n  .myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   .ArrowSpan[_ngcontent-%COMP%]:hover::after {\n    width: 25px;\n    height: 2px;\n    top: 22px;\n    right: 13px;\n  }\n\n    .owl-theme .owl-nav .owlPrev {\n    font-size: 19px;\n  }\n\n    .owl-theme .owl-nav .owlNext {\n    font-size: 19px;\n  }\n\n    .owlPrev {\n    height: 54px;\n    width: 54px;\n  }\n    .owlPrev:before {\n    top: 16px;\n    left: 17px;\n  }\n    .owlPrev:after {\n    top: 16px;\n    left: 27px;\n  }\n    .owlPrev:hover::after {\n    width: 25px;\n    height: 2px;\n    top: 24px;\n    left: 16px;\n  }\n\n    .owlNext {\n    height: 54px;\n    width: 54px;\n  }\n    .owlNext:before {\n    top: 16px;\n    right: 16px;\n  }\n    .owlNext:after {\n    top: 16px;\n    right: 26px;\n  }\n    .owlNext:hover::after {\n    width: 25px;\n    height: 2px;\n    top: 25px;\n    right: 16px;\n  }\n\n    .owl-theme .owl-dots .owl-dot span {\n    width: 50px !important;\n    height: 4.5px !important;\n  }\n\n    .rtl .myslider .item.b .itemContent .TxtCol p {\n    padding: 0% 12% !important;\n  }\n    .rtl .myslider .item.d .formSection .section-aside {\n    right: unset !important;\n    left: 17%;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 7em;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContentI[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 24em;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .productRow[_ngcontent-%COMP%] {\n    margin-top: 24%;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 45px;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .imgDiv[_ngcontent-%COMP%]   .ProductImg[_ngcontent-%COMP%] {\n    width: 40vh !important;\n    height: 40vh !important;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 0% 37% 0% 0%;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .contactImg[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 15%;\n  }\n\n  .contactDiv[_ngcontent-%COMP%] {\n    margin-top: 8%;\n  }\n}\n\n@media only screen and (max-width: 770px) {\n    .slick-dots {\n    display: none !important;\n  }\n\n  .AboutImg[_ngcontent-%COMP%] {\n    height: 206px;\n  }\n\n  #top-image[_ngcontent-%COMP%] {\n    background-size: cover;\n    background-position: center;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%] {\n    text-align: center;\n    top: 8em;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContentI[_ngcontent-%COMP%] {\n    top: 23em;\n    margin: 0% auto;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0;\n    margin: 15% 12% 0% 12%;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    padding: 0;\n    font-size: 15px;\n    text-align: justify;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.b[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .AboutSlide[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 3%;\n  }\n\n    .owl-theme .owl-nav.disabled + .owl-dots {\n    margin-top: 10px;\n    text-align: center;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 1% 1em 1em 3em;\n    margin-top: 0%;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 9vw;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.a[_ngcontent-%COMP%]   .itemContent[_ngcontent-%COMP%]   .TxtCol[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n\n  .scrollComp[_ngcontent-%COMP%] {\n    margin-top: 15%;\n    margin-left: -7%;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .productRow[_ngcontent-%COMP%] {\n    margin-top: 45%;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .imgDiv[_ngcontent-%COMP%] {\n    height: 100vh;\n    margin: 15em 0%;\n    position: relative;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .imgDiv[_ngcontent-%COMP%]   .ProductImg[_ngcontent-%COMP%] {\n    width: 25vh !important;\n    height: 25vh !important;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 37%;\n    right: unset;\n    width: 100%;\n    text-align: center;\n    margin-right: 0;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-weight: 700;\n    color: white;\n    font-size: 32px;\n    margin: 4% 0%;\n    text-shadow: 0px 4px 5px rgba(255, 255, 255, 0.4);\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 1% 21%;\n    color: white;\n    font-size: 13px;\n    text-align: justify;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.c[_ngcontent-%COMP%]   .ProductDetails[_ngcontent-%COMP%]   .ArrowSpan[_ngcontent-%COMP%] {\n    position: relative;\n    font-size: 15px;\n    top: -12px;\n    left: 48%;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .contactImg[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 41%;\n    left: 0;\n    width: 100%;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .section_content[_ngcontent-%COMP%] {\n    padding: 5% 7% 10% 13%;\n    color: white;\n    margin-top: 32%;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .section_content[_ngcontent-%COMP%]   .display_title[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 1.1;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .section_content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .Contactrow[_ngcontent-%COMP%] {\n    margin-top: -8%;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .formSection[_ngcontent-%COMP%]   .section-aside[_ngcontent-%COMP%] {\n    position: relative;\n    bottom: 43px;\n    padding-right: unset;\n    right: unset;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    flex-direction: column;\n    z-index: 1;\n  }\n\n  .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    height: 30px;\n  }\n\n  .text-right[_ngcontent-%COMP%] {\n    text-align: center !important;\n    margin-top: -5%;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .section_content[_ngcontent-%COMP%]   .AddressParg[_ngcontent-%COMP%] {\n    margin-top: -4%;\n    font-size: 14px;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .formSection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .section_content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .formSection[_ngcontent-%COMP%]   .section-aside[_ngcontent-%COMP%]   .message-form[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n\n  .myslider[_ngcontent-%COMP%]   .item.d[_ngcontent-%COMP%]   .formSection[_ngcontent-%COMP%]   .section-aside[_ngcontent-%COMP%]   .message-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    height: 60px;\n    max-height: 60px;\n    min-height: 60px;\n  }\n\n    .rtl .myslider .item.a .itemContent .TxtCol {\n    width: 100%;\n    margin: 1% 3em 1em 2em !important;\n  }\n    .rtl .scrollComp {\n    margin-top: 15% !important;\n    margin-left: unset !important;\n    margin-right: -5% !important;\n  }\n    .rtl .myslider .item.c .ProductDetails {\n    position: absolute;\n    width: 100%;\n    margin-right: 9% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRyxxRUFBQTtFQUNDLGtEQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FBREo7O0FBSUk7RUFDRSx5Q0FBQTtBQUROOztBQUdJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFBUjs7QUFDUTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ1Y7O0FBQ1U7RUFPRSxxQ0FBQTtBQUxaOztBQURZO0VBQ0UsZUFBQTtBQUdkOztBQURZO0VBQ0UsZUFBQTtBQUdkOztBQUFZO0VBQ0UsYUFBQTtFQUNELHFCQUFBO0VBQ0Msa0JBQUE7QUFFZDs7QUFEYztFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7RUFDQSw2REFBQTtFQUNBLDhEQUFBO0FBR2Q7O0FBQ1k7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDZDs7QUFBYztFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7RUFDQSxxQ0FBQTtBQUVoQjs7QUFBYztFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFFaEI7O0FBQWM7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFFaEI7O0FBRGdCO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFFQSx3QkFBQTtFQUNBLGdCQUFBO0FBR2xCOztBQURnQjtFQUNFLFdBQUE7RUFDQSxTQUFB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Q0MsZUFBQTtJQUNBLGVBQUE7RUF2R0E7O0VBeUdEO0lBQ0MsYUFBQTtFQXRHQTs7RUF3R0E7SUFFRSxlQUFBO0VBdEdGOztFQXdHQTtJQUNFLFVBQUE7RUFyR0Y7O0VBdUdDO0lBQ0MsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUFwR0Y7O0VBd0dJO0lBQ0UsV0FBQTtJQUNBLGlDQUFBO0VBckdOO0VBdUdLO0lBQ0MsMEJBQUE7SUFDQSw2QkFBQTtJQUNBLDRCQUFBO0VBckdOO0VBdUdLO0lBQ0Msa0JBQUE7SUFDQSxXQUFBO0lBQ0EsMkJBQUE7RUFyR047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4jdG9wLWltYWdlIHtcclxuICAgLyogIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9leHQtb2Zmc2V0LXByaW50aW5nLnBuZycpIC0yNXB4IC01MHB4OyAqL1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2V4dC1vZmZzZXQtcHJpbnRpbmcucG5nJykgO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDl2aDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDUlIDExMCU7XHJcbiAgICB9XHJcblxyXG4gICAgaDEsIGgyLCBoMywgaDQge1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYigwIDAgMCAvIDIwJSk7XHJcbiAgfVxyXG4gICAgLm15c2xpZGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgICAgICAgJi5je1xyXG4gICAgICAgICAgICAubW9yZURldEJ0bntcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RSb3d7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTElO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMSwgNSwgMC44OSk7XHJcbiAgICAgICAgICAgIC5pbWdEaXZ7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgIC8qICBtYXJnaW46IDZlbSAwJTsgKi9cclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgLlByb2R1Y3RJbWd7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDY1dmggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDY1dmggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDBweCByZ2IoMjU1IDI1NSAyNTUgLyA1MCUpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDBweCByZ2IoMjU1IDI1NSAyNTUgLyA1MCUpO1xyXG4gICAgICAgICAgICAgIC1tb3otYm94LWJveC1zaGFkb3c6IDBweCAwcHggMTRweCAwcHggcmdiKDI1NSAyNTUgMjU1IC8gNTAlKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuUHJvZHVjdERldGFpbHN7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIC8qIHRvcDogNiU7ICovXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMiU7XHJcbiAgICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1M3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0JSAwJTtcclxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggNHB4IDVweCByZ2IoMjU1IDI1NSAyNTUgLyA0MCUpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRWwgTWVzc2lyaVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCUgNDYlIDAlIDAlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuQXJyb3dTcGFue1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMTJweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgY3VycmVudENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgY3VycmVudENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5kICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEsIDUsIDAuODkpO1xyXG5cclxuICAgICAgICAgICAgLmNvbnRhY3RJbWd7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwgMC40KTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTIlIDAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VjdGlvbl9jb250ZW50IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMyUgNiU7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIC5kaXNwbGF5X3RpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUzcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5BZGRyZXNzUGFyZ3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgLmZvcm1TZWN0aW9ue1xyXG4gICAgICAgICAgICAgICAuc2VjdGlvbi1hc2lkZXtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogODBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDY0cHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogNHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2M3Z3O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIC5tZXNzYWdlLWZvcm17XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzOSU7XHJcblxyXG4gICAgICAgICAgICAgICAgICBmb3JtIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC5idG4tb3V0bGluZS13aGl0ZSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDM4cHg7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQlIDklO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAmLmIgICB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMSwgNSwgMC44OSk7XHJcbiAgICAgICAgICAgIC5pdGVtQ29udGVudEl7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogMjBlbTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbUNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDNlbTtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogMiU7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgLkFib3V0U2xpZGV7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDklIDBweCAwJSAtNSU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5UeHRDb2x7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0ZW0gNGVtIDAgNGVtO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNnZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRWwgTWVzc2lyaVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwJSA4JTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5idG4tY2lyY2ljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuYnRuLWNpcmNpY29uLmJ0bi1wcmltYXJ5IC5pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAzN0ZENTtcclxuICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDM3RkQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLmJ0bi1jaXJjaWNvbiA+IC5pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAzN0ZENTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmJ0bi1jaXJjaWNvbiA+IC5pY29uIC5mYSwgLmJ0bi1jaXJjaWNvbiA+IC5pY29uIC5pb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIC50ZXh0e1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICYuYSAgIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMywgMTAsIDAuNyk7XHJcblxyXG4gICAgICAgICAgLml0ZW1Db250ZW50e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMTVlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC5UeHRDb2x7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCUgMTQlO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBoMSwgaDIsIGgzLCBoNCB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiKDAgMCAwIC8gMjAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJFbCBNZXNzaXJpXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnRuLWNpcmNpY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnRuLWNpcmNpY29uLmJ0bi1wcmltYXJ5IC5pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDM3RkQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAzN0ZENTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnRuLWNpcmNpY29uID4gLmljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMzdGRDU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJ0bi1jaXJjaWNvbiA+IC5pY29uIC5mYSwgLmJ0bi1jaXJjaWNvbiA+IC5pY29uIC5pb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAudGV4dHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgLnNjcm9sbENvbXAge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNCU7XHJcblxyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIDQwMCAyMHB4LzEgJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xyXG5cclxuICAgICAgfVxyXG4gICAgICAuc2Nyb2xsQ29tcCBzcGFuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigtNDVkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNDVkZWcpO1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzZGIwNiAxLjVzIGluZmluaXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogc2RiMDYgMS41cyBpbmZpbml0ZTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICB9XHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzZGIwNiB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMCkgcm90YXRlWigtNDVkZWcpIHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDUwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDcyMGRlZykgcm90YXRlWigtNDVkZWcpIHRyYW5zbGF0ZSgtMjBweCwgMjBweCk7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAa2V5ZnJhbWVzIHNkYjA2IHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCkgcm90YXRlWigtNDVkZWcpIHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDUwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg3MjBkZWcpIHJvdGF0ZVooLTQ1ZGVnKSB0cmFuc2xhdGUoLTIwcHgsIDIwcHgpO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zbGljay1kb3RzIGxpIGJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICByaWdodDogMiU7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHRleHQtaW5kZW50OiAtOTk5OXB4O1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnNsaWNrLXNsaWRlIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNsaWNrLXNsaWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAvKiAgIGJhY2tncm91bmQ6ICMwMDA7ICovXHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgOjpuZy1kZWVwIC5zbGljay1kb3RzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAyODhweDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDIxcHg7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgfVxyXG4gICAgICA6Om5nLWRlZXAgLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmJlZm9yZXtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgIH1cclxuICAgICAgOjpuZy1kZWVwIC5zbGljay1kb3RzIGxpLnNsaWNrLWFjdGl2ZSBidXR0b246YmVmb3Jle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MSwgMTQ4LCAxNDgsIDAuODcpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuQWJvdXRJbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAyNDVweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgICB9XHJcbiAgICAgICAub3dsLWNhcm91c2VsIC5vd2wtaXRlbSBpbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIxNHB4O1xyXG4gICAgfVxyXG5cclxuOjpuZy1kZWVwICAgLm93bC10aGVtZSAub3dsLWRvdHMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdCBzcGFuIHtcclxuICB3aWR0aDogMzRweDtcclxuICBoZWlnaHQ6IDRweDtcclxuICBtYXJnaW46IDE0cHggNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNjY2NiY2I7XHJcbn1cclxuOjpuZy1kZWVwIC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSBzcGFuLCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdDpob3ZlciBzcGFuIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtbmF2IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyJTtcclxuICB0b3A6IDM0JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxufVxyXG46Om5nLWRlZXAgLm93bC1wcmV2ICwgOjpuZy1kZWVwIC5vd2wtbmV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAub3dsUHJldiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNDhweDtcclxuICB3aWR0aDogNDhweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAmOmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICBsZWZ0OiAxNHB4O1xyXG4gICAgd2lkdGg6IDFlbTtcclxuICAgIGhlaWdodDogMWVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgY3VycmVudENvbG9yO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIH1cclxuICAmOmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHRvcDogMTRweDtcclxuICAgIGxlZnQ6IDIycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMWVtO1xyXG4gICAgaGVpZ2h0OiAxZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgY3VycmVudENvbG9yO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgfVxyXG4gICY6aG92ZXJ7XHJcbiAgICAmOjphZnRlcntcclxuICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICB0b3A6IDIxcHg7XHJcbiAgICAgIGxlZnQ6IDE0cHg7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn1cclxuOjpuZy1kZWVwIC5vd2xOZXh0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICByaWdodDogYXV0bztcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgJjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNHB4O1xyXG4gICAgcmlnaHQ6IDE0cHg7XHJcbiAgICB3aWR0aDogMWVtO1xyXG4gICAgaGVpZ2h0OiAxZW07XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgY3VycmVudENvbG9yO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgY3VycmVudENvbG9yO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIH1cclxuICAmOmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHRvcDogMTRweDtcclxuICAgIHJpZ2h0OiAyMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDFlbTtcclxuICAgIGhlaWdodDogMWVtO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxuICB9XHJcblxyXG4gICY6aG92ZXJ7XHJcbiAgICAmOjphZnRlcntcclxuICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHRvcDogMjFweDtcclxuICAgIHJpZ2h0OiAxNHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgLnJ0bCB7XHJcbiAgICAuc2xpY2stZG90cyB7XHJcbiAgICAgIHJpZ2h0OiA5NiUgICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwe1xyXG4gIC5ydGx7XHJcbiAgICAuc2Nyb2xsQ29tcCB7XHJcbiAgICAgIC8qIHJpZ2h0OiAxMiUgOyAqL1xyXG4gICAgICBmb250LWZhbWlseTogJ0VsIE1lc3NpcmknO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAubXlzbGlkZXIge1xyXG4gICAgICAuaXRlbSB7XHJcblxyXG4gICAgICAgICYuY3tcclxuICAgICAgICAgLnByb2R1Y3RSb3d7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgICAuUHJvZHVjdERldGFpbHN7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTE1JSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCUgMCUgMCUgNDYlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBcclxuICAgICAgICAgICAgLkFycm93U3BhbntcclxuICAgICAgICAgICAgICByaWdodDogMTQlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjIwZGVnKSAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIyMGRlZykgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDFlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDIxcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5kICAge1xyXG4gICAgICAgICAgLmNvbnRhY3RJbWd7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiB1bnNldDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zZWN0aW9uX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAuZGlzcGxheV90aXRsZXtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIC5mb3JtU2VjdGlvbntcclxuICAgICAgICAgICAgIC5zZWN0aW9uLWFzaWRle1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNjRweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcclxuICAgICAgICAgICAgICBsZWZ0OiAyM3B4O1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiB1bnNldDtcclxuICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAmLmIgICB7XHJcbiAgICAgICAgICAuaXRlbUNvbnRlbnR7XHJcbiAgICAgICAgICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgICAgICAgICAuQWJvdXRTbGlkZXtcclxuICAgICAgICAgICAgICBtYXJnaW46IDklIC01JSAwJSAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLlR4dENvbHtcclxuICAgICAgICAgICAgICAgIGgxe1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgJi5hICAge1xyXG4gICAgICAgIC5pdGVtQ29udGVudHtcclxuICAgICAgICAgLyogIHJpZ2h0OiAyJTtcclxuICAgICAgICAgIGxlZnQ6IHVuc2V0OyAqL1xyXG4gICAgICAgICAgLlR4dENvbHtcclxuXHJcbiAgICAgICAgICAgICAgaDEsaDQscHtcclxuICAgICAgICAgICAgICAgIC8qICB0ZXh0LWFsaWduOiBzdGFydDsgKi9cclxuICAgICAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAudGV4dHtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgIC5vd2wtdGhlbWUgLm93bC1uYXYge1xyXG4gICAgICByaWdodDoyJTtcclxuICAgICAgbGVmdDogdW5zZXQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcblxyXG4gIDo6bmctZGVlcCAuc2xpY2stZG90cyB7XHJcbiAgICBib3R0b206IDMyMHB4O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLnNsaWNrLWRvdHMgbGkge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAuc2xpY2stZG90cyBsaSBidXR0b24ge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAuc2xpY2stZG90cyBsaSBidXR0b246YmVmb3JlIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiA3cHg7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAuc2xpY2stZG90cyBsaS5zbGljay1hY3RpdmUgYnV0dG9uOmJlZm9yZSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICB9XHJcbiAgLm15c2xpZGVye1xyXG5cclxuICAgIC5pdGVtLmF7XHJcbiAgICAgICAgLml0ZW1Db250ZW50e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogMjFlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLlR4dENvbHtcclxuICAgICAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDh2dyAhaW1wb3J0YW50O1xyXG4gICAgICAgfVxyXG4gICAgICAgaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjFlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgfVxyXG4gICAgICAgcHtcclxuICAgICAgICAgZm9udC1zaXplOiAxLjRlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgfVxyXG4gICAgICAuYnRuLWNpcmNpY29ue1xyXG5cclxuICAgICAgICAmPi5pY29ue1xyXG4gICAgICAgICAgaGVpZ2h0OiA1NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB3aWR0aDogNTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgaXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgICAgLnRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAuaXRlbS5iIC5pdGVtQ29udGVudEl7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAyNmVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgIH1cclxuICAgICAuQWJvdXRJbWdbX25nY29udGVudC1hZWQtYzI1XSB7XHJcbiAgICAgIGhlaWdodDogMzMwcHg7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0uYiAuaXRlbUNvbnRlbnQgLlR4dENvbCBwIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCUgOSU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyN3B4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgfVxyXG4gICAgLml0ZW0uZCB7XHJcbiAgICAgIC5zZWN0aW9uX2NvbnRlbnQge1xyXG4gICAgICAgIC5kaXNwbGF5X3RpdGxlIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEgIWltcG9ydGFudDtcclxuICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0e1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC5mb3JtU2VjdGlvbntcclxuICAgICAgLnNlY3Rpb24tYXNpZGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgICAgYm90dG9tOiA4MXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDY0cHggIWltcG9ydGFudDtcclxuICAgICAgcmlnaHQ6IDEwMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGg0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEyMSUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMi41ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgdGV4dGFyZWF7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICB3aWR0aDogMTIwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5idG5ze1xyXG4gICAgICAgIHdpZHRoOiAxMjIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICAuaXRlbS5je1xyXG4gICAgICAuaW1nRGl2e1xyXG4gICAgICAgIC8qIG1hcmdpbjogOGVtIDAlOyAqL1xyXG5cclxuICAgICAgICAuUHJvZHVjdEltZ3tcclxuICAgICAgICAgICB3aWR0aDogNzB2aCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgIGhlaWdodDogNzB2aCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuUHJvZHVjdERldGFpbHN7XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICBmb250LXNpemU6IDYxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyJSA0MCUgMCUgMSU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5BcnJvd1NwYW57XHJcbiAgICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgICB0b3A6IC0xMnB4O1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG5cclxuICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIHRvcDogMTRweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgdG9wOiAyMnB4O1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcbiAgOjpuZy1kZWVwIC5vd2wtdGhlbWUgLm93bC1uYXYgLm93bFByZXYgIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICB9XHJcbiAgOjpuZy1kZWVwICAub3dsLXRoZW1lIC5vd2wtbmF2IC5vd2xOZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5vd2xQcmV2IHtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIHdpZHRoOiA1NHB4O1xyXG4gICAgJjpiZWZvcmV7XHJcbiAgICAgIHRvcDogMTZweDtcclxuICAgICAgbGVmdDogMTdweDtcclxuICAgIH1cclxuICAgICY6YWZ0ZXJ7XHJcbiAgICAgIHRvcDogMTZweDtcclxuICAgICAgbGVmdDogMjdweDtcclxuICAgIH1cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICY6OmFmdGVye1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB0b3A6IDI0cHg7XHJcbiAgICBsZWZ0OiAxNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAub3dsTmV4dCB7XHJcbiAgICAgIGhlaWdodDogNTRweDtcclxuICAgICAgd2lkdGg6IDU0cHg7XHJcbiAgICAmOmJlZm9yZXtcclxuICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICByaWdodDogMTZweDtcclxuICAgIH1cclxuICAgICY6YWZ0ZXJ7XHJcbiAgICAgIHRvcDogMTZweDtcclxuICAgICAgcmlnaHQ6IDI2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlcntcclxuICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgdG9wOiAyNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIDo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdCBzcGFuIHtcclxuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNC41cHggIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLnJ0bHtcclxuICAubXlzbGlkZXIgLml0ZW0uYiAuaXRlbUNvbnRlbnQgLlR4dENvbCBwIHtcclxuICAgIHBhZGRpbmc6IDAlIDEyJSAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgLm15c2xpZGVyIC5pdGVtLmQgLmZvcm1TZWN0aW9uIC5zZWN0aW9uLWFzaWRlIHtcclxuICAgIHJpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMTclO1xyXG4gICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7XHJcblxyXG4gIC5teXNsaWRlciAuaXRlbS5iIC5pdGVtQ29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDdlbTtcclxuICB9XHJcbiAgLm15c2xpZGVyIC5pdGVtLmIgLml0ZW1Db250ZW50SSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI0ZW07XHJcbiAgfVxyXG4gIC5teXNsaWRlciAuaXRlbS5jIC5wcm9kdWN0Um93IHtcclxuICAgIG1hcmdpbi10b3A6IDI0JTtcclxuICB9XHJcbiAgLm15c2xpZGVyIC5pdGVtLmMgLlByb2R1Y3REZXRhaWxzIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICB9XHJcbiAgLm15c2xpZGVyIC5pdGVtLmMgLmltZ0RpdiAuUHJvZHVjdEltZyB7XHJcbiAgICB3aWR0aDogNDB2aCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0MHZoICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5teXNsaWRlciAuaXRlbS5jIC5Qcm9kdWN0RGV0YWlscyBwIHtcclxuICAgIHBhZGRpbmc6IDAlIDM3JSAwJSAwJTtcclxuICB9XHJcbiAgLm15c2xpZGVyIC5pdGVtLmQgLmNvbnRhY3RJbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgfVxyXG4gIC5jb250YWN0RGl2e1xyXG4gICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KXtcclxuICA6Om5nLWRlZXAgLnNsaWNrLWRvdHMge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuQWJvdXRJbWcge1xyXG4gICAgaGVpZ2h0OiAyMDZweDtcclxuICB9XHJcbiN0b3AtaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuIH1cclxuIC5teXNsaWRlciAuaXRlbS5iIC5pdGVtQ29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRvcDogOGVtO1xyXG4gfVxyXG4gLm15c2xpZGVyIC5pdGVtLmIgLml0ZW1Db250ZW50SSB7XHJcbiAgICB0b3A6IDIzZW07XHJcbiAgICBtYXJnaW46IDAlIGF1dG87XHJcbiB9XHJcbiAubXlzbGlkZXIgLml0ZW0uYiAuaXRlbUNvbnRlbnQgLlR4dENvbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDE1JSAxMiUgMCUgMTIlO1xyXG4gfVxyXG4gLm15c2xpZGVyIC5pdGVtLmIgLml0ZW1Db250ZW50IC5UeHRDb2wgcCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuLm15c2xpZGVyIC5pdGVtLmIgLml0ZW1Db250ZW50IC5BYm91dFNsaWRlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMyU7XHJcbn1cclxuOjpuZy1kZWVwIC5vd2wtdGhlbWUgLm93bC1uYXYuZGlzYWJsZWQrLm93bC1kb3RzIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLm15c2xpZGVyIC5pdGVtLmEgLml0ZW1Db250ZW50IC5UeHRDb2wge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDElIDFlbSAxZW0gM2VtO1xyXG4gICAgbWFyZ2luLXRvcDogMCU7XHJcbiB9XHJcbiAubXlzbGlkZXIgLml0ZW0uYSAuaXRlbUNvbnRlbnQgLlR4dENvbCBoMSB7XHJcbiAgIGZvbnQtc2l6ZTogOXZ3O1xyXG4gfVxyXG4gLm15c2xpZGVyIC5pdGVtLmEgLml0ZW1Db250ZW50IC5UeHRDb2wgaDQge1xyXG4gICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG4gIC5zY3JvbGxDb21wIHtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNyU7XHJcbiAgfVxyXG4gIC5teXNsaWRlciAuaXRlbS5jIC5wcm9kdWN0Um93IHtcclxuICAgIG1hcmdpbi10b3A6IDQ1JTtcclxuICAgfVxyXG4gIC5teXNsaWRlciAuaXRlbS5jIC5pbWdEaXYge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbjogMTVlbSAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgfVxyXG4gICAubXlzbGlkZXIgLml0ZW0uYyAuaW1nRGl2IC5Qcm9kdWN0SW1nIHtcclxuICAgIHdpZHRoOiAyNXZoICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDI1dmggIWltcG9ydGFudDtcclxuICAgfVxyXG4gICAubXlzbGlkZXIgLml0ZW0uYyAuUHJvZHVjdERldGFpbHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNyU7XHJcbiAgICByaWdodDogdW5zZXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgfVxyXG4gICAubXlzbGlkZXIgLml0ZW0uYyAuUHJvZHVjdERldGFpbHMgaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIG1hcmdpbjogNCUgMCU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDRweCA1cHggcmdiKDI1NSAyNTUgMjU1IC8gNDAlKTtcclxuICAgIH1cclxuICAgIC5teXNsaWRlciAuaXRlbS5jIC5Qcm9kdWN0RGV0YWlscyBwIHtcclxuICAgICAgcGFkZGluZzogMSUgMjElO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB9XHJcbiAgLm15c2xpZGVyIC5pdGVtLmMgLlByb2R1Y3REZXRhaWxzIC5BcnJvd1NwYW4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdG9wOiAtMTJweDtcclxuICAgIGxlZnQ6IDQ4JTtcclxuICB9XHJcblxyXG4gIC5teXNsaWRlciAuaXRlbS5kIC5jb250YWN0SW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDElO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubXlzbGlkZXIgLml0ZW0uZCAuc2VjdGlvbl9jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDUlIDclIDEwJSAxMyU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMiU7XHJcbiAgfVxyXG4gIC5teXNsaWRlciAuaXRlbS5kIC5zZWN0aW9uX2NvbnRlbnQgLmRpc3BsYXlfdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gIH1cclxuICAubXlzbGlkZXIgLml0ZW0uZCAuc2VjdGlvbl9jb250ZW50IHB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5Db250YWN0cm93e1xyXG4gICAgbWFyZ2luLXRvcDogLTglO1xyXG4gIH1cclxuICAubXlzbGlkZXIgLml0ZW0uZCAuZm9ybVNlY3Rpb24gLnNlY3Rpb24tYXNpZGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiA0M3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XHJcbiAgICByaWdodDogdW5zZXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbi5mb3JtLWdyb3VwIGlucHV0e1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLnRleHQtcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IC01JTtcclxuIH1cclxuIC5teXNsaWRlciAuaXRlbS5kIC5zZWN0aW9uX2NvbnRlbnQgLkFkZHJlc3NQYXJnIHtcclxuICBtYXJnaW4tdG9wOiAtNCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbiAubXlzbGlkZXIgLml0ZW0uZCAuZm9ybVNlY3Rpb24gaDQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5teXNsaWRlciAuaXRlbS5kIC5zZWN0aW9uX2NvbnRlbnQgaDQge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAubXlzbGlkZXIgLml0ZW0uZCAuZm9ybVNlY3Rpb24gLnNlY3Rpb24tYXNpZGUgLm1lc3NhZ2UtZm9ybSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICB9XHJcbiAgIC5teXNsaWRlciAuaXRlbS5kIC5mb3JtU2VjdGlvbiAuc2VjdGlvbi1hc2lkZSAubWVzc2FnZS1mb3JtIGZvcm0gdGV4dGFyZWEge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgfVxyXG4gIDo6bmctZGVlcHtcclxuICAgIC5ydGx7XHJcbiAgICAgIC5teXNsaWRlciAuaXRlbS5hIC5pdGVtQ29udGVudCAuVHh0Q29sIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDElIDNlbSAxZW0gMmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICB9XHJcbiAgICAgICAuc2Nyb2xsQ29tcCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNSUgIWltcG9ydGFudDtcclxuICAgICAgIH1cclxuICAgICAgIC5teXNsaWRlciAuaXRlbS5jIC5Qcm9kdWN0RGV0YWlscyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOSUgIWltcG9ydGFudDtcclxuICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
          }, {
            type: src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_4__["HomeService"]
          }, {
            type: src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_4__["ChangeLangService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }];
        }, {
          carouselEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['owlCar']
          }],
          onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "LDuB":
    /*!***********************************************!*\
      !*** ./src/app/view/about/about.component.ts ***!
      \***********************************************/

    /*! exports provided: AboutComponent */

    /***/
    function LDuB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/sharedServices */
      "nyYE");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../layout/footer/footer.component */
      "kVkw");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function AboutComponent_h2_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.WhoDes, " ");
        }
      }

      function AboutComponent_h2_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.whoDesEn, " ");
        }
      }

      function AboutComponent_h2_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.WhatDes);
        }
      }

      function AboutComponent_h2_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.WhatDesEn);
        }
      }

      function AboutComponent_ul_48_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var Item_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", Item_r7, " ");
        }
      }

      function AboutComponent_ul_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AboutComponent_ul_48_li_1_Template, 2, 1, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.whatList);
        }
      }

      function AboutComponent_ul_49_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var Item_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", Item_r9, " ");
        }
      }

      function AboutComponent_ul_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AboutComponent_ul_49_li_1_Template, 2, 1, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.whatListEn);
        }
      }

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent(aboutServ, changelngServ) {
          _classCallCheck(this, AboutComponent);

          /*  let CurrentUrl = window.location.href;
           let ArFound = CurrentUrl.search("ar");
           let EnFound = CurrentUrl.search("en");
           if(ArFound >= 0){
             this.currentLang = 'ar';
           }else if(EnFound >= 0){
             this.currentLang = 'en';
           } */
          this.aboutServ = aboutServ;
          this.changelngServ = changelngServ;
          this.fetchData = false;
          this.WhoDes = "";
          this.WhatDes = "";
          this.whatList = [];
          this.whoDesEn = "";
          this.WhatDesEn = "";
          this.whatListEn = [];
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            document.querySelector('video').playbackRate = 1;
            /* document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                  e.preventDefault();
                        document.querySelector(this.getAttribute('href')).scrollIntoView({
                      behavior: 'smooth'
                  });
              });
            }); */

            this.getData(function () {
              _this11.fetchData = true;
            });
          }
        }, {
          key: "scrollFunc",
          value: function scrollFunc() {
            var elem = document.getElementById("Who");
            elem.scrollIntoView();
          }
        }, {
          key: "getData",
          value: function getData(callback) {
            var AboutData = this.aboutServ.getaboutData();
            this.WhoDes = AboutData.Who;
            this.WhatDes = AboutData.what;
            this.whatList = AboutData.whatList;
            this.whoDesEn = AboutData.WhoEn;
            this.WhatDesEn = AboutData.whatEn;
            this.whatListEn = AboutData.whatListEn;
            callback();
          }
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_1__["AboutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_1__["ChangeLangService"]));
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 52,
        vars: 29,
        consts: [[1, "about"], ["id", "video", 1, "videoPart"], [1, "overlay"], ["autoplay", "autoplay", "loop", "loop", 3, "muted"], ["src", "../../../assets/vidOne.mp4", "type", "video/mp4"], [1, "wrapper"], [1, "eyebrow", "caps", "medium-text"], [1, "oHidden"], [1, "scrollComp", 3, "click"], ["id", "Who"], [1, "bg-dark-05"], [1, "container"], [1, "nk-gap-4"], [1, "row"], [1, "col-lg-3", "offset-lg-1"], [1, "text-gray", "QuesText", "textJust"], [1, "col-lg-7", "AnsText"], ["class", "whiteColor lh-35 textJust", 4, "ngIf"], [1, "bg-dark-04"], ["class", "whiteColor textJust", 4, "ngIf"], [4, "ngIf"], [3, "footerPostion"], [1, "whiteColor", "lh-35", "textJust"], [1, "whiteColor", "textJust"], ["class", "whiteColor listText textJust", 4, "ngFor", "ngForOf"], [1, "whiteColor", "listText", "textJust"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "video", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_19_listener() {
              return ctx.scrollFunc();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AboutComponent_h2_33_Template, 2, 1, "h2", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AboutComponent_h2_34_Template, 2, 1, "h2", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AboutComponent_h2_46_Template, 2, 1, "h2", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, AboutComponent_h2_47_Template, 2, 1, "h2", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AboutComponent_ul_48_Template, 2, 1, "ul", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AboutComponent_ul_49_Template, 2, 1, "ul", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "app-footer", 21);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("muted", "muted");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 15, "ABOUT.ABOUT"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 17, "ABOUT.KYRMINA"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 19, "ABOUT.TITLE"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 21, "ABOUT.ABOUTDES"), " .");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 23, "ABOUT.SCROLL"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 25, "ABOUT.WHOTITLE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changelngServ.local_lenguage == "ar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changelngServ.local_lenguage == "en");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 27, "ABOUT.WHATTITLE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changelngServ.local_lenguage == "ar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changelngServ.local_lenguage == "en");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changelngServ.local_lenguage == "ar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changelngServ.local_lenguage == "en");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footerPostion", 1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
        styles: [".bg-dark-05[_ngcontent-%COMP%] {\n  background-color: #181818 !important;\n}\n\n.bg-dark-04[_ngcontent-%COMP%] {\n  background: #0d0d0d;\n}\n\n.nk-gap-4[_ngcontent-%COMP%] {\n  height: 80px;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  color: #8e8e8e !important;\n}\n\n.whiteColor[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.about[_ngcontent-%COMP%] {\n  width: 100%;\n  scroll-behavior: smooth;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n\nvideo[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.videoPart[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  z-index: 3;\n  display: table-cell;\n  vertical-align: middle;\n  padding-left: 8vw;\n  padding-right: 8vw;\n  position: absolute;\n  top: 30%;\n}\n\n.wrapper[_ngcontent-%COMP%]   p.eyebrow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 400;\n  padding-left: 60px;\n  margin-bottom: 20px;\n  letter-spacing: 0.2em;\n  position: relative;\n}\n\n.wrapper[_ngcontent-%COMP%]   p.eyebrow[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background: white;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n  height: 2px;\n  width: 40px;\n}\n\n.wrapper[_ngcontent-%COMP%]   a.arrow-down-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 33px;\n  margin-top: 20px;\n  color: white;\n}\n\n.wrapper[_ngcontent-%COMP%]   a.arrow-down-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  fill: white;\n}\n\n.wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 70px;\n  margin-bottom: 30px;\n  letter-spacing: -5px;\n  text-transform: uppercase;\n  font-family: \"Gotham-Bold\", \"Helvetica Neue\", sans-serif;\n  font-weight: 800;\n  color: white;\n}\n\n.wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.WhoPart[_ngcontent-%COMP%] {\n  padding: 9% 15% 9% 16%;\n  text-align: center;\n  background: #1d1d1d;\n  color: white;\n  height: 100vh;\n  transition: 0.2s all;\n}\n\n.WhoPart[_ngcontent-%COMP%]   .WhoTxt[_ngcontent-%COMP%] {\n  font-size: 55px;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n\n.WhoPart[_ngcontent-%COMP%]   .WhoDes[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", \"Proxima Nova \", \"Segoe UI\", \"Opensans\", \"Roboto\", \"Helvetica\", -apple-system, system-ui, BlinkMacSystemFont, sans-serif;\n  margin-top: 1.5rem;\n  font-size: 1.3rem;\n  line-height: 1.75;\n}\n\n.WhatPart[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding: 9% 15% 9% 16%;\n  text-align: center;\n  background: #0d0d0d;\n  color: white;\n}\n\n.WhatPart[_ngcontent-%COMP%]   .WhatTxt[_ngcontent-%COMP%] {\n  font-size: 55px;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n\n.WhatPart[_ngcontent-%COMP%]   .WhatDes[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", \"Proxima Nova \", \"Segoe UI\", \"Opensans\", \"Roboto\", \"Helvetica\", -apple-system, system-ui, BlinkMacSystemFont, sans-serif;\n  margin-top: 1.5rem;\n  font-size: 1.3rem;\n  line-height: 1.75;\n  margin-top: 1.5rem;\n  font-size: 1.3rem;\n  line-height: 1.75;\n  padding: 0% 20% 0% 43%;\n  text-align: left;\n  position: absolute;\n}\n\n.WhatPart[_ngcontent-%COMP%]   .productlist[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  text-align: left;\n  margin-left: -20%;\n}\n\n.WhatPart[_ngcontent-%COMP%]   .productlist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight: 200;\n}\n\n.textJust[_ngcontent-%COMP%] {\n  text-align: start;\n}\n\n.QuesText[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.AnsText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 23px;\n}\n\n.AnsText[_ngcontent-%COMP%]   .listText[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.scrollComp[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-top: 70px;\n  position: absolute;\n  margin-top: 4%;\n  z-index: 2;\n  display: inline-block;\n  transform: translate(0, -50%);\n  color: #fff;\n  font: normal 400 20px/1 \"Josefin Sans\", sans-serif;\n  letter-spacing: 0.1em;\n  text-decoration: none;\n  transition: opacity 0.3s;\n}\n\n.scrollComp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 24px;\n  height: 24px;\n  margin-left: -12px;\n  border-left: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n  transform: rotateZ(-45deg);\n  animation: sdb06 1.5s infinite;\n  box-sizing: border-box;\n}\n\n@keyframes sdb06 {\n  0% {\n    transform: rotateY(0) rotateZ(-45deg) translate(0, 0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);\n    opacity: 0;\n  }\n}\n\n  .rtl .wrapper p.eyebrow {\n  font-size: 20px !important;\n  padding-left: unset !important;\n  padding-right: 60px !important;\n  margin-bottom: 20px !important;\n  letter-spacing: 3px !important;\n  font-family: \"Cairo\" !important;\n}\n\n  .rtl .wrapper p.eyebrow:before {\n  left: unset !important;\n  right: 0 !important;\n  top: 53% !important;\n}\n\n  .rtl .wrapper a.arrow-down-btn {\n  display: inline-block;\n  width: 33px;\n  margin-top: 20px;\n  color: white;\n}\n\n  .rtl .wrapper a.arrow-down-btn svg > * {\n  fill: white;\n}\n\n  .rtl .wrapper h1 {\n  text-align: start !important;\n  font-size: 74px !important;\n  margin-bottom: 30px !important;\n  letter-spacing: 0px !important;\n  text-transform: uppercase !important;\n  font-family: \"Cairo\" !important;\n  font-weight: 700 !important;\n  color: white !important;\n}\n\n  .rtl .wrapper p {\n  text-align: start !important;\n  color: white !important;\n  font-family: \"Cairo\" !important;\n}\n\n  .rtl .WhoPart {\n  padding: 9% 16% 9% 15% !important;\n}\n\n  .rtl .WhoPart .WhoTxt {\n  font-family: \"Cairo\" !important;\n}\n\n  .rtl .WhoPart .WhoDes {\n  font-family: \"Cairo\" !important;\n}\n\n  .rtl .WhatPart {\n  padding: 9% 16% 9% 15% !important;\n}\n\n  .rtl .WhatPart .WhatTxt {\n  font-family: \"Cairo\" !important;\n}\n\n  .rtl .WhatPart .WhatDes {\n  font-family: \"Cairo\" !important;\n  margin-top: 1.5rem !important;\n  font-size: 1.3rem !important;\n  line-height: 1.75 !important;\n  padding: 0% 43% 0% 18% !important;\n  text-align: start !important;\n}\n\n  .rtl .WhatPart .productlist {\n  margin-top: 1.5rem;\n  text-align: start !important;\n  margin-right: -20% !important;\n  margin-left: unset !important;\n}\n\n  .rtl .WhatPart .productlist ul li {\n  font-size: 24px !important;\n  font-family: \"Cairo\" !important;\n}\n\n  .rtl .wrapper .scrollComp {\n  right: 12%;\n  font-family: \"El Messiri\";\n}\n\n  .rtl .scrollComp {\n  font-family: \"El Messiri\";\n}\n\n@media only screen and (min-width: 1600px) {\n  .QuesText[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n\n  .AnsText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .AnsText[_ngcontent-%COMP%]   .listText[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n\n  .scrollComp[_ngcontent-%COMP%] {\n    font: normal 400 26px/1 \"Josefin Sans\", sans-serif;\n  }\n\n  .wrapper[_ngcontent-%COMP%]   p.eyebrow[_ngcontent-%COMP%] {\n    font-size: 29px !important;\n  }\n  .wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 84px !important;\n  }\n  .wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .WhoPart[_ngcontent-%COMP%]   .WhoTxt[_ngcontent-%COMP%] {\n    font-size: 65px;\n  }\n  .WhoPart[_ngcontent-%COMP%]   .WhoDes[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n  }\n\n  .WhatPart[_ngcontent-%COMP%]   .WhatTxt[_ngcontent-%COMP%] {\n    font-size: 65px;\n  }\n  .WhatPart[_ngcontent-%COMP%]   .WhatDes[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .WhatPart[_ngcontent-%COMP%]   .productlist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-weight: 200;\n  }\n}\n\n@media screen and (max-width: 770px) {\n  .wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 50px !important;\n  }\n\n  .row[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtBQUdGOztBQURBO0VBQ0UseUJBQUE7QUFJRjs7QUFGQztFQUNDLFlBQUE7QUFLRjs7QUFGQTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtBQUtKOztBQUhBO0VBQ0kseUNBQUE7QUFNSjs7QUFGQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQUtKOztBQUhFO0VBQ0ksYUFBQTtBQU1OOztBQUpBO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQU9KOztBQUpBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBT0o7O0FBTks7RUFDRyxlQUFBO0VBQ0osZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQVFKOztBQU5LO0VBQ0csV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUdBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFRUjs7QUFOSTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQVFSOztBQVBRO0VBQ0ksV0FBQTtBQVNaOztBQU5HO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBUUo7O0FBTkc7RUFDSSxZQUFBO0FBUVA7O0FBSkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZ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QTtJQUNBLGdCQUFBO0VBZE47QUFDRjs7QUFvQkU7RUFDRTtJQUNFLDBCQUFBO0VBbEJKOztFQW9CRTtJQUNFLFdBQUE7SUFDQSxjQUFBO0VBakJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3L2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWRhcmstMDUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODE4MTghaW1wb3J0YW50O1xyXG59XHJcbi5iZy1kYXJrLTA0e1xyXG4gIGJhY2tncm91bmQ6ICMwZDBkMGQ7XHJcbn1cclxuLm5rLWdhcC00IHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuLnRleHQtZ3JheSB7XHJcbiAgY29sb3I6ICM4ZThlOGUhaW1wb3J0YW50O1xyXG59XHJcbiAud2hpdGVDb2xvcntcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hYm91dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuaDEsIGgyLCBoMywgaDQscCB7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYigwIDAgMCAvIDIwJSk7XHJcbn1cclxuXHJcblxyXG52aWRlbyB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIC52aWRlb1BhcnR7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4ub3ZlcmxheXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4dnc7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4dnc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgICBwLmV5ZWJyb3cge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgIHAuZXllYnJvdzpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNTAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNTAlKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC01MCUpO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgYS5hcnJvdy1kb3duLWJ0biB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAzM3B4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHN2Zz4qIHtcclxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICBoMXtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogXCJHb3RoYW0tQm9sZFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICB9XHJcbiAgIHB7XHJcbiAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgIH1cclxufVxyXG5cclxuLldob1BhcnR7XHJcbiAgICBwYWRkaW5nOiA5JSAxNSUgOSUgMTYlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzFkMWQxZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsO1xyXG4gICAgLldob1R4dHtcclxuICAgICAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG4gICAgLldob0Rlc3tcclxuICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgXCJQcm94aW1hIE5vdmEgXCIsIFwiU2Vnb2UgVUlcIiwgXCJPcGVuc2Fuc1wiLCBcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIEJsaW5rTWFjU3lzdGVtRm9udCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xyXG4gICAgfVxyXG59XHJcblxyXG4uV2hhdFBhcnR7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmc6IDklIDE1JSA5JSAxNiU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGQwZDBkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLldoYXRUeHR7XHJcbiAgICAgICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIH1cclxuICAgIC5XaGF0RGVze1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBcIlByb3hpbWEgTm92YSBcIiwgXCJTZWdvZSBVSVwiLCBcIk9wZW5zYW5zXCIsIFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS43NTtcclxuXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xyXG4gICAgICAgIHBhZGRpbmc6IDAlIDIwJSAwJSA0MyU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgfVxyXG4gICAgLnByb2R1Y3RsaXN0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjAlO1xyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGV4dEp1c3R7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbn1cclxuLlF1ZXNUZXh0e1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4uQW5zVGV4dHtcclxuICBoMntcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICB9XHJcbiAgLmxpc3RUZXh0e1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNjcm9sbENvbXAge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcblxyXG4gICAgei1pbmRleDogMjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udDogbm9ybWFsIDQwMCAyMHB4LzEgJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjFlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xyXG5cclxuICB9XHJcbiAgLnNjcm9sbENvbXAgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTJweDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooLTQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWigtNDVkZWcpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNkYjA2IDEuNXMgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IHNkYjA2IDEuNXMgaW5maW5pdGU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2RiMDYge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwKSByb3RhdGVaKC00NWRlZykgdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg3MjBkZWcpIHJvdGF0ZVooLTQ1ZGVnKSB0cmFuc2xhdGUoLTIwcHgsIDIwcHgpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHNkYjA2IHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDApIHJvdGF0ZVooLTQ1ZGVnKSB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg3MjBkZWcpIHJvdGF0ZVooLTQ1ZGVnKSB0cmFuc2xhdGUoLTIwcHgsIDIwcHgpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwe1xyXG4gICAgLnJ0bHtcclxuICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgICBwLmV5ZWJyb3cge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOjNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDYWlybycgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgIHAuZXllYnJvdzpiZWZvcmUge1xyXG4gICAgICAgICAgICBsZWZ0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0b3A6IDUzJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBhLmFycm93LWRvd24tYnRuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMzNweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBzdmc+KiB7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIGgxe1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNzRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgfVxyXG4gICAgICAgcHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nICFpbXBvcnRhbnQ7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLldob1BhcnR7XHJcbiAgICAgICAgcGFkZGluZzogOSUgMTYlIDklIDE1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5XaG9UeHR7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAuV2hvRGVze1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDYWlybycgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLldoYXRQYXJ0e1xyXG4gICAgICAgIHBhZGRpbmc6IDklIDE2JSA5JSAxNSUgIWltcG9ydGFudDtcclxuICAgICAgICAuV2hhdFR4dHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5XaGF0RGVze1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0NhaXJvJyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCUgNDMlIDAlIDE4JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3RsaXN0e1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTIwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0NhaXJvJyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgLndyYXBwZXIgLnNjcm9sbENvbXAge1xyXG4gICAgICByaWdodDogMTIlIDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdFbCBNZXNzaXJpJztcclxuICAgIH1cclxuICAgIC5zY3JvbGxDb21wIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdFbCBNZXNzaXJpJztcclxuICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuXHJcbiAgICAuUXVlc1RleHR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIH1cclxuICAgIC5BbnNUZXh0e1xyXG4gICAgICBoMntcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmxpc3RUZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNjcm9sbENvbXAge1xyXG4gICAgICBmb250OiBub3JtYWwgNDAwIDI2cHgvMSBcIkpvc2VmaW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgcC5leWVicm93IHtcclxuICAgICAgZm9udC1zaXplOiAyOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODRweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLldob1BhcnQge1xyXG4gICAgICAuV2hvVHh0IHtcclxuICAgICAgZm9udC1zaXplOiA2NXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5XaG9EZXMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLldoYXRQYXJ0e1xyXG4gICAgICAuV2hhdFR4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgICAgfVxyXG4gICAgICAuV2hhdERlcyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgIH1cclxuICAgICAgLnByb2R1Y3RsaXN0IHVsIGxpIHtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpe1xyXG4gICAgLndyYXBwZXIgaDEge1xyXG4gICAgICBmb250LXNpemU6IDUwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5yb3cge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIDo6bmctZGVlcHtcclxuICAgIC5ydGx7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICB9XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_1__["AboutService"]
          }, {
            type: src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_1__["ChangeLangService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_sharedServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core/sharedServices */
      "nyYE");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./layout/header/header.component */
      "/Lhg");
      /* harmony import */


      var _layout_loadingscreen_loadingscreen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./layout/loadingscreen/loadingscreen.component */
      "Bpez");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(translate, _route, _router, sharedLng, titleService, metaTagService) {
          _classCallCheck(this, AppComponent);

          this.translate = translate;
          this._route = _route;
          this._router = _router;
          this.sharedLng = sharedLng;
          this.titleService = titleService;
          this.metaTagService = metaTagService;
          this.title = 'كيرمينا للكاوتشوك';
          this.metaTagService.addTags([// {name:'keywords',content:'كيرمينا , Rubber, كاوتشوك, درافيل , سلندر, سلندرات , rollers , , kyrmina , المطاط , سيلكون, بولي يوريثان , polyurethane , كسوة , Cylinders , Silicon , Metal , حديد ,معادن '},
          {
            name: 'robots',
            content: ' index, follow'
          }, {
            name: 'author',
            content: ' ايمن حنا'
          }]);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.translate.addLangs(['en', 'ar']);
            this.translate.setDefaultLang('ar');
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_sharedServices__WEBPACK_IMPORTED_MODULE_3__["SharedLangService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-loadingscreen");
          }
        },
        directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _layout_loadingscreen_loadingscreen_component__WEBPACK_IMPORTED_MODULE_6__["LoadingscreenComponent"]],
        styles: ["body[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFDQTtFQUNJLHVCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuaHRtbHtcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _core_sharedServices__WEBPACK_IMPORTED_MODULE_3__["SharedLangService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "YGKV":
    /*!***********************************************************!*\
      !*** ./src/app/core/sharedServices/sharedlang.service.ts ***!
      \***********************************************************/

    /*! exports provided: SharedLangService */

    /***/
    function YGKV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedLangService", function () {
        return SharedLangService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var SharedLangService = /*#__PURE__*/function () {
        function SharedLangService() {
          _classCallCheck(this, SharedLangService);

          this.Lang = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("ar");
          this.currentLang = this.Lang.asObservable();
        }

        _createClass(SharedLangService, [{
          key: "changeType",
          value: function changeType(langoption) {
            this.Lang.next(langoption);
          }
        }, {
          key: "getLang",
          value: function getLang() {
            return this.Lang.value;
          }
        }]);

        return SharedLangService;
      }();

      SharedLangService.ɵfac = function SharedLangService_Factory(t) {
        return new (t || SharedLangService)();
      };

      SharedLangService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SharedLangService,
        factory: SharedLangService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedLangService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: createTranslateLoader, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      "bhfF");
      /* harmony import */


      var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-owl-carousel */
      "uxF4");
      /* harmony import */


      var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-slick-carousel */
      "eSVu");
      /* harmony import */


      var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./layout/header/header.component */
      "/Lhg");
      /* harmony import */


      var _view_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./view/home/home.component */
      "FdTb");
      /* harmony import */


      var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./layout/footer/footer.component */
      "kVkw");
      /* harmony import */


      var _view_productMod_products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./view/productMod/products/products.component */
      "CchL");
      /* harmony import */


      var _view_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./view/about/about.component */
      "LDuB");
      /* harmony import */


      var _layout_loadingscreen_loadingscreen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./layout/loadingscreen/loadingscreen.component */
      "Bpez");
      /* harmony import */


      var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! angular-svg-round-progressbar */
      "eANF");
      /* harmony import */


      var _view_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./view/contact/contact.component */
      "2hwp");
      /* harmony import */


      var _view_productMod_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./view/productMod/product-item/product-item.component */
      "hk8l");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./core/core.module */
      "pKmL");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var createTranslateLoader = function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_18__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__["OwlModule"], angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_14__["RoundProgressModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot(), _core_core_module__WEBPACK_IMPORTED_MODULE_20__["CoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]]
          }
        })], ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _view_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _view_productMod_products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"], _view_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _layout_loadingscreen_loadingscreen_component__WEBPACK_IMPORTED_MODULE_13__["LoadingscreenComponent"], _view_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"], _view_productMod_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_16__["ProductItemComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__["OwlModule"], angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_14__["RoundProgressModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_20__["CoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateModule"]],
          exports: [ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _view_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _view_productMod_products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"], _view_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _layout_loadingscreen_loadingscreen_component__WEBPACK_IMPORTED_MODULE_13__["LoadingscreenComponent"], _view_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"], _view_productMod_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_16__["ProductItemComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__["OwlModule"], angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_14__["RoundProgressModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot(), _core_core_module__WEBPACK_IMPORTED_MODULE_20__["CoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateModule"].forRoot({
              loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateLoader"],
                useFactory: createTranslateLoader,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]]
              }
            })],
            exports: [ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"]],
            providers: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "b/8Y":
    /*!**********************************************************!*\
      !*** ./src/app/core/sharedServices/changeLng.service.ts ***!
      \**********************************************************/

    /*! exports provided: ChangeLangService */

    /***/
    function b8Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangeLangService", function () {
        return ChangeLangService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var ChangeLangService = function ChangeLangService(translate) {
        _classCallCheck(this, ChangeLangService);

        this.translate = translate;
        this.local_lenguage = 'ar';
        this.changeNewArrival = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.change_lang = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('ar');
      };

      ChangeLangService.ɵfac = function ChangeLangService_Factory(t) {
        return new (t || ChangeLangService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
      };

      ChangeLangService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ChangeLangService,
        factory: ChangeLangService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangeLangService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "hk8l":
    /*!************************************************************************!*\
      !*** ./src/app/view/productMod/product-item/product-item.component.ts ***!
      \************************************************************************/

    /*! exports provided: ProductItemComponent */

    /***/
    function hk8l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function () {
        return ProductItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/sharedServices */
      "nyYE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../layout/footer/footer.component */
      "kVkw");

      function ProductItemComponent_div_0_h1_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.productData.titleEn, " ");
        }
      }

      function ProductItemComponent_div_0_h1_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.productData.title, " ");
        }
      }

      function ProductItemComponent_div_0_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.productData.EnDes, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function ProductItemComponent_div_0_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r4.productData.Des, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function ProductItemComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductItemComponent_div_0_h1_2_Template, 2, 1, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductItemComponent_div_0_h1_3_Template, 2, 1, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProductItemComponent_div_0_div_9_Template, 1, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductItemComponent_div_0_div_10_Template, 1, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changelngServ.local_lenguage == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changelngServ.local_lenguage == "ar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.productData.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changelngServ.local_lenguage == "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changelngServ.local_lenguage == "ar");
        }
      }

      var ProductItemComponent = /*#__PURE__*/function () {
        function ProductItemComponent(prodServ, route, changelngServ) {
          _classCallCheck(this, ProductItemComponent);

          this.prodServ = prodServ;
          this.route = route;
          this.changelngServ = changelngServ;
          this.fetchData = false;
          this.Arabicproduct = [];
        }

        _createClass(ProductItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            var productIndex = this.route.snapshot.params.id;
            this.getProductData(function () {
              _this12.fetchData = true;
              _this12.productData = _this12.Arabicproduct[productIndex];
            });
          }
        }, {
          key: "getProductData",
          value: function getProductData(callback) {
            this.Arabicproduct = this.prodServ.getproductData();
            callback();
          }
        }]);

        return ProductItemComponent;
      }();

      ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) {
        return new (t || ProductItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_1__["ChangeLangService"]));
      };

      ProductItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductItemComponent,
        selectors: [["app-product-item"]],
        decls: 3,
        vars: 2,
        consts: [["class", "prodItem", 4, "ngIf"], [1, "noisy"], [3, "footerPostion"], [1, "prodItem"], [1, "headingDiv"], [4, "ngIf"], [1, "HLineDiv"], [1, "ImgDiv"], ["alt", "", 3, "src"], [1, "textDiv"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"]],
        template: function ProductItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductItemComponent_div_0_Template, 11, 5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fetchData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footerPostion", 5);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        styles: [".prodItem[_ngcontent-%COMP%] {\n  \n  \n  padding-top: 15%;\n  z-index: 3;\n  position: relative;\n}\n\n.noisy[_ngcontent-%COMP%] {\n  background-image: url('noisy-texture-300x300-o3-d10-c-111111-t0.png');\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\n.headingDiv[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.headingDiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: Cinzel;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 2.13;\n  text-transform: none;\n  color: whitesmoke;\n  font-size: 60px;\n}\n\n.HLineDiv[_ngcontent-%COMP%] {\n  display: block;\n  width: 150px;\n  height: 1px;\n  background-color: #8f8e8e;\n  margin: 0 auto;\n  margin-bottom: 5%;\n}\n\n.ImgDiv[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  margin: 0 auto;\n  text-align: center;\n  padding-bottom: 5em;\n}\n\n.ImgDiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1000px;\n  height: 500px;\n  max-width: 1000px;\n  max-height: 500px;\n  object-fit: cover;\n}\n\n.textDiv[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: start;\n  padding: 0% 18% 10% 18%;\n}\n\n.textDiv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-family: \"El Messiri\";\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 1.9;\n  text-transform: none;\n  color: whitesmoke;\n  font-size: 27px;\n}\n\n@media only screen and (max-width: 770px) {\n  .prodItem[_ngcontent-%COMP%] {\n    padding-top: 48%;\n  }\n\n  .headingDiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n\n  .ImgDiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 250px;\n    height: 200px;\n  }\n\n  .textDiv[_ngcontent-%COMP%] {\n    padding: 0% 13% 10% 10%;\n  }\n\n  .textDiv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9wcm9kdWN0TW9kL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtpQkFBQTtFQUVBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNHLHFFQUFBO0VBQ0EsZUFBQTtFQUNDLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUdSOztBQUFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBSEk7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUtSOztBQUZBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFLSjs7QUFISTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFLUjs7QUFEQTtFQUNFO0lBQ0UsZ0JBQUE7RUFJRjs7RUFGRjtJQUNFLGVBQUE7RUFLQTs7RUFIRjtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBTUE7O0VBSkY7SUFDRSx1QkFBQTtFQU9BOztFQUxGO0lBQ0UsZUFBQTtFQVFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3L3Byb2R1Y3RNb2QvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kSXRlbXtcclxuICAgIC8qIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2VlZWNlNjsgKi9cclxuICAgIHBhZGRpbmctdG9wOiAxNSU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5ub2lzeSB7XHJcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL25vaXN5LXRleHR1cmUtMzAweDMwMC1vMy1kMTAtYy0xMTExMTEtdDAucG5nJyk7XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4uaGVhZGluZ0RpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBDaW56ZWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjEzO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIH1cclxufVxyXG4uSExpbmVEaXZ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhmOGU4ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuLkltZ0RpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNWVtO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxufVxyXG4udGV4dERpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAwJSAxOCUgMTAlIDE4JTtcclxuXHJcbiAgICBkaXZ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdFbCBNZXNzaXJpJztcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpe1xyXG4gIC5wcm9kSXRlbSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDglO1xyXG59XHJcbi5oZWFkaW5nRGl2IGgxIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuLkltZ0RpdiBpbWcge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi50ZXh0RGl2IHtcclxuICBwYWRkaW5nOiAwJSAxMyUgMTAlIDEwJTtcclxufVxyXG4udGV4dERpdiBkaXYge1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxufVxyXG5cclxuXHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-item',
            templateUrl: './product-item.component.html',
            styleUrls: ['./product-item.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: src_app_core_sharedServices__WEBPACK_IMPORTED_MODULE_1__["ChangeLangService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kSKM":
    /*!********************************************************!*\
      !*** ./src/app/core/sharedServices/product.service.ts ***!
      \********************************************************/

    /*! exports provided: ProductService */

    /***/
    function kSKM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return ProductService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProductService = /*#__PURE__*/function () {
        function ProductService() {
          _classCallCheck(this, ProductService);

          this.ArProducts = [{
            id: 1,
            ArId: '۱',
            image: "../../../assets/products/kyrminaRoller.jpeg",
            title: " السلندرات و الدرافيل",
            titleEn: "Cylinders and rollers",
            EnDes: "<p>We process cylinder cladding and rubber rollers with all kinds of raw materials, whether natural or industrial rubber or ebonite (EPDM) with the highest accuracy and the highest level of finishing.\n        For all types of factories and all sizes up to 7 meters and diameters up to 1 m.\n        Used in the fields: <br>\n        1. Offset printing (web-sheet) for printing newspapers, magazines and commercial publications <br>\n        2. Tinplate printing <br>\n        3. Cardboard Printing (Roller Print-Federroll) <br>\n        4. Dyeing and Finishing<br>\n        5. Tanning and leather <br>\n        6. Plastic printing factories (flexo-film-pulling-scissors)<br>\n        7. Wood factories (rollers, grays, sandpaper.....) <br>\n        8. Foam and foil factories (rolling and forming)<br>\n        9. Medical tube printing factories <br>\n        10. Tissue Paper Factories<br>\n        11. Paper manufacturing plants<br>\n        </p>",
            Des: "<p>\u0646\u0642\u0648\u0645 \u0628\u0639\u0645\u0644\u064A\u0629 \u0643\u0633\u0648\u0629 \u0627\u0644\u0633\u0644\u0646\u062F\u0631\u0627\u062A \u0648 \u0627\u0644\u062F\u0631\u0627\u0641\u064A\u0644 \u0627\u0644\u0643\u0627\u0648\u062A\u0634\u0648\u0643 \u0628\u062C\u0645\u064A\u0639 \u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u062E\u0627\u0645\u0627\u062A \u0633\u0648\u0627\u0621 \u0627\u0644\u0637\u0628\u064A\u0639\u064A \u0627\u0648 \u0627\u0644\u0643\u0627\u0648\u062A\u0634 \u0627\u0644\u0635\u0646\u0627\u0639\u064A \u0627\u0648 \u062E\u0627\u0645\u0629 \u0627\u0644\u0627\u0628\u0648\u0646\u064A\u062A (EPDM) \u0628\u0627\u0639\u0644\u064A \u062F\u0642\u0629 \u0648 \u0627\u0639\u0644\u064A \u0645\u0633\u062A\u0648\u064A \u0645\u0646 \u0627\u0644\u062A\u0634\u0637\u064A\u0628 .\n        \u0644\u062C\u0645\u064A\u0639 \u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u0645\u0635\u0627\u0646\u0639 \u0648 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0642\u0627\u0633\u0627\u062A \u062D\u062A\u064A 7 \u0645\u062A\u0631 \u0648 \u0627\u0642\u0637\u0627\u0631 \u062D\u062A\u064A 1\u0645 .\n        \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629 \u0641\u064A \u0627\u0644\u0645\u062C\u0627\u0644\u0627\u062A: <br>\n        1. \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0627\u0648\u0641\u0633\u062A(\u0648\u064A\u0628-\u0634\u064A\u062A) \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0635\u062D\u0641 \u0648 \u0627\u0644\u0645\u062C\u0644\u0627\u062A \u0648 \u0627\u0644\u0645\u0637\u0628\u0648\u0639\u0627\u062A \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 <br>\n        2. \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0635\u0641\u064A\u062D <br>\n        3. \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0643\u0631\u062A\u0648\u0646(\u062F\u0631\u0627\u0641\u064A\u0644 \u0637\u0628\u0627\u0639\u0629-\u0641\u064A\u062F\u0631\u0631\u0648\u0644) <br>\n        4. \u0627\u0644\u0635\u0628\u0627\u063A\u0629 \u0648 \u0627\u0644\u062A\u062C\u0647\u064A\u0632<br>\n        5. \u0627\u0644\u062F\u0628\u0627\u063A\u0629 \u0648 \u0627\u0644\u062C\u0644\u0648\u062F  <br>\n        6. \u0645\u0635\u0627\u0646\u0639 \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u0644\u0627\u0633\u062A\u064A\u0643(\u0641\u0644\u0643\u0633\u0648-\u0633\u062D\u0628 \u0627\u0644\u0641\u064A\u0644\u0645-\u0627\u0644\u0645\u0642\u0635\u0627\u062A)<br>\n        7. \u0645\u0635\u0627\u0646\u0639 \u0627\u0644\u0627\u062E\u0634\u0627\u0628(\u062F\u0631\u0627\u0641\u064A\u0644 \u063A\u0631\u0627\u064A\u0627\u062A-\u0635\u0646\u0641\u0631\u0629.....)<br>\n        8. \u0645\u0635\u0627\u0646\u0639 \u0627\u0644\u0641\u0648\u0645 \u0648 \u0627\u0644\u0641\u0648\u064A\u0644(\u062F\u0631\u0627\u0641\u064A\u0644 \u0627\u0644\u0633\u062D\u0628 \u0648 \u0627\u0644\u062A\u0634\u0643\u064A\u0644)<br>\n        9. \u0645\u0635\u0627\u0646\u0639 \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0627\u0646\u0627\u0628\u064A\u0628 \u0627\u0644\u0637\u0628\u064A\u0629 <br>\n        10. \u0645\u0635\u0627\u0646\u0639 \u0627\u0644\u0645\u0646\u0627\u062F\u064A\u0644 \u0627\u0644\u0648\u0631\u0642\u064A\u0629<br>\n        11. \u0645\u0635\u0627\u0646\u0639 \u062A\u0635\u0646\u064A\u0639 \u0627\u0644\u0648\u0631\u0642<br>\n        </p>\n        "
          }, {
            id: 2,
            ArId: '۲',
            image: "../../../assets/products/Compression.jpg",
            title: "المكبوسات والمسحوبات",
            titleEn: "Compressions & towing",
            EnDes: "<h2> <p> Compress</h2>\n        Casting all kinds of compresses from all kinds of raw materials, whether natural, synthetic, silicone or EPDM.\n        We have all the shapes and sizes required by the needs of factories, whether (pulleys - special formations - wheels - gaskets - vacuum rubber - rubber bases - ..... any shape wherever). <br><br>\n\n        <h2>Withdrawals</h2>\n        Withdrawing all types of profiles, whether rubber or plastic, from all materials such as (natural_industrial-EPDM-PVC).\n        </p>",
            Des: "<h2> <p> \u0627\u0644\u0645\u0643\u0628\u0648\u0633\u0627\u062A</h2>\n        \u0635\u0628 \u062C\u0645\u064A\u0639 \u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u0645\u0643\u0628\u0648\u0633\u0627\u062A \u0645\u0646 \u062C\u0645\u064A\u0639 \u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u062E\u0627\u0645\u0627\u062A \u0633\u0648\u0627\u0621 \u0627\u0644\u0637\u0628\u064A\u0639\u064A \u0627\u0648 \u0627\u0644\u0635\u0646\u0627\u0639\u064A \u0627\u0648 \u0627\u0644\u0633\u064A\u0644\u0643\u0648\u0646 \u0627\u0648 EPDM .\n        \u064A\u062A\u0648\u0641\u0631 \u0644\u062F\u064A\u0646\u0627 \u062C\u0645\u064A\u0639 \u0627\u0644\u0627\u0634\u0643\u0627\u0644 \u0648 \u0627\u0644\u0645\u0642\u0627\u0633\u0627\u062A \u0627\u0644\u062A\u064A \u064A\u062A\u0637\u0644\u0628\u0647\u0627 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u0627\u0644\u0645\u0635\u0627\u0646\u0639 \u0633\u0648\u0627\u0621 (\u0628\u0643\u0631\u0647 - \u062A\u0634\u0643\u064A\u0644\u0627\u062A \u062E\u0627\u0635\u0629 - \u0639\u062C\u0644\u0627\u062A - \u062C\u0648\u0627\u0646\u0627\u062A \u2013 \u0643\u0627\u0648\u062A\u0634 \u0641\u0627\u0643\u064A\u0648\u0645- \u0642\u0648\u0627\u0639\u062F \u0643\u0627\u0648\u062A\u0634 - .....\u0627\u064A \u0634\u0643\u0644 \u0627\u064A\u0646 \u0643\u0627\u0646). <br><br>\n\n        <h2>\u0627\u0644\u0645\u0633\u062D\u0648\u0628\u0627\u062A </h2>\n        \u0633\u062D\u0628 \u062C\u0645\u064A\u0639 \u0627\u0646\u0648\u0627\u0639 \u0627\u0644\u0628\u0631\u0648\u0641\u064A\u0644\u0627\u062A \u0633\u0648\u0627\u0621 \u0643\u0627\u0648\u062A\u0634 \u0627\u0648 \u0628\u0644\u0627\u0633\u062A\u064A\u0643 \u0645\u0646 \u062C\u0645\u064A\u0639 \u0627\u0644\u062E\u0627\u0645\u0627\u062A \u0645\u062B\u0644 (\u0627\u0644\u0637\u0628\u064A\u0639\u064A_\u0627\u0644\u0635\u0646\u0627\u0639\u064A-EPDM-PVC).\n        </p>\n        "
          }, {
            id: 3,
            ArId: '۳',
            image: "../../../assets/products/copyimg3.jpg",
            title: "التبطين بالكاوتشوك",
            titleEn: "Rubber lining",
            EnDes: "<p>\n        We do the lining process for all tanks, basins and pipes of phosphate factories production lines and all chemicals with rubber and ebonite raw materials with the latest technologies, whether cold or steam, whether in our factories or inside the factories themselves\n        </p>",
            Des: "<p>\n        \u0646\u0642\u0648\u0645 \u0628\u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u0628\u0637\u064A\u0646 \u0644\u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u0646\u0643\u0627\u062A \u0648 \u0627\u0644\u0627\u062D\u0648\u0627\u0636 \u0648 \u0645\u0648\u0627\u0633\u064A\u0631 \u062E\u0637\u0648\u0637 \u0627\u0646\u062A\u0627\u062C \u0645\u0635\u0627\u0646\u0639 \u0627\u0644\u0641\u0648\u0633\u0641\u0627\u062A \u0648 \u062C\u0645\u064A\u0639 \u0627\u0644\u0643\u064A\u0645\u0627\u0648\u064A\u0627\u062A \u0628\u062E\u0627\u0645\u0627\u062A \u0627\u0644\u0643\u0627\u0648\u062A\u0634\u0648\u0643 \u0648 \u0627\u0644\u0627\u0628\u0648\u0646\u064A\u062A \u0628\u0623\u062D\u062F\u062B \u062A\u0642\u0646\u064A\u0627\u062A \u0633\u0648\u0627\u0621 \u0639\u0644\u064A \u0627\u0644\u0628\u0627\u0631\u062F \u0627\u0648 \u0628\u0627\u0644\u0628\u062E\u0627\u0631 \u0633\u0648\u0627\u0621 \u0641\u064A \u0645\u0635\u0627\u0646\u0639\u0646\u0627 \u0627\u0648 \u062F\u0627\u062E\u0644 \u0627\u0644\u0645\u0635\u0627\u0646\u0639 \u0646\u0641\u0633\u0647\u0627\n        </p>\n        "
          }, {
            id: 4,
            ArId: '٤',
            image: "https://gtk.ch/wp-content/uploads/2021/03/RMP_1-1630x860.jpg",
            title: " الدرافيل المعدنية",
            titleEn: "Metal rollers",
            EnDes: "<p>\n        We manufacture rolls or metal cylinders used in all factories, and we also paint them with hard chrome, nickel chrome or the galvanizing process. <br>\n        She is distinguished in the manufacture of rollers: <br><br>\n        1- Analox used in flexo printing, whether 80 or 100 nets. <br>\n        2- Starch rolls used in carton factories. <br>\n        3- Hardchrome rolls used in plastic factories. <br>\n        4- Re-painting factory spare parts with hard chrome, such as: fetching - caulk - wick in plastic factories. <br>\n        5- Manufacture of all printing cylinders or sets of scissors for plastic factories. <br>\n        </p>",
            Des: "<p>\n        \u0646\u0642\u0648\u0645 \u0628\u062A\u0635\u0646\u064A\u0639 \u0627\u0644\u062F\u0631\u0627\u0641\u064A\u0644 \u0627\u0648 \u0627\u0644\u0633\u0644\u0646\u062F\u0631\u0627\u062A \u0627\u0644\u062D\u062F\u064A\u062F \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629 \u0641\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0635\u0627\u0646\u0639 \u0648\u0627\u064A\u0636\u0627 \u0646\u0642\u0648\u0645 \u0628\u0637\u0644\u0627\u0626\u0647\u0627 \u0628\u0627\u0644\u0647\u0627\u0631\u062F \u0643\u0631\u0648\u0645 \u0627\u0648 \u0627\u0644\u0646\u064A\u0643\u0644 \u0643\u0631\u0648\u0645 \u0627\u0648 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062C\u0644\u0641\u0646\u0629 . <br>\n        \u0648 \u062A\u062A\u0645\u064A\u0632 \u0641\u064A \u0635\u0646\u0627\u0639\u0629 \u062F\u0631\u0627\u0641\u064A\u0644 : <br><br>\n        1-\t \u0627\u0644\u0627\u0646\u0627\u0644\u0648\u0643\u0633 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629 \u0641\u064A \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0641\u0644\u0643\u0633\u0648 \u0633\u0648\u0627\u0621 \u0627\u0644\u0634\u0628\u0627\u0643\u0627\u062A 80 \u0627\u0648 100. <br>\n        2-\t \u062F\u0631\u0627\u0641\u064A\u0644 \u0627\u0644\u0646\u0634\u0627 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629 \u0641\u064A \u0645\u0635\u0627\u0646\u0639 \u0627\u0644\u0643\u0627\u0631\u062A\u0648\u0646. <br>\n        3-\t \u062F\u0631\u0627\u0641\u064A\u0644 \u0627\u0644\u0647\u0627\u0631\u062F\u0643\u0631\u0648\u0645 \u0627\u0644\u0633\u062A\u062E\u062F\u0645\u0629 \u0641\u064A \u0645\u0635\u0627\u0646\u0639 \u0627\u0644\u0628\u0644\u0627\u0633\u062A\u064A\u0643. <br>\n        4- \u0627\u0639\u0627\u062F\u0629 \u0637\u0644\u0627\u0621 \u0642\u0637\u0639 \u063A\u064A\u0627\u0631 \u0627\u0644\u0645\u0635\u0627\u0646\u0639 \u0628\u0627\u0644\u0647\u0627\u0631\u062F\u0643\u0631\u0648\u0645 \u0645\u062B\u0644:\u0627\u0644\u062C\u0644\u0628 -\u0627\u0644\u0635\u0628\u0627\u0628 -\u0627\u0644\u0641\u062A\u064A\u0644 \u0641\u064A \u0645\u0635\u0627\u0646\u0639 \u0627\u0644\u0628\u0644\u0627\u0633\u062A\u064A\u0643. <br>\n        5- \u062A\u0635\u0646\u064A\u0639 \u062C\u0645\u064A\u0639 \u0633\u0644\u0646\u062F\u0631\u0627\u062A \u0627\u0644\u0637\u0628\u0627\u0639\u0629 \u0627\u0648 \u0627\u0637\u0642\u0645 \u0627\u0644\u0645\u0642\u0635\u0627\u062A \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0645\u0635\u0627\u0646\u0639 \u0627\u0644\u0628\u0644\u0627\u0633\u062A\u064A\u0643. <br>\n        </p>\n        "
          }, {
            id: 5,
            ArId: '۵',
            image: "../../../assets/products/EGB-DAL-01.jpg",
            title: "سلندرات السيليكون",
            titleEn: "Silicon rollers",
            EnDes: "<p>\n        This material is characterized by withstanding high temperatures up to 350 degrees, acid concentrations of up to 90%, and exposure to ultraviolet rays. <br>\n        - Used in trade <br>\n        - Processing cylinders used in plastic factories<br>\n        - Processing cylinders used in textile factories<br>\n        - Thermal cellophane cylinders<br>\n        Factory spare parts<br>",
            Des: "<p>\n        \u062A\u062A\u0645\u064A\u0632 \u0647\u0630\u0629 \u0627\u0644\u062E\u0627\u0645\u0629 \u0628\u062A\u062D\u0645\u0644 \u062F\u0631\u062C\u0627\u062A \u0627\u0644\u062D\u0631\u0627\u0631\u0629 \u0627\u0644\u0639\u0627\u0644\u064A\u0629 \u062A\u0635\u0644 \u0627\u0644\u064A 350 \u062F\u0631\u062C\u0629 \u0648 \u062A\u062A\u062D\u0645\u0644 \u062A\u0631\u0643\u064A\u0632 \u0627\u062D\u0645\u0627\u0636 \u062A\u0635\u0644 \u0627\u0644\u064A 90% \u0648 \u062A\u062A\u0639\u0631\u0636 \u0644\u0644\u0627\u0634\u0639\u0629 \u0641\u0648\u0642 \u0627\u0644\u0628\u0646\u0641\u0633\u062C\u064A\u0629. <br>\n        - \u062A\u0633\u062A\u062E\u062F\u0645 \u0641\u064A tradement   <br>\n        - \u0633\u0644\u0646\u062F\u0631\u0627\u062A \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629 \u0641\u064A \u0645\u0635\u0627\u0646\u0639 \u0627\u0644\u0628\u0644\u0627\u0633\u062A\u064A\u0643<br>\n        - \u0633\u0644\u0646\u062F\u0631\u0627\u062A \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629 \u0641\u064A \u0645\u0635\u0627\u0646\u0639 \u0627\u0644\u0646\u0633\u064A\u062C<br>\n        - \u0633\u0644\u0646\u062F\u0631\u0627\u062A \u0627\u0644\u0633\u0648\u0644\u0641\u0627\u0646 \u0627\u0644\u062D\u0631\u0627\u0631\u064A<br>\n        - \u0642\u0637\u0639 \u063A\u064A\u0627\u0631 \u0627\u0644\u0645\u0635\u0627\u0646\u0639<br>\n\n        "
          }, {
            id: 6,
            ArId: '٦',
            image: "../../../assets/products/polyKyrmina.jpeg",
            title: "البولي يوريثان",
            titleEn: "polyurethane rollers",
            EnDes: "<p>\n        This material is characterized by superior strength to withstand pressures and friction and is used in\n        Cylinder cover, rollers, pulleys and wheels\n         In the areas of: <br>\n        * Presses <br>\n        * Metal Forming Factories <br>\n        * Wood Factories <br>\n        * Leather tanning<br>\n        * Metal galvanizing<br>\n        * Dyeing and Finishing <br>\n        * Plastic factories<br>\n        </p>",
            Des: "<p>\n        \u062A\u062A\u0645\u064A\u0632 \u0647\u0630\u0647 \u0627\u0644\u062E\u0627\u0645\u0629 \u0628\u0642\u0648\u0629 \u0641\u0627\u0626\u0642\u0629 \u0644\u062A\u062D\u0645\u0644 \u0627\u0644\u0636\u063A\u0648\u0637 \u0648 \u0627\u0644\u0627\u062D\u062A\u0643\u0627\u0643 \u0648 \u062A\u0633\u062A\u062E\u062F\u0645 \u0641\u064A\n        \u0643\u0633\u0648\u0629 \u0627\u0644\u0633\u0644\u0646\u062F\u0631\u0627\u062A \u0648 \u0627\u0644\u062F\u0631\u0627\u0641\u064A\u0644 \u0648 \u0627\u0644\u0628\u0643\u0631\u0627\u062A \u0648 \u0627\u0644\u0639\u062C\u0644\n         \u0641\u064A \u0645\u062C\u0627\u0644\u0627\u062A : <br>\n        * \u0627\u0644\u0645\u0637\u0627\u0628\u0639 <br>\n        * \u0645\u0635\u0627\u0646\u0639 \u062A\u0634\u0643\u064A\u0644 \u0627\u0644\u0645\u0639\u0627\u062F\u0646 <br>\n        * \u0645\u0635\u0627\u0646\u0639 \u0627\u0644\u0627\u062E\u0634\u0627\u0628 <br>\n        * \u062F\u0628\u0627\u063A\u0629 \u0627\u0644\u062C\u0644\u0648\u062F<br>\n        * \u062C\u0644\u0641\u0646\u0629 \u0627\u0644\u0645\u0639\u0627\u062F\u0646<br>\n        * \u0627\u0644\u0635\u0628\u0627\u063A\u0629 \u0648 \u0627\u0644\u062A\u062C\u0647\u064A\u0632 <br>\n        * \u0645\u0635\u0627\u0646\u0639 \u0627\u0644\u0628\u0644\u0627\u0633\u062A\u064A\u0643<br>\n        </p>\n        "
          }];
        }

        _createClass(ProductService, [{
          key: "getproductData",
          value: function getproductData() {
            return this.ArProducts;
          }
        }]);

        return ProductService;
      }();

      ProductService.ɵfac = function ProductService_Factory(t) {
        return new (t || ProductService)();
      };

      ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProductService,
        factory: ProductService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "kVkw":
    /*!***************************************************!*\
      !*** ./src/app/layout/footer/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function kVkw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent(router, translate) {
          _classCallCheck(this, FooterComponent);

          this.router = router;
          this.translate = translate;
          this.footerPostion = "1";
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            /* ---- set footer postion ---- */
            if (this.footerPostion == "1") {
              $('.FooterNav').css("bottom", "0");
              $('.FooterNav').css("position", "absolute");
              $('.FooterNav .footerDiv h3').css("color", "rgba(255, 255, 255, 0.5)");
              $('.FooterNav .footerDiv h3 span').css("color", "white");
              $('.socialDiv i').css("color", "rgba(255, 255, 255, 0.5)");
            } else if (this.footerPostion == "2") {
              $('.FooterNav').css("position", "relative");
              $('.FooterNav .footerDiv h3').css("color", "#373737");
              $('.FooterNav .footerDiv h3 span').css("color", "black");
              $('.socialDiv i').css("color", "#373737");
            } else if (this.footerPostion == "3") {
              $('.FooterNav').css("bottom", "unset");
              $('.FooterNav').css("position", "absolute");
              $('.FooterNav .footerDiv h3').css("color", "rgba(255, 255, 255, 0.5)");
              $('.FooterNav .footerDiv h3 span').css("color", "white");
              $('.socialDiv i').css("color", "rgba(255, 255, 255, 0.5)");
            } else if (this.footerPostion == "4") {
              $('.FooterNav').css("bottom", "0");
              $('.FooterNav').css("position", "absolute");
              $('.FooterNav .footerDiv h3').css("color", "rgba(255, 255, 255, 0.5)");
              $('.FooterNav .footerDiv h3 span').css("color", "white");
              $('.socialDiv i').css("color", "rgba(255, 255, 255, 0.5)");
            } else if (this.footerPostion == "5") {
              $('.FooterNav').css("position", "relative");
              $('.FooterNav .footerDiv h3').css("color", "rgba(255, 255, 255, 0.5)");
              $('.FooterNav .footerDiv h3 span').css("color", "white");
              $('.socialDiv i').css("color", "rgba(255, 255, 255, 0.5)");
            }
          }
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        inputs: {
          footerPostion: "footerPostion"
        },
        decls: 11,
        vars: 6,
        consts: [["id", "FooterNav", 1, "FooterNav"], [1, "footerDiv"], [1, "socialDiv"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-instagram"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "FOOTER.BY"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "FOOTER.NAME"));
          }
        },
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
        styles: [".FooterNav[_ngcontent-%COMP%] {\n  right: 0;\n  width: 100%;\n  z-index: 8;\n}\n.FooterNav[_ngcontent-%COMP%]   .footerDiv[_ngcontent-%COMP%] {\n  background: transparent;\n  width: 100%;\n  text-align: end;\n  display: flex;\n  justify-content: flex-end;\n  z-index: 5;\n  padding: 1% 7%;\n}\n.FooterNav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Krona One\", sans-serif;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 11px;\n  padding-right: 1%;\n  width: 300px;\n  margin: auto 0;\n}\n.FooterNav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 11px;\n}\n.FooterNav[_ngcontent-%COMP%]   .socialDiv[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.FooterNav[_ngcontent-%COMP%]   .socialDiv[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 23px;\n  margin: 0 29%;\n}\n  .rtl .FooterNav h3 {\n  font-family: \"Cairo\" !important;\n}\n  .rtl .FooterNav h3 span {\n  margin: 0% 3% !important;\n}\n@media only screen and (min-width: 1600px) {\n  .FooterNav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-family: \"Krona One\", sans-serif;\n    color: rgba(255, 255, 255, 0.5);\n    font-size: 16px;\n    padding-right: 1%;\n  }\n  .FooterNav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .FooterNav[_ngcontent-%COMP%]   .socialDiv[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.5);\n    font-size: 25px;\n    margin: 0 29%;\n  }\n}\n@media only screen and (max-width: 770px) {\n  .FooterNav[_ngcontent-%COMP%] {\n    right: 39px;\n    width: 100%;\n    z-index: 8;\n    bottom: 7px !important;\n  }\n\n    .rtl .FooterNav {\n    padding-left: 17%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDSjtBQUFJO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBRVI7QUFFSTtFQUNJLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFSO0FBQ1E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUNaO0FBRUk7RUFDRyxvQkFBQTtBQUFQO0FBQ1E7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQ1o7QUFPWTtFQUNJLCtCQUFBO0FBSmhCO0FBS2dCO0VBQ0ksd0JBQUE7QUFIcEI7QUFVQTtFQUVRO0lBQ0ksb0NBQUE7SUFDQSwrQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQVJWO0VBVVU7SUFDSSxlQUFBO0VBUmQ7RUFhUTtJQUNFLCtCQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7RUFYVjtBQUNGO0FBb0JBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxzQkFBQTtFQWxCRjs7RUF1QkU7SUFDRSxpQkFBQTtFQXBCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuRm9vdGVyTmF2e1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDg7XHJcbiAgICAuZm9vdGVyRGl2e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICBwYWRkaW5nOiAxJSA3JTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaDN7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiS3JvbmEgT25lXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMSU7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zb2NpYWxEaXZ7XHJcbiAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBpe1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAyOSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjo6bmctZGVlcHtcclxuICAgIC5ydGx7XHJcbiAgICAgICAgLkZvb3Rlck5hdntcclxuXHJcbiAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDYWlybycgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwJSAzJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgLkZvb3Rlck5hdntcclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiS3JvbmEgT25lXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMSU7XHJcblxyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc29jaWFsRGl2e1xyXG4gICAgICAgICAgaXtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMjklO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCl7XHJcbiAgLkZvb3Rlck5hdntcclxuICAgIHJpZ2h0OiAzOXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA4O1xyXG4gICAgYm90dG9tOiA3cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwe1xyXG4gIC5ydGx7XHJcbiAgICAuRm9vdGVyTmF2e1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE3JTtcclxuICAgIH1cclxuICB9XHJcbn1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
          }];
        }, {
          footerPostion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "nyYE":
    /*!**********************************************!*\
      !*** ./src/app/core/sharedServices/index.ts ***!
      \**********************************************/

    /*! exports provided: HomeService, AboutService, ProductService, SharedLangService, ChangeLangService */

    /***/
    function nyYE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.service */
      "CZPe");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HomeService", function () {
        return _home_service__WEBPACK_IMPORTED_MODULE_0__["HomeService"];
      });
      /* harmony import */


      var _about_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./about.service */
      "D71G");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AboutService", function () {
        return _about_service__WEBPACK_IMPORTED_MODULE_1__["AboutService"];
      });
      /* harmony import */


      var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./product.service */
      "kSKM");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"];
      });
      /* harmony import */


      var _sharedlang_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sharedlang.service */
      "YGKV");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SharedLangService", function () {
        return _sharedlang_service__WEBPACK_IMPORTED_MODULE_3__["SharedLangService"];
      });
      /* harmony import */


      var _changeLng_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./changeLng.service */
      "b/8Y");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ChangeLangService", function () {
        return _changeLng_service__WEBPACK_IMPORTED_MODULE_4__["ChangeLangService"];
      });
      /***/

    },

    /***/
    "pKmL":
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /*! exports provided: CoreModule */

    /***/
    function pKmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _sharedServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sharedServices */
      "nyYE");

      var CoreModule = function CoreModule() {
        _classCallCheck(this, CoreModule);
      };

      CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CoreModule_Factory(t) {
          return new (t || CoreModule)();
        },
        providers: [_sharedServices__WEBPACK_IMPORTED_MODULE_1__["HomeService"], _sharedServices__WEBPACK_IMPORTED_MODULE_1__["AboutService"], _sharedServices__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _sharedServices__WEBPACK_IMPORTED_MODULE_1__["SharedLangService"], _sharedServices__WEBPACK_IMPORTED_MODULE_1__["ChangeLangService"]],
        imports: [[]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [],
            providers: [_sharedServices__WEBPACK_IMPORTED_MODULE_1__["HomeService"], _sharedServices__WEBPACK_IMPORTED_MODULE_1__["AboutService"], _sharedServices__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _sharedServices__WEBPACK_IMPORTED_MODULE_1__["SharedLangService"], _sharedServices__WEBPACK_IMPORTED_MODULE_1__["ChangeLangService"]],
            declarations: [],
            exports: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _view_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view/about/about.component */
      "LDuB");
      /* harmony import */


      var _view_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view/contact/contact.component */
      "2hwp");
      /* harmony import */


      var _view_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./view/home/home.component */
      "FdTb");
      /* harmony import */


      var _view_productMod_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view/productMod/product-item/product-item.component */
      "hk8l");
      /* harmony import */


      var _view_productMod_products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./view/productMod/products/products.component */
      "CchL");

      var routes = [{
        path: '',
        redirectTo: "Home",
        pathMatch: 'full'
      }, {
        path: 'Home',
        component: _view_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
      }, {
        path: 'About',
        component: _view_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
      }, {
        path: 'Product',
        component: _view_productMod_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"]
      }, {
        path: 'Productitem/:id',
        component: _view_productMod_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_5__["ProductItemComponent"]
      }, {
        path: 'Contact',
        component: _view_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map