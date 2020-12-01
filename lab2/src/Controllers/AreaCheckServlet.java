package Controllers;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;

public class AreaCheckServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Writer writer = response.getWriter();
        Double x = Double.valueOf(request.getParameter("X"));
        Double y = Double.valueOf(request.getParameter("Y"));
        Double r = Double.valueOf(request.getParameter("R"));

        ServletContext context = getServletContext();
        RequestDispatcher dispatcher = context.getRequestDispatcher("/View/page.jsp");
        dispatcher.forward(request, response);
    }
}
