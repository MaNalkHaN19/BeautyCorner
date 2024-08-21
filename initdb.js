"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = getProducts;
var sql = require("better-sqlite3");
// Initialize the database
var db = sql("products.db");
// Function to get all products
function getProducts() {
    return db.prepare("SELECT * FROM products").all();
}
// Dummy products data
var dummyProducts = [
    {
        title: "Face Cream",
        slug: "face-cream",
        image: "/images/DailyHarmony.jpg",
        summary: "Daily Harmony face cream keeps your face nourished and healthy.",
    },
    {
        title: "Essence Facial Mist",
        slug: "facial-mist",
        image: "/images/Essence.jpg",
        summary: "Essence facial mist is a must-have. The rose water helps skin glow and have final finish of youe elegant makeover!",
    },
    {
        title: "Face Wash",
        slug: "face-wash",
        image: "/images/FaceWash.jpg",
        summary: "Gentle Face Wash with Aloe Vera and Vitamin E helps on acne prone skin and keep it hydrated.",
    },
    {
        title: "Argan Hair Oil",
        slug: "hair-oil",
        image: "/images/HairOil.jpg",
        summary: "Argan Hair Oil gives the special shine to your hair and keep them healthy.",
    },
    {
        title: "Makeup Remover",
        slug: "makeup-remover",
        image: "/images/MakeupRemover.jpg",
        summary: "Gentle Makeup Remover with Micellar Water removes all the dirt and skin products mixed in the pores of skin.",
    },
    {
        title: "Rose Oil",
        slug: "rose-oil",
        image: "/images/RoseOil.jpg",
        summary: "Pure Rosehip Oil significantly helps in skin nourishment and stops the exessive hairfall",
    },
];
// Create the products table if it doesn't exist
db.prepare("\n  CREATE TABLE IF NOT EXISTS products (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    slug TEXT NOT NULL UNIQUE,\n    title TEXT NOT NULL,\n    image TEXT NOT NULL,\n    summary TEXT NOT NULL\n  )\n").run();
// Create the products table if it doesn't exist
db.prepare("\n  CREATE TABLE IF NOT EXISTS review (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    slug TEXT NOT NULL UNIQUE,\n    name TEXT NOT NULL,\n    productname TEXT NOT NULL,\n    review TEXT NOT NULL\n  )\n").run();
function SaveData() {
    return __awaiter(this, void 0, void 0, function () {
        var stmt;
        return __generator(this, function (_a) {
            stmt = db.prepare("\n      INSERT INTO review \n       VALUES (\n         null,\n         @name,\n         @productname,\n         @review,\n         @image\n      )\n   ");
            return [2 /*return*/];
        });
    });
}
// Function to initialize the database with dummy data
function initData() {
    return __awaiter(this, void 0, void 0, function () {
        var stmt, _i, dummyProducts_1, product;
        return __generator(this, function (_a) {
            stmt = db.prepare("\n      INSERT INTO products \n       VALUES (\n         null,\n         @slug,\n         @title,\n         @image,\n         @summary\n      )\n   ");
            for (_i = 0, dummyProducts_1 = dummyProducts; _i < dummyProducts_1.length; _i++) {
                product = dummyProducts_1[_i];
                try {
                    stmt.run(product);
                }
                catch (err) {
                    console.error("Error inserting product ".concat(product.title, ":"), err);
                }
            }
            return [2 /*return*/];
        });
    });
}
// Initialize data
initData().catch(function (err) { return console.error("Error initializing data:", err); });
//Save Review
SaveData().catch(function (error) { return console.error("Error initializing Review", error); });
