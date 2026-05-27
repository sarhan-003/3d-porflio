import React, { useEffect, useRef } from 'react';
import { 
  WebGLRenderer, Scene, PerspectiveCamera, 
  Mesh, SphereGeometry, MeshStandardMaterial, EquirectangularReflectionMapping, Vector2,
  Clock, Group, BufferGeometry, Float32BufferAttribute, PointsMaterial, Points
} from 'three';
import { HDRJPGLoader } from '@monogrid/gainmap-js';

export const ModernHero3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const clock = new Clock();

    // 1. Setup basic Three.js scene
    const renderer = new WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Crisper rendering on retina displays
    
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // 2. Load modern Gainmap HDR lighting
    const loader = new HDRJPGLoader(renderer)
      .setRenderTargetOptions({ mapping: EquirectangularReflectionMapping });
      
    loader.loadAsync('/assets/your-gainmap-image.jpeg').then((result) => {
      scene.environment = result.renderTarget.texture;
      // Optional: Set as background as well
      // scene.background = result.renderTarget.texture; 
      
      // result must be disposed when component unmounts!
    });

    // 3. Create object group and particles
    const group = new Group();
    scene.add(group);

    const geometry = new SphereGeometry(2, 64, 64);
    const material = new MeshStandardMaterial({ 
      roughness: 0.1, 
      metalness: 1.0,
      color: 0xffffff
    });
    const sphere = new Mesh(geometry, material);
    group.add(sphere);

    // Particles
    const particlesGeometry = new BufferGeometry();
    const particlesCount = 7000;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        // Spread particles in a spherical nebula
        const radius = Math.random() * 5 + 3; // radius from 3 to 8
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        posArray[i3 + 0] = radius * Math.sin(phi) * Math.cos(theta);
        posArray[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        posArray[i3 + 2] = radius * Math.cos(phi);
    }
    particlesGeometry.setAttribute('position', new Float32BufferAttribute(posArray, 3));
    const particlesMaterial = new PointsMaterial({ size: 0.025, color: 0xffffff });
    const particleMesh = new Points(particlesGeometry, particlesMaterial);
    scene.add(particleMesh);
    
    // 4. Add Interactive Parallax & Animation Loop
    const pointer = new Vector2(0, 0);
    const targetPointer = new Vector2(0, 0);

    const onPointerMove = (event) => {
      targetPointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetPointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onPointerDown = () => {
      // Interactive pulse and color change on click
      material.color.setHex(Math.random() * 0xffffff);
      sphere.scale.set(1.2, 1.2, 1.2);
      particlesMaterial.color.setHex(material.color.getHex()); // Match particle color to sphere
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('resize', onWindowResize);

    let animationFrameId;
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      animationFrameId = requestAnimationFrame(animate);

      // Smooth parallax camera movement
      pointer.x += (targetPointer.x - pointer.x) * 0.05;
      pointer.y += (targetPointer.y - pointer.y) * 0.05;
      camera.position.x = pointer.x * 2;
      camera.position.y = pointer.y * 2;
      camera.lookAt(scene.position);

      // Auto-rotation and smooth scale recovery
      sphere.rotation.y += 0.005;
      sphere.rotation.x += 0.002;
      
      sphere.scale.x += (1 - sphere.scale.x) * 0.05;
      sphere.scale.y += (1 - sphere.scale.y) * 0.05;
      sphere.scale.z += (1 - sphere.scale.z) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('resize', onWindowResize);
      cancelAnimationFrame(animationFrameId);
      
      // Cleanup memory
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, zIndex: -1, cursor: 'pointer' }} 
    />
  );
};