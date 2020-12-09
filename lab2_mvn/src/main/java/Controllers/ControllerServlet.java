package Controllers;

import Model.ValidateService;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


// main controller, which direct request to another servlets
public class ControllerServlet extends javax.servlet.http.HttpServlet {

    // create it to get main page via browser
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // try to parse params, else go to start page
        String x = request.getParameter("X");
        String y = request.getParameter("Y");
        String r = request.getParameter("R");

        ServletContext context = getServletContext();
        ValidateService validateService = new ValidateService();

        // if data is valid then direct to AreaCheckServlet.
        if (validateService.isValidInput(x, y, r)) {
            RequestDispatcher dispatcher = context.getRequestDispatcher("/area_check");
            dispatcher.forward(request, response);
        }
        // return main page(page.jsp)
        else {
            RequestDispatcher dispatcher = context.getRequestDispatcher("/view/jsp/page.jsp");
            dispatcher.forward(request, response);
        }

    }

    // go to DeleteServlet, which removes JavaBean in session
    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext context = getServletContext();
        RequestDispatcher dispatcher = context.getRequestDispatcher("/clean");
        dispatcher.forward(request, response);
    }
}
