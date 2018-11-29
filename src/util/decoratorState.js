
function inject_unount (target) {
    // 改装组件的componentWillUnmount
    let next = target.prototype.componentWillUnmount
    target.prototype.componentWillUnmount = function () {
        if( next ) next.call(this, ...arguments)
        this.unmount = true
    }

    // 改装组件的setState
    let setState = target.prototype.setState
    target.prototype.setState = function () {
        if ( this.unmount ) return false
        setState.call(this,...arguments)
    }
}

export default inject_unount