package Controllers;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;

public class ControllerServlet extends javax.servlet.http.HttpServlet {

    @Override
    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        ServletContext context = getServletContext();
        // try to parse params, else go to start page

        String x = request.getParameter("X");
        String y = request.getParameter("Y");
        String r = request.getParameter("R");

        ValidateService validateService = new ValidateService();

        if (validateService.isValidInput(x, y, r)) {
            RequestDispatcher dispatcher = context.getRequestDispatcher("/area_check");
            dispatcher.forward(request, response);
        }
        else {
            RequestDispatcher dispatcher = context.getRequestDispatcher("/View/jsp/page.jsp");
            dispatcher.forward(request, response);
        }

    }

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext context = getServletContext();
        RequestDispatcher dispatcher = context.getRequestDispatcher("/clean");
        dispatcher.forward(request, response);
    }
}
