const expect = require('chai').expect;
const EDL = require('../lib/Loader.js')

describe('Load Dependency', () => {
    describe('#Native module', () => {
        it('Should return an array, as EDL.load("os").cpus() should return the same of require("os").cpus()', done => {
            const os = EDL.load('os')
            const cpus = os.cpus()
            let assertationExpect = Array.isArray(cpus)
            expect(assertationExpect).to.be.true
            return done()
        })
    })

    describe('#Set My Dependencies', () => {
        it('Should throw an error on passing a empty or falsy depedency source', done => {
            expect(() => { EDL.setDependencies() }).to.throw(Error)
            expect(() => { EDL.setDependencies('') }).to.throw(Error)
            expect(() => { EDL.setDependencies(' ') }).to.throw(Error)
            expect(() => { EDL.setDependencies({}) }).to.throw(Error)
            expect(() => { EDL.setDependencies(() => { }) }).to.throw(Error)
            expect(() => { EDL.setDependencies(null) }).to.throw(Error)
            expect(() => { EDL.setDependencies(undefined) }).to.throw(Error)
            return done()
        })
    })

    describe('#Load My Node Modules in ./test/test_modules (should be anywhere)', () => {
        it('Should load ./test_modules/Dog.js setting dependencies from the JSON file path from the project root', done => {
            EDL.setDependencies('./test/test_configs/dependencies.json')
            const Dog = EDL.load('Dog')
            let listenableSound = Dog.bark()
            let assertationExpect = listenableSound.humanListenableSound === 'AU AU AU'
            expect(assertationExpect).to.be.true
            return done()
        })
        it('Should load ./test_modules/Dog.js setting dependencies from an object descriptor', done => {
            EDL.setDependencies({ "Dog": "./test/test_modules/Dog.js" })
            const Dog = EDL.load('Dog')
            let listenableSound = Dog.bark()
            let assertationExpect = listenableSound.humanListenableSound === 'AU AU AU'
            expect(assertationExpect).to.be.true
            return done()
        })
        it('Should load ./test_modules/Dog.js setting dependencies from a JSON module', done => {
            const dependencies = require('./test_configs/dependencies.json')
            EDL.setDependencies(dependencies)
            const Dog = EDL.load('Dog')
            let listenableSound = Dog.bark()
            let assertationExpect = listenableSound.humanListenableSound === 'AU AU AU'
            expect(assertationExpect).to.be.true
            return done()
        })
        it('Should throw an Error on to try to load an inexistent module and/or is not a native module.', done => {
            const dependencies = require('./test_configs/dependencies.json')
            EDL.setDependencies(dependencies)
            expect(() => { EDL.load('invalidModule') }).to.throw(Error)
            return done()
        })
        it('Should throw an Error on load a empty string or nothing.', done => {
            const dependencies = require('./test_configs/dependencies.json')
            EDL.setDependencies(dependencies)
            expect(() => { EDL.load() }).to.throw(Error)
            expect(() => { EDL.load('') }).to.throw(Error)
            expect(() => { EDL.load(' ') }).to.throw(Error)
            return done()
        })
    })
})