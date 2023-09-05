package test;

import java.util.Random;

public class Dice {
    private Random r;
    private int n;

    public Dice(int n) {
        r = new Random();
        this.n = n;
    }

    public int cast() {
        return r.nextInt(n) + 2;
    }
}
