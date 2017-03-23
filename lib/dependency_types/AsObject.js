module.exports = {
    assignDependencies(list, dependencies) {
        if(Object.keys(dependencies).length == 0) throw new Error()
        Object.assign(list, dependencies)
        return list
    }
}