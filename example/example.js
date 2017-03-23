//const EDL = require('easy-dependency-loader') when installed, of course
const EDL = require('../lib/Loader.js')

//Always from the root. Set it ONCE at the startup script.
EDL.setDependencies('./example/configs/dependencies.json') 

// Did you installed it, right? ;)
const async = EDL.load('async') 

// the same of const os = require('os');
const os = EDL.load('os') 

 //My nice custom modules
const Dog = EDL.load('Dog')
const Cat = EDL.load('Cat')

//Using my module methods
console.log('%j', Dog.bark()) //Human Listenable Sound is 'AU AU AU'
console.log('%j', Cat.meow()) //Human Listenable Sound is 'MEOW'

//Here using native and npm installed modules
async.eachOf(os.cpus(), (cpu, key, next) => {
    console.log('CPU [%s] PROPS: %j', key, cpu)
    return next()
})