var App = angular.module('toyBox', []);
 
App.controller('temperature', function($scope, $http, $interval) {
    var temperature01;
    var temperature02;
    var temperature03;
    var temperature04;
    var temperature05;
    var temperature06;
    var temperature07;
    var temperature08;
    var temperature09;
    var temperature10;
    $scope.startTemperatureData = function() {
         temperature01 =  $interval( function () {
                $http.get('/temperature/01')
                         .success(function (data) {
                             $scope.temperaturesData1 = data;
                         })
                         .error(function (data, status, headers, config) {
                             //  Do some error handling here
                         });
               },2000);
           temperature02 =  $interval( function () {
                          $http.get('/temperature/02')
                                   .success(function (data) {
                                       $scope.temperaturesData2 = data;
                                   })
                                   .error(function (data, status, headers, config) {
                                       //  Do some error handling here
                                   });
                         },2000);
                          temperature03 =  $interval( function () {
                                         $http.get('/temperature/03')
                                                  .success(function (data) {
                                                      $scope.temperaturesData3 = data;
                                                  })
                                                  .error(function (data, status, headers, config) {
                                                      //  Do some error handling here
                                                  });
                                        },2000);
                                         temperature04 =  $interval( function () {
                                            $http.get('/temperature/04')
                                                     .success(function (data) {
                                                         $scope.temperaturesData4 = data;
                                                     })
                                                     .error(function (data, status, headers, config) {
                                                         //  Do some error handling here
                                                     });
                                           },2000);
                                         temperature05 =  $interval( function () {
                                           $http.get('/temperature/05')
                                                    .success(function (data) {
                                                        $scope.temperaturesData5 = data;
                                                    })
                                                    .error(function (data, status, headers, config) {
                                                        //  Do some error handling here
                                                    });
                                          },2000);
                                           temperature06 =  $interval( function () {
                                             $http.get('/temperature/06')
                                                      .success(function (data) {
                                                          $scope.temperaturesData6 = data;
                                                      })
                                                      .error(function (data, status, headers, config) {
                                                          //  Do some error handling here
                                                      });
                                            },3000);
                                          temperature07 =  $interval( function () {
                                             $http.get('/temperature/07')
                                                      .success(function (data) {
                                                          $scope.temperaturesData7 = data;
                                                      })
                                                      .error(function (data, status, headers, config) {
                                                          //  Do some error handling here
                                                      });
                                            },2000);
                           temperature08 =  $interval( function () {
                              $http.get('/temperature/08')
                                       .success(function (data) {
                                           $scope.temperaturesData8 = data;
                                       })
                                       .error(function (data, status, headers, config) {
                                           //  Do some error handling here
                                       });
                             },8000);
                              temperature09 =  $interval( function () {
                             $http.get('/temperature/09')
                                      .success(function (data) {
                                          $scope.temperaturesData9 = data;
                                      })
                                      .error(function (data, status, headers, config) {
                                          //  Do some error handling here
                                      });
                            },6000);
                             temperature10 =  $interval( function () {
                                $http.get('/temperature/10')
                                         .success(function (data) {
                                             $scope.temperaturesData10 = data;
                                         })
                                         .error(function (data, status, headers, config) {
                                             //  Do some error handling here
                                         });
                               },2000);
    }

     $scope.stopTemperatureData = function() {
         $interval.cancel(temperature01);
          $interval.cancel(temperature02);
           $interval.cancel(temperature03);
            $interval.cancel(temperature04);
             $interval.cancel(temperature05);
              $interval.cancel(temperature06);
               $interval.cancel(temperature07);
                $interval.cancel(temperature08);
                 $interval.cancel(temperature09);
                  $interval.cancel(temperature10);
     }
});





App.controller('humidity', function($scope, $http, $interval) {
    var humidity01;
    var humidity02;
    var humidity03;
    var humidity04;
    var humidity05;
    var humidity06;
    var humidity07;
    var humidity08;
    var humidity09;
    var temperature10;
    $scope.startHumidityData = function() {
         humidity01 =  $interval( function () {
                $http.get('/humidity/01')
                         .success(function (data) {
                             $scope.humidityData1 = data;
                         })
                         .error(function (data, status, headers, config) {
                             //  Do some error handling here
                         });
               },2000);
           humidity02 =  $interval( function () {
                          $http.get('/humidity/02')
                                   .success(function (data) {
                                       $scope.humidityData2 = data;
                                   })
                                   .error(function (data, status, headers, config) {
                                       //  Do some error handling here
                                   });
                         },2000);
                          humidity03 =  $interval( function () {
                                         $http.get('/humidity/03')
                                                  .success(function (data) {
                                                      $scope.humidityData3 = data;
                                                  })
                                                  .error(function (data, status, headers, config) {
                                                      //  Do some error handling here
                                                  });
                                        },2000);
                                         humidity04 =  $interval( function () {
                                            $http.get('/humidity/04')
                                                     .success(function (data) {
                                                         $scope.humidityData4 = data;
                                                     })
                                                     .error(function (data, status, headers, config) {
                                                         //  Do some error handling here
                                                     });
                                           },6000);
                                         humidity05 =  $interval( function () {
                                           $http.get('/humidity/05')
                                                    .success(function (data) {
                                                        $scope.humidityData5 = data;
                                                    })
                                                    .error(function (data, status, headers, config) {
                                                        //  Do some error handling here
                                                    });
                                          },2000);
                                           humidity06 =  $interval( function () {
                                             $http.get('/humidity/06')
                                                      .success(function (data) {
                                                          $scope.humidityData6 = data;
                                                      })
                                                      .error(function (data, status, headers, config) {
                                                          //  Do some error handling here
                                                      });
                                            },8000);
                                          humidity07 =  $interval( function () {
                                             $http.get('/humidity/07')
                                                      .success(function (data) {
                                                          $scope.humidityData7 = data;
                                                      })
                                                      .error(function (data, status, headers, config) {
                                                          //  Do some error handling here
                                                      });
                                            },2000);
                           humidity08 =  $interval( function () {
                              $http.get('/humidity/08')
                                       .success(function (data) {
                                           $scope.humidityData8 = data;
                                       })
                                       .error(function (data, status, headers, config) {
                                           //  Do some error handling here
                                       });
                             },8000);
                              humidity09 =  $interval( function () {
                             $http.get('/humidity/09')
                                      .success(function (data) {
                                          $scope.humidityData9 = data;
                                      })
                                      .error(function (data, status, headers, config) {
                                          //  Do some error handling here
                                      });
                            },6000);
                             temperature10 =  $interval( function () {
                                $http.get('/humidity/10')
                                         .success(function (data) {
                                             $scope.humidityData10 = data;
                                         })
                                         .error(function (data, status, headers, config) {
                                             //  Do some error handling here
                                         });
                               },2000);
    }

     $scope.stopHumidityData = function() {
         $interval.cancel(humidity01);
          $interval.cancel(humidity02);
           $interval.cancel(humidity03);
            $interval.cancel(humidity04);
             $interval.cancel(humidity05);
              $interval.cancel(humidity06);
               $interval.cancel(humidity07);
                $interval.cancel(humidity08);
                 $interval.cancel(humidity09);
                  $interval.cancel(humidity10);
     }
});




App.controller('dust', function($scope, $http, $interval) {
    var dust01;
    var dust02;
    var dust03;
    var dust04;
    var dust05;
    var dust06;
    var dust07;
    var dust08;
    var dust09;
    var dust10;
    $scope.startDustData = function() {
         dust01 =  $interval( function () {
                $http.get('/dust/01')
                         .success(function (data) {
                             $scope.dustData1 = data;
                         })
                         .error(function (data, status, headers, config) {
                             //  Do some error handling here
                         });
               },2000);
           dust02 =  $interval( function () {
                          $http.get('/dust/02')
                                   .success(function (data) {
                                       $scope.dustData2 = data;
                                   })
                                   .error(function (data, status, headers, config) {
                                       //  Do some error handling here
                                   });
                         },2000);
                          dust03 =  $interval( function () {
                                         $http.get('/dust/03')
                                                  .success(function (data) {
                                                      $scope.dustData3 = data;
                                                  })
                                                  .error(function (data, status, headers, config) {
                                                      //  Do some error handling here
                                                  });
                                        },2000);
                                         dust04 =  $interval( function () {
                                            $http.get('/dust/04')
                                                     .success(function (data) {
                                                         $scope.dustData4 = data;
                                                     })
                                                     .error(function (data, status, headers, config) {
                                                         //  Do some error handling here
                                                     });
                                           },6000);
                                         dust05 =  $interval( function () {
                                           $http.get('/dust/05')
                                                    .success(function (data) {
                                                        $scope.dustData5 = data;
                                                    })
                                                    .error(function (data, status, headers, config) {
                                                        //  Do some error handling here
                                                    });
                                          },2000);
                                           dust06 =  $interval( function () {
                                             $http.get('/dust/06')
                                                      .success(function (data) {
                                                          $scope.dustData6 = data;
                                                      })
                                                      .error(function (data, status, headers, config) {
                                                          //  Do some error handling here
                                                      });
                                            },8000);
                                          dust07 =  $interval( function () {
                                             $http.get('/dust/07')
                                                      .success(function (data) {
                                                          $scope.dustData7 = data;
                                                      })
                                                      .error(function (data, status, headers, config) {
                                                          //  Do some error handling here
                                                      });
                                            },2000);
                           dust08 =  $interval( function () {
                              $http.get('/dust/08')
                                       .success(function (data) {
                                           $scope.dustData8 = data;
                                       })
                                       .error(function (data, status, headers, config) {
                                           //  Do some error handling here
                                       });
                             },2000);
                              dust09 =  $interval( function () {
                             $http.get('/dust/09')
                                      .success(function (data) {
                                          $scope.dustData9 = data;
                                      })
                                      .error(function (data, status, headers, config) {
                                          //  Do some error handling here
                                      });
                            },2000);
                             dust10 =  $interval( function () {
                                $http.get('/dust/10')
                                         .success(function (data) {
                                             $scope.dustData10 = data;
                                         })
                                         .error(function (data, status, headers, config) {
                                             //  Do some error handling here
                                         });
                               },2000);
    }

     $scope.stopDustData = function() {
         $interval.cancel(dust01);
          $interval.cancel(dust02);
           $interval.cancel(dust03);
            $interval.cancel(dust04);
             $interval.cancel(dust05);
              $interval.cancel(dust06);
               $interval.cancel(dust07);
                $interval.cancel(dust08);
                 $interval.cancel(dust09);
                  $interval.cancel(dust10);
     }
});



App.controller('elevator', function($scope, $http, $interval) {
    var elevator01;
    var elevator02;

    $scope.startElevatorData = function() {
         elevator01 =  $interval( function () {
                $http.get('/elevator/01')
                         .success(function (data) {
                             $scope.elevatorData1 = data;
                         })
                         .error(function (data, status, headers, config) {
                             //  Do some error handling here
                         });
               },2000);
           elevator02 =  $interval( function () {
                          $http.get('/elevator/02')
                                   .success(function (data) {
                                       $scope.elevatorData2 = data;
                                   })
                                   .error(function (data, status, headers, config) {
                                       //  Do some error handling here
                                   });
                         },2000);

    }

     $scope.stopElevatorData = function() {
         $interval.cancel(dust01);
          $interval.cancel(dust02);

     }
});