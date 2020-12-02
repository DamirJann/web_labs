package Controllers;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.swing.text.html.Option;
import java.io.IOException;
import java.io.Writer;
import java.util.HashMap;
import java.util.Optional;

public class ControllerServlet extends javax.servlet.http.HttpServlet {

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        Writer writer = response.getWriter();
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
            // get context of web
            RequestDispatcher dispatcher = context.getRequestDispatcher("/View/page.jsp");
            dispatcher.forward(request, response);
        }

    }
}
