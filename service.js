angular.module('userProfiles').service('mainService', function($http, $q) {


  this.getUsers = function() {
    const deferred = $q.defer();

    let allUsers = [];
    const resolutions = {};

      $http.get('https://reqres.in/api/users?page=' + pageNum)
      .then(function(response){
        allUsers = allUsers.concat(response.data.data);
        resolutions[i] = true;
        const every = Object.keys(resolutions).every(function(resNum){return resolutions[resNum]});
        if (every) {
          deferred.resolve(allUsers);
        }
      });
    }

      for (var i = 1; i < 3; i++) {
        resolutions[i] = false;
        makeRequest(i);
      }

    return deferred.promise;

  }
});



//     return $http.get('https://reqres.in/api/users?page=1')
//       .then(function(responseOne){
//         $http.get('https://reqres.in/api/users?page=2')
//           .then(function(responseTwo){
//             $http.get('https://reqres.in/api/users?page=3')
//               .then(function(responseThree){
//                 return responseOne.data.data.concat(responseTwo.data.data, responseThree.data.data);
//               })
//           })
//       });
// const promisesList = [
//   $http.get('https://reqres.in/api/users?page=1'),
//   $http.get('https://reqres.in/api/users?page=2'),
//   $http.get('https://reqres.in/api/users?page=3'),
// ];
//
// return $q.all(promisesList)
// .then(function(responsesArr){
//   return responsesArr.reduce(function(flattenedUsersArr, responseObj){
//     return flattenedUsersArr.concat(responseObj.data.data);
//   }, []);
// });
