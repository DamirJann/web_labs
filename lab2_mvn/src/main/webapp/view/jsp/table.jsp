<%--this is jsp page, which descibes table. This jsp includes in page.jsp--%>

<%@ page import="beans.ReportBeans" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="beans.ReportBean" %>
<%--get bean from session--%>
<jsp:useBean id= "bean" scope= "session" class="beans.ReportBeans" />

<tr>
    <th>X</th>
    <th>Y</th>
    <th>R</th>
    <th>Hit</th>
</tr>

<%--create records using methods upper--%>
<%
    if (bean != null){
        ArrayList<ReportBean> reportBeans = bean.getReportBeans();
        for (int i = 0; i < reportBeans.size(); i++){
%>

<tr>
    <td><%= reportBeans.get(i).getX()%></td>
    <td><%= reportBeans.get(i).getY()%></td>
    <td><%= reportBeans.get(i).getR()%></td>
    <td><%= reportBeans.get(i).getHit()%></td>
</tr>

<%
        }
    }
%>
