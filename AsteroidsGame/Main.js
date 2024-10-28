"use strict";
var Asteroids;
(function (Asteroids) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        Asteroids.crc2 = canvas.getContext("2d");
        Asteroids.crc2.fillStyle = "black";
        Asteroids.crc2.strokeStyle = "white";
        Asteroids.crc2.fillRect(0, 0, canvas.width, canvas.height);
        Asteroids.createPaths();
        console.log("Asteroid paths: ", Asteroids.asteroidPaths);
        let asteroid = new Asteroids.Asteroid(1);
        console.log(asteroid);
        asteroid.draw();
        asteroid.move(0.1);
        asteroid.draw();
        asteroid.move(0.1);
        asteroid.draw();
        asteroid.move(0.1);
        asteroid.draw();
        asteroid.move(0.1);
        asteroid.draw();
        asteroid.move(0.1);
        asteroid.draw();
    }
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Main.js.map