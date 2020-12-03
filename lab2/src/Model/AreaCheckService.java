package Model;

import beans.ReportBean;
import beans.ReportsBean;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class AreaCheckService {
    private boolean isPointInArea(int x, double y, int r) {
        if (x >= 0 && y >= 0.0 && x <= r && y <= r / 2.0)
            return true;
        if (x <= 0 && y >= 0 && y <= 2.0 * x + r * 1.0)
            return true;
        if (x >= 0 && y <= 0 && x * x * 1.0 + y * y * 1.0 <= (r * r * 1.0) / 4.0)
            return true;
        return false;
    }

    // get json of report
    public ReportBean getReportBean(int x, double y, int r) {
        ReportBean reportBean = new ReportBean();
        reportBean.setX(String.valueOf(x));
        reportBean.setY(String.valueOf(y));
        reportBean.setR(String.valueOf(x));
        reportBean.setHit(isPointInArea(x, y, r) ? "YES" : "NO");
        return reportBean;
    }
}
