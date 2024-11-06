namespace SolarSystem3D {
    export import f = FudgeCore;

    window.addEventListener("load", start);
    f.Loop.addEventListener(f.EVENT.LOOP_FRAME, moveTest);

    
    const globalViewport: f.Viewport = new f.Viewport;
    const bossNode: f.Node = new f.Node("BossNode");
    const childNode: f.Node = new f.Node("Baby");
    
    // moveTest();

    function start(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        
        const camera: f.ComponentCamera = new f.ComponentCamera();
        camera.mtxPivot.translateZ(5);
        camera.mtxPivot.rotateY(180);

        const viewport: f.Viewport = globalViewport;
        viewport.initialize("Viewport", bossNode, camera, canvas);

        
        //
        
        const mesh: f.Mesh = new f.MeshSphere("Spehre");
        bossNode.addComponent(new f.ComponentMesh(mesh));
        
        const material: f.Material = new f.Material("Material", f.ShaderLitTextured);
        bossNode.addComponent(new f.ComponentMaterial(material));
    
        bossNode.addComponent(new f.ComponentTransform());
        
        const mesh1: f.Mesh = new f.MeshSphere("Spehre1");
        const cmpMesh: f.ComponentMesh = new f. ComponentMesh(mesh1);
        cmpMesh.radius
        childNode.addComponent(new f.ComponentMesh(mesh1));
        
        const material1: f.Material = new f.Material("Material1", f.ShaderLitTextured);
        childNode.addComponent(new f.ComponentMaterial(material1));
    
        childNode.addComponent(new f.ComponentTransform());
        childNode.mtxLocal.translateX(1.5);
        
        bossNode.addChild(childNode);
        //

        viewport.draw();
        f.Loop.start();
    }

    // let maatrix: Float32Array[] = [];

    function createBodies(): void {
        // for() {

        // }
        const body: f.Node = new f.Node("Body");
        bossNode.addChild(body);

        const mesh: f.Mesh = new f.MeshSphere;
        // const cmpMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        
        body.addComponent(new f.ComponentMesh(mesh));
        const material: f.Material = new f.Material("Material", f.ShaderFlat);
        const cmpMaterial: f.ComponentMaterial = new f.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(1, 0, 0, 1); //insert color data
        body.addComponent(cmpMaterial);
        body.addComponent(new f.ComponentTransform());

    }

    function moveTest(): void {
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
}