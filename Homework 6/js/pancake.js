class pancakes {

    x;
    y;
    w;
    h;
    l;
    d;
    r;
    g;
    b;

    constructor(x, y, w, h, l, d, r, g, b) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.l = l;
        this.d = d;
        this.r = r;
        this.g = g;
        this.b = b;

    }

    drawStuff() {
      fill(170, 110, 55);
        circle(this.x, this.y, this.d);

    }
}