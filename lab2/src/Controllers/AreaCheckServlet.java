package Controllers;

import Model.AreaCheckService;
import com.google.gson.Gson;
import com.google.gson.JsonParser;
import netscape.javascript.JSObject;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;
import java.util.HashMap;
import java.util.Map;

public class AreaCheckServlet extends HttpServlet {


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Writer writer = response.getWriter();
        String x = request.getParameter("X");
        String y = request.getParameter("Y");
        String r = request.getParameter("R");

        
        AreaCheckService areaCheckService = new AreaCheckService();

        String report = areaCheckService.getHitReport(Integer.parseInt(x),
                                                       Double.parseDouble(y),
                                                       Integer.parseInt(r));

        response.getWriter().write(report);
    }
}
