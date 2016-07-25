export class MainController {
    constructor($scope, LS) {

        $scope.plants = LS.getPlantArray() || LS.initStorage();

        $scope.addPlant = function(name, age, needWater, imageLink) {
            var newPlant = {
                'name': name,
                'age': age,
                'waterPerWeek': needWater,
                'lastWatered': new Date(),
                'image': imageLink
            };
            console.log(newPlant);
            return LS.addPlant(newPlant);
        };
    };
}

// function getBase64Image(img) {
//     var canvas = document.createElement("canvas");
//     canvas.width = img.width;
//     canvas.height = img.height;

//     var ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0);

//     var dataURL = canvas.toDataURL("image/png");

//     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }