/**
 * Created by namita on 9/3/15.
 */

Parties = new Mongo.Collection('parties');

if(Meteor.isClient){
    var socially = angular.module('socially',['angular-meteor']);
    socially.controller('PartiesListCtrl',['$scope','$meteor',function($scope,$meteor){
        $scope.parties = $meteor.collection(Parties);
        $scope.remove = function(index){
            $scope.parties.splice(index,1);
        };
        $scope.removeAll = function(){
            $scope.parties.remove();
        };
    }]);
}

if(Meteor.isServer){
Meteor.startup(function(){
if(Parties.find().count()===0) {
    var parties = [
        {
            'name': 'Dubstep-Free Zone',
            'description': 'Fast just got faster with Nexus S.'
        },
        {
            'name': 'All dubstep all the time',
            'description': 'Get it on!'
        },
        {
            'name': 'Savage lounging',
            'description': 'Leisure suit required. And only fiercest manners.'
        }
    ];
    for (var i = 0; i < parties.length; i++) {
        Parties.insert(parties[i]);
    }
}

})


}
