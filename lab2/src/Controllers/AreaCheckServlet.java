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

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext context = getServletContext();

        String x = request.getParameter("X");
        String y = request.getParameter("Y");
        String r = request.getParameter("R");


        AreaCheckService areaCheckService = new AreaCheckService();
        ReportBean reportBean = areaCheckService.getReportBean(Integer.parseInt(x),
                                                               Double.parseDouble(y),
                                                               Integer.parseInt(r));

        // if new session create ReportsBean else get it from session
        ReportsBean reportsBean = request.getSession().getAttribute("bean") == null ?
                                     new ReportsBean() :(ReportsBean) request.getSession().getAttribute("bean");




        // add new record
        reportsBean.getReportBean().add(reportBean);

        // save it to session
        request.getSession().setAttribute("bean", reportsBean);

        RequestDispatcher dispatcher = context.getRequestDispatcher("/View/jsp/table.jsp");
        dispatcher.forward(request, response);
    }
}
