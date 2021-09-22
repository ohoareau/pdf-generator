"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
const generate_1 = __importDefault(require("./generate"));
async function cli(options = {}) {
    if (4 > process.argv.length) {
        throw new Error(`Syntax: node cli.js <data> <config> <output>`);
    }
    return (0, generate_1.default)(process.argv[2], process.argv[3], process.argv[4], options);
}
exports.cli = cli;
exports.default = cli;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwwREFBa0M7QUFHM0IsS0FBSyxVQUFVLEdBQUcsQ0FBQyxVQUFtQixFQUFFO0lBQzNDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBRXpCLE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztLQUNuRTtJQUVELE9BQU8sSUFBQSxrQkFBUSxFQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0FBQy9FLENBQUM7QUFQRCxrQkFPQztBQUVELGtCQUFlLEdBQUcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZW5lcmF0ZSBmcm9tIFwiLi9nZW5lcmF0ZVwiO1xuaW1wb3J0IHtvcHRpb25zfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGkob3B0aW9uczogb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKDQgPiBwcm9jZXNzLmFyZ3YubGVuZ3RoKSB7XG4gICAgICAgIC8vIG5vaW5zcGVjdGlvbiBFeGNlcHRpb25DYXVnaHRMb2NhbGx5SlNcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTeW50YXg6IG5vZGUgY2xpLmpzIDxkYXRhPiA8Y29uZmlnPiA8b3V0cHV0PmApO1xuICAgIH1cblxuICAgIHJldHVybiBnZW5lcmF0ZShwcm9jZXNzLmFyZ3ZbMl0sIHByb2Nlc3MuYXJndlszXSwgcHJvY2Vzcy5hcmd2WzRdLCBvcHRpb25zKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGk7Il19