<%--this is jsp page, which descibes table. This jsp includes in page.jsp--%>

<%@ page import="beans.ReportsBean" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="beans.ReportBean" %>
<%--get bean from session--%>
<jsp:useBean id= "bean" scope= "session" class="beans.ReportsBean" />


<%--functions for creating html records of hits--%>
<canvas width="400px" height="400px" id="graph">




