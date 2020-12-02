package Model;

import com.google.gson.Gson;

import java.util.HashMap;
import java.util.Map;

public class AreaCheckService {
    Gson gson = new Gson();


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
    public String getHitReport(int x, double y, int r) {
        Map<String, String> report = new HashMap<>();
        report.put("X", String.valueOf(x));
        report.put("Y", String.valueOf(y));
        report.put("R", String.valueOf(r));
        report.put("Hit", isPointInArea(x, y, r) ? "YES" : "NO");
        report.put("Runtime", "0");
        report.put("Request start time", "0");
        return gson.toJson(report);
    }
}
