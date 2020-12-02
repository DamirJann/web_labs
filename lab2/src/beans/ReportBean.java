package beans;

import java.io.Serializable;

// TODO change name of JavaBeans
public class ReportBean implements Serializable {
    private String X;
    private String Y;
    private String R;
    private String Hit;

    public ReportBean(){};

    public String getX() {
        return X;
    }

    public void setX(String x) {
        X = x;
    }

    public String getY() {
        return Y;
    }

    public void setY(String y) {
        Y = y;
    }

    public String getR() {
        return R;
    }

    public void setR(String r) {
        R = r;
    }

    public String getHit() {
        return Hit;
    }

    public void setHit(String hit) {
        Hit = hit;
    }
}