function draw() {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo (5, 5);
        ctx.lineTo (30, 5);
        ctx.lineTo (30, 8);
        ctx.lineTo (5, 8);

        ctx.moveTo (5, 16);
        ctx.lineTo (30, 16);
        ctx.lineTo (30, 19);
        ctx.lineTo (5, 19);

        ctx.moveTo (5, 27);
        ctx.lineTo (30, 27);
        ctx.lineTo (30, 30);
        ctx.lineTo (5, 30);
        ctx.fill();
    }
}
