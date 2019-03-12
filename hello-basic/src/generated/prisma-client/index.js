"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Post",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://my-pr-Publi-I64X5576HWNH-1555604546.us-west-2.elb.amazonaws.com/my-prisma-service/dev`
});
exports.prisma = new exports.Prisma();
