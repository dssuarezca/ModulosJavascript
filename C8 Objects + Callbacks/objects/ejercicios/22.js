function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   cadena1=str1.split("")
   cadena2=str2.split("")
   if (str1==str2||str1.toLowerCase()==str2.toLowerCase()){
       return true
   }
   if (cadena1.length==cadena2.length){
      for (var i=0;i<cadena1.length;i++){
         for(var j=0;j<cadena2.length;j++){         
            if (cadena1[i].toLowerCase()==cadena2[j].toLowerCase()){          
               cadena2.splice(j,1)          
               break            
            }
         }
            }
      str3=cadena2
      cadena1=str1.split("")
      cadena2=str2.split("")
      for (var i=0;i<cadena2.length;i++){
         for(var j=0;j<cadena1.length;j++){        
            if (cadena2[i].toLowerCase()==cadena1[j].toLowerCase()){           
               cadena1.splice(j,1)              
               break              
            }
         }
      }
      str4=cadena1
      if (str3.length==0&&str4.length==0){
       return true
      }
      else 
      return false
   }
  if (str1.length!=str2.length){
   return false
  }
}

module.exports = esAnagrama;


module.exports = esAnagrama;
