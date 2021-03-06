/* Copyright (c) 2018 e-soa Jacques Desodt, MIT License */
'use strict'

/* Default plugin options */
const role = 'entity-crud-test'

/* Prerequisites */
const Seneca = require('seneca') // eslint-disable-line no-unused-vars
const testFunctions = require('./functions')

/* Test prerequisites */
const Code = require('code')
const Lab = require('lab', {timeout: testFunctions.timeout})
var lab = (exports.lab = Lab.script())
var describe = lab.describe
var it = lab.it
var expect = Code.expect

describe('first', function () {
  //
  // Simple
  it('simple', function (fin) {
    // Gets the Seneca instance
    var seneca = testFunctions.setSeneca(Seneca, role, fin) // Add 'print' for debug
    // Creates posts
    testFunctions.createPosts(seneca, role, function (results) {
      // Retrieves all data
      seneca.act({role: role, cmd: 'first', select: {title: 'Tuesday'}}, function (ignore, result) {
        // Checks result
        expect(result.success).to.equal(true)
        expect(result.entity.content).to.equal(testFunctions.getPosts()[2].content)
        fin()
      })
    })
  })
  //
})
