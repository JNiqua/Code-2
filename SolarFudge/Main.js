"use strict";
var SolarSystem3D;
(function (SolarSystem3D) {
    SolarSystem3D.f = FudgeCore;
    window.addEventListener("load", start);
    SolarSystem3D.f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, moveTest);
    const globalViewport = new SolarSystem3D.f.Viewport;
    const bossNode = new SolarSystem3D.f.Node("BossNode");
    const childNode = new SolarSystem3D.f.Node("Baby");
    // moveTest();
    function start() {
        const canvas = document.querySelector("canvas");
        const camera = new SolarSystem3D.f.ComponentCamera();
        camera.mtxPivot.translateZ(5);
        camera.mtxPivot.rotateY(180);
        const viewport = globalViewport;
        viewport.initialize("Viewport", bossNode, camera, canvas);
        //
        const mesh = new SolarSystem3D.f.MeshSphere("Spehre");
        bossNode.addComponent(new SolarSystem3D.f.ComponentMesh(mesh));
        const material = new SolarSystem3D.f.Material("Material", SolarSystem3D.f.ShaderLitTextured);
        bossNode.addComponent(new SolarSystem3D.f.ComponentMaterial(material));
        bossNode.addComponent(new SolarSystem3D.f.ComponentTransform());
        const mesh1 = new SolarSystem3D.f.MeshSphere("Spehre1");
        const cmpMesh = new SolarSystem3D.f.ComponentMesh(mesh1);
        cmpMesh.radius;
        childNode.addComponent(new SolarSystem3D.f.ComponentMesh(mesh1));
        const material1 = new SolarSystem3D.f.Material("Material1", SolarSystem3D.f.ShaderLitTextured);
        childNode.addComponent(new SolarSystem3D.f.ComponentMaterial(material1));
        childNode.addComponent(new SolarSystem3D.f.ComponentTransform());
        childNode.mtxLocal.translateX(1.5);
        bossNode.addChild(childNode);
        //
        viewport.draw();
        SolarSystem3D.f.Loop.start();
    }
    // let maatrix: Float32Array[] = [];
    function createBodies() {
        // for() {
        // }
        const body = new SolarSystem3D.f.Node("Body");
        bossNode.addChild(body);
        const mesh = new SolarSystem3D.f.MeshSphere;
        // const cmpMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        body.addComponent(new SolarSystem3D.f.ComponentMesh(mesh));
        const material = new SolarSystem3D.f.Material("Material", SolarSystem3D.f.ShaderFlat);
        const cmpMaterial = new SolarSystem3D.f.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(1, 0, 0, 1); //insert color data
        body.addComponent(cmpMaterial);
        body.addComponent(new SolarSystem3D.f.ComponentTransform());
    }
    function moveTest() {
        // maatrix = [bossNode.mtxLocal.get()]
        // bossNode.mtxLocal.set(maatrix[0]);
        bossNode.mtxLocal.rotateZ(1);
        // bossNode.mtxWorld.rotateZ(1);
        // bossNode.mtxWorld.translateX(1);
        // bossNode.mtxLocal.translateX(0.2)
        childNode.mtxLocal.rotateZ(2);
        // childNode.mtxWorld.rotateZ(2);
        // childNode.mtxLocal.invert();
        globalViewport.draw();
    }
})(SolarSystem3D || (SolarSystem3D = {}));
//# sourceMappingURL=Main.js.map