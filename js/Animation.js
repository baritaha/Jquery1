document.addEventListener('DOMContentLoaded', function() {
    // Register the MotionPathPlugin
    gsap.registerPlugin(MotionPathPlugin);

    // Initialize GSAP and ScrollMagic
    const controller = new ScrollMagic.Controller();

    // Define the flight path
    const flightPath = {
        path: [
            { x: 100, y: -20 },
            { x: 300, y: 10 },
            { x: 500, y: 100 },
            { x: 750, y: -100 },
            { x: 350, y: -50 },
            { x: 600, y: 100 },
            { x: 1000, y: 0 },
            { x: window.innerWidth, y: -250 }
        ]
    };

    // GSAP timeline for helicopter movement
    const setTween = gsap.timeline();
    setTween.to(".plan", {
        duration: 2,
        motionPath: {
            path: flightPath.path,
            autoRotate: true
        },
        ease: "power1.inOut"
    });

    // ScrollMagic scene
    new ScrollMagic.Scene({
        triggerElement: '.animation',
        triggerHook: 0,
        duration: '3000' 
    })
    .setPin('.animation')
    .setTween(setTween)
    .addTo(controller);
});
