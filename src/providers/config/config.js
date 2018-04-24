var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var config_key = "config"; //variavel geral para o config
var ConfigProvider = /** @class */ (function () {
    function ConfigProvider() {
        this.config = {
            showSlide: true,
            name: "",
            username: ""
        };
        console.log('Hello ConfigProvider');
    }
    ConfigProvider.prototype.getConfigData = function () {
        return localStorage.getItem(config_key);
    };
    ConfigProvider.prototype.setConfigData = function (showSlide, name, username) {
        var config = {
            showSlide: false,
            name: "",
            username: ""
        };
        if (showSlide) {
            config.showSlide = showSlide;
        }
        if (name) {
            config.name = name;
        }
        if (username) {
            config.username = username;
        }
        localStorage.setItem(config_key, JSON.stringify(config));
    };
    ConfigProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], ConfigProvider);
    return ConfigProvider;
}());
export { ConfigProvider };
//# sourceMappingURL=config.js.map