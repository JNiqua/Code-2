namespace FirstFudge {
    import f = FudgeCore;
    console.log(f);
    
    window.addEventListener("load", start);
    
    f.Loop.addEventListener(f.EVENT.LOOP_FRAME, moveCube);
    
    const node: f.Node = new f.Node("Node");
    const globalViewport: f.Viewport = new f.Viewport;
    
    function start(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        
        const camera: f.ComponentCamera = new f.ComponentCamera();
        console.log(camera);
        camera.mtxPivot.translateZ(5);
        camera.mtxPivot.rotateY(180);

        const bgColor: f.Color = new f.Color(5, 3, 0, 0);
        camera.clrBackground = bgColor;
        
        
        const mesh: f.Mesh = new f.MeshCube("Cube"); 
        // const cubeColor: f.Color = new f.Color(1, 0, 1, 0);
        // const cubeCoat: f.Coat = new f.Coat()
        const material: f.Material = new f.Material("Material", f.ShaderFlat);
        const cmpMaterial: f.ComponentMaterial = new f.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(1, 0, 0, 1);
        const light: f.LightAmbient = new f.LightAmbient();
        
        // const cmpMesh: f.ComponentMesh = new f.ComponentMesh(cube);
        // node.addComponent(cmpMesh);
        node.addComponent(new f.ComponentMesh(mesh));
        node.addComponent(cmpMaterial);
        node.addComponent(new f.ComponentLight(light));
        node.addComponent(new f.ComponentTransform());
        
        node.getComponent(f.ComponentLight).mtxPivot.rotateY(180);
        
        // node.getComponent(f.ComponentMesh).mtxPivot.translateX(-0.9);
        // node.getComponent(f.ComponentMesh).mtxPivot.translateY(-0.5);
        // node.getComponent(f.ComponentMesh).mtxPivot.rotate(new f.Vector3(30, 20, 0));
        
        // node.getComponent(f.ComponentTransform).mtxLocal.translateX(2);
        // node.mtxLocal.translateX(1.5);
        
        const viewport: f.Viewport = globalViewport;
        viewport.initialize("Viewport", node, camera, canvas);

        viewport.draw();
        f.Loop.start();
    }

    let g: number = 0.05;
    function moveCube(): void {
        console.log("a");
        const frameTimeInMilliSeconds: number = f.Loop.timeFrameGame;
        const frameTimeInSeconds: number = (frameTimeInMilliSeconds / 1000);
        const degrees: number = 360 * frameTimeInSeconds;
        // node.mtxLocal.rotateY(degrees);
        node.mtxLocal.translateX(g)

        if(node.mtxLocal.translation.x > 4) {
            // node.mtxLocal.translateX(-0.3);
            g = -g;
        } 
        
        if(node.mtxLocal.translation.x < -4) {
            g = -g;
        }
        
        globalViewport.draw();
    }
}