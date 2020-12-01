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

        // try to parse params, else go to start page
        try {
            Double x = Double.valueOf(request.getParameter("X"));
            Double y = Double.valueOf(request.getParameter("Y"));
            Double r = Double.valueOf(request.getParameter("R"));

   
            ServletContext context = getServletContext();
            RequestDispatcher dispatcher = context.getRequestDispatcher("/area_check");
            dispatcher.forward(request, response);

        } catch (Exception e) {
            ServletContext context = getServletContext();
            RequestDispatcher dispatcher = context.getRequestDispatcher("/View/page.jsp");
            dispatcher.forward(request, response);
        }
    }
}
