package Controllers;

import java.util.ArrayList;

public class ValidateService {

    public boolean isInteger(String number){
        return String.valueOf(Integer.parseInt(number)).equals(number);
    }

    public boolean isValidInput(String x, String y, String r){
        try{
            if (!isInteger(x)) return false;
            if (Integer.parseInt(x) < -3 || Integer.parseInt(x) > 5) return false;

            if (Double.parseDouble(y) < -3 || Double.parseDouble(y) > 5) return false;

            if (!isInteger(r)) return false;
            if (Integer.parseInt(r) < 1 || Integer.parseInt(r) > 5) return false;

            return true;
        }
        catch (Exception exception){
            return false;
        }
    }
}
