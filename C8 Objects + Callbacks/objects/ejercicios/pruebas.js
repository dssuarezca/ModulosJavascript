objeto={
    precio:5,
    preciodescuento:0.5
};
Object.defineProperties(objeto,{
    DORMIR:{
        value:function (){
            preciofinal=this.precio-(this.precio*this.preciodescuento)
            return preciofinal
        }
    }
});
console.log(objeto.DORMIR())
