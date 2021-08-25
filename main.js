(self["webpackChunklift_tracker"] = self["webpackChunklift_tracker"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_exercises_exercise_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/exercises/exercise-detail.component */ 1250);
/* harmony import */ var _components_exercises_exercises_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/exercises/exercises-list.component */ 6631);
/* harmony import */ var _components_workouts_workout_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/workouts/workout-detail.component */ 5499);






const routes = [
    { path: '', component: _components_exercises_exercises_list_component__WEBPACK_IMPORTED_MODULE_1__.ExercisesListComponent },
    { path: ':exerciseId', component: _components_exercises_exercise_detail_component__WEBPACK_IMPORTED_MODULE_0__.ExerciseDetailComponent },
    { path: ':exerciseId/:workoutId', component: _components_workouts_workout_detail_component__WEBPACK_IMPORTED_MODULE_2__.WorkoutDetailComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



let AppComponent = class AppComponent {
    constructor() { }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _components_exercises_exercises_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/exercises/exercises-list.component */ 6631);
/* harmony import */ var _services_exersice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/exersice.service */ 5532);
/* harmony import */ var _services_workout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/workout.service */ 3303);
/* harmony import */ var _services_set_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/set.service */ 3495);
/* harmony import */ var _components_exercises_exercise_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/exercises/exercise-detail.component */ 1250);
/* harmony import */ var _components_workouts_workouts_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/workouts/workouts-list.component */ 9920);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _components_workouts_workout_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/workouts/workout-detail.component */ 5499);
/* harmony import */ var _components_graphs_scatter_plot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/graphs/scatter-plot.component */ 7967);
















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _components_exercises_exercises_list_component__WEBPACK_IMPORTED_MODULE_2__.ExercisesListComponent,
            _components_exercises_exercise_detail_component__WEBPACK_IMPORTED_MODULE_6__.ExerciseDetailComponent,
            _components_workouts_workouts_list_component__WEBPACK_IMPORTED_MODULE_7__.WorkoutsListComponent,
            _components_workouts_workout_detail_component__WEBPACK_IMPORTED_MODULE_8__.WorkoutDetailComponent,
            _components_graphs_scatter_plot_component__WEBPACK_IMPORTED_MODULE_9__.ScatterPlotComponent
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicRouteStrategy },
            _services_exersice_service__WEBPACK_IMPORTED_MODULE_3__.ExerciseService,
            _services_workout_service__WEBPACK_IMPORTED_MODULE_4__.WorkoutService,
            _services_set_service__WEBPACK_IMPORTED_MODULE_5__.SetService
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 1250:
/*!*******************************************************************!*\
  !*** ./src/app/components/exercises/exercise-detail.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExerciseDetailComponent": () => (/* binding */ ExerciseDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_exercise_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./exercise-detail.component.html */ 4370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/workout.service */ 3303);
/* harmony import */ var _services_exersice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/exersice.service */ 5532);







let ExerciseDetailComponent = class ExerciseDetailComponent {
    constructor(exService, route, alertController, workoutService) {
        this.exService = exService;
        this.route = route;
        this.alertController = alertController;
        this.workoutService = workoutService;
        this.state = 'workouts';
        this.drawLine = true;
        this.propDates = false;
        this.statProp = 'volume';
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.exerciseId = params['exerciseId'];
            if (this.exerciseId) {
                this.getExercise();
            }
        });
    }
    add() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Lägg till',
                inputs: [
                    {
                        name: 'date',
                        type: 'date'
                    }
                ],
                buttons: [
                    {
                        text: 'Avbryt',
                        role: 'cancel',
                        handler: () => {
                        }
                    }, {
                        text: 'OK',
                        handler: (data) => {
                            if (data.date != '') {
                                let date = new Date(data.date);
                                this.workoutService.addWorkout({ exerciseId: this.exercise.exerciseId, date: date });
                                this.getExercise();
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteWorkout(workout) {
        this.workoutService.deleteWorkout(workout);
        this.getExercise();
    }
    getExercise() {
        this.exercise = this.exService.getExercise(this.exerciseId);
        this.updatePlot();
    }
    updatePlot() {
        this.data = [];
        while (this.data.length > 0) {
            this.data.splice(0, 1);
        }
        for (let w of this.exercise.workouts) {
            if (this.statProp == 'volume') {
                let volume = 0;
                for (let s of w.sets) {
                    volume += (s.weight * s.reps);
                }
                let p = { date: w.date, value: volume };
                this.data.push(p);
            }
            else if (this.statProp == 'maxWeight') {
                let max = 0;
                for (let s of w.sets) {
                    if (+s.weight > +max) {
                        max = s.weight;
                    }
                }
                let p = { date: w.date, value: max };
                this.data.push(p);
            }
            else if (this.statProp == 'maxReps') {
                let max = 0;
                for (let s of w.sets) {
                    if (+s.reps > +max) {
                        max = s.reps;
                    }
                }
                let p = { date: w.date, value: max };
                this.data.push(p);
            }
            else if (this.statProp == 'totalSets') {
                let p = { date: w.date, value: w.sets.length };
                this.data.push(p);
            }
            else if (this.statProp == 'totalReps') {
                let val = 0;
                for (let s of w.sets) {
                    val = +val + +s.reps;
                }
                let p = { date: w.date, value: val };
                this.data.push(p);
            }
        }
        if (this.plot) {
            this.plot.data = this.data;
            this.plot.draw();
        }
    }
};
ExerciseDetailComponent.ctorParameters = () => [
    { type: _services_exersice_service__WEBPACK_IMPORTED_MODULE_2__.ExerciseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_1__.WorkoutService }
];
ExerciseDetailComponent.propDecorators = {
    plot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['Plot',] }]
};
ExerciseDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'exercise-detail',
        template: _raw_loader_exercise_detail_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
], ExerciseDetailComponent);



/***/ }),

/***/ 6631:
/*!******************************************************************!*\
  !*** ./src/app/components/exercises/exercises-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExercisesListComponent": () => (/* binding */ ExercisesListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_exercises_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./exercises-list.component.html */ 2327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_exersice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/exersice.service */ 5532);





let ExercisesListComponent = class ExercisesListComponent {
    constructor(exService, alertController, actionSheetController) {
        this.exService = exService;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
    }
    ngOnInit() {
        this.exercises = this.exService.getExercises();
    }
    add() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Lägg till',
                inputs: [
                    {
                        name: 'name',
                        placeholder: 'Namn',
                        type: 'text'
                    }
                ],
                buttons: [
                    {
                        text: 'Avbryt',
                        role: 'cancel',
                        handler: () => {
                        }
                    }, {
                        text: 'OK',
                        handler: (data) => {
                            this.exService.addExercise({ name: data.name });
                            this.exercises = this.exService.getExercises();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    options(event, ex) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            event.preventDefault();
            event.stopPropagation();
            const actionSheet = yield this.actionSheetController.create({
                header: ex.name,
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Ta bort',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                            this.confirmation(ex);
                        }
                    }, {
                        text: 'Avbryt',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    confirmation(ex) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Vill du ta bort övningen "' + ex.name + '"?',
                buttons: [
                    {
                        text: 'Avbryt',
                        role: 'cancel',
                        handler: () => {
                        }
                    }, {
                        text: 'OK',
                        handler: () => {
                            this.exService.deleteExercise(ex.exerciseId);
                            this.exercises = this.exService.getExercises();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ExercisesListComponent.ctorParameters = () => [
    { type: _services_exersice_service__WEBPACK_IMPORTED_MODULE_1__.ExerciseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ActionSheetController }
];
ExercisesListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'exercises-list',
        template: _raw_loader_exercises_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
], ExercisesListComponent);



/***/ }),

/***/ 7967:
/*!*************************************************************!*\
  !*** ./src/app/components/graphs/scatter-plot.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScatterPlotComponent": () => (/* binding */ ScatterPlotComponent),
/* harmony export */   "Axis": () => (/* binding */ Axis)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_scatter_plot_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./scatter-plot.component.html */ 6186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let ScatterPlotComponent = class ScatterPlotComponent {
    constructor(platform, locale) {
        this.platform = platform;
        this.locale = locale;
        this.drawLine = true;
        this.propDates = false;
        this.PADDING = 50;
    }
    ngAfterViewInit() {
        this.canvas = this.canvasEl.nativeElement;
        this.canvas.width = this.platform.width();
        this.canvas.height = this.platform.width();
        this.context = this.canvas.getContext('2d');
        this.draw();
    }
    draw() {
        if (!this.data || this.data.length == 0) {
            return;
        }
        this.data = this.sortData();
        this.xAxis = new Axis(this.data, 1, false);
        this.yAxis = new Axis(this.data, 0, true);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let width = this.canvas.width - this.PADDING * 2;
        //this.context.fillStyle = "#000";
        //this.context.fillRect(0, 0, this.canvas.width, this.canvas.width);
        this.context.fillStyle = "#000";
        this.context.fillRect(this.PADDING, this.PADDING, 5, width);
        this.context.fillRect(this.PADDING, width + this.PADDING, width, 5);
        if (this.xAxis && this.yAxis) {
            let xInc = width / this.xAxis.numOfTicks;
            let yInc = width / this.yAxis.numOfTicks;
            if (this.propDates) {
                this.context.fillRect(this.PADDING, width + this.PADDING, 5, 17);
                this.context.strokeText((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(this.data[0].date, 'MMM dd', this.locale), this.PADDING - 10, width + 80);
                this.context.fillRect(width + this.PADDING, width + this.PADDING, 5, 17);
                this.context.strokeText((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(this.data[this.data.length - 1].date, 'MMM dd', this.locale), width + this.PADDING - 10, width + 80);
            }
            else {
                for (let i = 1; i < this.xAxis.numOfTicks + 1; i++) {
                    let x = this.PADDING + i * xInc;
                    this.context.fillStyle = '#777';
                    this.context.fillRect(x, this.PADDING, 1, width);
                    this.context.fillStyle = '#000';
                    this.context.fillRect(x - 2, width + this.PADDING - 10, 5, 25);
                    if (i < this.xAxis.numOfTicks) {
                        let index = (i - 1) * this.xAxis.tickSkip;
                        this.context.strokeText((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(this.data[index].date, 'MMM dd', this.locale), x - 10, width + 80);
                    }
                }
            }
            for (let i = 1; i < this.yAxis.numOfTicks + 1; i++) {
                let y = width + this.PADDING - i * yInc;
                this.context.fillStyle = '#777';
                this.context.fillRect(this.PADDING, y, width, 1);
                this.context.fillStyle = '#000';
                this.context.fillRect(this.PADDING - 10, y - 2, 25, 5);
                this.context.strokeText(this.yAxis.start + i * this.yAxis.tickSpacing, 10, y + 5);
            }
            let xScale = xInc / this.xAxis.tickSpacing;
            let yScale = yInc / this.yAxis.tickSpacing;
            let prev;
            let last = this.data[this.data.length - 1].date;
            let dif = this.daysBetween(this.data[0].date, last);
            let scale = width / dif;
            for (let p of this.data) {
                let pointX;
                if (this.propDates) {
                    pointX = width + this.PADDING - this.daysBetween(p.date, last) * scale;
                }
                else {
                    pointX = (this.PADDING + (this.data.indexOf(p) - this.xAxis.start) * xScale + xInc);
                }
                let pointY = (width + this.PADDING - (p.value - this.yAxis.start) * yScale);
                if (!prev) {
                    prev = { x: pointX, y: pointY };
                }
                else if (this.drawLine) {
                    this.context.beginPath();
                    this.context.moveTo(prev.x, prev.y);
                    this.context.lineTo(pointX, pointY);
                    this.context.stroke();
                    prev = { x: pointX, y: pointY };
                }
                this.context.beginPath();
                this.context.arc(pointX, pointY, 5, 0, 2 * Math.PI, false);
                this.context.fill();
            }
        }
    }
    daysBetween(start, end) {
        const date1 = new Date(start);
        const date2 = new Date(end);
        // One day in milliseconds
        const oneDay = 1000 * 60 * 60 * 24;
        // Calculating the time difference between two dates
        const diffInTime = date2.getTime() - date1.getTime();
        // Calculating the no. of days between two dates
        const diffInDays = Math.round(diffInTime / oneDay);
        return diffInDays;
    }
    sortData() {
        let items = this.data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        return items;
    }
};
ScatterPlotComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.LOCALE_ID,] }] }
];
ScatterPlotComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    drawLine: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    propDates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    canvasEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['canvas',] }]
};
ScatterPlotComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'scatter-plot',
        template: _raw_loader_scatter_plot_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
], ScatterPlotComponent);

class Axis {
    constructor(data, orientation, fromZero) {
        this.VERTICAL = 0;
        this.HORIZONTAL = 1;
        this.orientation = orientation;
        if (!data || data.length == 0) {
            return;
        }
        if (this.orientation == this.VERTICAL) {
            this.min = data[0].value;
            this.max = data[0].value;
        }
        else if (this.orientation == this.HORIZONTAL) {
            this.min = 0;
            this.max = 0;
        }
        for (let p of data) {
            if (this.orientation == this.VERTICAL) {
                if (p.value < this.min) {
                    this.min = p.value;
                }
                if (p.value > this.max) {
                    this.max = p.value;
                }
            }
            else if (this.orientation == this.HORIZONTAL) {
                this.min = 0;
                this.max = data.length - 1;
            }
        }
        if (fromZero) {
            this.min = 0;
        }
        let dif = this.max - this.min;
        let it = 1.0;
        let log = Math.floor(Math.log10(dif));
        if (this.orientation == this.VERTICAL) {
            this.tickSpacing = Math.pow(10, log);
            this.numOfTicks = this.getSignificantDigit(dif);
            if (this.numOfTicks < 5) {
                it = 0.5;
                this.numOfTicks *= 2;
            }
            this.numOfTicks += 2;
        }
        else if (this.orientation == this.HORIZONTAL) {
            this.tickSpacing = 1;
            this.numOfTicks = data.length;
            this.tickSkip = 1;
            while (this.numOfTicks > 5) {
                this.tickSkip *= 2;
                it *= 2;
                this.numOfTicks = Math.ceil(this.numOfTicks / 2);
            }
            this.numOfTicks += 1;
        }
        this.tickSpacing *= it;
        this.start = Math.floor(this.min / this.tickSpacing) * this.tickSpacing;
    }
    getSignificantDigit(number) {
        let str = number.toString();
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) != '0' && str.charAt(i) != '.') {
                return parseInt('' + str.charAt(i));
            }
        }
    }
}


/***/ }),

/***/ 5499:
/*!*****************************************************************!*\
  !*** ./src/app/components/workouts/workout-detail.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutDetailComponent": () => (/* binding */ WorkoutDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_workout_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./workout-detail.component.html */ 8613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_set_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/set.service */ 3495);
/* harmony import */ var src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/workout.service */ 3303);







let WorkoutDetailComponent = class WorkoutDetailComponent {
    constructor(route, workoutService, alertController, setService, actionSheetController) {
        this.route = route;
        this.workoutService = workoutService;
        this.alertController = alertController;
        this.setService = setService;
        this.actionSheetController = actionSheetController;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.workoutId = params['workoutId'];
            if (this.workoutId) {
                this.workout = this.workoutService.getWorkout(this.workoutId);
            }
        });
    }
    add() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Lägg till',
                inputs: [
                    {
                        name: 'weight',
                        placeholder: 'Vikt',
                        type: 'number'
                    }, {
                        name: 'reps',
                        placeholder: 'Reps',
                        type: 'number'
                    }
                ],
                buttons: [
                    {
                        text: 'Avbryt',
                        role: 'cancel',
                        handler: () => {
                        }
                    }, {
                        text: 'OK',
                        handler: (data) => {
                            this.setService.addSet({ workoutId: this.workoutId, reps: data.reps, weight: data.weight });
                            this.workout = this.workoutService.getWorkout(this.workoutId);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    options(event, set) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            event.preventDefault();
            event.stopPropagation();
            const actionSheet = yield this.actionSheetController.create({
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Kopiera',
                        icon: 'copy',
                        handler: () => {
                            this.setService.copySet(set);
                            this.workout = this.workoutService.getWorkout(this.workoutId);
                        }
                    }, {
                        text: 'Ta bort',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                            this.confirmation(set);
                        }
                    }, {
                        text: 'Avbryt',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    confirmation(set) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Vill du ta bort detta settet?',
                buttons: [
                    {
                        text: 'Avbryt',
                        role: 'cancel',
                        handler: () => {
                        }
                    }, {
                        text: 'OK',
                        handler: () => {
                            this.setService.deleteSet(set);
                            this.workout = this.workoutService.getWorkout(this.workoutId);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
WorkoutDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_2__.WorkoutService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: src_app_services_set_service__WEBPACK_IMPORTED_MODULE_1__.SetService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController }
];
WorkoutDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'workout-detail',
        template: _raw_loader_workout_detail_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
], WorkoutDetailComponent);



/***/ }),

/***/ 9920:
/*!****************************************************************!*\
  !*** ./src/app/components/workouts/workouts-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutsListComponent": () => (/* binding */ WorkoutsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_workouts_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./workouts-list.component.html */ 8465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);




let WorkoutsListComponent = class WorkoutsListComponent {
    constructor(actionSheetController, alertController) {
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.onDeleteWorkout = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
    getHeaviestSet(workout) {
        let set = workout.sets[0];
        for (let s of workout.sets) {
            if (+s.weight > +set.weight) {
                set = s;
            }
        }
        return set ? set.weight + ' kg x ' + set.reps : '';
    }
    options(event, workout) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            event.preventDefault();
            event.stopPropagation();
            const actionSheet = yield this.actionSheetController.create({
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Ta bort',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                            this.confirmation(workout);
                        }
                    }, {
                        text: 'Avbryt',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    confirmation(workout) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Vill du ta bort detta passet?',
                buttons: [
                    {
                        text: 'Avbryt',
                        role: 'cancel',
                        handler: () => {
                        }
                    }, {
                        text: 'OK',
                        handler: () => {
                            this.onDeleteWorkout.emit(workout);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    sortWorkouts() {
        let items = this.workouts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        return items;
    }
};
WorkoutsListComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
WorkoutsListComponent.propDecorators = {
    workouts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    onDeleteWorkout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }]
};
WorkoutsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'workouts-list',
        template: _raw_loader_workouts_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
], WorkoutsListComponent);



/***/ }),

/***/ 5532:
/*!**********************************************!*\
  !*** ./src/app/services/exersice.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExerciseService": () => (/* binding */ ExerciseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let ExerciseService = class ExerciseService {
    constructor() {
        this.EX_STORAGE = 'exercises';
    }
    getExercises() {
        let list = JSON.parse(localStorage.getItem(this.EX_STORAGE));
        if (!list) {
            list = [];
        }
        return list;
    }
    getExercise(exerciseId) {
        let list = this.getExercises();
        let ex = list.find(e => e.exerciseId = exerciseId);
        return ex;
    }
    addExercise(exercise) {
        let list = this.getExercises();
        exercise.workouts = [];
        exercise.exerciseId = this.getNewId();
        list.push(exercise);
        localStorage.setItem(this.EX_STORAGE, JSON.stringify(list));
    }
    deleteExercise(exerciseId) {
        let list = this.getExercises();
        let index = list.findIndex(e => e.exerciseId = exerciseId);
        list.splice(index, 1);
        localStorage.setItem(this.EX_STORAGE, JSON.stringify(list));
    }
    getNewId() {
        let list = this.getExercises();
        let max = 0;
        for (let l of list) {
            if (l.exerciseId > max) {
                max = l.exerciseId;
            }
        }
        return max + 1;
    }
};
ExerciseService.ctorParameters = () => [];
ExerciseService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], ExerciseService);



/***/ }),

/***/ 3495:
/*!*****************************************!*\
  !*** ./src/app/services/set.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetService": () => (/* binding */ SetService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _exersice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exersice.service */ 5532);



let SetService = class SetService {
    constructor(exService) {
        this.exService = exService;
        this.EX_STORAGE = 'exercises';
    }
    getSets() {
    }
    deleteSet(set) {
        let list = this.exService.getExercises();
        let workout;
        for (let ex of list) {
            workout = ex.workouts.find(w => w.workoutId == set.workoutId);
            if (workout) {
                break;
            }
        }
        let index = workout.sets.findIndex(s => s.setId == set.setId);
        workout.sets.splice(index, 1);
        localStorage.setItem(this.EX_STORAGE, JSON.stringify(list));
    }
    addSet(set) {
        let list = this.exService.getExercises();
        let workout;
        for (let ex of list) {
            workout = ex.workouts.find(w => w.workoutId == set.workoutId);
            if (workout) {
                break;
            }
        }
        if (workout) {
            set.setId = this.getNewId();
            workout.sets.push(set);
            localStorage.setItem(this.EX_STORAGE, JSON.stringify(list));
        }
    }
    copySet(set) {
        let list = this.exService.getExercises();
        let workout;
        for (let ex of list) {
            workout = ex.workouts.find(w => w.workoutId == set.workoutId);
            if (workout) {
                break;
            }
        }
        if (workout) {
            let newSet = { reps: set.reps, weight: set.weight, workoutId: set.workoutId, setId: this.getNewId() };
            workout.sets.push(newSet);
            localStorage.setItem(this.EX_STORAGE, JSON.stringify(list));
        }
    }
    getNewId() {
        let list = this.exService.getExercises();
        let max = 0;
        for (let l of list) {
            for (let w of l.workouts) {
                for (let s of w.sets) {
                    if (s.setId > max) {
                        max = s.setId;
                    }
                }
            }
        }
        return max + 1;
    }
};
SetService.ctorParameters = () => [
    { type: _exersice_service__WEBPACK_IMPORTED_MODULE_0__.ExerciseService }
];
SetService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], SetService);



/***/ }),

/***/ 3303:
/*!*********************************************!*\
  !*** ./src/app/services/workout.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutService": () => (/* binding */ WorkoutService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _exersice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exersice.service */ 5532);



let WorkoutService = class WorkoutService {
    constructor(exService) {
        this.exService = exService;
        this.EX_STORAGE = 'exercises';
    }
    getWorkout(workoutId) {
        let list = this.exService.getExercises();
        let workout;
        for (let ex of list) {
            workout = ex.workouts.find(w => w.workoutId == workoutId);
            if (workout) {
                break;
            }
        }
        return workout;
    }
    addWorkout(workout) {
        let list = this.exService.getExercises();
        let ex = list.find(e => e.exerciseId == workout.exerciseId);
        workout.sets = [];
        workout.workoutId = this.getNewId();
        ex.workouts.push(workout);
        localStorage.setItem(this.EX_STORAGE, JSON.stringify(list));
    }
    deleteWorkout(workout) {
        let list = this.exService.getExercises();
        let ex = list.find(e => e.exerciseId == workout.exerciseId);
        let index = ex.workouts.findIndex(w => w.workoutId == workout.workoutId);
        ex.workouts.splice(index, 1);
        localStorage.setItem(this.EX_STORAGE, JSON.stringify(list));
    }
    getNewId() {
        let list = this.exService.getExercises();
        let max = 0;
        for (let l of list) {
            for (let w of l.workouts) {
                if (w.workoutId > max) {
                    max = w.workoutId;
                }
            }
        }
        return max + 1;
    }
};
WorkoutService.ctorParameters = () => [
    { type: _exersice_service__WEBPACK_IMPORTED_MODULE_0__.ExerciseService }
];
WorkoutService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], WorkoutService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 4370:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/exercises/exercise-detail.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button defaultHref=\"..\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{ exercise?.name }}</ion-title>\r\n\t\t<ion-buttons slot=\"end\">\r\n\t\t\t<ion-button (click)=\"add()\">\r\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"add-outline\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-buttons>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\t<ion-segment [value]=\"state\" (ionChange)=\"state = $event.detail.value\">\r\n\t\t<ion-segment-button value=\"workouts\">Pass</ion-segment-button>\r\n\t\t<ion-segment-button value=\"stats\">Statistik</ion-segment-button>\r\n\t</ion-segment>\r\n\t<ng-container *ngIf=\"state == 'workouts'\">\r\n\t\t<workouts-list [workouts]=\"exercise.workouts\" (onDeleteWorkout)=\"deleteWorkout($event)\"></workouts-list>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"state == 'stats'\">\r\n\t\t<ion-item>\r\n\t\t\t<ion-select [value]=\"statProp\" (ionChange)=\"statProp = $event.detail.value; updatePlot()\">\r\n\t\t\t\t<ion-select-option value=\"volume\">Volym</ion-select-option>\r\n\t\t\t\t<ion-select-option value=\"maxWeight\">Maxvikt</ion-select-option>\r\n\t\t\t\t<ion-select-option value=\"maxReps\">Maxreps</ion-select-option>\r\n\t\t\t\t<ion-select-option value=\"totalSets\">Antal set</ion-select-option>\r\n\t\t\t\t<ion-select-option value=\"totalReps\">Antal reps</ion-select-option>\r\n\t\t\t</ion-select>\r\n\t\t</ion-item>\r\n\t\t<ion-item lines=\"none\">\r\n\t\t\t<ion-label>Linje</ion-label>\r\n\t\t\t<ion-toggle [checked]=\"drawLine\" (ionChange)=\"drawLine = $event.detail.checked; plot.drawLine = drawLine; plot.draw()\"></ion-toggle>\r\n\t\t</ion-item>\r\n\t\t<ion-item lines=\"none\">\r\n\t\t\t<ion-label>Datum avstånd</ion-label>\r\n\t\t\t<ion-toggle [checked]=\"propDates\" (ionChange)=\"propDates = $event.detail.checked; plot.propDates = propDates; plot.draw()\"></ion-toggle>\r\n\t\t</ion-item>\r\n\t\t<scatter-plot #Plot [data]=\"data\" [drawLine]=\"drawLine\" [propDates]=\"propDates\"></scatter-plot>\r\n\t</ng-container>\r\n</ion-content>\r\n");

/***/ }),

/***/ 2327:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/exercises/exercises-list.component.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-title>Övningar</ion-title>\r\n\t\t<ion-buttons slot=\"end\">\r\n\t\t\t<ion-button (click)=\"add()\">\r\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"add-outline\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-buttons>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\t<ion-list>\r\n\t\t<ion-item *ngFor=\"let ex of exercises\" button detail [routerLink]=\"ex.exerciseId\">\r\n\t\t\t<ion-label>{{ ex.name }}</ion-label>\r\n\t\t\t<ion-buttons slot=\"end\">\r\n\t\t\t\t<ion-button (click)=\"options($event, ex)\">\r\n\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"ellipsis-horizontal\"></ion-icon>\r\n\t\t\t\t</ion-button>\r\n\t\t\t</ion-buttons>\r\n\t\t</ion-item>\r\n\t</ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ 6186:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/graphs/scatter-plot.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<canvas #canvas></canvas>\r\n");

/***/ }),

/***/ 8613:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/workouts/workout-detail.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{ workout?.date | date: 'mediumDate' }}</ion-title>\r\n\t\t<ion-buttons slot=\"end\">\r\n\t\t\t<ion-button (click)=\"add()\">\r\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"add-outline\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-buttons>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\t<ion-list>\r\n\t\t<ion-item *ngFor=\"let set of workout.sets\" button>\r\n\t\t\t<ion-label>{{ set.weight + ' kg x ' + set.reps }}</ion-label>\r\n\t\t\t<ion-buttons slot=\"end\">\r\n\t\t\t\t<ion-button (click)=\"options($event, set)\">\r\n\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"ellipsis-horizontal\"></ion-icon>\r\n\t\t\t\t</ion-button>\r\n\t\t\t</ion-buttons>\r\n\t\t</ion-item>\r\n\t</ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ 8465:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/workouts/workouts-list.component.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-list>\r\n\t<ion-item *ngFor=\"let w of sortWorkouts()\" button detail [routerLink]=\"w.workoutId\">\r\n\t\t<ion-label>{{ w.date | date: 'mediumDate' }}: {{ getHeaviestSet(w) }}</ion-label>\r\n\t\t<ion-buttons slot=\"end\">\r\n\t\t\t<ion-button (click)=\"options($event, w)\">\r\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"ellipsis-horizontal\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-buttons>\r\n\t</ion-item>\r\n</ion-list>\r\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map