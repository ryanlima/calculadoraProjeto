angular.module('app.controllers', [])

  .controller('calcCtrl', function($scope) {

    $scope.screen="";
    $scope.fra = false;

    $scope.zero = function() {$scope.screen+="0";};
    $scope.one = function() {$scope.screen+="1";};
    $scope.two = function() {$scope.screen+="2";};
    $scope.three = function() {$scope.screen+="3";};
    $scope.four = function() {$scope.screen+="4";};
    $scope.five = function() {$scope.screen+="5";};
    $scope.six = function() {$scope.screen+="6";};
    $scope.seven = function() {$scope.screen+="7";};
    $scope.eigth = function() {$scope.screen+="8";};
    $scope.nine = function() {$scope.screen+="9";};
    $scope.ponto = function() {
        $scope.screen+=".";
        $scope.fra = true;
    };
    $scope.clear = function() {$scope.screen="";};

    $scope.plus = function() {$scope.screen+="+";};
    $scope.minus = function() {$scope.screen+="-";};
    $scope.multiply = function() {$scope.screen+="*";};
    $scope.divide = function() {$scope.screen+="/";};
    $scope.bin = function() {
        if($scope.fra === true){
            $scope.screen = parseFloat($scope.screen, 10).toString(2);
        }else{
            $scope.screen = parseInt($scope.screen, 10).toString(2);    
        }
        
    };

    $scope.oct = function() {
        if($scope.fra == true){
            $scope.screen = parseFloat($scope.screen, 10).toString(8);
        }else{
            $scope.screen = parseInt($scope.screen, 10).toString(8);
        }
        
    };

    $scope.hex = function() {
        if($scope.fra == true){
            $scope.screen = parseFloat($scope.screen, 10).toString(16).toUpperCase();
        }else{
            $scope.screen = parseInt($scope.screen, 10).toString(16).toUpperCase();
        }
        
    };

   $scope.equal=function(){$scope.screen=eval($scope.screen);};


   
  })  
         
  // // // // //    /* Controle da conversão */    // // // // //

  .controller('settingsCtrl', ['$scope','$filter',function($scope, filter){
    $scope.decimal="";
    $scope.binario="";
    $scope.octal="";
    $scope.hexa="";
  //  var memory = [] //

         // TECLADO DECIMAL //
    $scope.zero = function() {$scope.decimal+="0";};
    $scope.one = function()  {$scope.decimal+="1";};
    $scope.two = function()  {$scope.decimal+="2";};
    $scope.three = function() {$scope.decimal+="3";};
    $scope.four = function() {$scope.decimal+="4";};
    $scope.five = function() {$scope.decimal+="5";};
    $scope.six = function() {$scope.decimal+="6";};
    $scope.seven = function() {$scope.decimal+="7";};
    $scope.eigth = function() {$scope.decimal+="8";};
    $scope.nine = function() {$scope.decimal+="9";};
    $scope.clear = function() {$scope.decimal="";};

         // TECLADO BINARIO //
    $scope.zeroBin = function() {$scope.binario+="0";};
    $scope.umBin = function()  {$scope.binario+="1";};
   
         // TECLADO OCTAL //
    $scope.zeroOctal = function() {$scope.octal+="0";};
    $scope.umOctal = function()  {$scope.octal+="1";};
    $scope.doisOctal = function()  {$scope.octal+="2";};
    $scope.tresOctal = function() {$scope.octal+="3";};
    $scope.quatroOctal = function() {$scope.octal+="4";};
    $scope.cincoOctal = function() {$scope.octal+="5";};
    $scope.seisOctal = function() {$scope.octal+="6";};
    $scope.seteOctal = function() {$scope.octal+="7";};

         // TECLADO HEXADECIMAL //
    $scope.zeroHexade = function() {$scope.hexa+="0";};
    $scope.umHexade = function()  {$scope.hexa+="1";};
    $scope.doisHexade = function()  {$scope.hexa+="2";};
    $scope.tresHexade = function() {$scope.hexa+="3";};
    $scope.quatroHexade = function() {$scope.hexa+="4";};
    $scope.cincoHexade = function() {$scope.hexa+="5";};
    $scope.seisHexade = function() {$scope.hexa+="6";};
    $scope.seteHexade= function() {$scope.hexa+="7";};
    $scope.oitoHexade = function()  {$scope.hexa+="8";};
    $scope.noveHexade = function() {$scope.hexa+="9";};
    $scope.aHexade = function() {$scope.hexa+="A";};
    $scope.bHexade = function() {$scope.hexa+="B";};
    $scope.cHexade = function() {$scope.hexa+="C";};
    $scope.dHexade= function() {$scope.hexa+="D";};
    $scope.eHexade = function()  {$scope.hexa+="E";};
    $scope.fHexade = function() {$scope.hexa+="F";};

             /* Controle da conversão */
    $scope.$watch('decimal',function(newValue, oldValue) {
        if(newValue != "") {
           $scope.binario = parseInt(newValue, 10).toString(2);
           $scope.octal = parseInt(newValue, 10).toString(8);
           $scope.hexa = parseInt(newValue, 10).toString(16).toUpperCase();
        } else {
           $scope.binario="";
           $scope.octal="";
           $scope.hexa=""; 
        } 
    });    
    $scope.$watch('binario',function(newValue, oldValue) {
        if(newValue != "") {
            $scope.decimal = parseInt(newValue, 2).toString(10);
          } else {
            $scope.decimal=""; 
          }     
    });
    $scope.$watch('octal',function(newValue, oldValue) {
        if(newValue != "") {
            $scope.decimal = parseInt(newValue, 8).toString(10);
      } else {
            $scope.decimal=""; 
      }     
    });
    $scope.$watch('hexa',function(newValue, oldValue) {
        if(newValue != "") {
             $scope.decimal = parseInt(newValue, 16).toString(10);
      } else {
             $scope.decimal=""; 
      }     
});
          /* Controle da conversão */
  }])



          /* Controle da tela Soma de bases */

  .controller('indexCtrl', function($scope,$state) {
    $state.go('calculator', {}, {location: "replace"});
  })

  

  .controller('supportCtrl', function($scope) {

    $scope.limpar = function() {
        $scope.a="";
        $scope.b="";
        $scope.operator= null;
    };
    /*$scope.numero1 = '0';
    $scope.numero2 = null;
    $scope.resultado = null;
    $scope.operacao = null;
    */
   $scope.result = function() {
    if ($scope.operator == '+') {
        return $scope.a + $scope.b;
    }
    if ($scope.operator == '-') {
        return $scope.a - $scope.b;
    }
    if ($scope.operator == '*') {
        return $scope.a * $scope.b;
    }
    if ($scope.operator == '/') {
        return $scope.a / $scope.b;
    }

};


    $scope.resultBin = function() {
        if ($scope.operator == '+') {
            return parseInt($scope.a,(2)) + parseInt($scope.b,(2));
        }
        if ($scope.operator == '-') {
            return parseInt($scope.a,(2)) - parseInt($scope.b,(2));
        }
        if ($scope.operator == '*') {
            return parseInt($scope.a,(2)) * parseInt($scope.b,(2));
        }
        if ($scope.operator == '/') {
            return parseInt($scope.a,(2)) / parseInt($scope.b,(2));
        }
    
    };
    $scope.bin = function() {
            if ($scope.operator == '+') {
                return parseInt($scope.resultBin() ,10).toString(2);
            }
            if ($scope.operator == '-') {
                return parseInt($scope.resultBin() ,10).toString(2);
            }
            if ($scope.operator == '*') {
                return parseInt($scope.resultBin() ,10).toString(2);
            }
            if ($scope.operator == '/') {
                return parseInt($scope.resultBin() ,10).toString(2);
            }
        };

        //octal
        $scope.resultOct = function() {
            if ($scope.operator == '+') {
                return parseInt($scope.a,(8)) + parseInt($scope.b,(8));
            }
            if ($scope.operator == '-') {
                return parseInt($scope.a,(8)) - parseInt($scope.b,(8));
            }
            if ($scope.operator == '*') {
                return parseInt($scope.a,(8)) * parseInt($scope.b,(8));
            }
            if ($scope.operator == '/') {
                return parseInt($scope.a,(8)) / parseInt($scope.b,(8));
            }
        
        };
        $scope.oct = function() {
                if ($scope.operator == '+') {
                    return parseInt($scope.resultOct() ,10).toString(8);
                }
                if ($scope.operator == '-') {
                    return parseInt($scope.resultOct() ,10).toString(8);
                }
                if ($scope.operator == '*') {
                    return parseInt($scope.resultOct() ,10).toString(8);
                }
                if ($scope.operator == '/') {
                    return parseInt($scope.resultOct() ,10).toString(8);
                }
            };
            //hexa
            $scope.resultHex = function() {
                if ($scope.operator == '+') {
                    return parseInt($scope.a,(16)) + parseInt($scope.b,(16));
                }
                if ($scope.operator == '-') {
                    return parseInt($scope.a,(16)) - parseInt($scope.b,(16));
                }
                if ($scope.operator == '*') {
                    return parseInt($scope.a,(16)) * parseInt($scope.b,(16));
                }
                if ($scope.operator == '/') {
                    return parseInt($scope.a,(16)) / parseInt($scope.b,(16));
                }
            
            };
            $scope.hex = function() {
                    if ($scope.operator == '+') {
                        return parseInt($scope.resultHex() ,10).toString(16).toUpperCase();
                    }
                    if ($scope.operator == '-') {
                        return parseInt($scope.resultHex() ,10).toString(16).toUpperCase();
                    }
                    if ($scope.operator == '*') {
                        return parseInt($scope.resultHex() ,10).toString(16).toUpperCase();
                    }
                    if ($scope.operator == '/') {
                        return parseInt($scope.resultHex() ,10).toString(16).toUpperCase();
                    }
                };

                $scope.zero = function() {$scope.screen+="0";};
                $scope.one = function() {$scope.screen+="1";};
                $scope.two = function() {$scope.screen+="2";};
                $scope.three = function() {$scope.screen+="3";};
                $scope.four = function() {$scope.screen+="4";};
                $scope.five = function() {$scope.screen+="5";};
                $scope.six = function() {$scope.screen+="6";};
                $scope.seven = function() {$scope.screen+="7";};
                $scope.eigth = function() {$scope.screen+="8";};
                $scope.nine = function() {$scope.screen+="9";};

                $scope.plus = function() {$scope.screen+="+";};
                $scope.minus = function() {$scope.screen+="-";};
                $scope.multiply = function() {$scope.screen+="*";};
                $scope.divide = function() {$scope.screen+="/";};
                $scope.clear = function() {$scope.screen="";};

            $scope.equal=function(){$scope.screen=eval($scope.screen);}
                
            $scope.dec=function(){$scope.screen=parseInt($scope.screen,(2));}
                //$scope.screen=parseInt($scope.screen,(2)))))} 
                //($scope.screen=parseInt($scope.screen, (2))))}
            // eval($scope.screen);} //=parseInt($scope.screen ,10).toString(2));}

            $scope.bi=function(){$scope.screen=parseInt($scope.screen ,10).toString(2);}

  
   
    
  });  

 
