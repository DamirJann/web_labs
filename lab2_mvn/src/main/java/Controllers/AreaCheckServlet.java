package Controllers;

import Model.AreaCheckService;
import beans.ReportBean;
import beans.ReportsBean;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;

public class AreaCheckServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext context = getServletContext();

        String x = request.getParameter("X");
        String y = request.getParameter("Y");
        String r = request.getParameter("R");


        AreaCheckService areaCheckService = new AreaCheckService();
        ReportBean reportBean = areaCheckService.getReportBean(Double.parseDouble(x),
                                                               Double.parseDouble(y),
                                                               Integer.parseInt(r));

        // if it's a new session create ReportsBean
        // else get it from session
        ReportsBean reportsBean = request.getSession().getAttribute("bean") == null ?
                                     new ReportsBean() :(ReportsBean) request.getSession().getAttribute("bean");

        // add new record to reportsBean
        reportsBean.getReportBean().add(reportBean);

        // save it in session
        request.getSession().setAttribute("bean", reportsBean);


        // return changed table
        RequestDispatcher dispatcher = context.getRequestDispatcher("/view/jsp/table.jsp");
        dispatcher.forward(request, response);
    }
}
