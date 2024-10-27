import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';

const AsciiEffectScene = () => {
  const effectRef = useRef();

  useEffect(() => {
    let camera, controls, scene, renderer, effect;
    let sphere, plane;
    const start = Date.now();

    // Initialize scene, camera, and renderer
    function init() {
      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.y = 150;
      camera.position.z = 500;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0, 0, 0);

      const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0);
      pointLight1.position.set(500, 500, 500);
      scene.add(pointLight1);

      const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
      pointLight2.position.set(-500, -500, -500);
      scene.add(pointLight2);

      sphere = new THREE.Mesh(new THREE.SphereGeometry(200, 20, 10), new THREE.MeshPhongMaterial({ flatShading: true }));
      scene.add(sphere);

      plane = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.MeshBasicMaterial({ color: 0xe0e0e0 }));
      plane.position.y = -200;
      plane.rotation.x = -Math.PI / 2;
      scene.add(plane);

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);

      effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true });
      effect.setSize(window.innerWidth, window.innerHeight);
      effect.domElement.style.color = 'white';
      effect.domElement.style.backgroundColor = 'transparent';

      if (effectRef.current) {
        effectRef.current.appendChild(effect.domElement);
      }

      controls = new TrackballControls(camera, effect.domElement);

      window.addEventListener('resize', onWindowResize);

      renderer.setAnimationLoop(animate);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      effect.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      const timer = Date.now() - start;
      sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150;
      sphere.rotation.x = timer * 0.0003;
      sphere.rotation.z = timer * 0.0002;
      controls.update();
      effect.render(scene, camera);
    }

    init();

    return () => {
      // Clean up the scene on component unmount
      window.removeEventListener('resize', onWindowResize);
      renderer.dispose();
      controls.dispose();
      effectRef.current.innerHTML = '';
    };
  }, []);

  return <div ref={effectRef} style={{ width: '100px', height: '100px' }} />;
};

export default AsciiEffectScene;
