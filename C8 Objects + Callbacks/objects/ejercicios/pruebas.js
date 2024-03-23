objeto={
    hola:"dfgfg",
    comer:74757
};
Object.defineProperties(objeto,{
    DORMIR:{
        value:function (){
            return this.comer
        }
    }
});
console.log(objeto.DORMIR(5,3))
